import fs from "fs";
import path from "path";
import {
    META_TITLE,
    META_DESCRIPTION,
    WEBSITE_URL,
    HEAD_TITLE
} from "./lib/const";
import { ComicMetadata } from "./components/Reader";
import { collectComicsSync, readConfig } from "./lib/utils";

function genericMetadata(title: string): string {
    return `
    <title>${title}</title>
    <meta name="description" content="${META_DESCRIPTION}"/>
    <meta property="og:title" content="${META_TITLE}"/>
    <meta property="og:description" content="${META_DESCRIPTION}"/>
    <meta property="og:url" content="${WEBSITE_URL}"/>
    <meta property="og:image" content="${WEBSITE_URL}"/>
    <meta property="og:type" content="article""/>
    <meta property="twitter:url" content="${WEBSITE_URL}"/>
    <meta property="twitter:domain" content="sliceofvglife.github.io""/>
    <meta name="twitter:title" content="${META_TITLE}"/>
    <meta name="twitter:description" content="${META_DESCRIPTION}"/>
    <meta name="twitter:image" content="${WEBSITE_URL}"/>
    <meta name="twitter:card" content="summary_large_image""/>
    `
        .split("\n")
        .map((l) => l.trim())
        .join("");
}

function pageMetadata(title: string): string {
    return genericMetadata([title, META_TITLE].join(" | "));
}

function comicMetadata(comic: ComicMetadata): string {
    // Sanitize the commentary if any
    let description = comic.commentary;
    if (description) {
        description = description
            .replaceAll("_\\*", "*")
            .replaceAll("\\*_", "*")
            .replaceAll("*\\*", "*")
            .replaceAll("\\**", "*")
            .replaceAll("\\*", "*")
            .replaceAll("\\*", "*")
            .split("\n")
            .map((l) => l.trim())
            .filter((l) => l.length > 0)
            .join(" ");

        // Reduce to 150 characters
        let word_started = false;
        let word_closed = false;
        let skip_asterisk = false;
        for (let i = Math.min(150, description.length) - 1; i >= 0; --i) {
            if (description[i] === "*") {
                skip_asterisk = description[i - 1] !== " ";
                continue;
            }

            if ([".", ",", ";", "'", "!", "?", "…"].includes(description[i])) {
                continue;
            }

            if (![" "].includes(description[i])) {
                if (!skip_asterisk && word_closed) {
                    description = `${description.substring(0, i + 1)} …`;
                    break;
                }

                word_started = true;
            } else if (word_started) {
                word_closed = true;
            }
        }
    } else {
        description = META_DESCRIPTION;
    }

    console.log(`"${description}"`);

    return `
    <title>
        ${[comic.title, "Pokemon Anarchy", META_TITLE].join(" | ")}
    </title>
    <meta name="description" content="${description}">
    <meta property="og:title" content="${comic.title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${comic.url}">
    <meta property="og:image" content="${comic.src}">
    <meta property="og:type" content="article">
    <meta property="twitter:url" content="${comic.url}">
    <meta property="twitter:domain" content="sliceofvglife.github.io">
    <meta name="twitter:title" content="${comic.title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${comic.src}">
    <meta name="twitter:card" content="summary_large_image">
    `
        .split("\n")
        .map((l) => l.trim())
        .join("");
}

function injectMetadata(filepath: string, metadata: string) {
    filepath = path.join("out", filepath);
    const content = fs.readFileSync(filepath).toString();
    const headEndIndex = content.indexOf("</head>");
    fs.writeFileSync(
        filepath,
        (
            content.substring(0, headEndIndex) +
            metadata +
            content.substring(headEndIndex)
        ).replace(
            '"width=device-width"',
            '"width=device-width,initial-scale=1"'
        )
    );
}

injectMetadata("index.html", genericMetadata(HEAD_TITLE));

[
    { page: "about", title: "À propos" },
    { page: "archive", title: "Archive" },
    { page: "random", title: "Au hasard" }
].forEach((config) => {
    injectMetadata(`${config.page}.html`, pageMetadata(config.title));
});

collectComicsSync(readConfig({ path: "public/cdn/comics/comics.yml" })).forEach(
    (comic) => {
        injectMetadata(`comic/${comic.id}.html`, comicMetadata(comic));
    }
);

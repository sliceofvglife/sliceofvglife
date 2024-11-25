import fs from "fs";
import path from "path";
import {
    META_TITLE,
    META_DESCRIPTION,
    WEBSITE_URL,
    HEAD_TITLE
} from "./lib/const";

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
/*
function comicMetadata(comic: ComicMetadata): string {
    return `
    <title>
        ${[comic.title, "Pokemon Anarchy", META_TITLE].join(" | ")}
    </title>
    <meta name="description" content="${META_DESCRIPTION}">
    <meta property="og:title" content="${comic.title}">
    <meta property="og:description" content="${META_DESCRIPTION}">
    <meta property="og:url" content="${comic.url}">
    <meta property="og:image" content="${comic.src}">
    <meta property="og:type" content="article">
    <meta property="twitter:url" content="${comic.url}">
    <meta property="twitter:domain" content="sliceofvglife.github.io">
    <meta name="twitter:title" content="${comic.title}">
    <meta name="twitter:description" content="${META_DESCRIPTION}">
    <meta name="twitter:image" content="${comic.src}">
    <meta name="twitter:card" content="summary_large_image">
    `
        .split("\n")
        .map((l) => l.trim())
        .join("");
}*/

function injectMetadata(filepath: string, metadata: string) {
    filepath = path.join("out", filepath);
    const content = fs.readFileSync(filepath).toString();
    const headEndIndex = content.indexOf("</head>");
    fs.writeFileSync(
        filepath,
        content.substring(0, headEndIndex) +
            metadata +
            content.substring(headEndIndex)
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

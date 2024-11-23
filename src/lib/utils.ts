import fs from "fs";
import path from "path";
import RSS from "rss";
import YAML from "yaml";
import { remark } from "remark";
import imageSize from "image-size";
import type { ComicMetadata } from "@/components/Reader";
import { CategoryMetadata } from "@/components/Archive";

const COMICS_PUBLIC_DIR = process.env.NEXT_PUBLIC_COMICS_PUBLIC_DIR ?? "";
const COMICS_WEBP = process.env.NEXT_PUBLIC_COMICS_WEBP === "1";
const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "";
export const COMICS_IMAGE_URL = process.env.NEXT_PUBLIC_COMICS_IMAGE_URL ?? "";
const DEFAULT_GAME_CATEGORY = "pokemon-rubis";

interface CategoryConfig {
    id: string;
    title: string;
}

interface ComicConfig {
    photo: string;
    title: string;
    version?: string;
    scale?: number;
    date: string;
    category: string[];
}

interface ComicsConfig {
    scale: number;
    categories: CategoryConfig[];
    games: CategoryConfig[];
    comics: ComicConfig[];
}

export function titleToId(title: string): string {
    const id = title
        .replaceAll("°", "")
        .replaceAll("'", "")
        .replaceAll("!", "")
        .replaceAll("?", "")
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll(";", "")
        .replaceAll("à", "a")
        .replaceAll("é", "e")
        .replaceAll("ê", "e")
        .replaceAll("è", "e")
        .trim()
        .replaceAll(" ", "-")
        .toLowerCase();

    if (id !== encodeURI(id)) {
        throw new Error(`invalid id ${id} for title ${title}`);
    }

    return id;
}

export function getComicsDirSync(): string {
    return COMICS_PUBLIC_DIR;
}

export function readComicsFileSync(filename: string): string {
    return fs.readFileSync(path.join(getComicsDirSync(), filename)).toString();
}

function readConfig(): ComicsConfig {
    return YAML.parse(readComicsFileSync("comics.yml")) as ComicsConfig;
}

export function collectAbout(): Promise<string> {
    return new Promise<string>(async (resolve) => {
        const text = readComicsFileSync("about.md");
        return resolve(String(await remark.process(text)));
    });
}

function collectCategoriesFrom(
    what: "categories" | "games"
): Promise<CategoryMetadata[]> {
    return new Promise<CategoryMetadata[]>(async (resolve) => {
        return resolve(
            (what === "categories"
                ? readConfig().categories
                : readConfig().games
            ).map((category) => ({
                id: category.id,
                title: category.title,
                src: `${COMICS_IMAGE_URL}/${category.id}.${
                    COMICS_WEBP ? "webp" : "png"
                }`
            }))
        );
    });
}

export function collectCategories(): Promise<CategoryMetadata[]> {
    return collectCategoriesFrom("categories");
}

export function collectGames(): Promise<CategoryMetadata[]> {
    return collectCategoriesFrom("games");
}

export function collectComicSync(
    photo: string,
    config?: ComicsConfig
): ComicMetadata {
    // Read comic under comics repository
    if (!config) {
        config = readConfig();
    }

    const comic = config.comics.find((config) => config.photo == photo)!;
    const filename = path.join(getComicsDirSync(), comic.photo);
    const size = imageSize(filename);
    const id = titleToId(comic.title);
    const basename = comic.photo.substring(0, comic.photo.indexOf("."));
    const comicPhoto = COMICS_WEBP ? `${basename}.webp` : comic.photo;
    const commentaryFilename = path.join(getComicsDirSync(), `${basename}.md`);
    const commentary = fs.existsSync(commentaryFilename)
        ? String(remark.processSync(fs.readFileSync(commentaryFilename)))
        : "";
    const category = comic.category ?? [];
    category.push("all");
    if (!category.some((cat) => cat.startsWith("pokemon-"))) {
        category.push(DEFAULT_GAME_CATEGORY);
    }

    return {
        id,
        photo: comicPhoto,
        title: comic.title,
        category: category,
        commentary,
        scale: comic.scale ?? config.scale,
        date: comic.date,
        href: `/comic/${id}`,
        src:
            `${COMICS_IMAGE_URL}/${comicPhoto}` +
            (comic.version !== undefined ? `?v=${comic.version}` : ""),
        width: size.width!,
        height: size.height!
    };
}

export function collectComicsSync(): ComicMetadata[] {
    // Read comics under comics repository
    const config = readConfig();

    const comics = config.comics
        .map((comic) => collectComicSync(comic.photo, config))
        .sort(
            (a, b) => new Date(a!.date).getTime() - new Date(b!.date).getTime()
        );

    for (let i = 0; i < comics.length; ++i) {
        if (i > 0) {
            comics[i].previousId = comics[i - 1].id;
        }

        if (i < comics.length - 1) {
            comics[i].nextId = comics[i + 1].id;
        }
    }

    return comics;
}

export function findComicByPhoto(
    comics: ComicMetadata[],
    photo: string
): ComicMetadata | null {
    return comics.find((comic) => comic.photo == photo) ?? null;
}

export function findComicById(
    comics: ComicMetadata[],
    id?: string | null
): ComicMetadata | null {
    return id ? comics.find((comic) => comic.id == id) ?? null : null;
}

export async function generateRssFeed(comics: ComicMetadata[]) {
    const feedOptions = {
        title: "SliceOfVGLife Comics",
        description: "Derniers comics de SliceOfVGLife",
        language: "fr-fr",
        site_url: WEBSITE_URL,
        feed_url: `${WEBSITE_URL}/feed.xml`,
        image_url: `${WEBSITE_URL}/logo.jpeg`,
        pubDate: new Date(),
        copyright: `Tous droits réservés ${new Date().getFullYear()}`
    };

    const feed = new RSS(feedOptions);

    comics.map((comic) => {
        feed.item({
            title: comic.title,
            description: "Nouveau comics de SliceOfVGLife",
            url: comic.href,
            date: new Date(comic.date)
        });
    });

    // Write the RSS feed to a file as XML.
    fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

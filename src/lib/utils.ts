import fs from "fs";
import path from "path";
import RSS from "rss";
import YAML from "yaml";
import { remark } from "remark";
import imageSize from "image-size";
import showdown from "showdown";
import type { Comic, ComicMetadata } from "@/components/Reader";
import { CategoryMetadata, Series, SeriesMetadata } from "@/components/Archive";
import {
    COMICS_IMAGE_URL,
    COMICS_PUBLIC_DIR,
    COMICS_WEBP,
    RSS_DESCRIPTION,
    RSS_TITLE,
    WEBSITE_URL
} from "./const";

interface CategoryConfig {
    id: string;
    title: string;
    photo?: string;
    default?: boolean;
}

type SeriesConfig = CategoryConfig & {
    scale?: number;
    categories?: CategoryConfig[];
    games?: CategoryConfig[];
    comics?: ComicConfig[];
};

interface ComicConfig {
    photo: string;
    title: string;
    version?: string;
    scale?: number;
    date: string;
    category?: string[];
}

interface ComicsConfig {
    scale: number;
    series?: SeriesConfig[];
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

export function readComicsFileSync(
    filename: string,
    options?: { path?: string }
): string {
    return fs
        .readFileSync(options?.path ?? path.join(COMICS_PUBLIC_DIR, filename))
        .toString();
}

export function readConfig(options?: { path?: string }): ComicsConfig {
    return YAML.parse(
        readComicsFileSync("comics.yml", options)
    ) as ComicsConfig;
}

export function collectAbout(): Promise<string> {
    return new Promise<string>(async (resolve) => {
        const text = readComicsFileSync("about.md");
        return resolve(String(await remark.process(text)));
    });
}

function convertComicMetadata(options: {
    series: Series;
    comic: ComicConfig | ComicMetadata;
}): ComicMetadata {
    // Read comic under comics repository
    const { series, comic } = options;
    const games = series.games?.map((game) => game.id) ?? [];
    const defaultGame = series.games?.find((game) => game.default === true)?.id;

    const filename = path.join(COMICS_PUBLIC_DIR, comic.photo);
    const size = imageSize(filename);
    const id = titleToId(comic.title);
    const basename = comic.photo.substring(0, comic.photo.indexOf("."));
    const comicPhoto = COMICS_WEBP ? `${basename}.webp` : comic.photo;
    const commentaryFilename = path.join(COMICS_PUBLIC_DIR, `${basename}.md`);
    const commentary = fs.existsSync(commentaryFilename)
        ? String(remark.processSync(fs.readFileSync(commentaryFilename)))
        : "";

    const categoryIds =
        ("category" in comic
            ? comic.category
            : "categoryIds" in comic
            ? comic.categoryIds
            : null) ?? [];

    if (
        defaultGame !== undefined &&
        !categoryIds.some((cat) => games.includes(cat))
    ) {
        categoryIds.push(defaultGame);
    }

    return {
        id,
        photo: comicPhoto,
        title: comic.title,
        categoryIds: categoryIds,
        commentary,
        scale: comic.scale ?? options.series.metadata.scale,
        date: comic.date,
        href: `/comic/${id}`,
        url: `${WEBSITE_URL}/comic/${id}`,
        src: `${COMICS_IMAGE_URL}/${comicPhoto}`,
        width: size.width!,
        height: size.height!
    };
}

function convertCategoryMetadata(category: CategoryConfig): CategoryMetadata {
    const photo = category.photo ?? `${category.id}.png`;
    const basename = photo.substring(0, photo.indexOf("."));

    return {
        id: category.id,
        title: category.title,
        src: `${COMICS_IMAGE_URL}/${COMICS_WEBP ? `${basename}.webp` : photo}`,
        default: category.default === true,
        row: 1
    };
}

function convertComic(options: {
    series: Series;
    comic: ComicConfig | ComicMetadata;
}): Comic {
    // Read comic under comics repository
    return {
        metadata: convertComicMetadata(options),
        series: options.series.metadata,
        previousId: null,
        nextId: null
    };
}

function convertSeriesMetadata(series: SeriesConfig): SeriesMetadata {
    return {
        ...convertCategoryMetadata(series),
        scale: series.scale ?? 1
    };
}

function convertSeries(series: SeriesConfig): Series {
    const result: Series = {
        metadata: convertSeriesMetadata(series),
        categories: [
            ...(series.categories?.map(convertCategoryMetadata) ?? []),
            ...(series.games?.map(convertCategoryMetadata) ?? []).map(
                (game) => {
                    // Put games on a separate row
                    game.row = 2;
                    return game;
                }
            )
        ],
        games: series.games?.map(convertCategoryMetadata) ?? [],
        comics: []
    };

    result.comics =
        series.comics?.map(
            (comic) =>
                convertComic({
                    series: result,
                    comic
                }).metadata
        ) ?? [];

    return result;
}

export function collectSeriesSync(): Series[] {
    return readConfig().series?.map(convertSeries) ?? [];
}

export function collectComicsSync(options?: {
    seriesId?: string;
    categoryId?: string;
    config?: ComicsConfig;
}): Comic[] {
    // Read comics under comics repository
    const config = options?.config ?? readConfig();
    const comics = config.series
        ?.filter(
            (series) => !options?.seriesId || series.id === options.seriesId
        )
        .map(convertSeries)
        .map(
            (series) =>
                series.comics
                    ?.map((comic) =>
                        convertComic({
                            series,
                            comic
                        })
                    )
                    ?.filter(
                        (comic) =>
                            comic !== undefined &&
                            (!options?.categoryId ||
                                comic.metadata.categoryIds.includes(
                                    options.categoryId
                                ))
                    ) ?? []
        )
        .reduce((left, right) => left.concat(right))
        .sort(
            (a, b) =>
                new Date(a!.metadata.date).getTime() -
                new Date(b!.metadata.date).getTime()
        ) as Comic[];

    for (let i = 0; i < comics.length; ++i) {
        if (i > 0) {
            comics[i].previousId = comics[i - 1].metadata.id;
        }

        if (i < comics.length - 1) {
            comics[i].nextId = comics[i + 1].metadata.id;
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
    comics: Comic[],
    id?: string | null
): Comic | null {
    return id ? comics.find((comic) => comic.metadata.id == id) ?? null : null;
}

export async function generateRssFeed(comics: Comic[]) {
    const feedOptions = {
        title: RSS_TITLE,
        description: RSS_DESCRIPTION,
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
            title: `${comic.series.title} - ${comic.metadata.title}`,
            description: `<a href="${comic.metadata.url}"><img src="${
                comic.metadata.src
            }" /><br/>Nouveau comics !</a><br/>Commentaire:<br/>${
                comic.metadata.commentary
                    ? new showdown.Converter().makeHtml(
                          comic.metadata.commentary
                      )
                    : "<p>Aucun commentaire disponible</p>"
            }`,
            url: comic.metadata.url,
            date: new Date(comic.metadata.date)
        });
    });

    // Write the RSS feed to a file as XML.
    fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

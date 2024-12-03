import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ComicMetadata } from "./Reader";
import styles from "./Archive.module.scss";
import { NextRouter, withRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { UrlObject } from "url";

const COMICS_UNLOCK_ALL = process.env.NEXT_PUBLIC_COMICS_UNLOCK_ALL === "1";
const ARCHIVE_COMICS_COUNT =
    process.env.NEXT_PUBLIC_ARCHIVE_COMICS_COUNT === "1";
const ARCHIVE_COMMENT_ICONS =
    process.env.NEXT_PUBLIC_ARCHIVE_COMMENT_ICONS === "1";
const PAGE_SIZE = 15;
export const XS_COL = 12;
export const LG_COL = 8;

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
].join("");

// Lightweight info about a category
export interface CategoryMetadata {
    id: string;
    title: string;
    src: string;
    default: boolean;
    row: number;
}

// Lightweight info about a series
export type SeriesMetadata = CategoryMetadata & {
    scale: number;
};

// Complete info about a series
export interface Series {
    metadata: SeriesMetadata;
    categories: CategoryMetadata[];
    games: CategoryMetadata[];
    comics: ComicMetadata[];
}

type CategoryMetadataWithSeriesIds = {
    category: CategoryMetadata;
    seriesIds: string[];
};

function getComicKey(comic: ComicMetadata): string {
    return `comic-${comic.id}-unlocked`;
}

export function getUnlockedComics(comics: ComicMetadata[]): boolean[] {
    return comics.map((comic) => {
        const comicKey = getComicKey(comic);

        try {
            return localStorage.getItem(comicKey) === "1";
        } catch (err) {
            console.error(err);
            // Don't lock the comics if there is an issue with localStorage
            return true;
        }
    });
}

export function unlockComic(comic: ComicMetadata) {
    try {
        localStorage.setItem(getComicKey(comic), "1");
    } catch (err) {
        console.error(err);
    }
}

export function unlockComics(comics: ComicMetadata[]) {
    comics.forEach((comic) => unlockComic(comic));
}

function groupBy<I, K>(list: I[], keyGetter: (item: I) => K): Map<K, I[]> {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

function uniqueCategories(series: Series[]): CategoryMetadataWithSeriesIds[] {
    return Object.values(
        series.reduce((result: any, series: Series) => {
            series.categories.forEach((category) => {
                if (result[category.id] === undefined) {
                    result[category.id] = {
                        category,
                        seriesIds: []
                    };
                }

                result[category.id].seriesIds.push(series.metadata.id);
            });
            return result;
        }, {})
    );
}

type ArchiveProps = {
    className?: string;
    series: Series[];
    currentSeriesId?: string;
    currentCategoryId?: string;
    comics: ComicMetadata[];
    router: NextRouter;
};

type ArchiveState = {
    input: string;
    timeoutId?: number;
};

class Archive extends React.Component<ArchiveProps, ArchiveState> {
    static propTypes: any;

    constructor(props: any) {
        super(props);

        this.state = { input: "" };

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onTimeout = this.onTimeout.bind(this);
    }

    componentDidMount(): void {
        document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keyup", this.onKeyUp);
        if (this.state.timeoutId !== undefined) {
            clearTimeout(this.state.timeoutId);
        }
    }

    onKeyUp(ev: KeyboardEvent): void {
        if (this.state.timeoutId !== undefined) {
            clearTimeout(this.state.timeoutId);
        }

        const input = this.state.input + ev.code;
        if (input.includes(KONAMI_CODE)) {
            unlockComics(this.props.comics);
            alert("Vous avez débloqué tous les comics !");
            this.onTimeout();
        } else {
            this.setState({
                input,
                timeoutId: window.setTimeout(this.onTimeout, 500)
            });
        }
    }

    onTimeout(): void {
        this.setState({ input: "" });
    }

    renderCategories(options: {
        categories: CategoryMetadataWithSeriesIds[];
        isSelected: (item: CategoryMetadataWithSeriesIds) => boolean;
        isDisabled: (item: CategoryMetadataWithSeriesIds) => boolean;
        getCount: (item: CategoryMetadataWithSeriesIds) => number;
        getHref: (item: CategoryMetadataWithSeriesIds) => string | UrlObject;
    }) {
        /*Create the list of categories.

        Each category has an icon and title.
        Each category may also have a comment icon next to the title if all
        comics of that category have a comment.
        */
        const renderCategory = (item: CategoryMetadataWithSeriesIds) => (
            <>
                <div
                    className={styles.icon}
                    style={{
                        backgroundImage: `url("${item.category.src}")`
                    }}
                ></div>
                <span className={styles.title}>
                    {item.category.title}
                    {ARCHIVE_COMICS_COUNT ? (
                        <span>{`(${options.getCount(item)})`}</span>
                    ) : (
                        <></>
                    )}
                    {ARCHIVE_COMMENT_ICONS &&
                    this.props.comics
                        .filter((comic) =>
                            comic.categoryIds.includes(item.category.id)
                        )
                        .every((comic) => comic.commentary !== "") ? (
                        <span
                            style={{
                                marginLeft: "0.5em"
                            }}
                        >
                            <Suspense fallback={<></>}>
                                <FontAwesomeIcon
                                    className={styles.commentary_icon}
                                    icon={faCommentDots}
                                />
                            </Suspense>
                        </span>
                    ) : (
                        <></>
                    )}
                </span>
            </>
        );

        return (
            <ul className={styles.filters_list}>
                {options.categories.map((item) => (
                    <li
                        className={[
                            styles.item,
                            options.isSelected(item) ? styles.selected : "",
                            options.isDisabled(item) ? styles.disabled : ""
                        ].join(" ")}
                        key={item.category.id}
                    >
                        {options.isDisabled(item) ? (
                            <div className={styles.item_wrapper}>
                                {renderCategory(item)}
                            </div>
                        ) : (
                            <Link
                                className={styles.item_wrapper}
                                href={options.getHref(item)}
                            >
                                {renderCategory(item)}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    renderSeries(options: {
        series: Series[];
        isSelected: (item: CategoryMetadataWithSeriesIds) => boolean;
        isDisabled: (item: CategoryMetadataWithSeriesIds) => boolean;
        getCount: (item: CategoryMetadataWithSeriesIds) => number;
        getHref: (item: CategoryMetadataWithSeriesIds) => string | UrlObject;
    }) {
        return this.renderCategories({
            categories: options.series.map((series) => ({
                category: series.metadata,
                seriesIds: [series.metadata.id]
            })),
            isSelected: options.isSelected,
            isDisabled: options.isDisabled,
            getCount: options.getCount,
            getHref: options.getHref
        });
    }

    renderComics(comics: ComicMetadata[]) {
        const unlockedComics = getUnlockedComics(comics);

        return (
            <ul className={styles.comics_list}>
                {comics.map((comic, i) => (
                    <li className={styles.item} key={comic.id}>
                        <Link className={styles.link} href={comic.href}>
                            <div
                                className={[styles.icon, styles.locked].join(
                                    " "
                                )}
                                style={{
                                    ...(COMICS_UNLOCK_ALL || unlockedComics[i]
                                        ? {
                                              backgroundImage: `url("${comic.src}")`
                                          }
                                        : {}),
                                    aspectRatio: `${comic.width}/${comic.height}`
                                }}
                            >
                                {COMICS_UNLOCK_ALL || unlockedComics[i] ? (
                                    <></>
                                ) : (
                                    <Suspense fallback={<></>}>
                                        <FontAwesomeIcon
                                            className={styles.lock_icon}
                                            icon={faLock}
                                        />
                                    </Suspense>
                                )}
                            </div>
                            <span className={styles.title_wrapper}>
                                <span className={styles.title}>
                                    {COMICS_UNLOCK_ALL || unlockedComics[i]
                                        ? comic.title
                                        : "???"}
                                    {ARCHIVE_COMMENT_ICONS &&
                                    comic.commentary !== "" ? (
                                        <span
                                            style={{
                                                marginLeft: "0.5em"
                                            }}
                                        >
                                            <Suspense fallback={<></>}>
                                                <FontAwesomeIcon
                                                    className={
                                                        styles.commentary_icon
                                                    }
                                                    icon={faCommentDots}
                                                />
                                            </Suspense>
                                        </span>
                                    ) : (
                                        <></>
                                    )}
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    renderPages(options: {
        numPages: number;
        currentPage: number;
        getHref: (page: number) => string | UrlObject;
    }) {
        return (
            <ul className={styles.pages_list}>
                {[...Array(options.numPages).keys()]
                    .map((i) => i + 1)
                    .map((i) => (
                        <li
                            className={[
                                styles.page_item,
                                options.currentPage === i ? styles.selected : ""
                            ].join(" ")}
                            key={i.toString()}
                        >
                            <Link href={options.getHref(i)}>{i}</Link>
                        </li>
                    ))}
            </ul>
        );
    }

    render() {
        const { className, router, currentCategoryId } = this.props;
        const { query } = router;

        const currentSeries = this.props.currentSeriesId
            ? this.props.series.find(
                  (series) => series.metadata.id === this.props.currentSeriesId
              )
            : undefined;
        const currentSeriesId = this.props.currentSeriesId ?? "all";

        const currentCategory = currentSeries?.categories?.find(
            (category) => category.id === currentCategoryId
        );

        let currentPage = Number(query.page);
        if (Number.isNaN(currentPage)) {
            currentPage = 1;
        }

        let comics = this.props.comics.filter(
            (comic) =>
                currentCategory === undefined ||
                comic.categoryIds.includes(currentCategory.id)
        );
        const numPages = Math.max(Math.ceil(comics.length / PAGE_SIZE), 1);
        comics = comics.slice(
            (currentPage - 1) * PAGE_SIZE,
            currentPage * PAGE_SIZE
        );

        return (
            <Container
                className={[
                    className || "",
                    styles.archive,
                    "external_container"
                ].join(" ")}
            >
                <Row className="justify-content-center">
                    <Col className={styles.filters_col} xs={XS_COL} lg={LG_COL}>
                        {this.renderSeries({
                            series: this.props.series,
                            isSelected: ({ category }) =>
                                category.id === currentSeriesId,
                            isDisabled: () => false,
                            getCount: () => this.props.comics.length,
                            getHref: ({ category }) =>
                                `/archive${
                                    // Allow to deselect a series.
                                    //
                                    // When we select or deselect: we always clear
                                    // the selected category and page.
                                    category.id === currentSeriesId
                                        ? ""
                                        : `/${category.id}`
                                }`
                        })}
                        {
                            // Group categories by row number to have separate rows
                            ...Object.values(
                                Object.fromEntries(
                                    groupBy(
                                        uniqueCategories(this.props.series),
                                        ({ category }) => category.row
                                    )
                                )
                            ).map((rows) =>
                                this.renderCategories({
                                    categories: rows,
                                    isSelected: ({ category }) =>
                                        category.id === currentCategoryId,
                                    isDisabled: ({ seriesIds }) =>
                                        currentSeries !== undefined &&
                                        !seriesIds.includes(currentSeriesId),
                                    getCount: ({ category }) =>
                                        this.props.comics.filter((comic) =>
                                            comic.categoryIds.includes(
                                                category.id
                                            )
                                        ).length,
                                    getHref: (item) =>
                                        `/archive/${
                                            // Allow to deselect a category.
                                            //
                                            // When we select: if no series is selected,
                                            // then we want to select "all" series. Otherwise
                                            // we keep the selected series.
                                            //
                                            // When we deselect: if the series in the URL
                                            // is "all" then we want to also remove the
                                            // series. Otherwise we keep the selected series.
                                            //
                                            // In both case we clear the selected page.
                                            item.category.id ===
                                            currentCategoryId
                                                ? currentSeriesId !==
                                                      undefined &&
                                                  currentSeriesId !== "all"
                                                    ? `/${currentSeriesId}`
                                                    : ""
                                                : `/${currentSeriesId}/${item.category.id}`
                                        }`
                                })
                            )
                        }
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={XS_COL} lg={LG_COL}>
                        {this.renderComics(comics)}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className={styles.pages_col} xs={XS_COL} lg={LG_COL}>
                        {this.renderPages({
                            numPages,
                            currentPage,
                            getHref: (page: number) => ({
                                pathname: `/archive${
                                    // Keep the selected series and category if any
                                    this.props.currentSeriesId
                                        ? `/${this.props.currentSeriesId}${
                                              currentCategoryId
                                                  ? `/${currentCategoryId}`
                                                  : ""
                                          }`
                                        : ""
                                }`,
                                query: {
                                    page: page.toString()
                                }
                            })
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }
}

Archive.propTypes = {};

export default withRouter(Archive);

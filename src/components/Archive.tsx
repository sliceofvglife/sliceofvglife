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

const COMICS_UNLOCK_ALL = process.env.NEXT_PUBLIC_COMICS_UNLOCK_ALL === "1";
const ARCHIVE_COMICS_COUNT =
    process.env.NEXT_PUBLIC_ARCHIVE_COMICS_COUNT === "1";
const ARCHIVE_COMMENT_ICONS =
    process.env.NEXT_PUBLIC_ARCHIVE_COMMENT_ICONS === "1";
const PAGE_SIZE = 15;
export const XS_COL = 12;
export const LG_COL = 8;

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

export interface CategoryMetadata {
    id: string;
    title: string;
    src: string;
}

type ArchiveProps = {
    className?: string;
    categories: CategoryMetadata[];
    games: CategoryMetadata[];
    comics: ComicMetadata[];
    router: NextRouter;
};

class Archive extends React.Component<ArchiveProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    renderCategories(currentCategory: string, categories: CategoryMetadata[]) {
        /*Create the list of categories.

        Each category has an icon and title.
        Each category may also have a comment icon next to the title if all
        comics of that category have a comment.
        */
        return (
            <ul className={styles.filters_list}>
                {categories.map((category) => (
                    <li
                        className={[
                            styles.item,
                            currentCategory === category.id
                                ? styles.selected
                                : ""
                        ].join(" ")}
                        key={category.id}
                    >
                        <Link
                            href={{
                                pathname: "",
                                query:
                                    category.id === "all"
                                        ? {}
                                        : { category: category.id }
                            }}
                        >
                            <div
                                className={styles.icon}
                                style={{
                                    backgroundImage: `url("${category.src}")`
                                }}
                            ></div>
                            <span className={styles.title}>
                                {category.title}
                                {ARCHIVE_COMICS_COUNT ? (
                                    <span>
                                        {`(${
                                            this.props.comics.filter((comic) =>
                                                comic.category.includes(
                                                    category.id
                                                )
                                            ).length
                                        })`}
                                    </span>
                                ) : (
                                    <></>
                                )}
                                {ARCHIVE_COMMENT_ICONS &&
                                this.props.comics
                                    .filter((comic) =>
                                        comic.category.includes(category.id)
                                    )
                                    .every(
                                        (comic) => comic.commentary !== ""
                                    ) ? (
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
                        </Link>
                    </li>
                ))}
            </ul>
        );
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

    renderPages(numPages: number, currentPage: number, pageQuery: any) {
        return (
            <ul className={styles.pages_list}>
                {[...Array(numPages).keys()]
                    .map((i) => i + 1)
                    .map((i) => (
                        <li
                            className={[
                                styles.page_item,
                                currentPage === i ? styles.selected : ""
                            ].join(" ")}
                            key={i.toString()}
                        >
                            <Link
                                href={{
                                    pathname: "",
                                    query: {
                                        page: i.toString(),
                                        ...pageQuery
                                    }
                                }}
                            >
                                {i}
                            </Link>
                        </li>
                    ))}
            </ul>
        );
    }

    render() {
        const { className, router } = this.props;
        const { query } = router;

        let currentCategory = query.category;
        if (typeof currentCategory !== "string") {
            currentCategory = "all";
        }

        let currentPage = Number(query.page);
        if (Number.isNaN(currentPage)) {
            currentPage = 1;
        }

        let comics = this.props.comics.filter(
            (comic) =>
                currentCategory === "all" ||
                comic.category.includes(currentCategory)
        );
        const numPages = Math.max(Math.ceil(comics.length / PAGE_SIZE), 1);
        comics = comics.slice(
            (currentPage - 1) * PAGE_SIZE,
            currentPage * PAGE_SIZE
        );

        const pageQuery =
            currentCategory !== "all"
                ? {
                      category: currentCategory
                  }
                : {};

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
                        {this.renderCategories(
                            currentCategory,
                            this.props.categories
                        )}
                        {this.renderCategories(
                            currentCategory,
                            this.props.games
                        )}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={XS_COL} lg={LG_COL}>
                        {this.renderComics(comics)}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className={styles.pages_col} xs={XS_COL} lg={LG_COL}>
                        {this.renderPages(numPages, currentPage, pageQuery)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

Archive.propTypes = {};

export default withRouter(Archive);

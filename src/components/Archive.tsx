import React, { Suspense } from "react";
import { ComicMetadata } from "./Reader";
import styles from "./Archive.module.scss";
import { NextRouter, withRouter } from "next/router";
import Link from "next/link";
import { getCookie, setCookie } from "cookies-next/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const COMICS_UNLOCK_ALL = process.env.NEXT_PUBLIC_COMICS_UNLOCK_ALL === "1";
const PAGE_SIZE = 15;

export function getUnlockedComics(): { [key: string]: boolean } {
    const value = getCookie("unlockedComics");
    return value !== undefined ? JSON.parse(value) : {};
}

export function unlockComic(id: string) {
    const value = getUnlockedComics();
    value[id] = true;
    setCookie("unlockedComics", value);
}

export interface CategoryMetadata {
    id: string;
    title: string;
    src: string;
}

type ArchiveProps = {
    className?: string;
    categories: CategoryMetadata[];
    comics: ComicMetadata[];
    router: NextRouter;
};

class Archive extends React.Component<ArchiveProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
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
        const numPages = Math.max(Math.floor(comics.length / PAGE_SIZE), 1);
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

        const unlockedComics = getUnlockedComics();

        return (
            <div
                className={[className || "", styles.archive, "container"].join(
                    " "
                )}
            >
                <div className="row">
                    <div className="col">
                        <ul className={styles.filters_list}>
                            {this.props.categories.map((category) => (
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
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className={styles.comics_list}>
                            {comics.map((comic) => (
                                <li className={styles.item} key={comic.id}>
                                    <Link
                                        className={styles.link}
                                        href={comic.href}
                                    >
                                        <div
                                            className={[
                                                styles.icon,
                                                styles.locked
                                            ].join(" ")}
                                            style={{
                                                ...(COMICS_UNLOCK_ALL ||
                                                unlockedComics[comic.id]
                                                    ? {
                                                          backgroundImage: `url("${comic.src}")`
                                                      }
                                                    : {}),
                                                aspectRatio: `${comic.width}/${comic.height}`
                                            }}
                                        >
                                            {COMICS_UNLOCK_ALL ||
                                            unlockedComics[comic.id] ? (
                                                <></>
                                            ) : (
                                                <Suspense fallback={<></>}>
                                                    <FontAwesomeIcon
                                                        className={
                                                            styles.lock_icon
                                                        }
                                                        icon={faLock}
                                                    />
                                                </Suspense>
                                            )}
                                        </div>
                                        <span className={styles.title_wrapper}>
                                            <span className={styles.title}>
                                                {COMICS_UNLOCK_ALL ||
                                                unlockedComics[comic.id]
                                                    ? comic.title
                                                    : "???"}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <ul className={styles.pages_list}>
                            {[...Array(numPages).keys()]
                                .map((i) => i + 1)
                                .map((i) => (
                                    <li
                                        className={[
                                            styles.page_item,
                                            currentPage === i
                                                ? styles.selected
                                                : ""
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
                    </div>
                </div>
            </div>
        );
    }
}

Archive.propTypes = {};

export default withRouter(Archive);

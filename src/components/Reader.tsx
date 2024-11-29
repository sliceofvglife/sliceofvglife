import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Reader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardFast,
    faBackward,
    faTableList,
    faDice,
    faForward,
    faForwardFast,
    faCommentDots,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import { LG_COL, SeriesMetadata, unlockComic, XS_COL } from "./Archive";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, withRouter } from "next/router";

// Lightweight info about a comic
export interface ComicMetadata {
    id: string;
    photo: string;
    title: string;
    categoryIds: string[];
    commentary: string;
    scale: number;
    date: string;
    // href of the page
    href: string;
    // URL of the site
    url: string;
    // src of the image
    src: string;
    // Size of the image
    width: number;
    height: number;
}

// Complete info about a comic
export interface Comic {
    metadata: ComicMetadata;
    series: SeriesMetadata;
    previousId: string | null;
    nextId: string | null;
}

export type ReaderProps = {
    className?: string;
    comic: Comic;
    first: ComicMetadata;
    previous?: ComicMetadata;
    next?: ComicMetadata;
    last: ComicMetadata;
    router: NextRouter;
};

class Reader extends React.Component<ReaderProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentDidMount(): void {
        document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keyup", this.onKeyUp);
    }

    onKeyUp(ev: KeyboardEvent): void {
        if (ev.code === "ArrowLeft") {
            const { previous } = this.props;
            if (previous !== undefined) {
                this.props.router.push(previous.href);
            }
        } else if (ev.code === "ArrowRight") {
            const { next } = this.props;
            if (next !== undefined) {
                this.props.router.push(next.href);
            }
        }
    }

    render() {
        const { className, comic, first, previous, next, last } = this.props;
        const shortcuts: {
            icon: IconDefinition;
            label: string;
            href: string;
            enabled: boolean;
        }[] = [
            {
                icon: faBackwardFast,
                label: "Aller au premier comic",
                href: first.href,
                enabled: first.id != comic.metadata.id
            },
            {
                icon: faBackward,
                label: "Aller au comic précédent",
                href: previous?.href ?? "",
                enabled: first.id != comic.metadata.id
            },
            {
                icon: faTableList,
                label: "Aller aux archives",
                href: "/archive",
                enabled: true
            },
            {
                icon: faDice,
                label: "Aller à un comic aléatoire",
                href: "/random",
                enabled: true
            },
            {
                icon: faForward,
                label: "Aller au comic suivant",
                href: next?.href ?? "",
                enabled: last.id != comic.metadata.id
            },
            {
                icon: faForwardFast,
                label: "Aller au dernier comic",
                href: last.href,
                enabled: last.id != comic.metadata.id
            }
        ];

        unlockComic(comic.metadata);

        return (
            <Container
                className={[
                    className || "",
                    styles.reader,
                    "external_container"
                ].join(" ")}
            >
                <Row className="justify-content-center">
                    <Col
                        className="d-flex flex-column justify-content-center align-items-center"
                        xs={XS_COL}
                        lg={LG_COL}
                    >
                        <article
                            className={styles.reader_wrapper}
                            style={{
                                width: `${
                                    comic.metadata.width * comic.metadata.scale
                                }px`
                            }}
                        >
                            <header>
                                <h1 className={styles.title}>
                                    {comic.metadata.title}
                                </h1>
                            </header>
                            <div
                                className={styles.image_wrapper}
                                style={{
                                    width: `${
                                        comic.metadata.width *
                                        comic.metadata.scale
                                    }px`
                                }}
                            >
                                <Image
                                    className={styles.image}
                                    src={comic.metadata.src}
                                    alt={`image de ${comic.metadata.title.toLowerCase()}`}
                                    width={`${comic.metadata.width}`}
                                    height={`${comic.metadata.height}`}
                                    style={{
                                        aspectRatio: `${comic.metadata.width}/${comic.metadata.height}`
                                    }}
                                    priority={true}
                                    unoptimized
                                />
                            </div>
                            <div className={styles.toolbar}>
                                {shortcuts.map((shortcut, i) => (
                                    <Link
                                        className={
                                            shortcut.enabled
                                                ? styles.toolbar_enabled
                                                : styles.toolbar_disabled
                                        }
                                        key={i.toString()}
                                        href={shortcut.href}
                                        aria-label={shortcut.label}
                                        aria-disabled={
                                            shortcut.enabled ? "false" : "true"
                                        }
                                    >
                                        <Suspense fallback={<></>}>
                                            <FontAwesomeIcon
                                                className={styles.toolbar_icon}
                                                icon={shortcut.icon}
                                            />
                                        </Suspense>
                                    </Link>
                                ))}
                            </div>
                            <section className={styles.info}>
                                <footer className={styles.date}>
                                    <div>{comic.series.title}</div>
                                    {new Date(
                                        comic.metadata.date
                                    ).toLocaleString()}
                                </footer>
                                <div
                                    className={[
                                        styles.commentary,
                                        comic.metadata.commentary === ""
                                            ? styles.no_commentary
                                            : ""
                                    ].join(" ")}
                                >
                                    <div
                                        className={
                                            styles.commentary_icon_wrapper
                                        }
                                    >
                                        <Suspense fallback={<></>}>
                                            <FontAwesomeIcon
                                                className={
                                                    styles.commentary_icon
                                                }
                                                icon={faCommentDots}
                                            />
                                        </Suspense>
                                    </div>
                                    <ReactMarkdown>
                                        {comic.metadata.commentary !== ""
                                            ? comic.metadata.commentary
                                            : "Aucun commentaire disponible"}
                                    </ReactMarkdown>
                                </div>
                            </section>
                        </article>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Reader.propTypes = {};

export default withRouter(Reader);

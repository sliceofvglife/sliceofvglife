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
import { LG_COL, unlockComic, XS_COL } from "./Archive";
import Image from "next/image";
import Link from "next/link";

export interface ComicMetadata {
    id: string;
    photo: string;
    title: string;
    category: string[];
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
    previousId?: string;
    nextId?: string;
}

export type ReaderProps = {
    className?: string;
    comic: ComicMetadata;
    first: ComicMetadata;
    previous: ComicMetadata | null;
    next: ComicMetadata | null;
    last: ComicMetadata;
};

class Reader extends React.Component<ReaderProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
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
                enabled: first.id != comic.id
            },
            {
                icon: faBackward,
                label: "Aller au comic précédent",
                href: previous?.href ?? "",
                enabled: first.id != comic.id
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
                enabled: last.id != comic.id
            },
            {
                icon: faForwardFast,
                label: "Aller au dernier comic",
                href: last.href,
                enabled: last.id != comic.id
            }
        ];

        unlockComic(comic);

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
                            style={{ width: `${comic.width * comic.scale}px` }}
                        >
                            <header>
                                <h1 className={styles.title}>{comic.title}</h1>
                            </header>
                            <div
                                className={styles.image_wrapper}
                                style={{
                                    width: `${comic.width * comic.scale}px`
                                }}
                            >
                                <Image
                                    className={styles.image}
                                    src={comic.src}
                                    alt={`image de ${comic.title.toLowerCase()}`}
                                    width={`${comic.width}`}
                                    height={`${comic.height}`}
                                    style={{
                                        aspectRatio: `${comic.width}/${comic.height}`
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
                                    <div>Pokemon Anarchy</div>
                                    {new Date(comic.date).toLocaleString()}
                                </footer>
                                <div
                                    className={[
                                        styles.commentary,
                                        comic.commentary === ""
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
                                        {comic.commentary !== ""
                                            ? comic.commentary
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

export default Reader;

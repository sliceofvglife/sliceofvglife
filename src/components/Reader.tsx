import React, { Suspense } from "react";
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
import { unlockComic } from "./Archive";
import Image from "next/image";

// Scale of comics
const COMICS_SCALE = 2;

export interface ComicMetadata {
    id: string;
    photo: string;
    title: string;
    category: string[];
    commentary: string;
    date: string;
    // href of the page
    href: string;
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

        unlockComic(comic.id);

        return (
            <div
                className={[className || "", styles.reader, "container"].join(
                    " "
                )}
            >
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <div
                            className={styles.image_wrapper}
                            style={{ width: `${comic.width * COMICS_SCALE}px` }}
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
                            <div className={styles.toolbar}>
                                {shortcuts.map((shortcut) => (
                                    <a
                                        className={
                                            shortcut.enabled
                                                ? styles.toolbar_enabled
                                                : styles.toolbar_disabled
                                        }
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
                                    </a>
                                ))}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.title}>
                                    {comic.title}
                                </div>
                                <div className={styles.date}>
                                    {new Date(comic.date).toLocaleString()}
                                </div>
                                <div
                                    className={styles.commentary}
                                    style={{
                                        display:
                                            comic.commentary === ""
                                                ? "none"
                                                : "block"
                                    }}
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
                                        {comic.commentary}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Reader.propTypes = {};

export default Reader;

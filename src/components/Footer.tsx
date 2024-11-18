import React, { Suspense } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL ?? "#";

type FooterProps = {
    className?: string;
};

type FooterState = {};

class Footer extends React.Component<FooterProps, FooterState> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        const { className } = this.props;

        return (
            <footer
                className={[
                    styles.footer,
                    "container-fluid",
                    "text-center",
                    "text-white",
                    className
                ].join(" ")}
            >
                <section
                    className={[
                        styles.footer_row,
                        "row justify-content-center align-items-center"
                    ].join(" ")}
                >
                    <div className="col-auto">
                        <Link
                            className="btn btn-outline-light btn-floating"
                            href={GITHUB_URL}
                            role="button"
                            aria-label="Voir sur GitHub"
                        >
                            <Suspense fallback={<></>}>
                                <FontAwesomeIcon
                                    className="mai-fab"
                                    icon={faGithub}
                                />
                            </Suspense>
                        </Link>
                    </div>
                </section>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;

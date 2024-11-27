import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                    "text-center",
                    "text-white",
                    className
                ].join(" ")}
            >
                <Container className="external_container" fluid>
                    <Row
                        className={[
                            styles.footer_row,
                            "justify-content-center align-items-center"
                        ].join(" ")}
                    >
                        <Col xs={{ span: "auto" }}>
                            <Link
                                className="btn btn-outline-light btn-floating"
                                href={GITHUB_URL}
                                role="button"
                                aria-label="Voir sur GitHub"
                            >
                                <Suspense fallback={<></>}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </Suspense>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;

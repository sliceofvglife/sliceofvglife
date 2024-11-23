import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import styles from "./About.module.scss";

type AboutProps = {
    className?: string;
    text: string;
};

class About extends React.Component<AboutProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        const { className } = this.props;

        return (
            <Container className={[className || "", styles.about].join(" ")}>
                <Row className="justify-content-center">
                    <Col className={styles.text_wrapper}>
                        <ReactMarkdown>{this.props.text}</ReactMarkdown>
                    </Col>
                </Row>
            </Container>
        );
    }
}

About.propTypes = {};

export default About;

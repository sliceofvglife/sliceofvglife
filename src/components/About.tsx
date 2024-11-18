import React from "react";
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
            <div
                className={[className || "", styles.about, "container"].join(
                    " "
                )}
            >
                <div className="row justify-content-center">
                    <div className="col-6">
                        <ReactMarkdown>{this.props.text}</ReactMarkdown>
                    </div>
                </div>
            </div>
        );
    }
}

About.propTypes = {};

export default About;

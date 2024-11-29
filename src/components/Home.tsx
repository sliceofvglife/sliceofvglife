import React from "react";
import Reader, { ReaderProps } from "./Reader";
import { withRouter } from "next/router";

type HomeProps = ReaderProps & {};

class Home extends React.Component<HomeProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Reader
                comic={this.props.comic}
                first={this.props.first}
                previous={this.props.previous}
                next={this.props.next}
                last={this.props.last}
            ></Reader>
        );
    }
}

Home.propTypes = {};

export default withRouter(Home);

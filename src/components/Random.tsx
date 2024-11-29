import React from "react";
import type { Comic } from "./Reader";
import { NextRouter, withRouter } from "next/router";

type RandomProps = {
    comics: Comic[];
    router: NextRouter;
};

class Random extends React.Component<RandomProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        this.props.router.push(
            this.props.comics[
                Math.floor(Math.random() * this.props.comics.length)
            ].metadata.href
        );
        return <></>;
    }
}

Random.propTypes = {};

export default withRouter(Random);

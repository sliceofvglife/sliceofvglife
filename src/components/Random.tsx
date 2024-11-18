import React from "react";
import type { ComicMetadata } from "./Reader";
import { NextRouter, withRouter } from "next/router";

type RandomProps = {
    comics: ComicMetadata[];
    router: NextRouter;
};

class Random extends React.Component<RandomProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        const comic =
            this.props.comics[
                Math.floor(Math.random() * this.props.comics.length)
            ];
        this.props.router.push(comic.href);
        return <></>;
    }
}

Random.propTypes = {};

export default withRouter(Random);

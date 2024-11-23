import React from "react";
import Reader, { ReaderProps } from "./Reader";

type HomeProps = ReaderProps & {};

class Home extends React.Component<HomeProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <h1 className="col-auto">
                        Le comics à succès Pokemon Anarchy pour la première fois
                        en ligne !
                    </h1>
                </div>
                <Reader
                    comic={this.props.comic}
                    first={this.props.first}
                    previous={this.props.previous}
                    next={this.props.next}
                    last={this.props.last}
                ></Reader>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;

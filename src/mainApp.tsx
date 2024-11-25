"use client";

import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Menu = dynamic(() => import("@/components/Menu"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

type AppProps = {
    children: React.ReactNode;
};

class App extends React.Component<AppProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <Router>
                        <div className="App">
                            <Menu />
                            {this.props.children}
                            <ScrollToTop smooth />
                            <Footer />
                        </div>
                    </Router>
                </Provider>
            </React.StrictMode>
        );
    }
}

App.propTypes = {};

export default App;

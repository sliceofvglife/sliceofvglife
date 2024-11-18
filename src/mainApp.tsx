"use client";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/redux/store";

const META_TITLE = process.env.NEXT_PUBLIC_META_TITLE ?? "";
const META_DESCRIPTION = process.env.NEXT_PUBLIC_META_DESCRIPTION ?? "";

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
                <Head>
                    <title>{META_TITLE}</title>
                    <meta name="og:title" content={META_TITLE}></meta>
                    <meta name="description" content={META_DESCRIPTION}></meta>
                    <meta
                        name="og:description"
                        content={META_DESCRIPTION}
                    ></meta>
                </Head>
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

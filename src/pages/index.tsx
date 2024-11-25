"use client";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync, generateRssFeed } from "@/lib/utils";
import { getStaticProps as getStaticPropsComic } from "./comic/[id]";
import {
    HEAD_TITLE,
    META_DESCRIPTION,
    META_TITLE,
    WEBSITE_URL
} from "@/lib/const";

export async function getStaticProps() {
    const comics = collectComicsSync();
    generateRssFeed(comics);

    return await getStaticPropsComic({
        params: {
            id: comics[comics.length - 1].id
        }
    });
}

const Home = dynamic(() => import("@/components/Home"), { ssr: false });

export default function HomePage({
    comic,
    first,
    previous,
    next,
    last
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{HEAD_TITLE}</title>
                <meta name="og:title" content={META_TITLE}></meta>
                <meta name="og:description" content={META_DESCRIPTION}></meta>
                <meta name="og:url" content={WEBSITE_URL}></meta>
                <meta name="og:image" content={WEBSITE_URL}></meta>
                <meta name="og:type" content="article"></meta>
                <meta name="twitter:title" content={META_TITLE}></meta>
                <meta
                    name="twitter:description"
                    content={META_DESCRIPTION}
                ></meta>
                <meta name="twitter:image" content={WEBSITE_URL}></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>
            <Home
                comic={comic}
                first={first}
                previous={previous}
                next={next}
                last={last}
            />
        </>
    );
}

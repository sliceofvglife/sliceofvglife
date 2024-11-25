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
import type { ComicMetadata } from "@/components/Reader";

// Get head metadata for comics pages.
export function getComicsHeadMetadata(comic: ComicMetadata) {
    return (
        <Head>
            <title>
                {[comic.title, "Pokemon Anarchy", META_TITLE].join(" | ")}
            </title>
            <meta name="description" content={META_DESCRIPTION} />
            <meta property="og:title" content={comic.title} />
            <meta property="og:description" content={META_DESCRIPTION} />
            <meta property="og:url" content={comic.url} />
            <meta property="og:image" content={comic.src} />
            <meta property="og:type" content="article" />
            <meta property="twitter:url" content={comic.url} />
            <meta property="twitter:domain" content="sliceofvglife.github.io" />
            <meta name="twitter:title" content={comic.title} />
            <meta name="twitter:description" content={META_DESCRIPTION} />
            <meta name="twitter:image" content={comic.src} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}

// Get generic head metadata for the non comics pages.
export function getGenericTitleHeadMetadata(title: string) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={META_DESCRIPTION} />
            <meta property="og:title" content={META_TITLE} />
            <meta property="og:description" content={META_DESCRIPTION} />
            <meta property="og:url" content={WEBSITE_URL} />
            <meta property="og:image" content={WEBSITE_URL} />
            <meta property="og:type" content="article" />
            <meta property="twitter:url" content={WEBSITE_URL} />
            <meta property="twitter:domain" content="sliceofvglife.github.io" />
            <meta name="twitter:title" content={META_TITLE} />
            <meta name="twitter:description" content={META_DESCRIPTION} />
            <meta name="twitter:image" content={WEBSITE_URL} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}

export function getPageHeadMetadata(title: string) {
    return getGenericTitleHeadMetadata([title, META_TITLE].join(" | "));
}

function getHomeHeadMetadata() {
    return getGenericTitleHeadMetadata(HEAD_TITLE);
}

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
            {getHomeHeadMetadata()}
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

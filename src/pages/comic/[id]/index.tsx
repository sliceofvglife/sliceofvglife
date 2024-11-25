"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync, findComicById } from "@/lib/utils";
import Head from "next/head";
import { META_DESCRIPTION, META_TITLE } from "@/lib/const";

export async function getStaticProps(context: any) {
    const id = context.params.id;
    const comics = collectComicsSync();
    const comic = findComicById(comics, id)!;

    return {
        props: {
            comic,
            first: comics[0],
            previous: findComicById(comics, comic.previousId),
            next: findComicById(comics, comic.nextId),
            last: comics[comics.length - 1]
        }
    };
}

/**
 * Get static paths for all possible comics.
 */
export async function getStaticPaths() {
    const comics = collectComicsSync();
    const result: {
        paths: any[];
        fallback: boolean;
    } = {
        paths: [],
        fallback: false
    };

    comics.forEach((comic) => {
        // Add a path for the comic
        result.paths.push({ params: { id: comic.id } });
    });

    return result;
}

const Reader = dynamic(() => import("@/components/Reader"), {
    ssr: false
});

export default function GamePage({
    comic,
    first,
    previous,
    next,
    last
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>
                    {[comic.title, "Pokemon Anarchy", META_TITLE].join(" | ")}
                </title>
                <meta name="og:title" content={comic.title}></meta>
                <meta name="og:description" content={META_DESCRIPTION}></meta>
                <meta name="og:url" content={comic.href}></meta>
                <meta name="og:image" content={comic.src}></meta>
                <meta name="og:type" content="article"></meta>
                <meta name="twitter:title" content={comic.title}></meta>
                <meta
                    name="twitter:description"
                    content={META_DESCRIPTION}
                ></meta>
                <meta name="twitter:image" content={comic.src}></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>
            <link rel="preload" as="image" href={comic.href} />
            <Reader
                comic={comic}
                first={first}
                previous={previous}
                next={next}
                last={last}
            />
        </>
    );
}

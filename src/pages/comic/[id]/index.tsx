"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync, findComicById } from "@/lib/utils";
import Head from "next/head";
import { getComicTitle } from "@/pages";

export async function getStaticProps(context: any) {
    const id = context.params.id;
    const comics = collectComicsSync();
    const comic = findComicById(comics, id)!;

    return {
        props: {
            comic,
            first: comics[0].metadata,
            previous: findComicById(comics, comic.previousId)?.metadata ?? null,
            next: findComicById(comics, comic.nextId)?.metadata ?? null,
            last: comics[comics.length - 1].metadata
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
        result.paths.push({ params: { id: comic.metadata.id } });
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
                <title>{getComicTitle(comic)}</title>
            </Head>
            <Reader
                comic={comic}
                first={first}
                previous={previous ?? undefined}
                next={next ?? undefined}
                last={last}
            />
        </>
    );
}

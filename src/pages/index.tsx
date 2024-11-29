"use client";
import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync, generateRssFeed } from "@/lib/utils";
import { getStaticProps as getStaticPropsComic } from "./comic/[id]";
import Head from "next/head";
import { HEAD_TITLE, META_TITLE } from "@/lib/const";
import { Comic } from "@/components/Reader";

export function getPageTitle(title: string): string {
    return [title, META_TITLE].join(" | ");
}

export function getComicTitle(comic: Comic): string {
    return getPageTitle([comic.metadata.title, comic.series.title].join(" | "));
}

export async function getStaticProps() {
    const comics = collectComicsSync();
    generateRssFeed(comics);

    return await getStaticPropsComic({
        params: {
            id: comics[comics.length - 1].metadata.id
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
            </Head>
            <Home
                comic={comic}
                first={first}
                previous={previous ?? undefined}
                next={next ?? undefined}
                last={last}
            />
        </>
    );
}

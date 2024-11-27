"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
    collectCategories,
    collectGames,
    collectComicsSync
} from "@/lib/utils";
import type { InferGetStaticPropsType } from "next";
import { getPageTitle } from "..";
import Head from "next/head";

export async function getStaticProps() {
    return {
        props: {
            categories: await collectCategories(),
            games: await collectGames(),
            comics: collectComicsSync()
        }
    };
}

const Archive = dynamic(() => import("@/components/Archive"), {
    ssr: false
});

export default function ArchivePage({
    categories,
    games,
    comics
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{getPageTitle("Archive")}</title>
            </Head>
            <Archive categories={categories} games={games} comics={comics} />
        </>
    );
}

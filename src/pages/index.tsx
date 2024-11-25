"use client";
import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync, generateRssFeed } from "@/lib/utils";
import { getStaticProps as getStaticPropsComic } from "./comic/[id]";

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
        <Home
            comic={comic}
            first={first}
            previous={previous}
            next={next}
            last={last}
        />
    );
}

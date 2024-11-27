"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync } from "@/lib/utils";
import Head from "next/head";
import { getPageTitle } from "..";

export async function getStaticProps() {
    return {
        props: {
            comics: collectComicsSync()
        }
    };
}

const Random = dynamic(() => import("@/components/Random"), {
    ssr: false
});

export default function RandomPage({
    comics
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{getPageTitle("Au hasard")}</title>
            </Head>
            <Random comics={comics} />
        </>
    );
}

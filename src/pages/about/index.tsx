"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectAbout } from "@/lib/utils";
import { META_TITLE, META_DESCRIPTION, WEBSITE_URL } from "@/lib/const";
import Head from "next/head";

export async function getStaticProps() {
    return {
        props: {
            text: await collectAbout()
        }
    };
}

const About = dynamic(() => import("@/components/About"), {
    ssr: false
});

export default function RandomPage({
    text
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{["À propos", META_TITLE].join(" | ")}</title>
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
            <About text={text} />
        </>
    );
}

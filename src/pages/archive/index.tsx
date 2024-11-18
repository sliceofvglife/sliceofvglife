"use client";

import React from "react";
import dynamic from "next/dynamic";
import { collectCategories, collectComicsSync } from "@/lib/utils";
import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
    return {
        props: {
            categories: await collectCategories(),
            comics: collectComicsSync()
        }
    };
}

const Archive = dynamic(() => import("@/components/Archive"), {
    ssr: false
});

export default function ArchivePage({
    categories,
    comics
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Archive categories={categories} comics={comics} />;
}

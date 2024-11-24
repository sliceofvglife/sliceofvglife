"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectComicsSync } from "@/lib/utils";

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
    return <Random comics={comics} />;
}

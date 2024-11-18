"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { InferGetStaticPropsType } from "next";
import { collectAbout } from "@/lib/utils";

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
    return <About text={text} />;
}

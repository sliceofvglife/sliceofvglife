"use client";

import React from "react";
import dynamic from "next/dynamic";
import { collectComicsSync, collectSeriesSync } from "@/lib/utils";
import type { InferGetStaticPropsType } from "next";
import { getPageTitle } from "..";
import Head from "next/head";

export async function getStaticProps(context: any) {
    const { params } = context;
    const { slug } = params;
    const series = await collectSeriesSync();
    const currentSeries =
        slug?.length > 0
            ? series.find((s) => s.metadata.id === slug[0])!
            : null;
    const currentCategory =
        slug?.length > 1
            ? currentSeries?.categories?.find((c) => c.id === slug[1])
            : null;

    return {
        props: {
            series,
            comics: collectComicsSync({
                seriesId: currentSeries?.metadata?.id,
                categoryId: currentCategory?.id
            }).map((comic) => comic.metadata),
            currentSeriesId: currentSeries?.metadata?.id ?? null,
            currentCategoryId: currentCategory?.id ?? null
        }
    };
}

export async function getStaticPaths() {
    const result: {
        paths: any[];
        fallback: boolean;
    } = {
        paths: [
            {
                params: { slug: false }
            }
        ],
        fallback: false
    };

    (await collectSeriesSync()).forEach(async (series) => {
        result.paths.push({ params: { slug: [series.metadata.id] } });
        series.categories.forEach((category) =>
            result.paths.push({
                params: { slug: [series.metadata.id, category.id] }
            })
        );
    });

    return result;
}
const Archive = dynamic(() => import("@/components/Archive"), {
    ssr: false
});

export default function ArchivePage({
    series,
    currentSeriesId,
    currentCategoryId,
    comics
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{getPageTitle("Archive")}</title>
            </Head>
            <Archive
                series={series}
                currentSeriesId={currentSeriesId ?? undefined}
                currentCategoryId={currentCategoryId ?? undefined}
                comics={comics}
            />
        </>
    );
}

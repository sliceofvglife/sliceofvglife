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
    const currentSeriesId = slug?.length > 0 ? slug[0] : undefined;
    const currentSeries = series.find((s) => s.metadata.id === currentSeriesId);
    const currentCategoryId = slug?.length > 1 ? slug[1] : undefined;

    return {
        props: {
            series,
            comics: collectComicsSync({
                seriesId: currentSeries?.metadata?.id,
                categoryId: currentCategoryId
            }).map((comic) => comic.metadata),
            currentSeriesId: currentSeriesId ?? null,
            currentCategoryId: currentCategoryId ?? null
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

    // Add the all series path
    result.paths.push({ params: { slug: ["all"] } });

    // Add paths for each series
    (await collectSeriesSync()).forEach(async (series) => {
        result.paths.push({ params: { slug: [series.metadata.id] } });

        // Add paths for each category
        series.categories.forEach((category) => {
            [series.metadata.id, "all"].forEach((seriesId) =>
                result.paths.push({
                    params: { slug: [seriesId, category.id] }
                })
            );
        });
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

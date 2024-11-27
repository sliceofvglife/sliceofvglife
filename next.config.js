const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: false
});
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === "development" ? "" : "/sliceofvglife",
    output: "export" // Outputs a Single-Page Application (SPA).
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));

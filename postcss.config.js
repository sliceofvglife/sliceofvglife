module.exports = {
    plugins: [
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                autoprefixer: {
                    flexbox: "no-2009"
                },
                stage: 3,
                features: {
                    "custom-properties": false
                }
            }
        ],
        [
            "@fullhuman/postcss-purgecss",
            {
                content: ["./src/**/*.{js,jsx,ts,tsx}"],
                defaultExtractor: (content) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
                safelist: {
                    standard: [
                        "html",
                        "body",
                        "container",
                        "row",
                        "col",
                        /^col-/,
                        /^nav-/,
                        "navbar",
                        /^navbar-/,
                        "collapse",
                        "collapsed",
                        "me-auto"
                    ]
                }
            }
        ]
    ]
};

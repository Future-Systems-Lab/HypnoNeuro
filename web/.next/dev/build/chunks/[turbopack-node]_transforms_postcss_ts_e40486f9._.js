module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/HypnoNeuro/web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/c7ef5__pnpm_2a535f19._.js",
  "chunks/[root-of-the-server]__713df24e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/HypnoNeuro/web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];
requirejs.config({
    paths: { "highlightjs": webjars.path("highlightjs", "highlight.min") },
    shim: { "highlightjs": { "exports": "hljs" } }
});

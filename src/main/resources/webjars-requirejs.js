requirejs.config({
    paths: { "highlightjs": webjars.path("highlightjs", "hightlight.min") },
    shim: { "highlightjs": { "exports": "hljs" } }
});

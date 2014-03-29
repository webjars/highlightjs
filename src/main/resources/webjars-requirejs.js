/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    paths: { "highlightjs": webjars.path("highlightjs", "hightlight.min") },
    shim: { 
        'highlightjs':  { 
            'exports': 'hljs'
        } 
    }
});

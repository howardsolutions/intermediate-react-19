## Intermediate React, v6 Course

### what is Static Site generation? (SSG)

A rendering mode suitable for content-heavy websites with minimal interactivity, where pages are pre-rendered at build time and served as static HTML files, ideal for marketing sites, tutorial sites, and content-focused web applications

### What is the key consideration when adopting advanced React rendering techniques?

Measure and ensure that the technique solves a specific performance problem, as these techniques introduce additional complexity and are not universally beneficial

### In ES modules, how can you define __dirname when it is not automatically available?

in CommonJS, `__dirname` automatically available.

Use `fileURLToPath(import.meta.url)` to get the current directory path
## Intermediate React, v6 Course

### what is Static Site generation? (SSG)

A rendering mode suitable for content-heavy websites with minimal interactivity, where pages are pre-rendered at build time and served as static HTML files, ideal for marketing sites, tutorial sites, and content-focused web applications

### What is the key consideration when adopting advanced React rendering techniques?

Measure and ensure that the technique solves a specific performance problem, as these techniques introduce additional complexity and are not universally beneficial

### In ES modules, how can you define __dirname when it is not automatically available?

in CommonJS, `__dirname` automatically available.

Use `fileURLToPath(import.meta.url)` to get the current directory path

## SERVER SIDE RENDERING

### `renderToString` and `renderToStaticMarkup`from react-dom/server

- `renderToStaticMarkup`: use when there's no ADDITIONAL React information added to the string

- `renderToString`: use when HAVE React metadata that it needed to hydrate back to client side, and all the Proper hooks, all of stuff it needs to take over on the client side. Use when intended to hydrating.

if we don't want to add some React metadata, only static markup, but still use `renderToString`? 

everything still worked just fine. It's just bigger than it need to be.

renderToString includes React metadata needed for hydration and client-side interactivity, while renderToStaticMarkup generates a string without React-specific metadata, making it lighter but non-interactive.

## async, defer, preload, prefetch

- Defer = “Load now, run after DOM is ready.” 
- Async = “Load now, run ASAP!” 
- Preload = “Load now, use later.” 
- Prefetch = “Maybe needed later, fetch just in case.”

## What script tag attributes are recommended when loading client-side JavaScript for server-side rendering?

Use async, defer, and type="module" attributes to start downloading the script without blocking page rendering and to enable module loading.

<hr />

## What is the purpose of hydrateRoot in React?

HydrateRoot assumes existing server-side rendered markup and takes over the app, making it interactive on the client side, as opposed to createRoot which completely replaces the interior content.

## Why is flushing the head tag first important in server-side rendering?

Flushing the head tag first allows users to start downloading CSS, scripts, and other resources concurrently while the server continues rendering the app, potentially improving perceived performance.

## a common cause of hydration errors in React server-side rendering?

White space differences between server-rendered and client-side markup can cause hydration errors, leading to React failing to properly initialize the interactive components.

## What is the purpose of hydrateRoot in React?

HydrateRoot assumes existing server-side rendered markup and takes over the app, making it interactive on the client side, as opposed to createRoot which completely replaces the interior content.

## What is the difference between renderToString() and renderToPipeableStream() in React?

renderToString() generates the entire rendering in one shot, while renderToPipeableStream() can output chunks of markup as different parts of the application render, potentially improving perceived performance

## What happens if you add white space to the HTML during server-side rendering?

Adding white space can change the hash of the initial render, which might cause hydration mismatches between the server-rendered content and the client-side React application

## What are RSCs?

- RSCs are not SSR 2.0.

- This is a common misconception that I just want to dispel upfront: these things are relatively unrelated in the sense you can SSR without RSCs, RSCs without SSR, both, or neither!

RSCs introduce the notion of a server to an ongoing React app. Whereas SSR renders the page once and then is no longer involved in the ongoing React app

RSCs introduce the notion that the server continues to render PARTS of the app.

An RSC is a component that only renders on the SERVER and sends its complete MARKUP to the app – the client-side app doesn't even have the code to render the component client-side - it can ONLY RECEIVE markup from a server and then insert that into the app.

A React server component is a component that ONLY renders on the server.

### Why is this useful?

- No matter how much of an interactive app you have, large swaths of it are inert markup, text, and content.
You don't need React to generate HTML that shows a few headers and paragraphs.
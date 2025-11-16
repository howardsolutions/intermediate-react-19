import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
} from "node:fs";

import { fileURLToPath } from "node:url";

import path, { dirname } from "node:path";

import App from "./App";

// create __dirname equivalent for ES modules
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// Buit files - place to export the finished files to
const distPath = path.join(__dirname, "dist");

const shell = readFileSync(path.join(__dirname, "index.html"), "utf-8");

const app = renderToStaticMarkup(createElement(App));

const html = shell.replace("<!--ROOT-->", app);

// Create dist folder if it doesn't exist
if (!existsSync(distPath)) {
  mkdirSync(distPath);
} else {
  // Delete all files in dist folder if it exists
  const files = readdirSync(distPath);
  for (const file of files) {
    unlinkSync(path.join(distPath, file));
  }
}

writeFileSync(path.join(distPath, "index.html"), html);

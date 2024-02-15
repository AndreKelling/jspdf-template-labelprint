# jsPDF Template Labelprint

This is a template [jsPDF](https://github.com/parallax/jsPDF) in an _ES module_ setup.
It shall get used for a DYMO 36x89mm label printer.

Here there is a [demo](https://andrekelling.github.io/jspdf-template-labelprint/).

It does not work as an ES module in node.js, because JsPDF has an [issue](https://github.com/parallax/jsPDF/issues/783). So it is primarily for bundling into JS for the browser.

## Install

1. `npm install`

If you want the usable node package, you can install it via npm:

`npm i jspdf-product-label -S` it is here https://www.npmjs.com/package/jspdf-product-label


## Build

Creates a bundle JS file which provides the global method `printPDF()`.

For demonstration a docs [GitHub page](https://andrekelling.github.io/jspdf-template-labelprint/) is build.

1. `npm run build`

## Development

1. `npm run dev`
2. `npm run serve`

## Test

1. `npm test`

## Publish

Is done via GitHub action.

* raise version in `dist/package.json`

A copy of the src dir is taken as artifact for the node package in the dist dir.

## Structure

* Print components or template partials are placed in `src/print/partials`
* Tools like `scaleDown` are placed in `src/print/utils`

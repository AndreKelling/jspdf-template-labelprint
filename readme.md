# jsPDF Template Labelprint

This is a template [jsPDF](https://github.com/parallax/jsPDF) in an _ES6 / ECMAScript webpack_ setup.
It shall get used for a DYMO 36x89mm label printer.

Includes [svg2pdf](https://github.com/yWorks/svg2pdf.js) for better SVG support.

Here there is a [demo](https://andrekelling.github.io/jspdf-template-labelprint/).

## Install

1. `npm install`

## Build

Creates a bundle JS file which provides the global method `printPDF()`.

For demonstration a docs [GitHub page](https://andrekelling.github.io/jspdf-template-labelprint/) is build.

1. `npm run build`

## Development

1. `npm run serve`

## Structure

* Print components or template partials are placed in `src/print/partials`
* `fetchSvg` and `newPage` are tools placed in `src/print/utils`

## Issues

* 

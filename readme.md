# jsPDF Template Labelprint

This is a template [jsPDF](https://github.com/parallax/jsPDF) in an _ES6 / ECMAScript webpack_ setup.
It shall get used for a DYMO 36x89mm label printer.

Here there is a [demo](https://andrekelling.github.io/jspdf-template-labelprint/).

## Install

1. `npm install`

## Build

Creates a bundle JS file which provides the global method `printPDF()`.

For demonstration a docs [GitHub page](https://andrekelling.github.io/jspdf-template-labelprint/) is build.

1. `npm run build`

## Development

1. `npm run serve`

## Publish

Is done via GitHub action.

* raise version in `dist/package.json`

A copy of the src dir is taken as artifact for the node package in the dist dir.

## Structure

* Print components or template partials are placed in `src/print/partials`
* Tools like `scaleDown` are placed in `src/print/utils`

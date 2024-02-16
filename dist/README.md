# jsPDF Product Label 54 x 70 mm

It shall get used for a DYMO 54x70mm label printer.

Here there is a [demo](https://andrekelling.github.io/jspdf-template-labelprint/) how that print is looking like.

It does not work as an ES module in node.js, because JsPDF has an [issue](https://github.com/parallax/jsPDF/issues/783). So it is primarily for bundling into JS for the browser.

## Install

1. `npm i jspdf-product-label-54x70 -S`

## Usage

Should look like this:

```
import { printPDF } from "jspdf-product-label-54x70";

document.querySelector(".js-print-pdf").addEventListener("click", function() {
    /**
    * @type {PrintData} check PrintData interface in src/print/index.d.ts
    */
    const printData = {
        "logo": logoLandscapeString,
        "productName": "Big Shovel",
        "productColour": "midgrey",
        "bulletPoints": [
            "1. Point one",
             "2. Point two",
            "3. Point three",
            "4. Point four",
            "5. Point five"
        ],
        "productCode": "DX.123-456-$4",
        "qrCode": qrCodeString,
        "productId": "12345"
    }
    
    printPDF([
        printData
    ]);
});
```

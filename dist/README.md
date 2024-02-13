# jsPDF Product Label

It shall get used for a DYMO 36x89mm label printer.

Here there is a [demo](https://andrekelling.github.io/jspdf-template-labelprint/) how that print is looking like.

## Install

1. `npm i jspdf-product-label -S`

## Usage

Should look like this:

```
import { printPDF } from "jspdf-product-label";

document.querySelector(".js-print-pdf").addEventListener("click", function() {
    printPDF([{
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
    }]);
});
```

## Issues

* be aware that the QR code image has no white margin around it

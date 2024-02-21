import {logoLandscapeString} from "./base64-pictures/logo-landscape-string";
import {logoPortraitString} from "./base64-pictures/logo-portrait-string";
import {qrCodeString} from "./base64-pictures/qr-code-string";
import {printPDF} from "../src/app";

/**
 * @type {PrintData}
 */
const basePrintData = {
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
};

/**
 * @type {PrintData[]}
 */
const shortPrintData = [
    {
        ...basePrintData,
        "bulletPoints": [
            "1. Point one",
            "2. Point two"
        ]
    }
];

/**
 * @type {PrintData[]}
 */
const longPrintData = [
    {
        ...basePrintData,
        "logo": logoPortraitString,
        "productName": "Blue Ananas with heavy heavy spikes and aroma juice",
        "productColour": "blue/yellow and red, purple and stripes",
        "bulletPoints": [
            "1. Point one is quite long",
            "2. Point two",
            "3. Point three is also quite a long text",
            "4. Point four"
        ],
        "productCode": "DX.123-456-$4-superlong",
    }
];

/**
 * @type {PrintData[]}
 */
const multipagePrintData = [
    basePrintData,
    basePrintData
];

document.getElementById('short').onclick = () => {
    printPDF(shortPrintData);
};

document.getElementById('long').onclick = () => {
    printPDF(longPrintData);
};

document.getElementById('multipage').onclick = () => {
    printPDF(multipagePrintData);
};

document.getElementById('printAction').onclick = () => {
    const logo = document.getElementById('logo').value;
    const productName = document.getElementById('productName').value;
    const productColour = document.getElementById('productColour').value;
    const bulletPoints = document.getElementById('bulletPoints').value.split(";");
    const productCode = document.getElementById('productCode').value;
    const productId = document.getElementById('productId').value;

    /**
     * @type {PrintData[]}
     */
    const printData = [
        {
            ...basePrintData,
            logo,
            productName,
            productColour,
            bulletPoints,
            productCode,
            productId,
        }
    ];

    printPDF(printData);
};


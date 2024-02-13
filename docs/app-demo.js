import {logoLandscapeString} from "./base64-pictures/logo-landscape-string";
import {logoPortraitString} from "./base64-pictures/logo-portrait-string";
import {qrCodeString} from "./base64-pictures/qr-code-string";
import printPDF from "../src/app";

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
const shortPrintData = [
    {
        ...basePrintData,
        "bulletPoints": [
            "1. Point one",
            "2. Point two"
        ]
    }
];
const longPrintData = [
    {
        ...basePrintData,
        "logo": logoPortraitString,
        "productName": "Blue Ananas with heavy spikes",
        "productColour": "blue/yellow and red",
        "bulletPoints": [
            "1. Point one is quite long",
            "2. Point two",
            "3. Point three is also quite a long text",
            "4. Point four",
            "5. Point five"
        ],
        "productCode": "DX.123-456-$4-superlong",
    }
];
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
    const productName = document.getElementById('productName').value;
    const productColour = document.getElementById('productColour').value;
    const bulletPoints = document.getElementById('bulletPoints').value.split(";");
    const productCode = document.getElementById('productCode').value;
    const productId = document.getElementById('productId').value;

    const printData = [
        {
            ...basePrintData,
            "productName": productName,
            "productColour": productColour,
            "bulletPoints": bulletPoints,
            "productCode": productCode,
            "productId": productId,
        }
    ];
    printPDF(printData);
};


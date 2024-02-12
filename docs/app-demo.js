// https://andrekelling.de
const qrCodeString = "data:image/png;base64,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";

const basePrintData = {
    "logo": "path or base64?",
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
    basePrintData,
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
        "productName": "Blue Ananas with heavy spikes",
        "productColour": "blue/yellow and red",
        "bulletPoints": [
            "1. Point one is quite long",
            "2. Point two",
            "3. Point three is also quite a long text",
            "4. Point four",
            "5. Point five"
        ],
        "productCode": "DX.123-456-$4-superlong-NR",
    }
];
const multipagePrintData = [
    basePrintData,
    basePrintData
];

document.getElementById('short').onclick = () => {
    printPDF(Object.assign(basePrintData, shortPrintData));
};

document.getElementById('long').onclick = () => {
    printPDF(Object.assign(basePrintData, longPrintData));
};

document.getElementById('multipage').onclick = () => {
    printPDF(Object.assign(basePrintData, multipagePrintData));
};


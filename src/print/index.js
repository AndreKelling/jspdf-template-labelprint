import JsPDF from 'jspdf';
import logo from "./partials/logo.js";
import titles from "./partials/titles.js";
import settings from "./partials/settings.js";
import bulletPoints from "./partials/bullet-points.js";
import productCode from "./partials/product-code.js";
import productId from "./partials/product-id.js";
import qrCode from "./partials/qr-code.js";
import assembleFileName from "./utils/file-name.js";

/**
 * @param {PrintData[]} printDataArr
 * @returns {JsPDF}
 */
export default (printDataArr) => {
    const options = {
        orientation: 'p',
        format: [36, 89]
    }
    const doc = new JsPDF(options);

    settings(doc);

    let startY = 18;

    const pageWidth = doc.internal.pageSize.width;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    printDataArr.forEach((printData, index) => {
        titles(doc, printData, startY, pageWidth);

        bulletPoints(doc, printData.bulletPoints, pageWidth);

        // print qr code before text. so that any white margin from image is below text.
        qrCode(doc, printData.qrCode, pageWidth);

        productCode(doc, printData.productCode, pageWidth);

        productId(doc, printData.productId, pageWidth);

        logo(doc, printData.logo);

        const isNotLastLoop = index !== printDataArr.length - 1;
        if (isNotLastLoop){
            doc.addPage();
        }
    });

    // <><>><><>><>><><><><><>>><><<><><><><>
    // PRINT
    // <><>><><>><>><><><><><>>><><<><><><><>
    const fileName = assembleFileName(printDataArr.length, printDataArr[0]);

    return doc.save(fileName + ".pdf");
}

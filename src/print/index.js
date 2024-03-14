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
 * @param {boolean} asBlob if true, returns the pdf as a blob
 * @returns {JsPDF}
 */
export default (printDataArr, asBlob = false) => {
    const options = {
        orientation: 'p',
        format: [54, 70]
    }
    const doc = new JsPDF(options);

    settings(doc);

    const pageWidth = doc.internal.pageSize.width;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    printDataArr.forEach((printData, index) => {
        const startY = titles(doc, printData, pageWidth);

        bulletPoints(doc, printData.bulletPoints, pageWidth, startY);

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

    return asBlob ? doc.output('blob') : doc.save(fileName + ".pdf");
}

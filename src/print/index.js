import jsPDF from 'jspdf';
import logo from "./partials/logo";
import titles from "./partials/titles";
import settings from "./partials/settings";
import bulletPoints from "./partials/bullet-points";
import productCode from "./partials/productCode";
import productId from "./partials/productId";
import qrCode from "./partials/qrCode";
import assembleFileName from "./utils/file-name";
import {PrintData} from "./types";

/**
 *
 * @param {PrintData[]} printDataArr
 * @returns {void}
 */
export default (printDataArr) => {
    const options = {
        orientation: 'p',
        format: [36, 89]
    }
    const doc = new jsPDF(options);

    settings(doc);

    let startY = 20;

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

    doc.save(fileName + ".pdf");
}

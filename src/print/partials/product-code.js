import JsPDF from 'jspdf';
import { mmDpiFactor } from "../utils/mm-dpi-factor.js";

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {string} productCode
 * @param {number} pageWidth
 */
export default (doc, productCode, pageWidth) => {
    if (!productCode) {
        return;
    }
    const pageCenterX = pageWidth / 2;
    let startY = 55;

    doc.setFontSize(doc.vars.fontSizes.SmallFontSize);

    // check if the product code is too long for the page ONCE
    const stringWidthInMm = doc.getStringUnitWidth(productCode) * mmDpiFactor;
    if (stringWidthInMm > pageWidth) {
        doc.setFontSize(doc.vars.fontSizes.SmallFontSize - 2);
    }

    doc.text(productCode, pageCenterX, startY, {align: 'center'});
}

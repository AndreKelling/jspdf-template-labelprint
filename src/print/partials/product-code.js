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
    const startX = 23;
    let startY = doc.vars.startY.productCode;

    doc.setFontSize(doc.vars.fontSizes.SmallFontSize);
    doc.setTextColor(150, 150, 150);

    // check if the product code is too long for the page ONCE
    const stringWidthInMm = doc.getStringUnitWidth(productCode) * mmDpiFactor;

    const maxWidth = pageWidth - startX - 2
    if (stringWidthInMm > maxWidth) {
        doc.setFontSize(doc.vars.fontSizes.SmallFontSize - 1);
    }

    doc.text(productCode, startX, startY, {maxWidth});
}

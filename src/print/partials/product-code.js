import JsPDF from 'jspdf';

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
    doc.text(productCode, pageCenterX, startY, {align: 'center'});
}

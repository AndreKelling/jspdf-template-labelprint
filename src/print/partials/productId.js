import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
 * @param {string} productId
 * @param {number} pageWidth
 */
export default (doc, productId, pageWidth) => {
    if (!productId) {
        return;
    }
    const pageCenterX = pageWidth / 2;
    let startY = 86;

    doc.setFontSize(doc.vars.fontSizes.IdFontSize);
    doc.text(productId, pageCenterX, startY, {align: 'center', maxWidth: pageWidth});
}

import JsPDF from 'jspdf';

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {string} productId
 * @param {number} pageWidth
 */
export default (doc, productId, pageWidth) => {
    if (!productId) {
        return;
    }
    const pageCenterX = pageWidth / 2;
    let startY = 87;

    doc.setFontSize(doc.vars.fontSizes.IdFontSize);
    doc.text(productId, pageCenterX, startY, {align: 'center', maxWidth: pageWidth});
}

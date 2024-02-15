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
    let startY = 86;

    doc.setFontSize(doc.vars.fontSizes.IdFontSize);

    const textOptions = {align: 'center', maxWidth: pageWidth, charSpace: 0.5};

    // https://github.com/parallax/jsPDF/issues/3406#issuecomment-1092298117
    const adjustmentX = textOptions.charSpace * doc.getStringUnitWidth(productId);

    doc.text(productId, pageCenterX - adjustmentX, startY, textOptions);
}

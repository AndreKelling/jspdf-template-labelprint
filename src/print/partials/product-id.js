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
    const startX = 23;
    let startY = doc.vars.startY.productId;

    doc.setFontSize(doc.vars.fontSizes.IdFontSize);
    doc.setTextColor(160, 160, 160);

    const textOptions = {charSpace: 0.5};

    // https://github.com/parallax/jsPDF/issues/3406#issuecomment-1092298117
    const adjustmentX = textOptions.charSpace * doc.getStringUnitWidth(productId);

    doc.text(productId, startX - adjustmentX, startY, textOptions);
}

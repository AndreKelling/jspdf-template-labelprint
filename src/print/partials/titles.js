import JsPDF from 'jspdf';

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {PrintData} printData
 * @param {number} pageWidth
 *
 * @return number
 */
export default (doc, printData, pageWidth) => {
    const pageCenterX = pageWidth / 2;
    let startY = doc.vars.startY.titles;

    doc.setFontSize(doc.vars.fontSizes.TitleFontSize);
    const productName = printData.productName;
    let productNameLines = 0;
    if (productName) {
        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
        const productNameArr = doc.splitTextToSize(productName, pageWidth);
        const maxLines = 3;
        productNameLines = productNameArr.length;
        if (productNameLines > maxLines) {
            productNameArr.splice(maxLines, productNameLines - maxLines);
        }
        productNameArr.forEach((line) => {
            doc.text(line, pageCenterX, startY, {align: 'center'});
            startY += doc.vars.lineSpacing;
        })
        // reset bold font
        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
    }

    doc.setFontSize(doc.vars.fontSizes.SubTitleFontSize);
    const productColour = printData.productColour;
    if (productColour) {
        const productColorArr = doc.splitTextToSize(productColour, pageWidth);
        const maxLines = productNameLines > 2 ? 1 : 2;
        const productColorLines = productColorArr.length;
        if (productColorLines > maxLines) {
            productColorArr.splice(maxLines, productColorLines - maxLines);
        }
        productColorArr.forEach((line) => {
            doc.text(line, pageCenterX, startY, {align: 'center'});
            startY += doc.vars.lineSpacing;
        })
    }

    return startY;
}

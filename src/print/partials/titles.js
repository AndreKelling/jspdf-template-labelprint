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
    if (productName) {
        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
        const productNameArr = doc.splitTextToSize(productName, pageWidth);
        const maxLines = 3;
        if (productNameArr.length > maxLines) {
            productNameArr.splice(maxLines, productNameArr.length - maxLines);
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
        doc.text(productColour, pageCenterX, startY, {align: 'center'});
        startY += doc.vars.lineSpacing;
    }

    return startY;
}

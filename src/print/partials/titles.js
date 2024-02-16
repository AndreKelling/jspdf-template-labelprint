import JsPDF from 'jspdf';

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {PrintData} printData
 * @param {number} pageWidth
 */
export default (doc, printData, pageWidth) => {
    const pageCenterX = pageWidth / 2;
    let startY = doc.vars.startY.titles;

    doc.setFontSize(doc.vars.fontSizes.TitleFontSize);
    const productName = printData.productName;
    if (productName) {
        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
        const productNameArr = doc.splitTextToSize(productName, pageWidth);
        if (productNameArr.length > 2) {
            productNameArr.splice(2, productNameArr.length - 2);
        }
        productNameArr.forEach((line) => {
            doc.text(line, pageCenterX, startY, {align: 'center', maxWidth: pageWidth});
            startY += doc.vars.lineSpacing;
        })
        // reset bold font
        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
    }

    doc.setFontSize(doc.vars.fontSizes.SubTitleFontSize);
    const productColour = printData.productColour;
    if (productColour) {
        const productColourArr = doc.splitTextToSize(productColour, pageWidth);
        if (productColourArr.length > 2) {
            productColourArr.splice(2, productColourArr.length - 2);
        }
        productColourArr.forEach((line) => {
            doc.text(line, pageCenterX, startY, {align: 'center', maxWidth: pageWidth});
            startY += doc.vars.lineSpacing;
        })
    }
}

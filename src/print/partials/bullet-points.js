import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
 * @param {PrintData} printData
 * @param {number} pageWidth
 */
export default (doc, printData, pageWidth) => {
    const startX = 2;
    let startY = 40;
    const lineSpacing = doc.vars.lineSpacing - 1;

    doc.setFontSize(doc.vars.fontSizes.NormalFontSize);
    const bulletPoints = printData.bulletPoints;

    bulletPoints.forEach((point) => {
        const pointArr = doc.splitTextToSize(point, pageWidth - (2 * startX));

        // just use first line!
        doc.text(pointArr[0], startX, startY);
        startY += lineSpacing;
    });
}

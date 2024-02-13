import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
 * @param {string[]} bulletPoints
 * @param {number} pageWidth
 */
export default (doc, bulletPoints, pageWidth) => {
    const startX = 2;
    let startY = 39;
    const lineSpacing = doc.vars.lineSpacing - 1.6;

    doc.setFontSize(doc.vars.fontSizes.NormalFontSize);

    bulletPoints.forEach((point) => {
        const pointArr = doc.splitTextToSize(point, pageWidth - (2 * startX));

        // just use first line!
        doc.text(pointArr[0], startX, startY);
        startY += lineSpacing;
    });
}

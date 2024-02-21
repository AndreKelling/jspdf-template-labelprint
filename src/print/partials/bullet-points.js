import JsPDF from 'jspdf';

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {string[]} bulletPoints
 * @param {number} pageWidth
 * @param {number} startY
 */
export default (doc, bulletPoints, pageWidth, startY) => {
    if (!bulletPoints) {
        return;
    }

    const startX = 2;
    const lineSpacing = doc.vars.lineSpacing - 1;

    doc.setFontSize(doc.vars.fontSizes.SmallestFontSize);

    bulletPoints.forEach((point) => {
        const pointArr = doc.splitTextToSize(point, pageWidth - (2 * startX));

        // just use first line!
        doc.text(pointArr[0], startX, startY);
        startY += lineSpacing;
    });
}

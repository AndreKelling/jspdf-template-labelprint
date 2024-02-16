import JsPDF from 'jspdf';

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {string[]} bulletPoints
 * @param {number} pageWidth
 */
export default (doc, bulletPoints, pageWidth) => {
    if (!bulletPoints) {
        return;
    }

    const startX = 2;
    let startY = doc.vars.startY.bulletPoints;
    const lineSpacing = doc.vars.lineSpacing - 1.6;

    doc.setFontSize(doc.vars.fontSizes.NormalFontSize);

    bulletPoints.forEach((point) => {
        const pointArr = doc.splitTextToSize(point, pageWidth - (2 * startX));

        // just use first line!
        doc.text(pointArr[0], startX, startY);
        startY += lineSpacing;
    });
}

import JsPDF from 'jspdf';
import scaleDown from "../utils/scale-down.js";

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {string} qrCode base64 picture
 * @param {number} pageWidth
 */
export default (doc, qrCode, pageWidth) => {
    if (!qrCode) {
        return;
    }
    const startY = doc.vars.startY.qrCode;
    const startX = 2;
    const qrCodeDimension = 50;
    const maxWidthInPx = qrCodeDimension;
    const maxHeightInPx = qrCodeDimension;

    let imageProps;

    try {
        imageProps = doc.getImageProperties(qrCode);
    } catch (error) {
        console.warn('Error getting image properties for qrCode', error);
        return;
    }

    const dimensions = scaleDown(imageProps.width, imageProps.height, maxWidthInPx, maxHeightInPx);



    doc.addImage(qrCode, imageProps.fileType, startX, startY, dimensions.width, dimensions.height);
}

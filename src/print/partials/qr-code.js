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
    const startY = 59;
    const qrCodeDimension = 63;
    const maxWidthInPx = qrCodeDimension;
    const maxHeightInPx = qrCodeDimension;
    const pageCenterX = pageWidth / 2;

    let imageProps;

    try {
        imageProps = doc.getImageProperties(qrCode);
    } catch (error) {
        console.warn('Error getting image properties for qrCode', error);
        return;
    }

    const dimensions = scaleDown(imageProps.width, imageProps.height, maxWidthInPx, maxHeightInPx);

    const x = pageCenterX - dimensions.width / 2;

    doc.addImage(qrCode, imageProps.fileType, x, startY, dimensions.width, dimensions.height);
}

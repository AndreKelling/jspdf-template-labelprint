import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
 * @param {string} qrCode base64 picture
 * @param {number} pageWidth
 */
export default (doc, qrCode, pageWidth) => {
    if (!qrCode) {
        return;
    }
    const startY = 59;
    const mmDpiFactor = 72 / 25.4; // dpi / mm
    const qrCodeDimension = 63;
    const maxWidthInPx = qrCodeDimension;
    const maxHeightInPx = qrCodeDimension;
    const pageCenterX = pageWidth / 2;

    const imageProps = doc.getImageProperties(qrCode);
    let width = imageProps.width;
    let height = imageProps.height;

    if (width > maxWidthInPx) {
        const ratio = width / maxWidthInPx;
        width = width / ratio;
        height = height / ratio;
    }

    if (height > maxHeightInPx) {
        const ratio = height / maxHeightInPx;
        width = width / ratio;
        height = height / ratio;
    }

    width = width / mmDpiFactor;
    height = height / mmDpiFactor;

    const x = pageCenterX - width / 2;

    doc.addImage(qrCode, imageProps.fileType, x, startY, width, height);
}

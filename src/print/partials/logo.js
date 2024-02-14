import JsPDF from 'jspdf';
import scaleDown from "../utils/scale-down.js";
import {mmDpiFactor} from "../utils/mm-dpi-factor.js";

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 * @param {string} logo base64 picture
 */
export default (doc, logo) => {
    if (!logo) {
        return;
    }

    const startY = 2;
    const pageWidth = doc.internal.pageSize.width;
    const pageWidthInPx = Math.round((pageWidth - 4) * mmDpiFactor);  // minus 4mm, 2mm spacing for each side
    const maxHeightLogo = 20; // in mm from first startY for the productName
    const maxHeightLogoInPx = Math.round((maxHeightLogo -7) * mmDpiFactor); // minus 6mm, for spacing to top and 5 for better spacing and calculation at all
    const pageCenterX = pageWidth / 2;

    let imageProps;

    try {
        imageProps = doc.getImageProperties(logo);
    } catch (error) {
        console.warn('Error getting image properties for logo', error);
        return;
    }

    const dimensions = scaleDown(imageProps.width, imageProps.height, pageWidthInPx, maxHeightLogoInPx);

    const x = pageCenterX - dimensions.width / 2;

    doc.addImage(logo, imageProps.fileType, x, startY, dimensions.width, dimensions.height);
}

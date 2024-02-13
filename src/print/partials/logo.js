import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
 * @param {string} logo base64 picture
 * @param {number} pagesCount
 * @param {number} maxHeightLogo
 */
export default (doc, logo, pagesCount, maxHeightLogo) => {
    if (!logo) {
        return;
    }

    const startY = 2;
    const pageWidth = doc.internal.pageSize.width;
    const mmDpiFactor = 72 / 25.4; // dpi / mm
    const pageWidthInPx = Math.round((pageWidth - 4) * mmDpiFactor);  // minus 4mm, 2mm spacing for each side
    const maxHeightLogoInPx = Math.round((maxHeightLogo -7) * mmDpiFactor); // minus 6mm, for spacing to top and 5 for better spacing and calculation at all
    const pageCenterX = pageWidth / 2;
    let n;

    const imageProps = doc.getImageProperties(logo);
    let width = imageProps.width;
    let height = imageProps.height;

    if (width > pageWidthInPx) {
        const ratio = width / pageWidthInPx;
        width = width / ratio;
        height = height / ratio;
    }

    if (height > maxHeightLogoInPx) {
        const ratio = height / maxHeightLogoInPx;
        width = width / ratio;
        height = height / ratio;
    }

    width = width / mmDpiFactor;
    height = height / mmDpiFactor;

    const x = pageCenterX - width / 2;

    n = 0;

    while (n < pagesCount) {
        n++;

        doc.setPage(n);

        doc.addImage(logo, imageProps.fileType, x, startY, width, height);
    }
}

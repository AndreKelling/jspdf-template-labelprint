import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
 * @param {PrintData} printData
 * @param {number} pagesCount
 * @param {number} maxHeightLogo
 */
export default (doc, printData, pagesCount, maxHeightLogo) => {
    const pageWidth = doc.internal.pageSize.width;
    const mmDpiFactor = 72 / 25.4; // dpi / mm
    const pageWidthInPx = Math.round((pageWidth - 4) * mmDpiFactor);  // minus 4mm, 2mm spacing for each side
    const maxHeightLogoInPx = Math.round((maxHeightLogo -7) * mmDpiFactor); // minus 6mm, for spacing to top and 5 for better spacing and calculation at all
    const pageCenterX = pageWidth / 2;
    let n;
    doc.setProperties({})

    if (!printData.logo) {
        return;
    }

    const imageProps = doc.getImageProperties(printData.logo);
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

        doc.addImage(printData.logo, imageProps.fileType, x, 2, width, height);
    }
}

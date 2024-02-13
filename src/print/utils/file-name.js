/**
 * If we have a multi-page printout, we just want the product name.
 * If it's a single-page printout, we want the product name and colour.
 *
 * @param {number} arrLength
 * @param {PrintData} firstPrintData
 * @returns {string}
 */
export default (arrLength, firstPrintData) => {
    const productNameForFile = fileNameSafe(firstPrintData.productName);

    const isMultiPage = arrLength > 1;
    if (isMultiPage) {
        return `${productNameForFile}+${fileNameSafe(firstPrintData.productCode)}`;
    }

    const productColourForFile = fileNameSafe(firstPrintData.productColour);

    return `${productNameForFile}+${productColourForFile}+${fileNameSafe(firstPrintData.productId)}`;
}

/**
 * @param {string} str
 * @link https://stackoverflow.com/questions/8485027/javascript-url-safe-filename-safe-string but with hyphens and dots allowed here
 */
const fileNameSafe = (str) => (
    str.replace(/[^a-z0-9-.]/gi, '_').toLowerCase()
)

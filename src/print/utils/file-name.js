/**
 * If we have a multi-page printout, we just want the product name.
 * If it's a single-page printout, we want the product name and colour.
 *
 * @param {number} arrLength
 * @param {string} productName
 * @param {string} productColour
 * @returns {string}
 */
export default (arrLength, productName, productColour) => {
    const productNameForFile = fileNameSafe(productName);

    if (arrLength > 1) {
        return productNameForFile
    }

    const productColourForFile = fileNameSafe(productColour);

    return `${productNameForFile}-${productColourForFile}`;
}

/**
 * @param {string} str
 * @link https://stackoverflow.com/questions/8485027/javascript-url-safe-filename-safe-string
 */
const fileNameSafe = (str) => (
    str.replace(/[^a-z0-9]/gi, '_').toLowerCase()
)

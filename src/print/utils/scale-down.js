import {mmDpiFactor} from "./mm-dpi-factor.js";

/**
 * Pictures need to get scaled down if they are too huge and would exceed the expected area of printing.
 * Too small images can get printed.
 *
 * @param {number} width
 * @param {number} height
 * @param {number} targetWidth
 * @param {number} targetHeight
 * @returns {{width: number, height: number}}
 */
export default (width, height, targetWidth, targetHeight) => {
    if (width > targetWidth) {
        const ratio = width / targetWidth;
        width = width / ratio;
        height = height / ratio;
    }

    if (height > targetHeight) {
        const ratio = height / targetHeight;
        width = width / ratio;
        height = height / ratio;
    }

    width = width / mmDpiFactor;
    height = height / mmDpiFactor;

    return {
        width,
        height
    }
}

//import jsPDF from '../../node_modules/jspdf-yworks/dist/jspdf.debug';
import jsPDF from 'jspdf';
import 'svg2pdf.js';
import fetchSvg from './utils/fetchSvg';
import addressSender from './partials/addressSender';
import addressCustomer from './partials/addressCustomer';
import heading from './partials/titles';
import text from './partials/text';
import footer from './partials/footer';
import logo from "./partials/logo";
import titles from "./partials/titles";
import settings from "./partials/settings";

/**
 *
 * @typedef {Object} PrintData
 * @property {string} logo base64 image
 * @property {string} productName
 * @property {string} productColour
 * @property {string[]} bulletPoints
 * @property {string} productCode
 * @property {string} qrCode base64 image
 * @property {string} productId
 */

/**
 *
 * @param {PrintData[]} printData
 * @returns {Promise<void>}
 */
export default async (printData) => {
    const options = {
        orientation: 'p',
        format: [36, 89]
    }
    const doc = new jsPDF(options);
console.log('printData', printData);

    settings(doc);

    let startY = 20;
    const maxHeightLogo = startY;

    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const pageCenterX = pageWidth / 2;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    let startX = 0;
    const spaceBetweenWords = 8;

    titles(doc, printData[0], startY, pageWidth);

    // TODO qr code as plain code svg in here?
    // const qrCodeSvgLoaded = fetchSvg('img/address-bar.svg').then(({svg, width, height}) => {
    //     doc.setPage(1);
    //
    //     const xOffset = 225;
    //     const scale = 0.45; // scaling for finer details
    //
    //     doc.svg(svg, {
    //         x: xOffset,
    //         y: 136,
    //         width: width * scale,
    //         height: height * scale
    //     });
    // });

    // multipage
    // doc.addPage();

    // <><>><><>><>><><><><><>>><><<><><><><>
    // REPEATED PAGE COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    const pagesCount = doc.internal.getNumberOfPages();

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Logo

    logo(doc, printData[0], pagesCount, maxHeightLogo);


    // <><>><><>><>><><><><><>>><><<><><><><>
    // PRINT
    // <><>><><>><>><><><><><>>><><<><><><><>

   //  logoLoaded.then(() => {
        doc.save("dymo-label.pdf");
   //  });
}

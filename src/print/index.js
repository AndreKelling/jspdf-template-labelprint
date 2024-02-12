//import jsPDF from '../../node_modules/jspdf-yworks/dist/jspdf.debug';
import jsPDF from 'jspdf';
import 'svg2pdf.js';
import fetchSvg from './utils/fetchSvg';
import addressSender from './partials/addressSender';
import addressCustomer from './partials/addressCustomer';
import heading from './partials/heading';
import text from './partials/text';
import footer from './partials/footer';
import logo from "./partials/logo";

/**
 *
 * @param {Array.<Object>} printData
 * @param printData.logo
 * @param printData.productName
 * @param printData.productColour
 * @param printData.bulletPoints
 * @param printData.productCode
 * @param printData.qrCode
 * @param printData.productId
 * @returns {Promise<void>}
 */
export default async (printData) => {
    const options = {
        orientation: 'p',
        format: [36, 89]
    }
    const doc = new jsPDF(options);
console.log('printData', printData);
    doc.vars = {};
    doc.vars.fontFamily = 'helvetica';
    doc.vars.fontWeightBold = 'bold';
    doc.vars.fontWeightNormal = 'normal';

    doc.setFont(doc.vars.fontFamily);
console.log(doc.getFontList() )
    // <><>><><>><>><><><><><>>><><<><><><><>
    // SETTINGS
    // <><>><><>><>><><><><><>>><><<><><><><>

    const fontSizes = {
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:10,
        SmallFontSize:9
    };
    const lineSpacing = 12;

    let startY = 130; // bit more then 45mm

    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const pageCenterX = pageWidth / 2;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>



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

    const pageNr = doc.internal.getNumberOfPages();


    // <><>><><>><>><><><><><>>><><<><><><><>
    // Logo

    // const logoLoaded = logo(doc, printData, pageNr);


    // <><>><><>><>><><><><><>>><><<><><><><>
    // PRINT
    // <><>><><>><>><><><><><>>><><<><><><><>

    //qrCodeSvgLoaded.then(() => {
        doc.save("dymo-label.pdf");
    //});
}

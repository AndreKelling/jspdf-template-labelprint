//import jsPDF from '../../node_modules/jspdf-yworks/dist/jspdf.debug';
import jsPDF from 'jspdf';
import 'svg2pdf.js';
import fetchSvg from './utils/fetchSvg';
import addressSender from './partials/addressSender';
import addressCustomer from './partials/addressCustomer';
import heading from './partials/heading';
import table from './partials/table';
import totals from './partials/totals';
import text from './partials/text';
import footer from './partials/footer';

export default async (printData) => {
    const doc = new jsPDF('p', 'pt');
    console.log(doc.getFontList());

    doc.vars = {};
    doc.vars.fontFamily = 'helvetica';
    doc.vars.fontWeightBold = 'bold';
    doc.vars.fontWeightNormal = 'normal';

    doc.setFont(doc.vars.fontFamily);

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

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Sender's address

    startY = addressSender(doc, printData.addressSender, startY, fontSizes.NormalFontSize, lineSpacing);

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
    // <><>><><>><>><><><><><>>><><<><><><><>
    // Customer address

    startY += 10;
    startY = addressCustomer(doc, printData.address, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // INVOICE DATA
    // <><>><><>><>><><><><><>>><><<><><><><>

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Invoicenumber, -date and subject

    startY = heading(doc, printData, startY, fontSizes, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Table with items

    startY = await table(doc, printData, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Totals

    startY = await totals(doc, printData, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Text

    await text(doc, printData.invoice.text, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Footer

    footer(doc, printData, fontSizes.SmallFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // REPEATED PAGE COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    const pageNr = doc.internal.getNumberOfPages();

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Fold Marks

    const foldX = 12;
    const foldMarksY = [288, 411, 585];
    let n = 0;

    while (n < pageNr) {
        n++;

        doc.setPage(n);

        doc.setDrawColor(157, 183, 128);
        doc.setLineWidth(0.5);

        foldMarksY.map(valueY => {
            doc.line(foldX, valueY, foldX + 23, valueY);
        });
    }

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Page Numbers

    if (pageNr > 1) {
        n = 0;
        doc.setFontSize(fontSizes.SmallFontSize);

        while (n < pageNr) {
            n++;

            doc.setPage(n);

            doc.text(n + ' / ' + pageNr, pageCenterX, pageHeight - 20, 'center');
        }
    }

    // <><>><><>><>><><><><><>>><><<><><><><>
    // PRINT
    // <><>><><>><>><><><><><>>><><<><><><><>

    //qrCodeSvgLoaded.then(() => {
        doc.save("dymo-label.pdf");
    //});
}

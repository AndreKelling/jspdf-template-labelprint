import JsPDF from 'jspdf';

/**
 * JsPDF import just for typing!
 *
 * @param {JsPDF} doc
 */
export default (doc) => {
    doc.vars = {};
    doc.vars.fontFamily = 'helvetica';
    doc.vars.fontWeightBold = 'bold';
    doc.vars.fontWeightNormal = 'normal';

    doc.setFont(doc.vars.fontFamily);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // SETTINGS
    // <><>><><>><>><><><><><>>><><<><><><><>

    doc.vars.startY = {
        logo:1,
        titles:14,
        bulletPoints:30,
        productCode:52,
        qrCode:50,
        productId:67.5
    };

    doc.vars.fontSizes = {
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:9,
        SmallFontSize:8,
        IdFontSize:26
    };
    doc.vars.lineSpacing = 5;
}

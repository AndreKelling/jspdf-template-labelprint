import jsPDF from 'jspdf';

/**
 * jsPDF import just for typing!
 *
 * @param {jsPDF} doc
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

    doc.vars.fontSizes = {
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:9,
        SmallFontSize:8,
        IdFontSize:18
    };
    doc.vars.lineSpacing = 5;
}

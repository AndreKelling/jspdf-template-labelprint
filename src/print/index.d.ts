import JsPDF from "jspdf";

declare interface PrintData {
    logo: string,
    productName: string,
    productColour: string,
    bulletPoints: string[],
    productCode: string,
    qrCode: string,
    productId: string
}

export declare function printPDF(printData: PrintData[]): JsPDF;

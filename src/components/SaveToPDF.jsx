import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const SaveToPDF = (contentRef) => {
  const generatePDF = () => {
    const input = contentRef.current;
    html2canvas(input, { scale: 4 }) // Adjust scale if needed
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height], // Set the PDF format to match the canvas
        });

        // Adjust dimensions to ensure everything fits
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(
          pageWidth / canvas.width,
          pageHeight / canvas.height,
        );

        const imgWidth = canvas.width * ratio;
        const imgHeight = canvas.height * ratio;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        const pdfOutput = pdf.output("bloburl");
        window.open(pdfOutput, "_blank");
      })
      .catch((err) => console.log(err));
  };

  return generatePDF;
};

export default SaveToPDF;

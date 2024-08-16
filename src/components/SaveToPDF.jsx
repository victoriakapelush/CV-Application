import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const SaveToPDF = (contentRef) => {
    const generatePDF = () => {
        const input = contentRef.current;
        html2canvas(input, { scale: 4 })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px', 
                    format: [canvas.width, canvas.height], 
                });
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                const pdfOutput = pdf.output('bloburl');
                window.open(pdfOutput, '_blank');
            })
            .catch((err) => console.log(err));
    };

    return generatePDF;
};

export default SaveToPDF;

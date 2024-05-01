import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Overview } from './Overview'; // import the Overview component

type OverviewToPDFProps = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

export function OverviewToPDF(props: OverviewToPDFProps) {
  const overviewRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (overviewRef.current) {
      const canvas = await html2canvas(overviewRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height); // Fix: Use the correct number of arguments
      pdf.save('download.pdf');
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'red' }} ref={overviewRef}>
        <Overview {...props} updateFields={() => {}} />
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

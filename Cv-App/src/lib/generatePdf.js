import jsPDF from "jspdf";
import "jspdf-autotable";

export function generatePDF(generalInfo, educationalInfo, workInfo) {
  const doc = new jsPDF();


  doc.setFont("helvetica");


  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text(generalInfo.name, 20, 20);


  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(
    `${generalInfo.email} | ${generalInfo.phone} | ${generalInfo.address}`,
    20,
    30
  );


  const addSection = (title, yPosition) => {
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(title, 20, yPosition);
    doc.setLineWidth(0.5);
    doc.line(20, yPosition + 1, 190, yPosition + 1);
  };

  
  addSection("Personal Information", 40);
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(`Occupation: ${generalInfo.occupation}`, 20, 50);
  doc.text(`Birth Date: ${generalInfo.birthDate}`, 20, 55);

  // Work Experience
  addSection("Work Experience", 65);
  doc.setFontSize(12);
  doc.text(workInfo.company, 20, 75);
  doc.setFontSize(10);
  doc.text(
    `${workInfo.position} (${workInfo.startDate} - ${workInfo.endDate})`,
    20,
    80
  );
  doc.setFontSize(9);
  const descriptionLines = doc.splitTextToSize(workInfo.description, 170);
  doc.text(descriptionLines, 20, 85);

  // Education
  addSection("Education", 105);
  doc.setFontSize(12);
  doc.text(educationalInfo.institution, 20, 115);
  doc.setFontSize(10);
  doc.text(
    `${educationalInfo.degree} (${educationalInfo.startDate} - ${educationalInfo.endDate})`,
    20,
    120
  );
  doc.setFontSize(9);
  const educationDescriptionLines = doc.splitTextToSize(
    educationalInfo.description,
    170
  );
  doc.text(educationDescriptionLines, 20, 125);

 
  doc.save("resume.pdf");
}

export default generatePDF;

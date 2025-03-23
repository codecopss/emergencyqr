import React, { useState, useRef, useEffect } from "react";
import QRDisplay from "./QRDisplay";
import Form from "./Form";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function QRGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    bloodType: "",
    allergies: "",
    medicalConditions: "",
  });

  const [qrData, setQrData] = useState("");
  const qrRef = useRef(null);

  useEffect(() => {
    return () => localStorage.removeItem("emergencyData");
  }, []);

  const generateQR = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.contact) return;

    const qrString = `Name: ${formData.name}\nContact: ${formData.contact}\nBlood Type: ${formData.bloodType || "N/A"}\nAllergies: ${formData.allergies || "N/A"}\nMedical Conditions: ${formData.medicalConditions || "N/A"}`;

    setQrData(qrString);
    localStorage.setItem("emergencyData", qrString);
  };

  const downloadPDF = () => {
    if (!qrData || !qrRef.current) return;

    html2canvas(qrRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.setFontSize(18);
      pdf.text("Emergency QR Code", 20, 20);
      pdf.addImage(imgData, "PNG", 40, 30, 130, 130);
      pdf.save("Emergency_QR_Code.pdf");
    });
  };

  return (
    <div className="qr-container">
      {/* Form Section */}
      <div className="form-section">
        <Form formData={formData} setFormData={setFormData} onGenerate={generateQR} />
      </div>

      {/* QR Code Section - Only show when QR is generated */}
      {qrData && (
        <div className="qr-section">
          <h3>Generated QR Code</h3>
          <div ref={qrRef} className="qr-box">
            <QRDisplay qrData={qrData} />
          </div>
          <button className="download-btn" onClick={downloadPDF}>Download QR Code as PDF</button>
        </div>
      )}
    </div>
  );
}

export default QRGenerator;

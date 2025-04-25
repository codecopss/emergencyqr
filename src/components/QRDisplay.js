import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRDisplay({ qrData }) {
  return (
    <div>
      <h2>Your Emergency QR Code</h2>
      <QRCodeCanvas value={qrData} size={200} />
      <p>Scan this QR to access emergency details.</p>
    </div>
  );
}

export default QRDisplay;

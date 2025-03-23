import React from "react";

function Form({ formData, setFormData, onGenerate }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      {/* Informational Text */}
      <div className="form-info">
        <h2>Emergency Contact QR Generator</h2>
        <p>
          Easily generate a QR code containing your essential emergency details. 
          This QR code can be scanned by first responders to access your emergency contact information, blood type, and medical conditions instantly.
        </p>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="form-input"
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Emergency Contact" 
          value={formData.contact} 
          onChange={handleChange} 
          className="form-input"
        />
        <input 
          type="text" 
          name="bloodType" 
          placeholder="Blood Type" 
          value={formData.bloodType} 
          onChange={handleChange} 
          className="form-input"
        />
        <input 
          type="text" 
          name="allergies" 
          placeholder="Allergies" 
          value={formData.allergies} 
          onChange={handleChange} 
          className="form-input"
        />
        <input 
          type="text" 
          name="medicalConditions" 
          placeholder="Medical Conditions" 
          value={formData.medicalConditions} 
          onChange={handleChange} 
          className="form-input"
        />
        <button onClick={onGenerate} className="form-button">Generate QR Code</button>
      </div>
    </div>
  );
}

export default Form;

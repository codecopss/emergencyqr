import React from "react";

function Form({ formData, setFormData, onGenerate }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(e); // Passing the event to QRGenerator
  };

  return (
    <div className="form-wrapper">
      <div className="form-info">
        <h2>Emergency Contact QR Generator</h2>
        <p>
          Easily generate a QR code containing your essential emergency details.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Emergency Contact"
          value={formData.contact}
          onChange={handleChange}
          className="form-input"
          required
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
        <button type="submit" className="form-button">
          Generate QR Code
        </button>
      </form>
    </div>
  );
}

export default Form;

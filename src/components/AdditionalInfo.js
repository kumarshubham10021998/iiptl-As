import React from 'react';


const AdditionalInfo = ({ formData, handleInputChange }) => {
    return (
        <div className="form-section">
            <div className="form-group">
                <label htmlFor="additionalField1">Additional Field 1:</label>
                <input type="text" id="additionalField1" name="additionalField1" value={formData.additionalField1} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label htmlFor="additionalField2">Additional Field 2:</label>
                <input type="text" id="additionalField2" name="additionalField2" value={formData.additionalField2} onChange={handleInputChange} />
            </div>
            {/* Add more fields as necessary */}
        </div>
    );
};

export default AdditionalInfo;

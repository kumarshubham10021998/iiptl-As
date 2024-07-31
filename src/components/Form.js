import React, { useState } from 'react';
import './Form.css';
import data from '../data'; // Import the data
import AdditionalInfo from './AdditionalInfo';
const Form = () => {
    const [activeTab, setActiveTab] = useState('main');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [formData, setFormData] = useState(data[0]);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle dropdown selection change
    const handleDataChange = (e) => {
        const index = parseInt(e.target.value, 10);
        setSelectedIndex(index);
        setFormData(data[index]);
    };

    return (
        <div className="form-container">
            <div className="tab-buttons">
                <button onClick={() => setActiveTab('main')} className={activeTab === 'main' ? 'active' : ''}>Main</button>
                <button onClick={() => setActiveTab('additionalInfo')} className={activeTab === 'additionalInfo' ? 'active' : ''}>Additional Info</button>
                <button onClick={() => setActiveTab('vendorBanker')} className={activeTab === 'vendorBanker' ? 'active' : ''}>Vendor's Banker</button>
                <button onClick={() => setActiveTab('ifscDetail')} className={activeTab === 'ifscDetail' ? 'active' : ''}>IFSC Detail</button>
                <button onClick={() => setActiveTab('gst')} className={activeTab === 'gst' ? 'active' : ''}>GST</button>
            </div>

            {activeTab === 'main' && (
                <div>
                    <div className="data-selector">
                        <label htmlFor="dataSelect">Select Data:</label>
                        <select id="dataSelect" value={selectedIndex} onChange={handleDataChange}>
                            {data.map((item, index) => (
                                <option key={index} value={index}>
                                    {item.name} (Code: {item.code})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-section">
                        <div className="checkbox-group">
                            <label>
                                <input type="checkbox" name="rating" checked={formData.rating} onChange={handleInputChange} />
                                Rating
                            </label>
                            <label>
                                <input type="checkbox" name="approved" checked={formData.approved} onChange={handleInputChange} />
                                Approved
                            </label>
                            <label>
                                <input type="checkbox" name="gtaTransport" checked={formData.gtaTransport} onChange={handleInputChange} />
                                GTA/Transport
                            </label>
                            <label>
                                <input type="checkbox" name="securityService" checked={formData.securityService} onChange={handleInputChange} />
                                Security Service
                            </label>
                            <label>
                                <input type="checkbox" name="legal" checked={formData.legal} onChange={handleInputChange} />
                                Legal
                            </label>
                            <label>
                                <input type="checkbox" name="travelAgency" checked={formData.travelAgency} onChange={handleInputChange} />
                                Travel Agency
                            </label>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="code">Code:</label>
                                <input type="text" id="code" name="code" value={formData.code} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="district">District:</label>
                                <input type="text" id="district" name="district" value={formData.district} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="state">State:</label>
                                <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="zone">Zone:</label>
                                <input type="text" id="zone" name="zone" value={formData.zone} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="country">Country:</label>
                                <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="region">Region:</label>
                                <input type="text" id="region" name="region" value={formData.region} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="pinCode">Pin Code:</label>
                                <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="turnover">Turnover (Rs):</label>
                                <input type="text" id="turnover" name="turnover" value={formData.turnover} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="vendorType">Vendor Type:</label>
                            <select id="vendorType" name="vendorType" value={formData.vendorType} onChange={handleInputChange}>
                                <option value="">Select Vendor Type</option>
                                <option value="Manufacturer">Manufacturer</option>
                                <option value="Wholesaler">Wholesaler</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Distributor">Distributor</option>
                            </select>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="vendorLegalName">Vendor Legal Name:</label>
                                <input type="text" id="vendorLegalName" name="vendorLegalName" value={formData.vendorLegalName} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="distance">Distance (Km):</label>
                                <input type="text" id="distance" name="distance" value={formData.distance} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
             {activeTab === 'additionalInfo' && (
                <AdditionalInfo formData={formData} handleInputChange={handleInputChange} />
            )}

            {/* Additional sections for other tabs */}

            {/* Additional sections for other tabs */}
        </div>
    );
};

export default Form;
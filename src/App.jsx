import React, { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    province: "",
    diocese: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">
                  1
                </span>
                NAME
              </h3>
              <input
                type="text"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">
                  2
                </span>
                PROVINCE
              </h3>
              <input
                type="text"
                className="input"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
            </div>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">
                  3
                </span>
                DIOCESE
              </h3>
              <input
                type="text"
                className="input"
                name="diocese"
                value={formData.diocese}
                onChange={handleChange}
              />
            </div>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">
                  4
                </span>
                GENDER
              </h3>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                <p>Male</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                <p>Female</p>
              </label>
            </div>
          </>
        );
      case 2:
        return (
          <>
          <h1 className="sub-header">ROOMS AVAILABLE</h1>
          <div className="box-shadow">
            <h3 className="text">
              <span className="span">
                4
              </span>
              question5
            </h3>
            <label className="flex">
              <input
                type="radio"
                className="input"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <p>Single room with single Bed N5,000 per night</p>
            </label>
            <label className="flex">
              <input
                type="radio"
                className="input"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <p>Single room with double bed N8,000 per night</p>
            </label>
            <label className="flex">
              <input
                type="radio"
                className="input"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <p>Suit N12,000 per night</p>
            </label>
          </div>
          </>
         
        );
      case 3:
        return <div>
          <h3 className="sub-header">Two person can be pair in a room. Please which is suitable for you. Either paired or single
</h3>
              <div className="box-shadow">
              <h3 className="text">
                <span className="span">
                  4
                </span>
                Paired or Single
              </h3>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                <p>
SINGLE</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                <p>PAIRED</p>
              </label>
            </div>
        </div>;
      case 4:
        return <div className="submit">
          <h3 className="sub-header">Dead for payment is 7th June 2024. Payment details: Account number: 3074719432. Account name: Catholic Archdiocese of Kaduna PST Project Account. Bank: First Bank</h3>
 <div className="shadow">
 <p>7.Please send your Prove of payment along with your filled form</p>
 </div>
 <div className="shadow">
 <p>8. All filled form should be send to this Whatsapp number: 08099558584</p>
 </div>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1 className="header">Accommodation Booking</h1>
      <p style={{ borderBottom: "1px solid #2244FF", paddingBottom: "10px" }}>
        CcRN ACCOMMODATION BOOKING FORM
      </p>
      <form className="container" onSubmit={handleSubmit}>
        {renderFormStep()}
        <div style={{ marginTop: "20px", gap: '5px' }} className="flex">
          {step !== 1 && <button onClick={handlePrev} className="button">Previous</button>}
          {step !== 4 ? (
            <button onClick={handleNext} className="button">Next</button>
          ) : (
            <button type="submit" className="completed">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;

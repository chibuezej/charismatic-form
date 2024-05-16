/* eslint-disable no-case-declarations */
import { useState } from "react";
import "./App.css";
import { app } from "./firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: "",
    province: "",
    diocese: "",
    gender: "",
    room: "",
    pairing: "",
  });
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.value,
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let hasError = false; 
    for (const key in formData) {
      if (formData[key] === "") {
        error[key] = `Please fill in ${key}`;
        hasError = true; 
      }
    }
    if (hasError) {
      setError(error);
      return;
    }
  
    const db = getFirestore(app);
    const formDataRef = collection(db, "formData");
    addDoc(formDataRef, formData)
      .then(() => {
        toast("Document written successfully!");
        setStep(5);
      })
      .catch((error) => {
        toast.error("Error adding document: ", error);
  
      });
  };
  
  const validateForm = () => {
    switch (step) {
      case 1:
        if (formData.name === "" || formData.province === "" || formData.diocese === "" || formData.gender === "") {
          toast.error("Please fill in all required fields.");
          return false;
        }
        break;
      case 2:
        if (formData.room === "") {
          toast.error("Please select a room option.");
          return false;
        }
        break;
      case 3:
        if (formData.pairing === "") {
          toast.error("Please select a pairing option.");
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };
  
  

  const handleNext = () => {
    if (validateForm()) {
      setStep((prevStep) => prevStep + 1);
    }
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
                <span className="span">1</span>
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
                <span className="span">2</span>
                PROVINCE
              </h3>
              <input
                type="text"
                className="input"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">3</span>
                DIOCESE
              </h3>
              <input
                type="text"
                className="input"
                name="diocese"
                value={formData.diocese}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">4</span>
                GENDER
              </h3>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  required
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
                  required
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
                <span className="span">4</span>
                question5
              </h3>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="room"
                  value="single-bed"
                  onChange={handleChange}
                  required
                />
                <p>Single room with single Bed N5,000 per night</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="room"
                  value="double-bed"
                  onChange={handleChange}
                  required
                />
                <p>Single room with double bed N8,000 per night</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="room"
                  value="siut"
                  onChange={handleChange}
                  required
                />
                <p>Suit N12,000 per night</p>
              </label>
            </div>
          </>
        );
      case 3:
        return (
          <div>
            <h3 className="sub-header">
              Two person can be pair in a room. Please which is suitable for
              you. Either paired or single
            </h3>
            <div className="box-shadow">
              <h3 className="text">
                <span className="span">4</span>
                Paired or Single
              </h3>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="pairing"
                  value="single"
                  onChange={handleChange}
                  required
                />
                <p>SINGLE</p>
              </label>
              <label className="flex">
                <input
                  type="radio"
                  className="input"
                  name="pairing"
                  value="paired"
                  onChange={handleChange}
                  required
                />
                <p>PAIRED</p>
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="submit">
            <h3 className="sub-header">
              Dead for payment is 7th June 2024. Payment details: Account
              number: 3095414831. Account name: Fernando M Ufot Bank: First Bank
            </h3>
            <div className="shadow">
              <p>
                7.Please send your Prove of payment along with your filled form
              </p>
            </div>
            <div className="shadow">
              <p>
                8. All filled form should be send to this Whatsapp number:
                +234 809 955 8584
              </p>
            </div>
          </div>
        );
        case 5:
          const whatsappMessage = `Name: ${formData.name}, Province: ${formData.province}, Diocese: ${formData.diocese}, Gender: ${formData.gender}, Room Option: ${formData.room}, Paired Option: ${formData.pairing},`;
          const encodedMessage = encodeURIComponent(whatsappMessage);
          // Navigate to the WhatsApp URL with the encoded message
          window.location.href = `https://wa.me/08144704309?text=${encodedMessage}`; 
          return (
            <div className="submit">
              <h3 className="header">Submitted Information</h3>
              <p className="sub-header">Name: {formData.name}</p>
              <p className="sub-header">Province: {formData.province}</p>
              <p className="sub-header">Diocese: {formData.diocese}</p>
              <p className="sub-header">Gender: {formData.gender}</p>
              <p className="sub-header">Room Option: {formData.room}</p>
              <p className="sub-header">Paired Option: {formData.pairing}</p>
           <h1 style={{color: 'green', fontSize: '19px', fontWeight:'bold'}}>Data Added Successfully</h1>
              <p style={{color: 'red', fontSize: '15px', fontWeight:'bold'}}>Redirecting to WhatsApp...</p>
            </div>
          );        
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
        <div style={{ marginTop: "20px", gap: "5px" }} className="flex">
          {step !== 1 && (
            <button onClick={handlePrev} className="button">
              Previous
            </button>
          )}
          <button className="button" onClick={handleNext}>
            {step !== 4 ? "Next" : "Submit"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;

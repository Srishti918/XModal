import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ username: "", email: "", dob: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    
     if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }
   
     if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
     
     if (new Date(formData.dob) > new Date()) {
      alert("Invalid Date of Birth. Date of birth cannot be in the future.");
      return false;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData({ username: "", email: "", dob: "", phone: "" });
      onClose();
    }
  };

  return (
    
    isOpen && (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <br/>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
              
              {errors.username && <p>{errors.username}</p>}
            </label>
            <label>
              Email:
              <br/>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p>{errors.email}</p>}
            </label>
            <label>
              Phone Number:
              <br/>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </label>
            <label>
              Date of Birth:
              <br/>
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                required
              />
              {errors.dob && <p>{errors.dob}</p>}
            </label>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      
    )
  );
  
};

export default Modal
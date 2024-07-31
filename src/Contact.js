import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last Name is required.";
    }
    if (!formData.budget) {
      newErrors.budget = "Budget is required .";
    }
    if (!formData.description) {
      newErrors.description = "Description is required .";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const data = {
        fname: formData.name,
        lname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        description: formData.description,
      };
      axios
        .post(`http://3.7.81.243:3253/api/contact/send`, data)
        .then((response) => {
          console.log(response);
          setFormData({
            name: "",
            lastname: "",
            email: "",
            phone: "",
            budget: "",
            description: "",
          })
          if(response.data.success== true){
          alert(response.data.message)
        }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="contact-form-container">
        <p>
          {" "}
          ipsum dolor sit amet, consectetur sadipiscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p className="error-msg">{errors.lastname}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
            </select>
            {errors.budget && <p className="error-msg">{errors.budget}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={formData.description}
              onChange={handleChange}
              name="description"
            />
            {errors.description && (
              <p className="error-msg">{errors.description}</p>
            )}
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
          <ToastContainer />
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;

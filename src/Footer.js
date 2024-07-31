import React, { useEffect, useState } from "react";
import axios from "axios";
function Footer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://3.7.81.243:3253/api/settings/fetch-frontend-details")
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="footer-main">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section tagline">
              <p className="ftext">
                Tagline will go here. Lorem ipsum dolor sit amet...
              </p>
              <a className="email-text" href={data.inquiry_mail}>
                {data.inquiry_mail}
              </a>
            </div>
            {/* <div className=" footer-custom-flex"> */}
            <div className="footer-section address">
              <p className="custom-margin">Address</p>
              <p>{data.address}</p>
            </div>
            <div className="footer-section contacts">
              <p className="custom-margin">Contacts</p>
              <a href={data.contact_mail}>{data.contact_mail}</a>
              <p>{data.contact_no}</p>
            </div>
            {/* </div> */}
          </div>
          <div className="footer-bottom">
            <img
              src="Images/Bitmaplogo.png"
              alt="Logo"
              className="footer-logo"
            />
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#blogs">Blogs</a>
              <a href="#contact">Contact</a>
              <a href="#services">Services</a>
            </div>
            <div className="footer-copy">
              <p>© 2022. All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

import React from 'react'

function Header() {
  return (
    <>
      <header className="header-main">
        <img src="Images/_Layer_.png" alt="Background" />
        <div className="header-flex">
          <div className="logo">
            <a>
              <img src="Images/Bitmaplogo.png" alt="Logo" />
            </a>
          </div>
          <div className="navber">
            <ul>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>Case Studies</a>
              </li>
              <li className="contect">
                <a>CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

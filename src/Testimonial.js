import React from 'react'

function Testimonial() {
  return (
    <>
      <div className="testimonials-section">
        <img
          className="testimonials-bg"
          src="Images/Rectangletestimonial-bg.png"
        ></img>
        <h1>Testimonials</h1>
        <div className="testimonials-data-flex">
          <div className="single-testimonial">
            <div className="single-testimonial-data">
              <img src="Images/Pattern-fill-8f708492fba54a97e4c0f745af907342user-profie.png"></img>
              <h6>Josh brollins</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </p>
          </div>
          <div className="single-testimonial">
            <div className="single-testimonial-data">
              <img src="Images/Pattern-fill-8f708492fba54a97e4c0f745af907342user-profie.png"></img>
              <h6>Josh brollins</h6>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial;

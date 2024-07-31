import React from 'react'

function Section() {
  return (
    <>
         <section>
        <div className="section-main">
          <div className="section-text">
            <h1>How much could you save?</h1>
            <p>
              Answer the questions below to get a fixed price quotation for us
              to take your accountancy hassles away from you.
            </p>
          </div>
          <div className="section-box">
            <h1>Is your turnover expected to be more than £85k?</h1>
            <div className="section-btn">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <p>Takes less than 30 seconds</p>
        </div>
      </section>
    </>
  )
}

export default Section

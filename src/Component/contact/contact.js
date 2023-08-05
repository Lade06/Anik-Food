import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 text-light text-center">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-md-4"></div>
          <div className="col-md-2 box text-center pt-3">
            <h6>Contact Phone Number</h6>
            <p>
              +234 8042637519 <br />
              +234 8177442190 <br />
              +1 65147594
            </p>
            {/* <p>+234 8177442190</p>
    <p>+1 65147594</p> */}
          </div>

          <div className="col-md-2 box text-center pt-3">
            <h6>Email Address</h6>
            <p>
              anikfoods@yahoo.com
              <br />
              anik64@gmail.com
            </p>
            {/* <p>anik64@gmail.com</p> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5 text-light text-center">
            <h1>Locate the nearest branch near you </h1>
            <input
              type="text"
              id=""
              name="input"
              placeholder="what are you craving"
              className="text mt-4"
            />
          </div>
        </div> 
        <div className="col-md-4"></div>

        <div className="row mt-5">
            <div className="col-md-4"></div>

        <div className="col-md-4 frame">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Abeokuta&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

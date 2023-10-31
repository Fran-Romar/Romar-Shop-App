import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import "../css/ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cadena = `${name}, Thank you for contacting us \n Email: ${email} \n Message: ${message}`;
    alert(cadena);
  };

  return (
    <div className="container">
      <Row className="form-container">
        <Col lg="7" className="p-0">
          <img className="form-img" src="contact-banner.jpg" />
        </Col>
        <Col lg="5" className="p-0">
          <h4 className="productos-title mt-0 mb-0">
            <i className="fa fa-envelope-o"></i> CONTACT US
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">Email address</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="text">Message</label>
              <br />
              <textarea
                name="text"
                id="text"
                cols="32"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

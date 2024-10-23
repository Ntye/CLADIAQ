// import {useState} from "react";
// import "./styles/ContactForm.css"
//
// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     theme: '',
//     message: ''
//   });
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };
//
//   return (
//     <div className="contact-form-container">
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <h2 className="lato-extra-bold contact-us-title">Contact Us</h2>
//
//         <label htmlFor="name" className="contact-form-label lato-semibold">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your name"
//           required
//         />
//
//         <label htmlFor="email" className="contact-form-label lato-semibold">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your email"
//           required
//         />
//
//         <label htmlFor="theme" className="contact-form-label lato-semibold">
//           Theme
//         </label>
//         <input
//           type="text"
//           id="theme"
//           name="theme"
//           value={formData.theme}
//           onChange={handleChange}
//           placeholder="Subject"
//           required
//         />
//
//         <label htmlFor="message" className="contact-form-label lato-semibold">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your message"
//           required
//         />
//
//         <button type="submit" className="contact-form-button">Send</button>
//       </form>
//     </div>
//   );
// }
//
// export default ContactForm;

import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    theme: "",
    message: ""
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Show the modal when form is submitted
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="lato-extra-bold contact-us-title">Contact Us</h2>

        <label htmlFor="name" className="contact-form-label lato-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <label htmlFor="email" className="contact-form-label lato-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />

        <label htmlFor="theme" className="contact-form-label lato-semibold">
          Theme
        </label>
        <input
          type="text"
          id="theme"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          placeholder="Subject"
          required
        />

        <label htmlFor="message" className="contact-form-label lato-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
        />

        <button type="submit" className="contact-form-button">
          Send
        </button>
      </form>

      {/* Modal for "Message Sent" */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ContactForm;

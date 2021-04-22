import React, { useState, useEffect } from "react";
import "./contactus.css";
import firebase from "../../config/config";
import BasicLayout from '../../components/UI/BasicCompPadding/BasicLayout';
const ContactUs = () => {


  var db = firebase.firestore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <BasicLayout>
      <div className='contactus'>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Contact Us 🤳</h1>

          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Message</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            style={{ background: loader ? "#ccc" : "  #ff590b" }}
          >
            Submit
      </button>
        </form>
      </div>
    </BasicLayout>
  );
};

export default ContactUs;

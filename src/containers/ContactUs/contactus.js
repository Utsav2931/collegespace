import React, { useState, useEffect } from "react";
import "./contactus.css";
import firebase from "../../config/config";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import GeneralModal from "../../components/UI/GeneralModal/GeneralModal";
import Loader from "../../components/UI/Loader/Loader";

// Contact us page
const ContactUs = () => {
var db = firebase.firestore();

  // all react useState hooks for state management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  // review the validation and upload the message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      setError("Name can't be null");
    } else if (email == "") {
      setError("Email can't be null");
    } else if (message == "") {
      setError("Message can't be null");
    } else {
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

      // set all field null for next response(after uploading the first one)
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    }
  };

  return (
    <BasicLayout>
      {loader ? (
        <GeneralModal>
          <Loader />
        </GeneralModal>
      ) : (
        <div></div>
      )}

      <div className="contactus">
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">Contact Us </div>
          {error !== "" ? <span style={{ color: "red" }}>{error}</span> : ""}
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

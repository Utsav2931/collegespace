import React from "react";
import "./ListIteam.css";
import { Link } from "react-router-dom";
function FAQ({ faq, index, toggleFAQ, close }) {

    let transfomedObject = Object.keys(faq.answer)
    .map(igkey => {
        return <div className="faq-answer"><Link to={faq.route[igkey]} onClick={close}>{faq.answer[igkey]}</Link></div>
    }); 
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={"faq-question"}>{faq.collection}</div>
      {transfomedObject}
    </div>
  );
}

export default FAQ;

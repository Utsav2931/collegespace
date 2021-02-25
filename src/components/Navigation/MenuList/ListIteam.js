import React from "react";
import "./ListIteam.css";
function FAQ({ faq, index, toggleFAQ }) {

    let transfomedObject = Object.keys(faq.answer)
    .map(igkey => {
        return <div className="faq-answer"><a href={faq.route[igkey]}>{faq.answer[igkey]}</a></div>
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

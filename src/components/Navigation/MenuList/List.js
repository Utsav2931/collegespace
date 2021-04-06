import React, { useState } from "react";
import FAQ from "./ListIteam";

let academicsPath;
const Questions = (props) => {
  academicsPath = props.academicsPath;
  let academicsResources = ["paper", "Books", "notes"];
  const [faqs, setfaqs] = useState([
    {
      collection: "Academics",
      answer: ["Papers", "Books", "Notes"],
      route: [
        `/academics/cspit/ce/1/paper`,
        "/academics/cspit/ce/1/Books",
        "/academics/cspit/ce/1/notes",
      ],
      open: false,
    },
    {
      collection: "Portal",
      answer: ["Events", "Clubs", "Timetable", "FAQS"],
      route: ["/events", "/clubs", "/time-table", "/faqs"],
      open: false,
    },
    {
      collection: "Add",
      answer: ["Add-post", "Add-notes"],
      route: ["/add-post", "/add-notes"],
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        faq.collection == "Academics"
          ? (faq.route[
              i
            ] = `/academics/${academicsPath}/${academicsResources[i]}`)
          : (faq.route[i] = faq.route[i]);
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div className="faqs">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default Questions;

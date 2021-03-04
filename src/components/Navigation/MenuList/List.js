import React, { useState } from "react";
import FAQ from "./ListIteam";

const Questions = () => {
  const [faqs, setfaqs] = useState([
    {
      collection: "Academics",
      answer: ['Old papers', 'Books', 'Notes'],
      route: ['/old-papers', '/books', '/notes'],

      open: false,
    },
    {
      collection: "Portal",
      answer: ['Events', 'Clubs', 'Timetable',],
      route: ['/events', '/clubs', '/time-table'],
      open: false,
    },
    {
      collection:
        "Add",
        answer: ['Add-post', 'Add-notes'],
        route: ['/add-post', '/add-notes'],

        open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
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

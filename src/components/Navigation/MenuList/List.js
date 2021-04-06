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
        `/academics/cspit/ce/1/Books`,
        `/academics/cspit/ce/1/notes`,
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

  // setfaqs(
  //   faqs.route.map((faq, i) => {
  //     console.log(i);

  //     console.log(faq.route[i]);
  //   })
  // );

  const toggleFAQ = (index) => {
    console.log(academicsPath);
    setfaqs(
      // faqs[0].route.map((paths, j) => {
      //   console.log(j);
      //   console.log(paths.route[j]);
      //   // paths[j].replace(`/academics/${academicsPath}/${academicsResources[j]}`);
      //   console.log(paths[j]);
      // }),

      faqs.map((faq, i) => {
        console.log(i);
        faqs[0].route.map((paths) => {
          // faqs[0].route[index] = (`/academics/${academicsPath}/${academicsResources[index]}`);
          // console.log(paths);
          paths = `/academics/${academicsPath}/${academicsResources[i]}`;
          // console.log(paths);
          faqs[0].route[i] = paths;
        });
        // console.log(faqs[0].route[i]);
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
        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} close={props.onClick}/>
      ))}
    </div>
  );
};

export default Questions;

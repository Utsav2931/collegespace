import React from "react";
import "./ListIteam.css";
import { Link } from "react-router-dom";

// This function contains sub menu items of List class
function ListIteam({ list, index, toggleMenu, close }) {
  let transfomedObject = Object.keys(list.answer).map((igkey) => {
    return (
      <div className="faq-answer">
        {/* Link, used for navigate to the clicked location */}
        <Link
          style={{ textDecoration: "none" }}
          to={list.route[igkey]}
          onClick={close}
        >
          {list.answer[igkey]}
        </Link>
      </div>
    );
  });
  return (
    <div
      className={"faq " + (list.open ? "open" : "")}
      key={index}
      onClick={() => toggleMenu(index)}
    >
      <div className={"faq-question"}>{list.collection}</div>
      {transfomedObject}
    </div>
  );
}

export default ListIteam;

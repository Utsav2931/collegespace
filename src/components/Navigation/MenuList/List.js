import React, { useState } from "react";
import ListIteam from "./ListIteam";

// This class contains sub manu iteams of academic section
const List = (props) => { 
  let academicsPath = props.academicsPath;
  let academicsResources = ["paper", "Books", "notes", "timetable"];

  // State for the lists object 
  const [lists, setlists] = useState([
    {
      collection: "Academics",
      answer: ["Papers", "Books", "Notes", "Timetable"],
      route: [
        `/academics/cspit/ce/1/paper`,
        `/academics/cspit/ce/1/Books`,
        `/academics/cspit/ce/1/notes`,
        `/academics/cspit/ce/1/timetable`,
      ],
      open: false,
    },
    {
      collection: "Portal",
      answer: ["Events", "Clubs", "FAQS"],
      route: ["/events", "/clubs", "/faqs"],
      open: false,
    },
    {
      collection: "Add",
      answer: ["Add-post", "Add-notes"],
      route: ["/add-post", "/add-notes"],
      open: false,
    },
  ]);

  // For toggling Menu
  const toggleMenu = (index) => {
    setlists(
      // map all the list object aarray and alter it with the academicsResources
      lists.map((list, i) => {
        lists[0].route.map((paths, index) => {
          props.isValid ? 
          paths = `/academics/${academicsPath}/${academicsResources[index]}` : 
          paths = `/academics/choose-path`;
          lists[0].route[index] = paths;
        });
        if (i === index) {
          list.open = !list.open;
        } else {
          list.open = false;
        }
        return list;
      })
    );
  };
  return (
    <div className="faqs">
      {/* Map all the list object array data and pass it to the ListIteam component */}
      {lists.map((list, i) => (
        <ListIteam list={list} index={i} toggleMenu={toggleMenu} close={props.onClick}/>
      ))}
    </div>
  );
};

export default List;

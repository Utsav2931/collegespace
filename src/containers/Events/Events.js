import React from "react";
import classes from "./Events.module.css";
import i from "./../../assets/Images/about.jpeg"
const Events = () => {
    return (
        <div>
            <h2>&nbsp; &nbsp;Events</h2><br />
            <div className={classes.text}><br />
                <img className={classes.textimg} src={i} align="left" hspace="20" /><br /><br /><br /><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.<br />Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. <br /> occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.<br />Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.<br /><br /> </p>
            </div>
            <div className={classes.text2}><br /><br />
                <img className={classes.text2img} src={i} align="left" hspace="20" /><br /><br /><br /><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.<br />Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. <br /> occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor.<br />Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum fugiat nulla pariatur. Excepteur<br /> sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Events;
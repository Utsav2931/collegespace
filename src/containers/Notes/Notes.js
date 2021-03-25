import React from "react";
import classes from "./Notes.module.css"
import i1 from "./../../assets/Images/1-.png"
import i2 from "./../../assets/Images/2-.png"
import i3 from "./../../assets/Images/3-.png"
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";

const Notes = () => {
    return (
        <BasicLayout>
            <p className={classes.smallTitle}>Notes</p><br></br>
            <br></br>
            <a href="first.html"></a>
            <div className={classes.cardcontainer}>
                <div className={classes.card}>
                    <img className={classes.img}src={i1}></img>
                    <div className={classes.container}>
                        <p className={classes.title}>Title One</p><br />
                        <hr />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation.</p><br /><br />
                    </div><br />
                </div>
                <div className={classes.card}>
                    <img className={classes.img}src={i2} />
                    <div className={classes.container}>
                        <h5>Title Two</h5><br />
                        <hr />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation.</p><br /><br />
                    </div><br />
                </div>
                <div className={classes.card}>
                    <img className={classes.img} src={i3} />
                    <div className={classes.container}>
                        <h5 >Title Three</h5><br />
                        <hr />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation.</p><br /><br />
                    </div><br />
                </div>
            </div><br></br><br></br><br></br>
        </BasicLayout>
    );
}

export default Notes
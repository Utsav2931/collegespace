import React from "react";
import classes from "./GeneralPage.module.css";
import Book from "./Card/Card";
import Category from "./category/Category";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";


const GeneralPage = (props) => {
    // console.log(props.paramsId)
    // let Pathlocation = props.propsIds.history.location.pathname;
    // console.log(Pathlocation);
    console.log("In General page");
  return (
    <BasicLayout>
      <div className={classes.GeneralPage}>
        <div className={classes.div}>
          <p className={classes.titleHeader}>Books</p>
          <div className={classes.GeneralRow}>
            {props.state.isLoaded ? (
              props.variable.map(( variable, index) => {
                return <Book varr={variable} propp={props.propsIds} key={index} />;
              })
            ) : (
              <div>Loading!!</div>
            )}
          </div>
        </div>

        <div className={classes.right}>
          <Category />
        </div>
      </div>
    </BasicLayout>
  );
};

export default GeneralPage;

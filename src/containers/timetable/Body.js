import React from 'react'
import TT from "./TT.jpeg";
import classes from "./Body.css";

function Body(){
    return(
       
      <div className={classes.Body}>
     
      <div>
      <p href="#" className="CE1-Text">CE1</p>
      <div className="cont-1">
      <img src={TT} width="850" alt="CE1-TT"  /></div>
      </div>
     
      <div>

      <p href="#" className="CE2-Text">CE2</p>
      <div className="cont-1">
      <img src={TT} width="850" alt="CE2-TT" /></div>
      </div>

      </div>
    )
}
export default Body
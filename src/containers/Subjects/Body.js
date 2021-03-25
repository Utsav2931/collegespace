import React from 'react'
import ios from "./ios.png";
import ins from "./ins.jpg";
import hs from "./hs.jpg";
import toc from "./toc.jpg";
import classes from "./Body.css";

function Body(){
    return(
       
 <div className={classes.Body}>
    

    <div class="polaroid-1">
       <button> <img src={ins} alt="ins" width="100%" />
        <div class="container">
            <p>INS</p>
        </div></button>
  </div>
      <div class="polaroid-1">
       <button> <img src={ios} alt="ios" width="100%" />
        <div class="container">
            <p>IOS</p>
        </div></button>
    </div>   
    

    
</div>

    )
}

export default Body
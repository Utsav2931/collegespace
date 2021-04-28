import classes from './Linkcomponent.module.css';
import React from 'react'

const Linkcomponent = (props) => {
    return (
        <div>
            <a href={props.link} target="_blank" className={classes.link}>{props.children}</a>
        </div>
    )
}

export default Linkcomponent

import React from 'react'
import classes from './FAQ.module.css';

function FAQ({faq, index, toggleFAQ }){
    let classname = (faq.open ? classes.open : '');
    return(
        <div className={ `${classes.faq} ${classname}`  }
            key={index}
            onClick={() => toggleFAQ(index)}
         >
         <div className={classes.faq_question}>
        {faq.question}
         </div>
         <div className={classes.faq_answer}>
        {faq.answer}
         </div>
        </div>
    )

}

export default FAQ
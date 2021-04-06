import React from "react";
import "./Checkbox.css";
const Checkbox = (props) => {
  return (
    <div>
      <input
        style={{ opacity: 0 }}
        class="checkbox-tools"
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked === props.value}
        id={props.id}
        onChange = {props.OnchageValue}
      ></input>

      <label class="for-checkbox-tools" for={props.id}>
        {props.title}
      </label>
    </div>
  );
};

export default Checkbox;

import IconButton from "../icon-button/icon-button";
import classes from "./textfield.module.css";
import { useState } from "react";

export default function TextField({ className, mb, title, isRequired, button }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className={`${classes.container} ${className} ${mb && classes.mb}`}>
            <label htmlFor={title} className={classes.text}>
                {isRequired && <span className={classes.required}>* </span>}
                <span className={classes.title}>{title}</span>
            </label>
            <div className={classes.inputContainer}>
                <input id={title} className={classes.input} type="text" onChange={handleChange} value={value} />
                {button === "search" && <IconButton icon="search" className={classes.button} />}
                {button === "calendar" && <IconButton icon="calendar" className={classes.button} />}
            </div>
        </div>
    );
}
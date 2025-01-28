import classes from "./textfield-small.module.css";
import removeIcon from "../../../assets/icons/close-x-icon.svg";
import { useState, useRef, useEffect } from "react";

export default function TextFieldSmall({ value, onChange, className, isRemoveButtonAvailable, onRemoveButtonClick }) {
    const [width, setWidth] = useState(0);
    const [wrapperOnFocus, setWrapperOnFocus] = useState(false);
    const span = useRef();
    const input = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [value]);


    return (
        <div
            className={`${wrapperOnFocus ? classes.wrapperOnFocus : classes.wrapperWithoutFocus} ${classes.wrapper} ${className}`}
            onClick={() => input.current.focus()}
        >
            <span className={classes.hidden} ref={span}>{value}</span>
            <div className={classes.inputWrapper}>
                <input
                    ref={input}
                    className={classes.input}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onFocus={() => setWrapperOnFocus(true)}
                    onBlur={() => setWrapperOnFocus(false)}
                    style={{ width: `${width}px` }} />
                {isRemoveButtonAvailable && (value != "") &&
                    <button className={classes.removeButton} onClick={onRemoveButtonClick}>
                        <img src={removeIcon} alt="X" />
                    </button>}
            </div>
        </div>
    );
}
import classes from "./textfield-small.module.css";
import { useState, useRef, useEffect } from "react";

export default function TextFieldSmall({ value, onChange, className }) {
    const [width, setWidth] = useState(0);
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [value]);


    return (
        <div className={className}>
            <span className={classes.hidden} ref={span}>{value}</span>
            <input className={classes.input} type="text" value={value} onChange={onChange} style={{width: `${width + 20}px`}} />
        </div>
    );
}
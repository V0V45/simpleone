import classes from "./textfield-small.module.css";

export default function TextFieldSmall({ value, onChange, className }) {
    return (
        <input className={`${classes.input} ${className}`} type="text" value={value} onChange={onChange} />
    );
}
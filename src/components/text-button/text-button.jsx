import classes from "./text-button.module.css";

export default function TextButton({children, accent, onClick, className}) {


    return (
        <button className={`${classes.button} ${accent ? classes.accent : classes.default} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
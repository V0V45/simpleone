import classes from "./spoiler.module.css";
import arrowIcon from "../../assets/icons/arrow-icon.svg";

export default function Spoiler({title, className, children}) {

    return (
        <details className={`${classes.container} ${className}`}>
            <summary className={classes.title}>
                <img src={arrowIcon} alt="" className={classes.arrow} />
                <p>{title}</p>
            </summary>
            <p>{children}</p>
        </details>
    );
}
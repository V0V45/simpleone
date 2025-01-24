import classes from "./icon-button.module.css";
import settingsIcon from "../../assets/icons/settings-icon.svg";
import unpinIcon from "../../assets/icons/unpin-icon.svg";

export default function IconButton({className, icon, onClick}) {

    return (
        <button className={`${classes.button} ${className}`} onClick={onClick}>
            {icon === "settings" && <img src={settingsIcon} alt="" />}
            {icon === "unpin" && <img src={unpinIcon} alt="" />}
        </button>
    );
}
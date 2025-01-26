import classes from "./icon-button.module.css";
import settingsIcon from "../../assets/icons/settings-icon.svg";
import unpinIcon from "../../assets/icons/unpin-icon.svg";
import searchIcon from "../../assets/icons/search-icon-black.svg";
import addIcon from "../../assets/icons/add-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";

export default function IconButton({className, icon, onClick}) {

    return (
        <button className={`${classes.button} ${className}`} onClick={onClick}>
            {icon === "settings" && <img src={settingsIcon} alt="" />}
            {icon === "unpin" && <img src={unpinIcon} alt="" />}
            {icon === "search" && <img src={searchIcon} alt="" />}
            {icon === "add" && <img src={addIcon} alt="" />}
            {icon === "calendar" && <img src={calendarIcon} alt="" />}
        </button>
    );
}
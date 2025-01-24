import classes from "./settings-button.module.css";
import settingsIcon from "../../assets/icons/settings-icon.svg";

export default function SettingsButton() {

    return (
        <button className={classes.button}>
            <img src={settingsIcon} alt="" />
        </button>
    );
}
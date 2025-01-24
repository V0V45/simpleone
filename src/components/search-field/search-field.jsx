import classes from "./search-field.module.css";
import searchIcon from "../../assets/icons/search-icon.svg";

export default function SearchField({className}) {

    return (
        <div className={classes.container}>
            <input className={`${classes.searchField} ${className}`} type="text" placeholder="Поиск" />
            <button className={classes.button}>
                <img src={searchIcon} alt="" />
            </button>
        </div>
    );
}
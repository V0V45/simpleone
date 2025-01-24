import classes from "./search-field.module.css";
import searchIcon from "../../assets/icons/search-icon.svg";
import filterIcon from "../../assets/icons/filter-icon.svg";

export default function SearchField({className, icon, placeholder}) {

    return (
        <div className={classes.container}>
            <input className={`${classes.searchField} ${className}`} type="text" placeholder={placeholder} />
            <button className={classes.button}>
                {icon === "search" && <img src={searchIcon} alt="" />}
                {icon === "filter" && <img src={filterIcon} alt="" />}
            </button>
        </div>
    );
}
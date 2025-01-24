import classes from "./navigation-button.module.css";
import MenuIcon from "./menu-icon/menu-icon";
import FavouriteIcon from "./favourite-icon/favourite-icon";
import { useState } from "react";

export default function NavigationButton({type, onClick}) {
    const [isOnHover, setIsOnHover] = useState(false);

    let iconSrc;
    if (type === "menu") {
        iconSrc = <MenuIcon isOnHover={isOnHover} />;
    } else if (type === "favourite") {
        iconSrc = <FavouriteIcon isOnHover={isOnHover} />;
    }

    function handleMouseEnter() {
        setIsOnHover(true);
    }

    function handleMouseLeave() {
        setIsOnHover(false)
    }

    return (
        <button 
            className={classes.button}
            type={type}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >{iconSrc}</button>
    );
}
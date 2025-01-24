import classes from "./home.module.css";
import logo from "../../assets/images/logo.svg";
import SearchField from "../../components/search-field/search-field";
import avatarExample from "../../assets/images/avatar-example.jpg";
import CurrentUser from "../../components/current-user/current-user";
import SettingsButton from "../../components/settings-button/settings-button";

export default function Home() {

  return (
    <>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="SimpleOne" />
        <div className={classes.rightPart}>
          <SearchField />
          <CurrentUser avatar={avatarExample} userName="Максим Галактионов" />
          <SettingsButton />
        </div>
      </header>
      <main>

      </main>
    </>
  );
}



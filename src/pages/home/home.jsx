import classes from "./home.module.css";
import logo from "../../assets/images/logo.svg";
import SearchField from "../../components/search-field/search-field";
import avatarExample from "../../assets/images/avatar-example.jpg";
import CurrentUser from "../../components/current-user/current-user";
import IconButton from "../../components/icon-button/icon-button";
import NavigationButton from "../../components/navigation-button/navigation-button";
import { useState } from "react";
import Spoiler from "../../components/spoiler/spoiler";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="SimpleOne" />
        <div className={classes.rightPart}>
          <SearchField className={classes.headerSearchField} placeholder="Поиск" icon="search" />
          <CurrentUser avatar={avatarExample} userName="Максим Галактионов" />
          <IconButton icon="settings" className={classes.settingsButton} />
        </div>
      </header>
      <main className={classes.main}>
        <section className={classes.navigationBar}>
          <NavigationButton type="menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <NavigationButton type="favourite" />
        </section>
        <section className={isSidebarOpen ? classes.sidebar : classes.hidden}>
          <div className={classes.filterContainer}>
            <SearchField className={classes.filterSearchField} placeholder="Поиск по меню" icon="filter" />
            <IconButton icon="unpin" className={classes.unpinButton} />
          </div>
          <div className={classes.spoilersContainer}>
            <Spoiler title="Моя работа"></Spoiler>
            <Spoiler title="Структура портала"></Spoiler>
            <Spoiler title="Личное расписание"></Spoiler>
            <Spoiler title="Отсутствие на рабочем месте"></Spoiler>
            <Spoiler title="Портфель услуг"></Spoiler>
            <Spoiler title="Дашборды"></Spoiler>
            <Spoiler title="Доски задач"></Spoiler>
            <Spoiler title="Обращения"></Spoiler>
            <Spoiler title="События"></Spoiler>
            <Spoiler title="Инциденты"></Spoiler>
            <Spoiler title="Проблемы"></Spoiler>
            <Spoiler title="Настройка каталогов"></Spoiler>
            <Spoiler title="Запросы на обслуживание"></Spoiler>
            <Spoiler title="Запросы на изменение"></Spoiler>
            <Spoiler title="Управление конфигурациями"></Spoiler>
            <Spoiler title="Управление уровнем услуг"></Spoiler>
            <Spoiler title="Настройка соответствий"></Spoiler>
          </div>
        </section>
      </main>
    </>
  );
}



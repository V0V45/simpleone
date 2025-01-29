import classes from "./home.module.css";
import logo from "../../assets/images/logo.svg";
import SearchField from "../../components/search-field/search-field";
import avatarExample from "../../assets/images/avatar-example.jpg";
import CurrentUser from "../../components/current-user/current-user";
import IconButton from "../../components/icon-button/icon-button";
import NavigationButton from "../../components/navigation-button/navigation-button";
import { useEffect, useState } from "react";
import Spoiler from "../../components/spoiler/spoiler";
import TextButton from "../../components/text-button/text-button";
import TextField from "../../components/textfield/textfield";
import TextFieldObjective from "../../components/textfield-objective/textfield-objective";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isSmallScreen, isMobile, isSmallMobile } = useDeviceDetect();

  useEffect(() => {
    if (isSmallScreen || isMobile || isSmallMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isSmallScreen, isMobile, isSmallMobile]);

  return (
    <>
      <header className={classes.header}>
        {(isMobile || isSmallMobile) ?
          <NavigationButton type="menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          :
          <img src={logo} className={classes.logo} alt="SimpleOne" />}
        <div className={classes.rightPart}>
          {(isMobile || isSmallMobile) ?
            <>
              <CurrentUser avatar={avatarExample} />
            </>
            :
            <>
              <SearchField className={classes.headerSearchField} placeholder="Поиск" icon="search" />
              <CurrentUser avatar={avatarExample} userName="Максим Галактионов" />
            </>
          }
          <IconButton icon="settings" className={classes.settingsButton} />
        </div>
      </header>
      <main className={classes.main}>
        {(isMobile || isSmallMobile) ? null : <section className={classes.navigationBar}>
          <NavigationButton type="menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <NavigationButton type="favourite" />
        </section>}
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
        <section className={classes.mainContent}>
          <section className={classes.upperMenu}>
            <div className={classes.upperMenuLeftSide}>
              <h3 className={classes.upperMenuLeftSideTitle}>Подзадача</h3>
              {(isSmallMobile || isMobile) ? null : <TextButton>Создать</TextButton>}
            </div>
            <div className={classes.upperMenuRightSide}>
              {(isSmallMobile || isMobile) ?
                <TextButton>Создать</TextButton>
                :
                <>
                  <TextButton accent className={classes.saveButton}>Сохранить</TextButton>
                  <TextButton>Сохранить и выйти</TextButton>
                </>
              }
            </div>
          </section>
          <section className={classes.table}>
            <h2 className={classes.tableTitle}>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</h2>
            <TextField className={classes.theme} mb title="Тема" isRequired />
            <TextField className={classes.status} mb title="Статус" />
            <TextField className={classes.description} mb title="Описание" />
            <TextField className={classes.product} mb title="Продукт" button="search" />
            <TextField className={classes.notes} mb title="Рабочие заметки" isRequired />
            <TextField className={classes.priority} mb title="Приоритет" />
            <TextFieldObjective className={classes.responsible} mb title="Ответственный" />
            <TextFieldObjective className={classes.group} mb title="Группа" />
            <TextField className={classes.comments} mb title="Комментарий" />
            <TextFieldObjective className={classes.coordinating} mb title="Согласующие" isRemoveButtonAvailable />
            <TextField className={classes.whenOpened} mb title="Когда открыто" button="calendar" />
            <TextField className={classes.whenCreated} mb title="Когда создано" button="calendar" />
            <TextFieldObjective className={classes.whoOpened} mb title="Кем открыто" />
            <TextFieldObjective className={classes.whoCreated} mb title="Кем создано" />
          </section>
        </section>
      </main>
    </>
  );
}



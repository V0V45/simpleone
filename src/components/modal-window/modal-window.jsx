import classes from "./modal-window.module.css";
import TextButton from "../text-button/text-button";
import TextField from "../textfield/textfield";
import TextFieldObjective from "../textfield-objective/textfield-objective";

export default function ModalWindow({ onRequestClose }) {
    return (
        <>
            <div className={classes.modalHeader}>
                <h3 className={classes.modalHeaderLeftSideTitle}>Подзадача</h3>
                <div className={classes.modalHeaderRightSide}>
                    <TextButton accent className={classes.saveButton}>Сохранить</TextButton>
                    <TextButton onClick={onRequestClose}>Отменить</TextButton>
                </div>
            </div>
            <div className={classes.modalTable}>
                    <h2 className={classes.modalTableTitle}>Новая запись</h2>
                    <TextField mb title="Тема" isRequired />
                    <TextField mb title="Статус" />
                    <TextField mb title="Описание" />
                    <TextField mb title="Продукт" button="search" />
                    <TextField mb title="Рабочие заметки" isRequired />
                    <TextField mb title="Приоритет" />
                    <TextFieldObjective mb title="Ответственный" />
                    <TextFieldObjective mb title="Группа" />
                    <TextField mb title="Комментарий" />
                    <TextFieldObjective mb title="Согласующие" isRemoveButtonAvailable />
                    <TextField mb title="Когда открыто" button="calendar" />
                    <TextField mb title="Когда создано" button="calendar" />
                    <TextFieldObjective mb title="Кем открыто" />
                    <TextFieldObjective title="Кем создано" />
            </div>
        </>
    );
}
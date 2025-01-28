import DatePicker from "react-datepicker";
import IconButton from "../icon-button/icon-button";
import classes from "./textfield.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import { registerLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';

registerLocale('ru', ru);

export default function TextField({ className, mb, title, isRequired, button }) {
    const [value, setValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef(null);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleCalendarButtonClick() {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    }

    return (
        <div className={`${classes.container} ${className} ${mb && classes.mb}`}>
            <label htmlFor={title} className={classes.text}>
                {isRequired && <span className={classes.required}>* </span>}
                <span className={classes.title}>{title}</span>
            </label>
            <div className={classes.inputContainer}>
                {button === "calendar" ?
                    <DatePicker
                        id={title}
                        wrapperClassName={classes.dateInputWrapper}
                        className={classes.dateInput}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        ref={datePickerRef}
                        locale={ru}
                        dateFormat="dd.MM.yyyy" />
                    :
                    <input id={title} className={classes.input} type="text" onChange={handleChange} value={value} />}
                {button === "search" && <IconButton icon="search" className={classes.button} />}
                {button === "calendar" && <IconButton icon="calendar" className={classes.button} onClick={handleCalendarButtonClick} />}
            </div>
        </div>
    );
}
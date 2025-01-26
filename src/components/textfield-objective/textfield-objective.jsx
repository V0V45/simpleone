import { useState } from "react";
import classes from "./textfield-objective.module.css";
import clearIcon from "../../assets/icons/clear-icon.svg";
import IconButton from "../icon-button/icon-button";
import TextFieldSmall from "./textfield-small/textfield-small";

export default function TextFieldObjective({ className, mb, title, isRequired }) {
    const [inputsValues, setInputsValues] = useState([""]);

    function addField() {
        setInputsValues([...inputsValues, ""]);
    }

    function handleChange(event, index) {
        const newInputsValues = [...inputsValues];
        newInputsValues[index] = event.target.value;
        setInputsValues(newInputsValues);
    }

    return (
        <div className={`${classes.container} ${className} ${mb && classes.mb}`}>
            <label htmlFor={title} className={classes.text}>
                {isRequired && <span className={classes.required}>* </span>}
                <span className={classes.title}>{title}</span>
            </label>
            <div className={classes.buttonsAndInputContainer}>
                <div className={classes.inputContainer}>
                    <div className={classes.inputs}>
                        {inputsValues.map((inputValue, index) => {
                            return (
                                <TextFieldSmall
                                    key={index}
                                    className={classes.textFieldSmall}
                                    value={inputValue}
                                    onChange={(event) => handleChange(event, index)}
                                />
                            );
                        })}
                    </div>
                    {inputsValues.length >= 1 && <button className={classes.button} onClick={() => { setInputsValues([]) }}>
                        <img src={clearIcon} alt="clear" />
                    </button>}
                </div>
                <IconButton className={classes.addButton} icon="add" onClick={addField} />
                <IconButton className={classes.searchButton} icon="search" />
            </div>
        </div>
    );
}
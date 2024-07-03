import React from "react";

export interface InputProps {
    name: string;
    value: string;
    placeholder: string;
    setValue: (value: string) => void;
    error?: string;
    mandatory: boolean;
    helpText?: string;
}

const Input = ({name,placeholder, setValue, error, value, mandatory, helpText}: InputProps) => {

    const nameLowerCased = name.toLowerCase();

    return (
        <div className={"input-container"}>
            <label htmlFor={nameLowerCased}>
                <div className="tooltip">
                    <b>
                        {`${name}`}
                        {mandatory && <span className={"error"}>*</span>}{`?`}
                    </b>
                    <span className="tooltip-text">{helpText}</span>
                </div>
            </label>
            <input
                className={error && "error"}
                name={nameLowerCased}
                id={nameLowerCased}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={placeholder}
            />
            {error && <span className={"error"}>{error}</span>}
        </div>
    )
}

export default Input;
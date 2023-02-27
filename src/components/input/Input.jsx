import React from "react";

const Input = ({ errors, register, trigger, name, placeholder, pattern }) => {
    return (
        <>
            <input
                className={errors.email && "border border-danger"}
                placeholder={placeholder}
                name={name}
                onKeyUp={() => {
                    trigger("email");
                }}
            />
        </>
    );
};

export default Input;

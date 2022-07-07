import React, { memo } from "react";

const Inputs = ({ name, style, value, handleInputChange }) => {
    const handleChange = (e) => handleInputChange(e);

    return (
        <label className={style}>
            {name.toUpperCase() + ":"}
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
            />
        </label>
    );
};

export default memo(Inputs);
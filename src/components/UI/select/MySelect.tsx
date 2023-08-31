import React from 'react';

export interface SelectItem{
    value: string;
    name: string;
}

interface MySelectProps{
    options: SelectItem[];
    defaultValue: string;
    value: string;
    onChange(value: string) : void;
}

const MySelect = ({options, defaultValue, value, onChange }:MySelectProps) => {

    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
            )}
        </select>
    );
};

export default MySelect;
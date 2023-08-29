import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './MyInput.module.css'
interface MyInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    > {}

const MyInput = (props:MyInputProps) => {
    return (
        <input  className={classes.myInput} {...props}/>
    );
};

export default MyInput;
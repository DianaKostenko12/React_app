import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from './MyButton.module.css'

interface MyButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const MyButton = ({ children, ...rest }: MyButtonProps) => {

    return (
        <button className={classes.myBtn} {...rest}>
            {children}
        </button>
    );
};

export default MyButton;
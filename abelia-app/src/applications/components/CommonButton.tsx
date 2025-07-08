import classes from './CommonButton.module.css';
import {Button, type ButtonProps} from "@mantine/core";
import {forwardRef} from "react";

type CommonButtonProps = ButtonProps;

export const CommonButton= forwardRef<HTMLButtonElement, CommonButtonProps>(
    ({ children, ...others}, ref) => (
        <Button
            ref={ref}
            {...others}
            className={classes.root}
        >
            {children}
        </Button>
    )
);

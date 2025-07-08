import classes from './CommonButton.module.css';
import {Button, type ButtonProps, createPolymorphicComponent} from "@mantine/core";
import type {Ref} from "react";

interface CommonButtonProp extends ButtonProps {
    ref?: Ref<HTMLButtonElement>;
}

export const CommonButton = createPolymorphicComponent<"button", CommonButtonProp>(
    ({ref, ...props}: CommonButtonProp)=>{
        return <Button ref={ref} {...props} className={classes.root} />
        },
);

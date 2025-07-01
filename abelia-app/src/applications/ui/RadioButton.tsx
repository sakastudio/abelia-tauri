import React from 'react';
import { Radio } from '@mantine/core';
import type { RadioProps } from '@mantine/core';
import styles from './Radio.module.css';

export interface RadioButtonProps extends Omit<RadioProps, 'icon'> {
  label?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ 
  label,
  disabled,
  className,
  classNames,
  ...props 
}) => {
  const wrapperClasses = [
    styles.wrapper,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <Radio
      label={label}
      disabled={disabled}
      className={wrapperClasses}
      classNames={{
        radio: styles.radio,
        label: styles.label,
        icon: styles.icon
      }}
      icon={() => null} // Hide default icon
      {...props}
    />
  );
};

export default RadioButton;
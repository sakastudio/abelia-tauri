import React from 'react';
import { Select as MantineSelect } from '@mantine/core';
import type { SelectProps as MantineSelectProps } from '@mantine/core';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<MantineSelectProps, 'size' | 'data'> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  options?: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ 
  size,
  fullWidth,
  className,
  classNames,
  options,
  ...props 
}) => {
  const wrapperClasses = [
    styles.wrapper,
    size === 'small' && styles.small,
    size === 'medium' && styles.medium,
    size === 'large' && styles.large,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ');
  
  // Convert options to Mantine format
  const data = options || [];
  
  return (
    <MantineSelect
      className={wrapperClasses}
      classNames={{
        input: styles.input,
        dropdown: styles.dropdown,
        option: styles.option
      }}
      data={data}
      {...props}
    />
  );
};

export default Select;
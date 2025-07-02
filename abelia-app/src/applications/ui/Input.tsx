import React from 'react';
import { TextInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';
import styles from './Input.module.css';

export interface InputProps extends Omit<TextInputProps, 'size'> {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text',
  size,
  fullWidth,
  className,
  classNames,
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
  
  return (
    <TextInput
      type={type}
      className={wrapperClasses}
      classNames={{
        input: styles.input
      }}
      {...props}
    />
  );
};

export default Input;
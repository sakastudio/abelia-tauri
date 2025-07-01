import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<MantineButtonProps, 'variant' | 'size'> {
  variant?: 'default' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'default',
  size = 'medium',
  fullWidth,
  className,
  ...props 
}) => {
  const classNames = [
    styles.button,
    variant === 'danger' && styles.danger,
    size === 'small' && styles.small,
    size === 'large' && styles.large,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <MantineButton
      className={classNames}
      {...props}
    />
  );
};

export default Button;
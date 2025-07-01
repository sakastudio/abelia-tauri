import React from 'react';
import './ui-common.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text',
  size,
  fullWidth,
  className = '',
  style,
  ...props 
}) => {
  const sizeClass = size ? ` ${size}` : '';
  const fullWidthStyle = fullWidth ? { width: '100%', ...style } : style;
  
  return (
    <input
      type={type}
      className={`ui-input${sizeClass} ${className}`.trim()}
      style={fullWidthStyle}
      {...props}
    />
  );
};

export default Input;
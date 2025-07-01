import React from 'react';
import './ui-common.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'default',
  size = 'medium',
  fullWidth,
  className = '',
  style,
  children,
  ...props 
}) => {
  const variantClass = variant === 'danger' ? ' danger' : '';
  const sizeClass = size !== 'medium' ? ` ${size}` : '';
  const fullWidthStyle = fullWidth ? { width: '100%', ...style } : style;
  
  return (
    <button
      className={`ui-button${variantClass}${sizeClass} ${className}`.trim()}
      style={fullWidthStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
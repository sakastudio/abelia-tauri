import React from 'react';
import './ui-common.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  options?: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ 
  size,
  fullWidth,
  className = '',
  style,
  options,
  children,
  ...props 
}) => {
  const sizeClass = size ? ` ${size}` : '';
  const fullWidthStyle = fullWidth ? { width: '100%', ...style } : style;
  
  return (
    <select
      className={`ui-select${sizeClass} ${className}`.trim()}
      style={fullWidthStyle}
      {...props}
    >
      {options ? (
        options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))
      ) : (
        children
      )}
    </select>
  );
};

export default Select;
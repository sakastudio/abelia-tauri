import React from 'react';
import './ui-common.css';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ 
  label,
  disabled,
  className = '',
  id,
  ...props 
}) => {
  // Generate a unique ID if not provided and label exists
  const inputId = id || (label ? `radio-${Math.random().toString(36).substr(2, 9)}` : undefined);
  
  const radioInput = (
    <input
      type="radio"
      id={inputId}
      className={`ui-radio ${className}`.trim()}
      disabled={disabled}
      {...props}
    />
  );

  if (label) {
    return (
      <label 
        htmlFor={inputId}
        className={`ui-radio-label ${disabled ? 'disabled' : ''}`.trim()}
      >
        {radioInput}
        {label}
      </label>
    );
  }

  return radioInput;
};

export default RadioButton;
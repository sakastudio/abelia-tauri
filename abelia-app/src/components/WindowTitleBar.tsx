import React from 'react';
import titleBarImage from '../assets/window-title-bar.png';
import './WindowTitleBar.css';

interface WindowTitleBarProps {
  title: string;
  onClose: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
}

export const WindowTitleBar: React.FC<WindowTitleBarProps> = ({
  title,
  onClose,
  onMouseDown,
}) => {
  return (
    <div 
      className="window-header" 
      onMouseDown={onMouseDown}
      style={{
        backgroundImage: `url(${titleBarImage})`,
      }}
    >
      <span className="window-title">{title}</span>
      <button className="window-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};
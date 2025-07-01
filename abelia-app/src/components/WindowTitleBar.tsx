import React from 'react';
import titleBarImage from '../assets/window-title-bar.png';
import './WindowTitleBar.css';

interface WindowTitleBarProps {
  title: string;
  onClose: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
}

export const WindowTitleBar: React.FC<WindowTitleBarProps> = ({
  title,
  onClose,
  onMouseDown,
  onMinimize,
  onMaximize,
  isMaximized = false,
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
      <div className="window-controls">
        {onMinimize && (
          <button className="window-control window-minimize" onClick={onMinimize}>
            −
          </button>
        )}
        {onMaximize && (
          <button className="window-control window-maximize" onClick={onMaximize}>
            {isMaximized ? '◱' : '□'}
          </button>
        )}
        <button className="window-control window-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};
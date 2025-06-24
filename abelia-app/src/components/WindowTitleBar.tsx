import React from 'react';

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
    <div className="window-header" onMouseDown={onMouseDown}>
      <span className="window-title">{title}</span>
      <button className="window-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};
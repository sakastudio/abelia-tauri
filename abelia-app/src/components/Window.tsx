import React, { useState, useRef, useEffect } from 'react';
import './Window.css';
import { WindowTitleBar } from './WindowTitleBar';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
  initialWidth?: number;
  initialHeight?: number;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  zIndex: number;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  initialX = 100,
  initialY = 100,
  initialWidth = 400,
  initialHeight = 300,
  onClose,
  onFocus,
  zIndex,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      } else if (isResizing) {
        setSize({
          width: Math.max(200, resizeStart.width + e.clientX - resizeStart.x),
          height: Math.max(150, resizeStart.height + e.clientY - resizeStart.y),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(id);
    if (e.currentTarget === e.target || e.currentTarget.classList.contains('window-header')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  };

  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex,
      }}
      onMouseDown={() => onFocus(id)}
    >
      <WindowTitleBar
        title={title}
        onClose={() => onClose(id)}
        onMouseDown={handleMouseDown}
      />
      <div className="window-content">{children}</div>
      <div className="window-resize" onMouseDown={handleResizeMouseDown} />
    </div>
  );
};
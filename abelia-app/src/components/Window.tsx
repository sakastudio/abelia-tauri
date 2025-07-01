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
  isMaximized?: boolean;
  maximizable?: boolean;
  minimizable?: boolean;
  resizable?: boolean;
  minSize?: { width: number; height: number };
  maxSize?: { width: number; height: number };
  onMinimize?: () => void;
  onMaximize?: () => void;
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
  isMaximized = false,
  maximizable = true,
  minimizable = true,
  resizable = true,
  minSize = { width: 200, height: 150 },
  maxSize,
  onMinimize,
  onMaximize,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [savedState, setSavedState] = useState({ position: { x: initialX, y: initialY }, size: { width: initialWidth, height: initialHeight } });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMaximized) {
      setSavedState({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 40 });
    } else if (savedState) {
      setPosition(savedState.position);
      setSize(savedState.size);
    }
  }, [isMaximized]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      } else if (isResizing && resizable) {
        let newWidth = resizeStart.width + e.clientX - resizeStart.x;
        let newHeight = resizeStart.height + e.clientY - resizeStart.y;
        
        if (minSize) {
          newWidth = Math.max(minSize.width, newWidth);
          newHeight = Math.max(minSize.height, newHeight);
        }
        if (maxSize) {
          newWidth = Math.min(maxSize.width, newWidth);
          newHeight = Math.min(maxSize.height, newHeight);
        }
        
        setSize({
          width: newWidth,
          height: newHeight,
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
    if ((e.currentTarget === e.target || e.currentTarget.classList.contains('window-header')) && !isMaximized) {
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
        onMinimize={minimizable ? onMinimize : undefined}
        onMaximize={maximizable ? onMaximize : undefined}
        isMaximized={isMaximized}
      />
      <div className="window-content">{children}</div>
      {resizable && !isMaximized && <div className="window-resize" onMouseDown={handleResizeMouseDown} />}
    </div>
  );
};
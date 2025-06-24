import React, { useState } from 'react';
import { Window } from './Window';
import { Taskbar } from './Taskbar';
import './Desktop.css';

interface WindowData {
  id: string;
  title: string;
  content: React.ReactNode;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([
    {
      id: '1',
      title: 'Welcome',
      content: (
        <div>
          <h2>Welcome to Abelia OS!</h2>
          <p>This is a simple PC-like interface built with React and TypeScript.</p>
          <ul>
            <li>Drag windows by their title bar</li>
            <li>Resize windows from the bottom-right corner</li>
            <li>Click on windows to bring them to front</li>
            <li>Use the taskbar to switch between windows</li>
          </ul>
        </div>
      ),
      x: 100,
      y: 50,
    },
  ]);
  
  const [activeWindowId, setActiveWindowId] = useState<string>('1');
  const [zIndexCounter, setZIndexCounter] = useState(100);
  const [windowZIndexes, setWindowZIndexes] = useState<{ [key: string]: number }>({ '1': 100 });

  const handleCloseWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
    const newZIndexes = { ...windowZIndexes };
    delete newZIndexes[id];
    setWindowZIndexes(newZIndexes);
    
    if (activeWindowId === id && windows.length > 1) {
      const remainingWindows = windows.filter(w => w.id !== id);
      setActiveWindowId(remainingWindows[remainingWindows.length - 1].id);
    }
  };

  const handleFocusWindow = (id: string) => {
    if (activeWindowId !== id) {
      setActiveWindowId(id);
      const newZIndex = zIndexCounter + 1;
      setZIndexCounter(newZIndex);
      setWindowZIndexes({
        ...windowZIndexes,
        [id]: newZIndex,
      });
    }
  };

  const handleStartClick = () => {
    const newWindow: WindowData = {
      id: Date.now().toString(),
      title: 'New Window',
      content: <div>This is a new window!</div>,
      x: 150 + windows.length * 30,
      y: 100 + windows.length * 30,
    };
    
    setWindows([...windows, newWindow]);
    const newZIndex = zIndexCounter + 1;
    setZIndexCounter(newZIndex);
    setWindowZIndexes({
      ...windowZIndexes,
      [newWindow.id]: newZIndex,
    });
    setActiveWindowId(newWindow.id);
  };

  const taskbarItems = windows.map(w => ({
    id: w.id,
    title: w.title,
    icon: '🗔',
  }));

  return (
    <div className="desktop">
      <div className="desktop-icons">
        <div className="desktop-icon" onDoubleClick={handleStartClick}>
          <div className="icon">📁</div>
          <div className="icon-label">My Computer</div>
        </div>
        <div className="desktop-icon" onDoubleClick={handleStartClick}>
          <div className="icon">📄</div>
          <div className="icon-label">Documents</div>
        </div>
      </div>

      {windows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          initialX={window.x}
          initialY={window.y}
          initialWidth={window.width}
          initialHeight={window.height}
          onClose={handleCloseWindow}
          onFocus={handleFocusWindow}
          zIndex={windowZIndexes[window.id] || 100}
        >
          {window.content}
        </Window>
      ))}

      <Taskbar
        items={taskbarItems}
        activeItemId={activeWindowId}
        onItemClick={handleFocusWindow}
        onStartClick={handleStartClick}
      />
    </div>
  );
};
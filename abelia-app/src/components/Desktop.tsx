import React, { useState } from 'react';
import { Window } from './Window';
import { Taskbar } from './Taskbar';
import type { WindowState } from '../types/Application';
import './Desktop.css';
import applications from "../applications/applications.ts";


export const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [zIndexCounter, setZIndexCounter] = useState(100);

  const handleCloseWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
    
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
      setWindows(windows.map(w => 
        w.id === id ? { ...w, zIndex: newZIndex } : w
      ));
    }
  };

  const handleStartClick = () => {
    // スタートメニューの実装は後で追加
  };

  const handleMinimizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const handleMaximizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  const openApplication = (appId: string) => {
    const app = applications.get(appId);
    if (!app) return;

    const windowId = `${appId}-${Date.now()}`;
    const newZIndex = zIndexCounter + 1;
    setZIndexCounter(newZIndex);

    const newWindow: WindowState = {
      id: windowId,
      applicationId: appId,
      title: app.name,
      position: app.defaultPosition || { x: 100 + windows.length * 30, y: 50 + windows.length * 30 },
      size: app.defaultSize || { width: 600, height: 400 },
      isMinimized: false,
      isMaximized: false,
      zIndex: newZIndex,
    };

    setWindows([...windows, newWindow]);
    setActiveWindowId(windowId);
  };

  const taskbarItems = windows.filter(w => !w.isMinimized).map(w => {
    const app = applications.get(w.applicationId);
    return {
      id: w.id,
      title: w.title,
      icon: app?.icon || '🗔',
    };
  });

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {applications.getAll().map(app => (
          <div key={app.id} className="desktop-icon" onDoubleClick={() => openApplication(app.id)}>
            <div className="icon">{app.icon}</div>
            <div className="icon-label">{app.name}</div>
          </div>
        ))}
      </div>

      {windows.filter(w => !w.isMinimized).map(window => {
        const app = applications.get(window.applicationId);
        if (!app) return null;
        
        const AppComponent = app.component;
        
        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            initialX={window.position.x}
            initialY={window.position.y}
            initialWidth={window.size.width}
            initialHeight={window.size.height}
            onClose={handleCloseWindow}
            onFocus={handleFocusWindow}
            zIndex={window.zIndex}
            isMaximized={window.isMaximized}
            maximizable={app.maximizable}
            minimizable={app.minimizable}
            resizable={app.resizable}
            minSize={app.minSize}
            maxSize={app.maxSize}
            onMinimize={() => handleMinimizeWindow(window.id)}
            onMaximize={() => handleMaximizeWindow(window.id)}
          >
            <AppComponent
              windowId={window.id}
              onClose={() => handleCloseWindow(window.id)}
              onMinimize={() => handleMinimizeWindow(window.id)}
              onMaximize={() => handleMaximizeWindow(window.id)}
            />
          </Window>
        );
      })}

      <Taskbar
        items={taskbarItems}
        activeItemId={activeWindowId || undefined}
        onItemClick={(id) => {
          const window = windows.find(w => w.id === id);
          if (window?.isMinimized) {
            setWindows(windows.map(w => 
              w.id === id ? { ...w, isMinimized: false } : w
            ));
          }
          handleFocusWindow(id);
        }}
        onStartClick={handleStartClick}
      />
    </div>
  );
};
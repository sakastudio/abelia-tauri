import React from 'react';
import './Taskbar.css';

interface TaskbarItem {
  id: string;
  title: string;
  icon?: string;
}

interface TaskbarProps {
  items: TaskbarItem[];
  activeItemId?: string;
  onItemClick: (id: string) => void;
  onStartClick: () => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  items,
  activeItemId,
  onItemClick,
  onStartClick,
}) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const [time, setTime] = React.useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="taskbar">
      <button className="start-button" onClick={onStartClick}>
        <span className="start-icon">⊞</span>
        <span>Start</span>
      </button>
      
      <div className="taskbar-items">
        {items.map((item) => (
          <button
            key={item.id}
            className={`taskbar-item ${item.id === activeItemId ? 'active' : ''}`}
            onClick={() => onItemClick(item.id)}
          >
            {item.icon && <span className="taskbar-item-icon">{item.icon}</span>}
            <span className="taskbar-item-title">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="system-tray">
        <div className="clock">{time}</div>
      </div>
    </div>
  );
};
import type { ComponentType } from 'react';

export interface ApplicationProps {
  windowId: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export interface ApplicationSize {
  width: number;
  height: number;
}

export interface ApplicationPosition {
  x: number;
  y: number;
}

export interface Application {
  id: string;
  name: string;
  icon: string;
  component: ComponentType<ApplicationProps>;
  defaultSize?: ApplicationSize;
  defaultPosition?: ApplicationPosition;
  minSize?: ApplicationSize;
  maxSize?: ApplicationSize;
  resizable?: boolean;
  maximizable?: boolean;
  minimizable?: boolean;
}

export interface WindowState {
  id: string;
  applicationId: string;
  title: string;
  position: ApplicationPosition;
  size: ApplicationSize;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}
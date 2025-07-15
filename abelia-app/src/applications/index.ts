import {Welcome} from "./Welcome/Welcome";
import {Calculator} from "./Calculator/Calculator";
import type { Application } from '../types/Application';
import SupportCenter from "./SupportCenter";

const applicationsData: Record<string, Application> = {
  welcome: {
    id: 'welcome',
    name: 'Welcome',
    icon: '👋',
    component: Welcome,
    defaultSize: { width: 600, height: 500 },
    defaultPosition: { x: 100, y: 50 },
    minSize: { width: 400, height: 300 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
  calculator: {
    id: 'calculator',
    name: '電卓',
    icon: '🧮',
    component: Calculator,
    defaultSize: { width: 320, height: 480 },
    defaultPosition: { x: 200, y: 100 },
    minSize: { width: 280, height: 400 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
  'support-center': {
    id: 'support-center',
    name: 'サポートセンター・システム',
    icon: '📞',
    component: SupportCenter,
    defaultSize: { width: 1200, height: 700 },
    defaultPosition: { x: 50, y: 30 },
    minSize: { width: 1000, height: 600 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  }
};

const applications = {
  ...applicationsData,
  get(id: string): Application | undefined {
    return applicationsData[id];
  },
  getAll(): Application[] {
    return Object.values(applicationsData);
  }
};

export default applications;

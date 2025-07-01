import { appRegistry } from '../registry';
import { Welcome } from './Welcome';

appRegistry.register({
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
});
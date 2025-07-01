import { appRegistry } from '../registry';
import { Calculator } from './Calculator';

appRegistry.register({
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
});
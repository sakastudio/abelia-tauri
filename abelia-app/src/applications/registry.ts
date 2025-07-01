import type { Application } from '../types/Application';

class ApplicationRegistry {
  private applications: Map<string, Application> = new Map();
  private static instance: ApplicationRegistry;

  private constructor() {}

  static getInstance(): ApplicationRegistry {
    if (!ApplicationRegistry.instance) {
      ApplicationRegistry.instance = new ApplicationRegistry();
    }
    return ApplicationRegistry.instance;
  }

  register(app: Application): void {
    if (this.applications.has(app.id)) {
      console.warn(`Application with id '${app.id}' is already registered`);
      return;
    }
    this.applications.set(app.id, app);
  }

  unregister(id: string): void {
    this.applications.delete(id);
  }

  get(id: string): Application | undefined {
    return this.applications.get(id);
  }

  getAll(): Application[] {
    return Array.from(this.applications.values());
  }

  has(id: string): boolean {
    return this.applications.has(id);
  }

  clear(): void {
    this.applications.clear();
  }
}

export const appRegistry = ApplicationRegistry.getInstance();
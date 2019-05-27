import { IRoute } from 'express';
import FaimAppConfig from './http/types/faim-app-config';
export default class FaimApp {
    config: FaimAppConfig;
    private app;
    constructor(config?: FaimAppConfig);
    /**
     * Start the app, listening on a given port
     */
    listen(port: number): Promise<void>;
    /**
     * Load framework specific files (controllers, services) from a given path
     */
    loadFrameworkFiles(filesPath: string): void;
    /**
     * Register a middleware
     */
    use(...args: any[]): void;
    /**
     * Register a route on a given path
     */
    route(routePath: string): IRoute;
    /**
     * Get the directory path of the main script
     */
    private getMainScriptDirectoryPath;
}

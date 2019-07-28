import * as express from 'express';
import { Express } from 'express';
import * as path from 'path';
import get = require('lodash/get');
import FileHelper from '../helpers/file-helper';
import { IRoute } from 'express';
import ApiRegistry from './http/api-registry';
import FaimAppConfig from './faim-app-config';

export default class FaimApp {
  // configuration defaults
  public config: FaimAppConfig = {
    apiPrefix: 'api',
    validation: false
  };

  // express app
  private app: Express;

  constructor(config?: FaimAppConfig) {
    // overwrite default configuration
    if (config) {
      this.config = Object.assign(this.config, config);
    }

    // create the express app
    this.app = express();

    // initialize the ApiRegistry service
    ApiRegistry.init(this);

    // prepare to load client modules (controllers, services)
    const mainDirectoryPath = this.getMainScriptDirectoryPath();

    // load controllers from the default path ('controllers' directory)
    const controllersDefaultPath: string = path.resolve(mainDirectoryPath, 'controllers');
    // or load them from a given path
    const controllersPath = this.config.controllersPath || controllersDefaultPath;
    this.loadFrameworkFiles(controllersPath);

    // load services from the default path ('services' directory)
    const servicesDefaultPath: string = path.resolve(mainDirectoryPath, 'services');
    // or load them from a given path
    const servicesPath = this.config.servicesPath || servicesDefaultPath;
    this.loadFrameworkFiles(servicesPath);
  }

  /**
   * Start the app, listening on a given port
   */
  async listen(port: number, hostname: string = '::'): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(port, hostname, () => {
        // the app is listening on the configured port
        resolve();
      });
    });
  }

  /**
   * Load framework specific files (controllers, services) from a given path
   */
  loadFrameworkFiles(filesPath: string): void {
    return FileHelper.loadFilesFromPath(filesPath);
  }

  /**
   * Register a middleware
   */
  /* tslint:disable-next-line no-any */
  use(...args: any[]): void {
    this.app.use(args);
  }

  /**
   * Register a route on a given path
   */
  route(routePath: string): IRoute {
    return this.app.route(routePath);
  }

  /**
   * Get the directory path of the main script
   */
  private getMainScriptDirectoryPath(): string {
    const mainScriptPath = get(require, 'main.filename', '');
    return path.dirname(mainScriptPath);
  }
}

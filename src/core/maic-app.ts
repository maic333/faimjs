import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as path from 'path';
import get = require('lodash/get');
import FileHelper from '../helpers/file-helper';
import { IRoute } from 'express';
import ApiRegistry from '../helpers/api-registry';
import ApiRequest from '../types/api-request';
import ApiResponse from '../types/api-response';

export default class MaicApp {
  private app: Express;

  constructor() {
    // create the express app
    this.app = express();
  }

  /**
   * Start the app, listening on a given port
   */
  async listen(port: number): Promise<void> {
    // initialize the ApiRegistry service
    ApiRegistry.init(this);

    // prepare to load client modules (controllers, services)
    const mainDirectoryPath = this.getMainScriptDirectoryPath();

    // load controllers from the default path ('controllers' directory)
    const controllersDefaultPath: string = path.resolve(mainDirectoryPath, 'controllers');
    await this.loadFrameworkFiles(controllersDefaultPath);

    // load services from the default path ('services' directory)
    const servicesDefaultPath: string = path.resolve(mainDirectoryPath, 'services');
    await this.loadFrameworkFiles(servicesDefaultPath);

    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
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

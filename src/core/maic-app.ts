import { Express } from 'express';
import * as express from 'express';

export default class MaicApp {
  private app: Express;

  constructor() {
    // create the express app
    this.app = express();

    // #TODO inspect all files and load: Controllers, Services (DI)
    // #TODO inspect files from the location where this is called, and all the contained directories (recursively)
  }

  /**
   * Start the app, listening on a given port
   */
  async listen(port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        // the app is listening on the configured port
        resolve();
      });
    });
  }

  /**
   * Register a middleware
   */
  use(...args: any[]): void {
    this.app.use(args);
  }
}

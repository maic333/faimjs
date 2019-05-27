import * as fs from 'fs';
import * as path from 'path';

/**
 * Helper service used to work with the file system
 */
class FileHelper {
  /**
   * Load all JS files under a given path, recursively, as node modules
   */
  loadFilesFromPath(filesPath: string): void {
    if (!fs.existsSync(filesPath)) {
      return;
    }

    // read all files under the given path
    const files: string[] = fs.readdirSync(filesPath);

    // directories will be loaded recursively
    const directories = files.filter((file) => fs.statSync(path.resolve(filesPath, file)).isDirectory());

    // load JS and TS files as node modules
    files
      .filter((file) => fs.statSync(path.resolve(filesPath, file)).isFile())
      .filter((file) => file.endsWith('.js'))
      .forEach((file) => {
        // import file as node module
        require(path.resolve(filesPath, file));
      });

    // load remaining directories
    return directories.forEach((directory) => this.loadFilesFromPath(path.resolve(filesPath, directory)));
  }
}

export default new FileHelper();

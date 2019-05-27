/**
 * Helper service used to work with the file system
 */
declare class FileHelper {
    /**
     * Load all JS files under a given path, recursively, as node modules
     */
    loadFilesFromPath(filesPath: string): void;
}
declare const _default: FileHelper;
export default _default;

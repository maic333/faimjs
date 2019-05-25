"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var FileHelper = /** @class */ (function () {
    function FileHelper() {
    }
    /**
     * Load all JS files under a given path, recursively, as node modules
     */
    FileHelper.prototype.loadFilesFromPath = function (filesPath) {
        var _this = this;
        if (!fs.existsSync(filesPath)) {
            return;
        }
        // read all files under the given path
        var files = fs.readdirSync(filesPath);
        // directories will be loaded recursively
        var directories = files.filter(function (file) { return fs.statSync(path.resolve(filesPath, file)).isDirectory(); });
        // load JS and TS files as node modules
        files
            .filter(function (file) { return fs.statSync(path.resolve(filesPath, file)).isFile(); })
            .filter(function (file) { return file.endsWith('.js'); })
            .forEach(function (file) {
            // import file as node module
            require(path.resolve(filesPath, file));
        });
        // load remaining directories
        return directories.forEach(function (directory) { return _this.loadFilesFromPath(path.resolve(filesPath, directory)); });
    };
    return FileHelper;
}());
exports.default = new FileHelper();

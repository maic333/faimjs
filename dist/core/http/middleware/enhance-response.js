"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enhanceResponse(req, res, next) {
    /* tslint:disable-next-line no-any */
    res.badRequest = function (data) {
        res
            .status(400)
            .send(data);
    };
    /* tslint:disable-next-line no-any */
    res.created = function (data) {
        res
            .status(201)
            .send(data);
    };
    /* tslint:disable-next-line no-any */
    res.ok = function (data) {
        res
            .status(200)
            .send(data);
    };
    /* tslint:disable-next-line no-any */
    res.unauthorized = function (data) {
        res
            .status(401)
            .send(data);
    };
    /* tslint:disable-next-line no-any */
    res.forbidden = function (data) {
        res
            .status(403)
            .send(data);
    };
    /* tslint:disable-next-line no-any */
    res.notFound = function (data) {
        res
            .status(404)
            .send(data);
    };
    res.noContent = function () {
        res
            .status(204)
            .send();
    };
    res.deleted = function () {
        res
            .status(204)
            .send();
    };
    /* tslint:disable-next-line no-any */
    res.serverError = function (data) {
        res
            .status(500)
            .send(data);
    };
    /* tslint:disable-next-line no-any */
    res.file = function (file) {
        file = file || {};
        // set needed headers, before the contents are being sent
        // because we can't be sure when response has ended
        res.statusCode = 200;
        // set specific file type, if specified
        if (file.mimeType) {
            res.setHeader('Content-Type', file.mimeType);
        }
        else {
            res.setHeader('Content-Type', 'application/octet-stream');
        }
        // apply the following headers only if the properties are being specified
        if (file.name) {
            res.setHeader('Content-Disposition', "attachment; filename=" + file.name);
        }
        if (file.size) {
            res.setHeader('Content-Length', file.size);
        }
        // get the file stream
        var readableStream = file.stream;
        // if file stream is not available, close the response immediately
        if (!readableStream || !readableStream.on || !readableStream.pipe) {
            res.end();
            throw new Error('No ReadStream provided in response');
        }
        // make sure stream is ready to read data before trying to pipe into the response
        readableStream.on('open', function () {
            readableStream.pipe(res);
        });
    };
    next();
}
exports.default = enhanceResponse;
//# sourceMappingURL=enhance-response.js.map
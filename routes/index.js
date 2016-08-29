"use strict";
var express = require('express');
exports.indexRouter = express.Router();
exports.indexRouter.get('/', function (req, res, next) {
    var err = new Error('Server Internal Error');
    res.statusCode = 500;
    next(err);
});
//# sourceMappingURL=index.js.map
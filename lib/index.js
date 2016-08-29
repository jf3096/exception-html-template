"use strict";
var querystring_1 = require('querystring');
var fs = require('fs');
var ejs = require('ejs');
var index_1 = require('./utils/index');
var Promise = require('bluebird');
/**
 * Created by allen on 2016/8/25 0025.
 */
var DEFAULT_TITLE = 'Exception';
var appRoot = require('app-root-path');
function getExceptionTplPromise(error, statusCode) {
    if (!error) {
        return void 0;
    }
    var hasStack = !!error.stack;
    var errString = hasStack ? error.stack : querystring_1.stringify(error);
    var errorSubTitle = index_1.escapeHtmlBlock(errString.split('\n', 1)[0] || DEFAULT_TITLE);
    var contentArr = hasStack
        ? errString.split('\n').slice(1)
        : [errString];
    var content = contentArr.map(function (line) {
        if (line.trim().indexOf('at') === -1 || line.indexOf(appRoot) === -1 || line.indexOf('node_modules') > -1) {
            return "<li>" + index_1.escapeHtmlBlock(line) + "</li>";
        }
        return "<li class=\"source-code-color\">" + index_1.escapeHtmlBlock(line) + "</li>";
    }).join('');
    return new Promise(function (resolve, reject) {
        fs.readFile('../views/index.ejs', 'utf8', function (err, html) {
            if (err) {
                reject(err);
            }
            resolve(ejs.render(html, {
                errorTitle: DEFAULT_TITLE,
                errorSubTitle: errorSubTitle,
                statusCode: statusCode || '',
                content: content
            }));
        });
    });
}
exports.getExceptionTplPromise = getExceptionTplPromise;
//# sourceMappingURL=index.js.map
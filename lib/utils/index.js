/**
 * Created by allen on 2016/8/29 0029.
 */
"use strict";
var escapeHtml = require('escape-html');
function escapeHtmlBlock(str) {
    return escapeHtml(str).replace(/  /g, ' &nbsp;').replace(/\n/g, '<br>');
}
exports.escapeHtmlBlock = escapeHtmlBlock;
//# sourceMappingURL=index.js.map
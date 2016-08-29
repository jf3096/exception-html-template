"use strict";
var express = require('express');
var index_1 = require('../routes/index');
var index_2 = require('../lib/index');
var app = express();
app.use('/', index_1.indexRouter);
app.use('*', function (err, req, res, next) {
    index_2.getExceptionTplPromise(err, res.statusCode).then(function (htmlTpl) {
        res.send(htmlTpl);
    }, function () {
        console.log('err');
    });
});
app.listen(process.env.port || 3000, function () {
    console.log('http://localhost:' + (process.env.PORT || 3000));
});
//# sourceMappingURL=server.js.map
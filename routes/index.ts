import * as express from 'express';

export const indexRouter = express.Router();

indexRouter.get('/', function (req, res, next) {
    var err = new Error('Server Internal Error');
    res.statusCode = 500;
    next(err);
});
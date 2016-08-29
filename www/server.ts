import * as express from 'express';
import {Response, Request, NextFunction} from 'express';
import {indexRouter} from '../routes/index';
import {getExceptionTplPromise} from '../lib/index';

const app = express();

app.use('/', indexRouter);
app.use('*', (err: any, req: Request, res: Response, next: NextFunction)=> {
    getExceptionTplPromise(err, res.statusCode).then((htmlTpl: string)=> {
        res.send(htmlTpl);
    }, ()=> {
        console.log('err');
    });
});
app.listen(process.env.port || 3000, ()=> {
    console.log('http://localhost:' + (process.env.PORT || 3000));
});
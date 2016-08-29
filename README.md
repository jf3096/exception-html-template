# Exception Html Template

Used for generating a more user friendly as well as readable HTML template for exception. 

This plugin is used as part of my exception handling for email logger module

## How to use

```bash
$ npm install exception-html-template --save-dev
```

```bash
import {getExceptionTplPromise} from 'exception-html-template';
```

```bash

// javascript es6
app.use('*', (err, req, res, next)=> {
    getExceptionTplPromise(err, res.statusCode).then((htmlTpl)=> {
        res.send(htmlTpl);
    });
});

// typescript
app.use('*', (err: any, req: Request, res: Response, next: NextFunction)=> {
    getExceptionTplPromise(err, res.statusCode).then((htmlTpl: string)=> {
        res.send(htmlTpl);
    }, ()=> {
        console.log('err');
    });
});
```

## ScreenShot
![alt tag](/git-img/sample.png)

# License

The MIT License (MIT)

Copyright (c) 2016 [She Ailun](https://github.com/jf3096)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
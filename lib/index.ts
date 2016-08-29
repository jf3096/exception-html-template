import {stringify} from 'querystring';
import * as fs from 'fs';
import * as ejs from 'ejs';
import {escapeHtmlBlock} from './utils/index';
import * as Promise from 'bluebird';

/**
 * Created by allen on 2016/8/25 0025.
 */

const DEFAULT_TITLE = 'Exception';

const appRoot = require('app-root-path');

export function getExceptionTplPromise(error: Error, statusCode?: number): Promise<string> {
    if (!error) {
        return void 0;
    }
    const hasStack = !!error.stack;
    const errString = hasStack ? error.stack : stringify(error);
    const errorSubTitle = escapeHtmlBlock(errString.split('\n', 1)[0] || DEFAULT_TITLE);

    let contentArr = hasStack
        ? errString.split('\n').slice(1)
        : [errString];

    let content = contentArr.map((line: string)=> {
        if (line.trim().indexOf('at') === -1 || line.indexOf(appRoot) === -1 || line.indexOf('node_modules') > -1) {
            return `<li>${escapeHtmlBlock(line)}</li>`;
        }
        return `<li class="source-code-color">${escapeHtmlBlock(line)}</li>`;
    }).join('');

    return new Promise<string>((resolve, reject)=> {
        fs.readFile('../views/index.ejs', 'utf8', (err: Error, html: string) => {
            if (err) {
                reject(err);
            }
            resolve(
                ejs.render(html, <ITemplateModel>{
                    errorTitle: DEFAULT_TITLE,
                    errorSubTitle: errorSubTitle,
                    statusCode: statusCode || '',
                    content: content
                })
            )
        })
    })
}
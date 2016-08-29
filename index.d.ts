declare module 'exception-html-template' {
    import * as Promise from 'bluebird';
    export function getExceptionTplPromise(error: Error, statusCode?: number): Promise<string>;
}
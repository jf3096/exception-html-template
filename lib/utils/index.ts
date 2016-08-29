/**
 * Created by allen on 2016/8/29 0029.
 */

import * as escapeHtml from 'escape-html';

export function escapeHtmlBlock(str: string) {
    return escapeHtml(str).replace(/  /g, ' &nbsp;').replace(/\n/g, '<br>');
}
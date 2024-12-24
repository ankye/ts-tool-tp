#!/usr/bin/env ts-node
/*
 * @Author: ankye
 * @since: 2021-08-11 10:52:53
 * @lastTime: 2021-08-11 14:22:53
 * @LastAuthor: ankye
 * @message:
 * @文件相对于项目的路径: /toolsTP/src/main.ts
 */
import { FileUtils } from './utils/FileUtils.js';
import { getParams, Utils } from './utils/Utils.js';
function doDefault() {
    console.log('start script');
}
// doHelp read help.md and show content
function doHelp() {
    console.log(FileUtils.showMarkdown('help.md'));
}
async function main() {
    console.log('Tool start [' + Utils.date() + '] \n' + 'Home:' + FileUtils.toolHome());
    const args = getParams();
    console.log(args);
    console.log('=============================');
    if (args['help'] || args['h']) {
        doHelp();
    }
    else {
        doDefault();
    }
}
main();

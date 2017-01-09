'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
    terminal.show(true);
    
    vscode.commands.registerCommand('hext.herokuLogin', () => {
        terminal.sendText("heroku login");
    });

    vscode.commands.registerCommand('hext.herokuCreate', () => {
        terminal.sendText("heroku create");
    });

    vscode.commands.registerCommand('hext.herokuPush', () => {
        terminal.sendText("git push heroku master");
    });

    vscode.commands.registerCommand('hext.herokuScale', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'Scale the number of web dynos 0 to n'}).then(
            (data) => {
                    terminal.sendText("heroku ps:scale web "+data);
                }
        )  
    });

    vscode.commands.registerCommand('hext.herokuOpen', () => {
        terminal.sendText("heroku open");
    });

    vscode.commands.registerCommand('hext.herokuLogs', () => {
        terminal.sendText("heroku logs --tail");
    });

    vscode.commands.registerCommand('hext.herokuLocal', () => {
        terminal.sendText("heroku local web");
    });

    vscode.commands.registerCommand('hext.herokuConfig', () => {
        terminal.sendText("heroku config");
    });

    vscode.commands.registerCommand('hext.herokuConfigSet', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'Set config variable.(Like TIME=12)'}).then(
            (data) => {
                    terminal.sendText("heroku config:set "+data);
                }
        ) 
    });

    vscode.commands.registerCommand('hext.herokuGetAPiTooken', () => {
        terminal.sendText("heroku auth:token");
    });

    vscode.commands.registerCommand('hext.herokuRenameApp', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'Enter new name of app.'}).then(
            (data) => {
                    terminal.sendText("heroku apps:rename "+data);
                }
        )  
    });

    vscode.commands.registerCommand('hext.herokuGetPlugins', () => {
        terminal.sendText("heroku plugins");
    });

    vscode.commands.registerCommand('hext.herokuRemovePlugin', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'Enter plugin name to be uninstall.'}).then(
            (data) => {
                    terminal.sendText("heroku plugins:uninstall "+data);
                }
        )  
    });

     vscode.commands.registerCommand('hext.herokuUpdatePlugin', () => {
        terminal.sendText("heroku update");
    });

    vscode.commands.registerCommand('hext.herokuCheckDyno', () => {
        terminal.sendText("heroku ps");
    });

    





  
    
}

// this method is called when your extension is deactivated
export function deactivate() {
}
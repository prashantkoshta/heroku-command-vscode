'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let loginDisposable = vscode.commands.registerCommand('hext.herokuLogin', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku login");
    });
    //context.subscriptions.push(loginDisposable);

    let createDisposable = vscode.commands.registerCommand('hext.herokuCreate', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku create");
    });

    let pushDisposable = vscode.commands.registerCommand('hext.herokuPush', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("git push heroku master");
    });

    let scaleDisposable = vscode.commands.registerCommand('hext.herokuScale', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku ps:scale web=1");
    });

    let openDisposable = vscode.commands.registerCommand('hext.herokuOpen', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku open");
    });

    let logsDisposable = vscode.commands.registerCommand('hext.herokuLogs', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku logs --tail");
    });

    let localDisposable = vscode.commands.registerCommand('hext.herokuLocal', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku local web");
    });

    let configDisposable = vscode.commands.registerCommand('hext.herokuConfig', () => {
        let terminal:vscode.Terminal = vscode.window.createTerminal("Heroku");
        terminal.show(true);
        terminal.sendText("heroku config");
    });

  
    
}

// this method is called when your extension is deactivated
export function deactivate() {
}
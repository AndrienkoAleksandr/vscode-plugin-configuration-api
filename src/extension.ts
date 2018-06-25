'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Test configuration api!');

    let disposable = vscode.commands.registerCommand('extension.showWorkspaceConfiguration', () => {
       
       const ext = vscode.extensions.getExtension("logarifm.vscode-hello");
       if (ext) {
           console.log("Extension ", ext.id);
           console.log("Package.json ", ext.packageJSON);
           console.log("is active ", ext.isActive);
           console.log("extension path ", ext.extensionPath);        
           const wsConfig = vscode.workspace.getConfiguration(undefined, vscode.Uri.file(ext.extensionPath));
           console.log("config by path ", wsConfig.get());
       }
       
       
        const wsConfig = vscode.workspace.getConfiguration("logarifm.vscode-hello", undefined);

        // const title = wsConfig.get<string | undefined>("title");
        console.log("Test!", wsConfig);

        // if (title) {
        //     vscode.window.showInformationMessage(title);
        // }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    const term = vscode.window.createTerminal({cwd: "/home/user/projects", name: "TestProject"});
    term.show();
}
'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Test configuration api!');

    let disposable = vscode.commands.registerCommand('extension.showWorkspaceConfiguration', () => {
       
       const ext = vscode.extensions.getExtension("logarifm.vscode-hello");
       if (ext) {
           console.log("Extension id", ext.id);
    //        console.log("Package.json ", ext.packageJSON);
    //        console.log("is active ", ext.isActive);
    //        console.log("extension path ", ext.extensionPath);        
            const wsConfigByPath = vscode.workspace.getConfiguration(undefined, vscode.Uri.file(ext.extensionPath));
            console.log("config by path ", wsConfigByPath);
    //        const defWsConfig = vscode.workspace.getConfiguration();
    //        console.log("def config ", defWsConfig);
       }

        // const extConfig = vscode.workspace.getConfiguration('logarifm.vscode-hello', undefined);
        // const property = extConfig.get<string | undefined>("typescript.useCodeSnippetsOnMethodSuggest");
        // console.log("property " + property);
        // console.log("Test!", extConfig);

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
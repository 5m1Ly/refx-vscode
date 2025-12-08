import * as vscode from 'vscode';
import { ReferenceLensProvider } from './codeLensProvider';
import { UnusedCodeScanner } from './unusedCodeScanner';
import { ReferenceHoverProvider } from './hoverProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('ReferenceX extension is now active');

    const provider = new ReferenceLensProvider(context);

    // Register CodeLens provider for supported languages
    const languages = ['typescript', 'javascript', 'typescriptreact', 'javascriptreact'];
    
    for (const language of languages) {
        const disposable = vscode.languages.registerCodeLensProvider(
            { language, scheme: 'file' },
            provider
        );
        context.subscriptions.push(disposable);
    }

    // Register hover provider for supported languages
    const hoverProvider = new ReferenceHoverProvider();
    for (const language of languages) {
        const hoverDisposable = vscode.languages.registerHoverProvider(
            { language, scheme: 'file' },
            hoverProvider
        );
        context.subscriptions.push(hoverDisposable);
    }

    // Listen to document changes to refresh CodeLens
    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument((e) => {
            if (languages.includes(e.document.languageId)) {
                provider.refresh();
            }
        })
    );

    // Add provider to subscriptions for disposal
    context.subscriptions.push(provider);

    // Register unused code scanner command
    const scanner = new UnusedCodeScanner();
    const scanCommand = vscode.commands.registerCommand(
        'referencex.scanUnusedCode',
        () => scanner.showUnusedCodeOverview()
    );
    context.subscriptions.push(scanCommand);
}

export function deactivate() {}

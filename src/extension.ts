// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.helloWorldModal', () => {
			vscode.window.showInformationMessage(`Here's a long message with some newlines in it. This message is intended to stretch the modal dialog so I can test wrapping. So that's why this message is so long.` +
				`\n\nThis should be on a new line. This is another long line but it should be on a new line because there are two newline characters at the start of this line. They should render in the browser.` +
				`\nThis should also be on a new line. There is a single newline at the start of this line.`,
				{ modal: true }
			);
		}),
		vscode.commands.registerCommand('extension.helloWorldModalShort', () => {
			vscode.window.showInformationMessage(`Here's a short message.`,
				{ modal: true }
			);
		})
	);
}

// アプリケーション作成用のモジュールを読み込み
const { app, BrowserWindow } = require('electron');

// メインウィンドウ
let mainWindow;

function createWindow() {
    // メインウィンドウを作成します         //minとmaxの設定を有効にする
    mainWindow = new BrowserWindow({ titleBarStyle: 'hidden', width: 830, height: 600,/*minWidth:830, maxWidth:830, minHeight:600, maxHeight:600,*/ webPreferences: { nodeIntegration: true } });

    // メインウィンドウに表示するURLを指定します
    // （今回はmain.jsと同じディレクトリのindex.html）
    mainWindow.loadFile('./dist/index.html');

    // デベロッパーツールの起動
    mainWindow.webContents.openDevTools();

    // メインウィンドウが閉じられたときの処理
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

//  初期化が完了した時の処理
app.on('ready', createWindow);

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
    // macOSのとき以外はアプリケーションを終了させます
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', () => {
    // メインウィンドウが消えている場合は再度メインウィンドウを作成する
    if (mainWindow === null) {
        createWindow();
    }
});
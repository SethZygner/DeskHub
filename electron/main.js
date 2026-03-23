const { app, BrowserWindow, ipcMain, dialog, file } = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs').promises;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  mainWindow.loadFile(
    url.format(path.join(__dirname, `../dist/electron-app-testing/browser/index.html`)),
  );

  //mainWindow.webContents.openDevTools();

  mainWindow.setMenu(null);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog()
  if (!canceled) {
    const filePath = filePaths[0]
    const content = await fs.readFile(filePath, 'utf-8')
    return { filePath, content }
  }
}


app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen);
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

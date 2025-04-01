import isDev from "electron-is-dev";

import { app, BrowserWindow} from 'electron';
import path from "path";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow: BrowserWindow | null = null

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            devTools: isDev,

        },
    });

    // if(isDev) {
    //     mainWindow.loadURL('http://localhost:3000');
    //     mainWindow.webContents.openDevTools({ mode: "detach" });
    // } else {
    //     mainWindow.loadFile(path.join(__dirname, './build/index.html'))
    // }

    // ***중요***
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../dist/index.html")}`
    );

    // mainWindow.loadURL('http://localhost:3000').then(r => {});

    if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

    mainWindow.setResizable(true);
    mainWindow.on("closed", () => {
        mainWindow = null;
        app.quit();
    });
    mainWindow.focus();
}

app.on("ready", createWindow);

app.on("activate", () => {
    if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

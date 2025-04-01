import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | null;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL("http://localhost:5173"); // Vite 개발 서버
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

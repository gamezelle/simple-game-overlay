/*
 * Player.GG Simple Game Overlay
 */

const path = require("path");
const {app, BrowserWindow, ipcMain} = require("electron");

function onReady() {

    const win = new BrowserWindow({
        title: "Player.GG Simple Game Overlay",
        icon: path.join(__dirname, "assets/icon.ico"),
        width: 600,
        height: 400,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Open the developer tools
//     win.webContents.openDevTools();

    // and load the index.html of the app.
//     win.loadFile("docs/index.html");
    win.loadURL("https://playergg.github.io/simple-game-overlay/");

//     win.on("page-title-updated", (evt) => {
//         evt.preventDefault();
//     });

    ipcMain.on("pgg-minimize-app", () => {
        win.minimize();
    });

    ipcMain.on("pgg-close-app", () => {
        win.close();
    });

}

app.on("ready", onReady);

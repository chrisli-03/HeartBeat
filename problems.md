1. When trying to import 'electron-store' shows error 'fs.existsSync is not a function'
    in electron.js, add 'nodeIntegration: true' to BrowserWindow.webPreferences
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: __dirname + './favicon.png',
        webPreferences: {
          webSecurity: false,
          nodeIntegration: true
        }
    })
    then use 'window.require' instead of 'import' or 'require' to import 'electron-store'
    const Store = window.require('electron-store')
    but browser version no longer works
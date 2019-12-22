// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')
const Store = require('electron-store')
const store = new Store()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let childWindows = []
let tray = null

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: __dirname + './favicon.png',
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  })
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Minimize to tray instead of closing
  mainWindow.on('minimize', function (event) {
    event.preventDefault()
    store.get('beats').forEach((beat, i) => {
      const child = new BrowserWindow({
        width: 200,
        height: 100,
        x: 0,
        y: i * 100,
        frame: false,
        webPreferences: {
          webSecurity: false,
          nodeIntegration: true
        }
      })
      child.setAlwaysOnTop(true)
      const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html?ip=' + beat.ip),
        protocol: 'file:',
        slashes: true
      })
      child.loadURL(startUrl)
      childWindows.push(child)
    })
    mainWindow.hide()
  })

  // Restore from minimize
  mainWindow.on('restore', function (event) {
    while (childWindows.length > 0) {
      childWindows.pop().destroy()
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  tray = new Tray(path.join(__dirname, './logo22.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: 'Quit',
      click: () => {
        app.isQuiting = true
        app.quit()
      }
    }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  tray.addListener('double-click', () => {
    mainWindow.show()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
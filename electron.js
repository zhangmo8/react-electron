const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')

// the window variable
let mainWindow;

// create the base window 
function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 })
  mainWindow.loadURL(process.env.NODE_ENV === 'development' ? 'http://localhost:5066' : `file://${path.join(__dirname, './build-view/index.html')}`)
  mainWindow.on('closed', () => mainWindow = null)
}

// when the electron is ready that we can start the web server
app.on('ready', createWindow)

// quit this application when the window is closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// start the server if the application is running
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

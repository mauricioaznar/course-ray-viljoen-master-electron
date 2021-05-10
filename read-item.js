const {BrowserWindow} = require('electron')

let offscreenWindow


module.exports = (url, callback) => {
    // create the offscren window
    offscreenWindow = new BrowserWindow({
        width: 500,
        height: 500,
        show: false,
        webPreferences: {
            offscreen: true
        }
    })

    // load item url

    console.log(url)

    offscreenWindow.loadURL(url)

    offscreenWindow.webContents.on('did-finish-load', (e) => {
        let title = offscreenWindow.getTitle()

        offscreenWindow.webContents.capturePage().then((image) => {
            let screenshot = image.toDataURL()

            callback({title: title, screenshot: screenshot, url})
        })
        offscreenWindow.close()
        offscreenWindow = null
    })
}
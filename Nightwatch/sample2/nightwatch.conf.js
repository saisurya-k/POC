const BINPATH = './bin/';

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
    "src_folders": [
        "tests" // Where you are storing your Nightwatch e2e tests
    ],
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": "./bin/selenium.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
            "webdriver.chrome.driver": "./bin/chromedriver"
        }
    },
    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": './screenshots', // save screenshots here
                on_failure: true,
                on_error: false
            },
            "globals": {
                "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "phantomjs"
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // turn off to test progressive enhancement
            }
        },
        "phantomjs": {
            desiredCapabilities: {
                browserName: "phantomjs",
                "phantomjs.cli.args": ["--ignore-ssl-errors=true"],
                "phantomjs.binary.path": "C:/350313/Softwares/Binaries/phantomjs-2.1.1-windows/bin",
                javascriptEnabled: true,
                acceptSslCerts: true,
                takesScreenshot: true
            }
        }
    }
}


require('fs').stat(BINPATH + 'selenium.jar', function(err, stat) { // got it?
    if (err || !stat || stat.size < 1) {
        require('selenium-download').ensure(BINPATH, function(error) {
            if (error) throw new Error(error); // no point continuing so exit!
            console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
        });
    }
});

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [
    path.join(__dirname, 'phantomjs-script.js'),
    'some other argument (passed to phantomjs script)'
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    console.log(binPath);
})
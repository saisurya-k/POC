module.exports = {
    src_folders: ["tests"],
    output_folder: "reports",
    selenium: {
        start_process: false,
        server_path: "bin/selenium-server-standalone-3.0.1",
        log_path: "",
        port: 4444,
        cli_args: {
            "webdriver.chrome.driver": "bin/chromedriver",
            "webdriver.gecko.driver": "",
            "webdriver.edge.driver": ""
        }
    },
    test_settings: {
        default: {
            launch_url: "http://localhost",
            selenium_port: 4444,
            selenium_host: "localhost",
            silent: true,
            screenshots: {
                enabled: true,
                path: "screenshots"
            },
            desiredCapabilities: {
                browserName: "chrome"
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        },
        edge: {
            desiredCapabilities: {
                browserName: "MicrosoftEdge"
            }
        }
    }
}
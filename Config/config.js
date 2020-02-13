var testdata1=require('../Resources/Testdata.json')
exports.config= {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Tests/spec.js'],
    directConnect: true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },
    capabilities: {
        directConnect:true,
        'browserName': 'chrome',
        capabilities: {
            'browserName': 'chrome',

            'version':'79.0.3945.117',
            'loggingPrefs': {
                'driver': 'WARNING',
                'server': 'WARNING',
                'browser': 'INFO'

            }
        },
        chromeOptions: {
            args: ["--incognito"],

        }
    },
    onPrepare: function() {
        var obj=require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\PageObjects\\Loginpage.js');
        browser.manage().timeouts().implicitlyWait(20000)
        browser.ignoreSynchronization=true;
        browser.get(testdata1.url);
        browser.driver.manage().window().maximize();
        obj.username.sendKeys(testdata1.UserId)

        obj.password.sendKeys(testdata1.Pass);
        obj.loginbutton.click();
        browser.waitForAngular(true);

        var jasmineReporters =require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll:true,
            savePath:'Reports/XML',
            filePrefix:'xmloutput'

        }));

        var fs = require('fs-extra');

        fs.emptyDir('./Reports/HTMLReport/Screenshots', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('./Reports/HTMLReport/Screenshots/' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    },
    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: 'Reports/HTMLReport',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './Screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('Reports/XML/xmloutput.xml', testConfig);
        });
        var nodemailer = require("nodemailer");
        return new Promise(function (fulfill, reject){
            var transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secure: false, // use SSL
                auth: {
                    user: 'sumant.pattanshetti@sapiens.com',
                    pass: 'Decision3'
                },
                tls: {
                    ciphers:'SSLv3'
                }
            });
            var mailOptions = {
                from: '"Sumant" <sumant.pattanshetti@sapiens.com>', // sender address (who sends)
                to: 'sumant.pattanshetti@sapiens.com' , // list of receivers (who receives)
                subject: 'NG Automation Report', // Subject line
                text: 'Hi', // plaintext body
                html: '<b>Hi Sumant </b><br> This is the E2E Test Excecution Report please find the attachments', // html body
                attachments:[
                    {
                        'path': './Reports/HTMLReport/ProtractorTestReport.html'
                    }
                ]
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    reject(err);
                }
                fulfill(info);
            });
        });

    }
};
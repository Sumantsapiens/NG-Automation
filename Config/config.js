
//var data= require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
//var data =require('Resources/Testdata.json');
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

        fs.emptyDir('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Screenshots', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Screenshots\\screenshot' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
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
               screenshotPath: 'C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Screenshots',
               testBrowser: browserName,
               browserVersion: browserVersion,
               modifiedSuiteName: false,
               screenshotsOnlyOnFailure: true,
               testPlatform: platform
           };
           new HTMLReport().from('Reports/XML/xmloutput.xml', testConfig);
       });
   }
};

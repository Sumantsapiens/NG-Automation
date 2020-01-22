
//var data= require('C:\\Users\\sumant.pattanshetti\\WebstormProjects\\NG_Automation1\\Resources\\Testdata.json');
//var data =require('Resources/Testdata.json');

exports.config= {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Tests/spec.js'],

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
        browser.get('http://bdmsuat7:18821/login.html');
        browser.driver.manage().window().maximize();
        obj.username.sendKeys('sumant')

        obj.password.sendKeys('Decision1');
        obj.loginbutton.click();
        browser.waitForAngular(true);

        var jasmineReporters =require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll:true,
            savePath:'Reports/XML',
            filePrefix:'xmloutput'
            
        }));
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
               screenshotPath: 'Reports/Screenshots',
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
var log4js = require('log4js');


log4js.configure(
    {
        appenders: {
            file: {
                type: 'file',
                filename: 'Logs/Log4js.log',
                maxLogSize: 10 * 1024 * 1024, // = 10Mb
                backups: 5, // keep five backup files
                compress: true, // compress the backups
                encoding: 'utf-8',
                mode: 0o0640,
                flags: 'w+'
            },
            dateFile: {
                type: 'dateFile',
                filename: 'Logs/more-Log4js.log',
                pattern: 'yyyy-MM-dd-hh',
                compress: true
            },
            out: {
                type: 'stdout'
            }
        },
        categories: {
            default: {appenders: ['file', 'dateFile'], level: 'Debug'}
        }
    }
);


var logger = log4js.getLogger('things');

Object.defineProperty(exports, "LOG", {
    value: logger,
});
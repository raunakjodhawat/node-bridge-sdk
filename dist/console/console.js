"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var fs = __importStar(require("fs"));
var consoleConstants_1 = require("../constants/consoleConstants");
var types_1 = require("./types");
var Logger = /** @class */ (function () {
    function Logger(_a) {
        var _b = _a.name, name = _b === void 0 ? consoleConstants_1.consoleConstant.fileName : _b, _c = _a.logInFile, logInFile = _c === void 0 ? {
            log: true,
            error: true,
            debug: false,
            info: false,
            warn: true,
            trace: false,
            table: false,
        } : _c, _d = _a.displayToConsole, displayToConsole = _d === void 0 ? {
            log: false,
            error: false,
            debug: false,
            info: false,
            warn: false,
            trace: false,
            table: true,
        } : _d, _e = _a.logWithTrace, logWithTrace = _e === void 0 ? {
            log: false,
            error: false,
            debug: false,
            info: false,
            warn: false,
            trace: true,
            table: false
        } : _e, _f = _a.appendTimeStamp, appendTimeStamp = _f === void 0 ? {
            log: true,
            error: true,
            debug: true,
            info: true,
            warn: true,
            trace: true,
            table: false
        } : _f, _g = _a.outputFileName, outputFileName = _g === void 0 ? consoleConstants_1.consoleConstant.outputFileName : _g, _h = _a.errorOutputFileName, errorOutputFileName = _h === void 0 ? consoleConstants_1.consoleConstant.errorOutputFileName : _h;
        this.name = name;
        this.logInFile = logInFile;
        this.displayToConsole = displayToConsole;
        this.logWithTrace = logWithTrace;
        this.appendTimeStamp = appendTimeStamp;
        this.output = fs.createWriteStream(outputFileName, { flags: 'a+' });
        this.errorOutput = fs.createWriteStream(errorOutputFileName, { flags: 'a+' });
        this.logger = new console_1.Console({ stdout: this.output, stderr: this.errorOutput });
    }
    Logger.prototype.getMessage = function (functionName, message) {
        if (this.appendTimeStamp[functionName])
            return "[" + functionName + "](" + this.name + "):[" + (new Date()).toISOString() + "]\t: " + message;
        return "[" + functionName + "](" + this.name + ")\t: " + message;
    };
    Logger.prototype.printLog = function (functionName) {
        var message = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            message[_i - 1] = arguments[_i];
        }
        var printMessage = this.getMessage(functionName, message.reduce(function (acc, curr) { return acc + " " + curr; }, ' '));
        if (this.logInFile[functionName]) {
            if (this.logWithTrace[functionName]) {
                this.logger.trace(printMessage);
            }
            else {
                this.logger[functionName](printMessage);
            }
        }
        if ((this.displayToConsole[functionName]) || (!this.displayToConsole[functionName] && !this.logInFile[functionName])) {
            if (this.logWithTrace[functionName]) {
                console.trace(printMessage);
            }
            else {
                console[functionName](printMessage);
            }
        }
    };
    Logger.prototype.log = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.log], message, false));
    };
    Logger.prototype.error = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.error], message, false));
    };
    Logger.prototype.debug = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.debug], message, false));
    };
    Logger.prototype.info = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.info], message, false));
    };
    Logger.prototype.warn = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.warn], message, false));
    };
    Logger.prototype.table = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.table], message, false));
    };
    Logger.prototype.trace = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        this.printLog.apply(this, __spreadArray([types_1.functionNamesEnum.trace], message, false));
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=console.js.map
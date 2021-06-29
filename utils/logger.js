
const ANSI_STYLES = { reset: [0, 22], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], blink: [5, 25], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29], black: [30, 39], blackBright: [90, 39], bgBlack: [40, 49], bgBlackBright: [100, 49], red: [31, 39], redBright: [91, 39], bgRed: [41, 49], bgRedBright: [101, 49], gray: [90, 39], green: [32, 39], greenBright: [92, 39], bgGreen: [42, 49], bgGreenBright: [102, 49], yellow: [33, 39], yellowBright: [93, 39], bgYellow: [43, 49], bgYellowBright: [103, 49], blue: [34, 39], blueBright: [94, 39], bgBlue: [44, 49], bgBlueBright: [104, 49], magenta: [35, 39], magentaBright: [95, 39], bgMagenta: [45, 49], bgMagentaBright: [105, 49], cyan: [36, 39], cyanBright: [96, 39], bgCyan: [46, 49], bgCyanBright: [106, 49], white: [37, 39], whiteBright: [97, 39], bgWhite: [47, 49], bgWhiteBright: [107, 49] }

function method(key) { return ({ YYYY: ['getFullYear', 4], YY: ['getFullYear', 2], MM: ['getMonth', 2, 1], DD: ['getDate', 2], HH: ['getHours', 2], mm: ['getMinutes', 2], ss: ['getSeconds', 2], ms: ['getMilliseconds', 3] })[key] }
function getTimestamp (pattern, date) {
if (typeof pattern !== 'string') {
date = pattern;
pattern = 'YYYY:MM:DD';
}
if (!date) date = new Date();
function timestamp() {
var regex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/;
var match = regex.exec(pattern);
if (match) {
var increment = method(match[1]);
var val = '00' + String(date[increment[0]]() + (increment[2] || 0));
var res = val.slice(-increment[1]) + (match[2] || '');
pattern = pattern.replace(match[0], res);
timestamp();
}}
timestamp(pattern);
return pattern;
};

function colored (msg, color) {
return '\u001b['+ ANSI_STYLES[color][0] + 'm' + msg + '\u001b[' + ANSI_STYLES[color][1] + 'm'
};

function log (msg, color, file) {
const time = '[' + colored(getTimestamp('HH:mm:ss'), 'gray') + ']';
const message = colored(msg, color)
if (!file || !msg) throw new ReferenceError('Dosya ismi veya mesaj eklenmemiş.')
if (!file.includes('\\')) return console.log(`${time} ${file} | ${message}`)
const source = file.slice(file.lastIndexOf("\\") + 1, file.length).replace(".js", "");
console.log(`${time} ${source} | ${message}`)
}

const colors = { log: 'gray', info: 'green', warn: 'yellow', debug: 'cyan', error: 'red' };

class Logger {
constructor() {

}

log = (source, msg) => {
log(msg, colors.log, source)
}

info = (source, msg) => {
log(msg, colors.info, source)
}

warn = (source, msg) => {
log(msg, colors.warn, source) 
}

debug = (source, msg) => {
log(msg, colors.debug, source)
}

error = (source, msg) => {
log(msg, colors.error, source)
}

}

module.exports = new Logger();
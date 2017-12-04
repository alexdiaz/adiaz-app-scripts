"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
function start(args) {
    switch (args[2]) {
        case 'generator':
            generator_1.Generator.init(args);
            return;
        default: invalidCommand();
    }
}
exports.start = start;
function invalidCommand() {
    console.log('Invalid command');
}

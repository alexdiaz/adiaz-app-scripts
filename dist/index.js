"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
function start(args) {
    switch (args[2]) {
        /**
         * Generator
         */
        case 'generator':
        case '-g':
            generator_1.Generator.init(args[3], args[4]);
            return;
        default: console.log('Invalid command');
    }
}
exports.start = start;

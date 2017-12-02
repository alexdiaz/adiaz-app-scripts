#!/usr/bin/env node
// jshint esversion:6

require('./generator');

function start(args) {
  switch (args[2]) {
    case 'generator':
      startGenerator(args);
      return;
    default: invalidCommand();
  }
}

function invalidCommand() {
  console.log('Invalid command');
}

start(process.argv);

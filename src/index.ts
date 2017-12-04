import { Generator } from './generator';

export function start(args: any) {
  switch (args[2]) {
    case 'generator':
    Generator.init(args);
      return;
    default: invalidCommand();
  }
}

function invalidCommand() {
  console.log('Invalid command');
}

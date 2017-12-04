import { Generator } from './generator';

export function start(args: any) {
  switch (args[2]) {
    case 'generator':
      Generator.init(args[3], args[4]);
      return;
    default: invalidCommand();
  }
}

function invalidCommand() {
  console.log('Invalid command');
}

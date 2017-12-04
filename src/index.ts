import { Generator } from './generator';

export function start(args: any) {
  switch (args[2]) {

    /**
     * Generator
     */
    case 'generator': case '-g':
      Generator.init(args[3], args[4]);
      return;


    default: console.log('Invalid command');
  }
}


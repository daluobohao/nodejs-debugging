import { log } from './utils.js';
import minimist from 'minimist'
const argv = minimist(process.argv.slice(2), {
    alias: {
        s: 'silent'
    },
    boolean: ['silent'],
});

function run(){
    console.log('共同进步\n');
    console.log('argv', argv);
    console.log('\n');
    log(argv, '如果是静默模式，这句不会输出');
}
run();
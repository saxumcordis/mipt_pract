import defaultMultipyImport, { minus } from './utils.js';
import { sum } from './utils.js';
import { divideNum as divide } from './utils.js';
import * as utils from './utils.js';

console.log('multiply, ', defaultMultipyImport(2, 4));
console.log('sum, ', sum(2, 1));
console.log('divide, ', divide(10, 5));
console.log('minus, ', utils.minus(10, 2))


/** свой велосипед "модулей" */
console.log('multiply2, ', Calc.multiply(2, 100))
console.log('sum2, ', Calc.sum(2, 3))
console.log('divide2, ', Calc.divide(2, 3))
console.log('minus2, ', Calc.minus(2, 3))

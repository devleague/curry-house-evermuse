var curry = require('./curry');

function calculate (arg1) {

  return function(arg2) {

    if (arg2 === '+' || arg2 === 'add') {

      return function(arg3) {

        return arg1 + arg3;

      };

    }

    if (arg2 === '-' || arg2 === 'subtract') {

      return function(arg3) {

        return arg1 - arg3;

      };

    }

    if (arg2 === '*' || arg2 === 'multiply') {

      return function(arg3) {

        return arg1 * arg3;

      };

    }

    if (arg2 === '/' || arg2 === 'divide') {

      return function(arg3) {

        return arg1 / arg3;

      };

    }

    if (arg2 === '%' || arg2 === 'modulo') {

      return function(arg3) {

        return arg1 % arg3;

      };

    }

    if (arg2 === '^' || arg2 === 'power of') {

      return function(arg3) {

        return Math.pow(arg1, arg3);

      };

    }

  };

}

function random (start) {

  return {

    'to' : function(end) {

      return Math.floor(Math.random() * (end - start) + start);

      //parseInt(Math.random( start, end ).toFixed(2) * 100);

    },

    'toInclude' : function(end) {

      return Math.floor(Math.random() * ( end - start + 1)) + start;

    }

  };

}

function concat(arg1, arg2) {

  return arg1.toString() + arg2.toString();

}

var prependGreeting = curry(concat, 'Hello ');

function add (arg1, arg2, arg3) {

  return arg1 + arg2 + arg3;

}

var add4and5 = curry(add, 4, 5 );

function calculator(operation) {

  return function( op2, op1 ) {

    if ( operation === '+' || operation === 'add') {

      return op1 + op2;

    }

    if (operation === '-' || operation === 'subtract') {

      return op1 - op2;

    }

    if (operation === '*' || operation === 'multiply') {

      return op1 * op2;

    }

    if (operation === '/' || operation === 'divide') {

      return op1 / op2;

    }

    if (operation === '%' || operation === 'modulo') {

      return op1 % op2;

    }

    if (operation === '^' || operation === 'power of') {

      return Math.pow(op1, op2);

    }

  };

}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};
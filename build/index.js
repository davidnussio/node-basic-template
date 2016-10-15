"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = [generatorFunction].map(regeneratorRuntime.mark);

var asyncFunction = function asyncFunction(value) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  return new Promise(function (result, reject) {
    return setTimeout(function () {
      return result(value);
    }, timeout);
  });
};

function generatorFunction(numbers) {
  var i;
  return regeneratorRuntime.wrap(function generatorFunction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 1;

        case 1:
          if (!(i <= numbers)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return i;

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

exports.asyncFunction = asyncFunction;
exports.generatorFunction = generatorFunction;
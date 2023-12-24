const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackArr = new Array();
  }
  push(element) {
    return this.stackArr.push(element);
  }

  pop() {
    return this.stackArr.pop();
  }

  peek() {
    return this.stackArr.length > 0 ? this.stackArr[this.stackArr.length - 1] : null;
  }
}

module.exports = {
  Stack
};

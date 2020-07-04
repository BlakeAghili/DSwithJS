class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  printStack() {
    let str = "";
    for(let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }

    return str;
  }
}

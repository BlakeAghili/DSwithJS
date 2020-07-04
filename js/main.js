// let's create a stack and push some stuff to it.
let myStack = new Stack();
myStack.push(2);
myStack.push(5);
myStack.push(12);
console.log(myStack.printStack());
myStack.pop();
console.log(myStack.printStack());

// let's create a Queue and do stuff to it.
let myQ = new Queue();
myQ.enqueue(2);
myQ.enqueue("Hello");
myQ.enqueue(true);
console.log(myQ.printQueue());
myQ.dequeue();
console.log(myQ.printQueue());

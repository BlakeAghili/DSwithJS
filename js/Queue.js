class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  printQueue() {
    let str = "";
    for(let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + " ";
    }

    return str;
  }
}

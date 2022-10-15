const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
  }
  node = new ListNode();


  enqueue(value) {
    if (this.node.value !== null)
      this.node.next = value;
    else
      this.node = value;
    console.log(this.node)
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
let queue = new Queue;
console.log(this.node === null)
queue.enqueue(2)
queue.enqueue(2)
queue.enqueue(3)

module.exports = {
  Queue
};

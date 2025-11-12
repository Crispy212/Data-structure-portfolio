function createNode(data) {
  return {
    data: data,
    next: null
  };
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    const newNode = createNode(data);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;

    const removedData = this.head.data;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return removedData;
  }

  peek() {
    return this.head ? this.head.data : null;
  }

  size() {
    return this.length;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current.data;
  }
}

const q = new Queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log(q.peek());
console.log(q.size());
console.log(q.get(2));
console.log(q.dequeue());
console.log(q.peek());
console.log(q.size());
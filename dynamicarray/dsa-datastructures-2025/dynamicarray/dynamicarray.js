import StaticArray from "../staticarray/staticarray.js";

export default class DynamicArray {
  constructor(capacity = 10) {
    this.arrCapacity = capacity;
    this.aArray = new StaticArray(capacity);
    this.arrSize = 0;
  }

  add(item) {
    if (this.arrSize >= this.arrCapacity) {
      this.grow();
    }
    this.aArray.set(this.arrSize, item);
    this.arrSize++;
  }

  get(index) {
    if (index < 0 || index >= this.arrSize) {
      throw new RangeError(`Index ${index} er uden for rækkevidde`);
    }
    return this.aArray.get(index);
  }

  set(index, item) {
    if (index < 0 || index >= this.arrSize) {
      throw new RangeError(`Index ${index} er uden for rækkevidde`);
    }
    this.aArray.set(index, item);
  }

  size() {
    return this.arrSize;
  }

  capacity() {
    return this.arrCapacity;
  }

  grow() {
    const newCapacity = this.arrCapacity * 2;
    const newArray = new StaticArray(newCapacity);
    for (let i = 0; i < this.arrSize; i++) {
      newArray.set(i, this.aArray.get(i));
    }
    this.aArray = newArray;
    console.log(`Array capacity increased from ${this.arrCapacity} to ${newCapacity}`);
    this.arrCapacity = newCapacity;
  }

  insert(index, item) {
    if (index < 0 || index > this.arrSize) {
      throw new RangeError(`Index ${index} out of bounds`);
    }

    if (this.arrSize >= this.arrCapacity) {
      this.grow();
    }

    for (let i = this.arrSize; i > index; i--) {
      this.aArray.set(i, this.aArray.get(i - 1));
    }

    this.aArray.set(index, item);
    this.arrSize++;
  }

  remove(index) {
    if (index < 0 || index >= this.arrSize) {
      throw new RangeError(`Index ${index} out of bounds`);
    }

    for (let i = index; i < this.arrSize - 1; i++) {
      this.aArray.set(i, this.aArray.get(i + 1));
    }

    this.aArray.set(this.arrSize - 1, null);
    this.arrSize--;
  }

  clear() {
    this.aArray = new StaticArray(this.arrCapacity);
    this.arrSize = 0;
  }
}

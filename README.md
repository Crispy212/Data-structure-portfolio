# Data Structures

This is a (growing) collection of data structures implemented in JavaScript. Since JavaScript has an extremely flexible array-type, that can be used for almost anything, so these are rarely necessary in actual use. They are mostly intended for learning, not intended for use in real world projects.

Every data structure is written as an importable module with a class defining the structure. Most are independent, but a lot of them relies on the StaticArray, it can however easily be replaced by a normal JavaScript array.

Even though they are usually intended as Abstract Data Structures, all of the data structures expose their inner workings, so the implementation can be tested for correctness.
The README for each data structure, documents the public as well as "private/inner" interface fully.

Every data structure comes with comprehensive tests written with Mocha, and mostly using Node's built-in assert library. The tests focus on both functionality as well as (reported) performance.

## Download and initialize
Clone or Fork this repository, and run `npm i` to install necessary packages (only Mocha so far) and set up Node for using modules.

### Run tests
To run the tests, navigate to the subfolder of the particular data structure you want to test, and run `npx mocha` in that folder. E.g.

```bash
    cd staticarray
    npx mocha
```    
to run tests on the StaticArray type.

## The data structures

The structures are:

* [StaticArray](/staticarray/) - an implementation of a fixed size array.
* [DynamicArray](/dynamicarray/) - an implementation of a dynamic list, that uses an underlying fixed size array





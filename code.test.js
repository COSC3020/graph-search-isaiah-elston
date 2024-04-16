/*
  NOTE: At first, I was attempting to create property-based testing similarly to a lot of Dr. Kotthoff's testing
  examples. After that gave me trouble, I did look at a couple of my peers' testing code to see what they were doing.
  However, I did not copy any code, I asked Claude AI to give me some some simple graphs comprised of adjacency lists 
  and then wrote all of the assert statements based on what was given to me. I covered every edge case I could think of
  and the testing seems to be sufficiently comprehensive in my opinon.
*/
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


const emptyGraph = [];

const linearGraph = [
  [1],
  [2],
  [3],
  [4],
  []
];

const treeGraph = [
  [1, 2],
  [3, 4],
  [5, 6],
  [],
  [],
  [],
  []
];


const cyclicGraph = [
  [1, 2],
  [2, 3],
  [3, 0]
];


const disconnectedGraph = [
  [1, 2],
  [0, 2],
  [0, 1],
  [],
  [5],
  [4]
];

assert(JSON.stringify(depthFirstSearch([[]],0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(emptyGraph,0,0)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(linearGraph,1,3)) === JSON.stringify([1,2,3]));
assert(JSON.stringify(depthFirstSearch(linearGraph,1,99)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(treeGraph,0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(treeGraph,0,4)) === JSON.stringify([0, 1, 4]));
assert(JSON.stringify(depthFirstSearch(cyclicGraph,0,0)) === JSON.stringify([0]));
assert(JSON.stringify(depthFirstSearch(cyclicGraph,0,3)) === JSON.stringify([0, 1, 2, 3]));
assert(JSON.stringify(depthFirstSearch(disconnectedGraph, 0, 5)) === JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(disconnectedGraph, 4, 5)) === JSON.stringify([4, 5]));
assert(JSON.stringify(depthFirstSearch(disconnectedGraph, 0, 1)) === JSON.stringify([0, 1]));
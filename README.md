[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/M24O3lId)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your answer, including your reasoning, to this markdown file.

### Answer

#### TL;DR

`depthFirstSearch(...)` $\in \mathrm{\Theta}(\lvert V \rvert + \lvert E \rvert)$

#### Reasoning

Since we're searching through graphs, the time complexity is largely influenced by the data structure being used to compose the graphs. In this case, the algorithm is designed to work with graphs comprised of adjacency *lists*.

The worst-case for Depth-First Search is when the shortest-path spans all of the nodes in the graph. When using adjacency lists, the algorithm will have to visit every *node* (each list in the graph) as well as every *edge* (each element in each list) inside of each node. It is important to note that the algorithm considers each node, and inherently each edge, sequentially.

Keeping all of that in mind, we can label the arbitrary number of *vertices* in the input graph as $\lvert V \rvert$ and the arbitrary number of *edges* in the input graph as $\lvert E \rvert$. Since the worst case will always consider every node and every edge, the worst-case time complexity of Depth-First Search using adjacency lists is an element of $\mathrm{\Theta}(\lvert V \rvert + \lvert E \rvert)$.

## Bonus

Implement and analyze breadth-first search.

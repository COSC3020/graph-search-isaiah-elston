function dfHelper(graph, node, targetNode, searchPath, beenVisited) {
    beenVisited[node] = true;
    searchPath.push(node);

    if (node == targetNode) {
        return searchPath;
    }

    /*
    NOTE: I had to do a bit of research before I found out the JavaScript has it's own version of the For...Of
    loop that is similar to the Python For...In loop. My sources are below:
    https://stackoverflow.com/questions/27967988/is-there-a-javascript-equivalent-to-pythons-for-loops
    https://www.w3schools.com/js/js_loop_forof.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    */

    for (nextNode of graph[node]) {
        if (beenVisited[nextNode] != true) {
            let currentPath = dfHelper(graph, nextNode, targetNode, searchPath.slice(), beenVisited);
            if (currentPath.length > 0) {
                return currentPath;
            }
        }
    }

    return [];
}

function depthFirstSearch(graph, startNode, targetNode) {
    if (graph.length == 0) {
        return [];
    }

    return dfHelper(graph, startNode, targetNode, [], [])
}
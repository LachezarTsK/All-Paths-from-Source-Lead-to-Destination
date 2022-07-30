
/**
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (numberOfNodes, edges, source, destination) {

    this.StateOfNode = { NotVisited: 'NotVisited', OnCallStack: 'OnCallStack', Visited: 'Visited' };
    const stateOfNodes = new Array(numberOfNodes).fill(this.StateOfNode.NotVisited);

    this.graph = Array.from(new Array(numberOfNodes), () => []);
    initializeGraph(edges);

    return depthFirstSearch(stateOfNodes, source, destination);
};

/**
 * @param {StateOfNode[]} stateOfNodes
 * @param {number} node
 * @param {number} destination
 * @return {boolean}
 */
function depthFirstSearch(stateOfNodes, node, destination) {

    if (this.graph[node].length === 0) {
        return node === destination;
    }
    if (stateOfNodes[node] === this.StateOfNode.OnCallStack) {
        return false;
    }

    stateOfNodes[node] = this.StateOfNode.OnCallStack;
    for (let n of graph[node]) {
        if (!depthFirstSearch(stateOfNodes, n, destination)) {
            return false;
        }
    }

    stateOfNodes[node] = this.StateOfNode.Visited;
    return true;
}

/**
 * @param {number[][]} edges
 * @return {void}
 */
function initializeGraph(edges) {
    for (let edge of edges) {
        this.graph[edge[0]].push(edge[1]);
    }
}

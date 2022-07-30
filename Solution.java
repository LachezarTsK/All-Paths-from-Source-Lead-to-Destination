
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {

    private List<Integer>[] graph;
    private static enum StateOfNode { NotVisited, OnCallStack, Visited };

    public boolean leadsToDestination(int numberOfNodes, int[][] edges, int source, int destination) {

        StateOfNode[] stateOfNodes = new StateOfNode[numberOfNodes];
        Arrays.fill(stateOfNodes, StateOfNode.NotVisited);
        initializeGraph(edges, numberOfNodes);

        return depthFirstSearch(stateOfNodes, source, destination);
    }

    private boolean depthFirstSearch(StateOfNode[] stateOfNodes, int node, int destination) {

        if (graph[node].isEmpty()) {
            return node == destination;
        }
        if (stateOfNodes[node] == StateOfNode.OnCallStack) {
            return false;
        }

        stateOfNodes[node] = StateOfNode.OnCallStack;
        for (int n : graph[node]) {
            if (!depthFirstSearch(stateOfNodes, n, destination)) {
                return false;
            }
        }

        stateOfNodes[node] = StateOfNode.Visited;
        return true;
    }

    private void initializeGraph(int[][] edges, int numberOfNodes) {
        graph = new List[numberOfNodes];
        for (int i = 0; i < numberOfNodes; ++i) {
            graph[i] = new ArrayList<>();
        }
        for (int[] edge : edges) {
            graph[edge[0]].add(edge[1]);
        }
    }
}


#include <vector>
using namespace std;

class Solution {
    
    vector<vector<int>> graph;
    static enum class StateOfNode { NotVisited, OnCallStack, Visited };

public:
    bool leadsToDestination(int numberOfNodes, vector<vector<int>>& edges, int source, int destination) {
        
        vector<StateOfNode> stateOfNodes(numberOfNodes, StateOfNode::NotVisited);
        initializeGraph(edges, numberOfNodes);

        return depthFirstSearch(stateOfNodes, source, destination);
    }

private:
    bool depthFirstSearch(vector<StateOfNode>& stateOfNodes, int node, int destination) {

        if (graph[node].empty()) {
            return node == destination;
        }
        if (stateOfNodes[node] == StateOfNode::OnCallStack) {
            return false;
        }

        stateOfNodes[node] = StateOfNode::OnCallStack;
        for (const auto& n : graph[node]) {
            if (!depthFirstSearch(stateOfNodes, n, destination)) {
                return false;
            }
        }

        stateOfNodes[node] = StateOfNode::Visited;
        return true;
    }

    void initializeGraph(const vector<vector<int>>& edges, int numberOfNodes) {
        graph.assign(numberOfNodes, vector<int>());
        for (const auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
        }
    }
};

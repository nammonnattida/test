package components;

import java.util.ArrayList;
import java.util.List;

// Tree node class
class TreeNode {
    int value;
    List<TreeNode> children;

    public TreeNode(int value) {
        this.value = value;
        this.children = new ArrayList<>();
    }

    public void addChild(TreeNode child) {
        children.add(child);
    }
}

// Traversal interface
interface Traversal {
    List<Integer> traverse(TreeNode root);
}

// Preorder traversal implementation
class PreorderTraversal implements Traversal {
    public List<Integer> traverse(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        dfsPreorder(root, result);
        return result;
    }

    private void dfsPreorder(TreeNode node, List<Integer> result) {
        if (node == null) {
            return;
        }
        result.add(node.value);
        for (TreeNode child : node.children) {
            dfsPreorder(child, result);
        }
    }
}

// Postorder traversal implementation
class PostorderTraversal implements Traversal {
    public List<Integer> traverse(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        dfsPostorder(root, result);
        return result;
    }

    private void dfsPostorder(TreeNode node, List<Integer> result) {
        if (node == null) {
            return;
        }
        for (TreeNode child : node.children) {
            dfsPostorder(child, result);
        }
        result.add(node.value);
    }
}

// Inorder traversal implementation
class InorderTraversal implements Traversal {
    public List<Integer> traverse(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        dfsInorder(root, result);
        return result;
    }

    private void dfsInorder(TreeNode node, List<Integer> result) {
        if (node == null) {
            return;
        }
        if (!node.children.isEmpty()) {
            dfsInorder(node.children.get(0), result);
        }
        result.add(node.value);
        if (node.children.size() == 2) {
            dfsInorder(node.children.get(1), result);
        }
    }
    

}

package A;

import java.util.List;

public class TreeTraversalExample {
    public static void main(String[] args) {
        // Example tree
        TreeNode treeNode = new TreeNode(1);
        TreeNode node2 = new TreeNode(2);
        TreeNode node3 = new TreeNode(3);
        TreeNode node4 = new TreeNode(4);
        TreeNode node5 = new TreeNode(5);
        TreeNode node6 = new TreeNode(6);
        TreeNode node7 = new TreeNode(7);
        TreeNode node8 = new TreeNode(8);

        treeNode.addChild(node2);
        treeNode.addChild(node3);
        node2.addChild(node4);
        node2.addChild(node5);
        node5.addChild(node6);
        node5.addChild(node7);
        node7.addChild(node8);

        // Preorder traversal
        Traversal preorderTraversal = new PreorderTraversal();
        List<Integer> preorderResult = preorderTraversal.traverse(treeNode);
        System.out.println("Preorder Output: " + preorderResult);

        // Postorder traversal
        Traversal postorderTraversal = new PostorderTraversal();
        List<Integer> postorderResult = postorderTraversal.traverse(treeNode);
        System.out.println("Postorder Output: " + postorderResult);

        // Inorder traversal
        Traversal inorderTraversal = new InorderTraversal();
        List<Integer> inorderResult = inorderTraversal.traverse(treeNode);
        System.out.println("Inorder Output: " + inorderResult);
    }
}
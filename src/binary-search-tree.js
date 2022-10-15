const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }
  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else
      this.insertNode(this.head, newNode)
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      }
      else
        this.insertNode(node.left, newNode)
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else
        this.insertNode(node.right, newNode)
    }
  }


  has(data) {
    return (this.search(data, this.head)) ? true : false;
  }

  find(data) {
    console.log(data)
    let b = this.search(data, this.head)
    return b;
  }


  search(data, node) {
    console.log(data)
    if (node === null) {
      return null;
    } else if
      (data < node.data) {
      return this.search(data, node.left)
    } else if (data > node.data) {
      /* console.log('data ' + data + ' node data ' + node.data) */
      return this.search(data, node.right)
    } else {
      console.log(data)
      return node
    }
  }

  remove(data) {
    this.head = this.removeNode(data, this.head)
  }
  removeNode(data, node) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(data, node.left)
      return node;
    }
    else if (data > node.data) {
      node.right = this.removeNode(data, node.right)
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }
      let delNode = this.searchMin(node.right);
      node.data = delNode.data;
      node.right = this.removeNode(delNode.data, node.right);
      return node
    }
  }

  min() {
    return this.searchMin(this.head).data
  }

  searchMin(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.searchMin(node.left)
    }
  }

  max(node = this.head) {
    if (node.right === null)
      return node.data;
    else return this.max(node.right)
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(9);
// /* tree.add(14); */
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(0);
// tree.add(31);
// tree.add(54);
// tree.add(2);
// tree.find(8)

// tree.remove(8);
// tree.remove(9);
// tree.add(2);
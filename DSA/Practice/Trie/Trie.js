// Trie

class Node {
  links = new Array(26);
  flag = false;

  containsKey(key) {
    return this.links[key - "a".charCodeAt(0)] != undefined;
  }
  put(key) {
    this.links[key - "a".charCodeAt(0)] = new Node();
  }
  get(key) {
    return this.links[key - "a".charCodeAt(0)];
  }
  setEnd() {
    this.flag = true;
  }
}

class Trie {
  root;
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word.charAt(i))) {
        node.put(word.charAt(i));
      }
      node = node.get(word.charAt(i));
    }
    node.setEnd();
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word.charAt(i))) return false;
      node = node.get(word.charAt(i));
    }
    return node.flag;
  }

  startsWith(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.containsKey(word.charAt(i))) return false;
      node = node.get(word.charAt(i));
    }
    return true;
  }
}

const trie = new Trie();

trie.insert("akshat");
trie.insert("akshay");
trie.insert("ashiq");

console.log(trie.search("akshay"));
console.log(trie.startsWith("ash"));

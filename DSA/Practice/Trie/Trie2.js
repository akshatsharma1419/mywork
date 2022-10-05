class Node {
  links = new Array(26);
  flag = false;

  contains(ch) {
    return this.links[ch - "a".charCodeAt(0)] != undefined;
  }

  add(ch) {
    this.links[ch - "a".charCodeAt(0)] = ch;
  }

  get(ch) {
    return this.links[ch - "a".charCodeAt(0)];
  }
  setFlag() {
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
      if (!node.contains(word.charAt(i))) node.add(word.charAt(i));
      node = node.get(word);
    }
    node.setFlag();
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.contains(word.charAt(i))) return false;
    }
    return node.flag;
  }

  startsWith(word) {}
}

const trie = new Trie();
trie.insert("ball");
trie.insert("bat");
trie.insert("bag");

console.log(trie.search("bat"));

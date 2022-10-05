class Node {
  links;
  end;
  constructor() {
    this.links = new Array(26);
    this.end = false;
  }

  containsChar(ch) {
    return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)] === undefined;
  }

  addChar(ch) {
    this.links[ch.charCodeAt(0) - "a".charCodeAt(0)] = new Node();
  }

  getNext(ch) {
    return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)];
  }

  setEnd() {
    this.end = true;
  }
}

class Trie {
  root;
  constructor() {
    this.root = new Node();
  }

  append(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (curr.containsChar(word.charAt(i))) {
        curr.addChar(word.charAt(i));
      }
      curr = curr.getNext(word.charAt(i));
    }
    curr.setEnd();
  }

  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (curr.containsChar(word.charAt(i))) return false;
      curr = curr.getNext(word.charAt(i));
    }
    return curr.end;
  }
}

const trie = new Trie();
trie.append("apple");
trie.append("ball");
trie.append("bat");
console.log(trie.search("ball"));

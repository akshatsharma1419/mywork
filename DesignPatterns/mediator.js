// Mediator pattern
// Allows you to define an object that acts as a mediator
// that encapsulates and controls how some set of objects
// interact with each other
// Eg: Chat room, it has an object room which identifies which users to send message to

function Memeber(name) {
  this.name = name;
  this.chatRoom = null;
}

Memeber.prototype = {
  send: function (message, toMember) {
    this.chatRoom.send(message, this, toMember);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${message}`);
  },
};

function ChatRoom() {
  this.members = {};
}

ChatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  },
  send: function (message, from, to) {
    to.receive(message, from);
  },
};

const chat = new ChatRoom();
const bob = new Memeber("John");
const mark = new Memeber("Mark");
const tim = new Memeber("Tim");

chat.addMember(bob);
chat.addMember(tim);
chat.addMember(mark);

bob.send("Hey John!", john);
tim.send("Hey Bob!", bob);

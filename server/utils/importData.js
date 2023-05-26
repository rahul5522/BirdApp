const mongoose = require("mongoose");

const posts = [
  {
    user: new mongoose.Types.ObjectId("640c877b7fa468b6b4f417e5"),
    location: "New York, CA",
    description: "Some really long random description",
    postPhoto: "post1.jpeg",
    likes: new Map([
      ["640c870f7fa468b6b4f417e1", true],
      ["640c87387fa468b6b4f417e3", true],
      ["640c877b7fa468b6b4f417e5", true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    user: new mongoose.Types.ObjectId("640c877b7fa468b6b4f417e5"),
    firstName: "Whatcha",
    lastName: "Doing",
    location: "Korea, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    postPhoto: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      ["640c870f7fa468b6b4f417e1", true],
      ["640c87387fa468b6b4f417e3", true],
      ["640c877b7fa468b6b4f417e5", true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
  {
    user: new mongoose.Types.ObjectId("640c87b27fa468b6b4f417e7"),
    firstName: "Jane",
    lastName: "Doe",
    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    postPhoto: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      ["640c870f7fa468b6b4f417e1", true],
      ["640c87387fa468b6b4f417e3", true],
      ["640c877b7fa468b6b4f417e5", true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  {
    user: new mongoose.Types.ObjectId("640c870f7fa468b6b4f417e1"),
    firstName: "Harvey",
    lastName: "Dunn",
    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    postPhoto: "post4.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      ["640c870f7fa468b6b4f417e1", true],
      ["640c87387fa468b6b4f417e3", true],
      ["640c877b7fa468b6b4f417e5", true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
      "I'm still bored",
      "All I want to do is play video games",
      "I'm going to play video games",
    ],
  },
  {
    user: new mongoose.Types.ObjectId("640c87387fa468b6b4f417e3"),
    firstName: "Carly",
    lastName: "Vowel",
    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    postPhoto: "post5.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      ["640c870f7fa468b6b4f417e1", true],
      ["640c87387fa468b6b4f417e3", true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "Man I'm bored",
      "What should I do?",
      "I'm going to play video games",
    ],
  },
  {
    user: new mongoose.Types.ObjectId("640c870f7fa468b6b4f417e1"),
    firstName: "Jessica",
    lastName: "Dunn",
    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    postPhoto: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      ["640c870f7fa468b6b4f417e1", true],
      ["640c87387fa468b6b4f417e3", true],
    ]),

    comments: [
      "Can I play video games now?",
      "No let's actually study",
      "Never mind, I'm going to play video games",
      "Stop it.",
      "Michael, stop it.",
    ],
  },
];

module.exports = posts;

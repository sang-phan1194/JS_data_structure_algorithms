// create a function to look up the contact from the given array
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/* 
test case
lookUpProfile("Kristian", "lastName") should return the string Vos
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") should return an array
lookUpProfile("Bob", "number") should return the string No such contact
lookUpProfile("Bob", "potato") should return the string No such contact
lookUpProfile("Akira", "address") should return the string No such property 
*/

// Solution:

function lookUpProfile(name, prop) {
  let lookupName = "";
  let index = 0;
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i]["firstName"]) {
      lookupName = contacts[i]["firstName"];
      index = i;
    }
  }
  if (lookupName != "") {
    if (contacts[index].hasOwnProperty(prop)) {
      return contacts[index][prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
}

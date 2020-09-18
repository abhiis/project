const people = [
  {
    firstName: "Abhishek",
    lastName: "Srivastava",
    age: 24,
    pets: ["cows", "dogs", "cats"],
    address: {
      street: "Road No. 8",
      city: "Gonda",
      state: "UP",
    },
  },
  {
    firstName: "Suman",
    lastName: "Srivastava",
    age: 54,
    pets: ["dogs", "cats"],
    address: {
      street: "Road No. 7",
      city: "Gorakhpur",
      state: "UP",
    },
  },
  {
    firstName: "Umesh",
    lastName: "Srivastava",
    age: 58,
    pets: ["cows", "cats"],
    address: {
      street: "Road No. 6",
      city: "Lucknow",
      state: "UP",
    },
  },
];
// people.forEach((person) => console.log(person.address.city));
const personName = people.map((person) => person.firstName);
console.log(personName);
const ageUnder30 = people.filter((person) => person.age > 30);
console.log(ageUnder30);

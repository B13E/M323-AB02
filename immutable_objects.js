// 1b
const constNumber = 42;

// 1c
const person = {
    firstName: "Name",
    lastName: "Nachname",
    age: 42,
};

// 1d
const addlocationPerson = {
    ...person,
    location: "Ort"
};

// 1e
const updateagePerson = {
    ...person,
    age: 24
  };
  
// 1f  
const { location, ...remouvelocationPerson } = person

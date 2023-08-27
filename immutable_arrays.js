// 2a
const people = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Carol", age: 28 },
    { id: 4, name: "David", age: 32 }
  ];
  

// 2b
const newPerson = { id: 5, name: "Eve", age: 29 };

const updatedPeople = [...people, newPerson];


// 2c
const updatedagePeople = people.map(person => {
    if (person.id === 2) {
      return { ...person, age: 26 };
    }
    return person;
  });
  

// 2d
const smallestId = Math.min(...people.map(person => person.id));
const updatedidPeople = people.filter(person => person.id !== smallestId);


// 2e
const average = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// Neuen Array erstellen
const newReviews = reviews.slice(2, 8);

// Durchschnitt berechnen
const sum = newReviews.reduce((total, review) => total + review, 0);
const averageSum = sum / newReviews.length;

console.log("Neuer Array:", newReviews);
console.log("Durchschnitt:", average);


// 2f
function groupReviews(reviews) {
    return reviews.reduce((result, review) => {
      if (review >= 4) {
        result.good++;
      } else if (review >= 2.5) {
        result.ok++;
      } else {
        result.bad++;
      }
      return result;
    }, { good: 0, ok: 0, bad: 0 });
  }
  
  const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
  const groupedReviews = groupReviews(reviews);
  
  console.log("Gruppierte Bewertungen:", groupedReviews);
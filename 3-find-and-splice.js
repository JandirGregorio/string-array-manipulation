const phoneNumbers = [
  "(555) 123-4567",
  "555-234-5678",
  "(555) 345-6789",
  "555-456-7890"
];

// Task 1: Find if a number exists
const searchFor = "(555) 345-6789";
const foundIndex = phoneNumbers.indexOf(searchFor);
console.log(foundIndex); // should be 2

// Task 2: Remove the number
if (foundIndex !== -1) {
  phoneNumbers.splice(foundIndex, 1);
}

console.log(phoneNumbers);

// Task 3: Guard against values that don't exist.
// What bugs can occur and how can we avoid them?

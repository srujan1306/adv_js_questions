// Task 1 : Given arrays of attendees for different events, create a single array of unique attendees (no duplicates) sorted alphabetically by name.

const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];

const x = [...event1Attendees, ...event2Attendees, ...event3Attendees];

function toremoveduplicates(x) {
  return [...new Set(x)];
}

console.log(toremoveduplicates(x));

// Task 2 :You have an array of survey responses where each response includes a list of topics and a rating (1-5). Find the average rating of eachtopic.
const surveyResponses = [
  { topics: ["Environment", "Economy"], rating: 4 },
  { topics: ["Economy", "Health"], rating: 3 },
  { topics: ["Environment", "Politics"], rating: 5 },
];

//Task 3 : From an array of books, select books published after 2000 and create an array of their titles and authors in the format "Title by Author".

const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];

const s = books
  .filter((f) => f.year > 2000)
  .map((r) => `${r.title} by ${r.author}`);

console.log(s);

//Task 4 :  Given an array of products, each with a list of stores and their inventory, find products that are available in all stores. A product is available in a store if is inventory is more than 0.

const products8 = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
];

const b = products8
  .filter((r) => r.stores.every((i) => i.inventory > 0))
  .map((w) => w.name);
console.log(b);

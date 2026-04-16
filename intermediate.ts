// 1. Group users by country
interface User {
  id: number;
  name: string;
  country: string;
}

const users: User[] = [
  { id: 1, name: "Alice", country: "USA" },
  { id: 2, name: "Bob", country: "Canada" },
  { id: 3, name: "Charlie", country: "USA" },
  { id: 4, name: "Diana", country: "Germany" },
];

function groupUsersByCountry(users: User[]): Record<string, User[]> {
  return users.reduce(
    (acc, user) => {
      if (!acc[user.country]) {
        acc[user.country] = [];
      }
      acc[user.country]!.push(user);
      return acc;
    },
    {} as Record<string, User[]>,
  );
}

console.log("groupUsersByCountry : ", groupUsersByCountry(users));

// 2. Group products by category
interface Product {
  name: string;
  category: "Electronics" | "Food" | "Clothing";
  price: number;
}

const products: Product[] = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Apple", category: "Food", price: 2 },
  { name: "Shirt", category: "Clothing", price: 25 },
  { name: "Phone", category: "Electronics", price: 500 },
];

function groupProductByCategory(
  products: Product[],
): Record<string, Product[]> {
  return products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category]!.push(product);
      return acc;
    },
    {} as Record<string, Product[]>,
  );
}

console.log("groupProductByCategory : ", groupProductByCategory(products));

// 23. Count words in sentence

function countWordsInSentence(sentence: string): Record<string, number> {
  return sentence.split(/\s+/).reduce(
    (acc, word) => {
      const w = word.toLowerCase();
      acc[w] = (acc[w] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
}

console.log(
  "countWordsInSentence",
  countWordsInSentence("THhis is my typescript open challanges"),
);

// 24. Find duplicates
function findDuplicates<T>(arr: T[]): T[] {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log("findDuplicates : ", findDuplicates([1, 2, 3, 4, 5, 3, 4, 5, 6]));

// 25. Remove duplicates by property
// Problem: Remove objects that share the same ID.

const duplicateUsers = [
  { id: 1, name: "Sagar" },
  { id: 2, name: "Ram" },
  { id: 1, name: "Sagar Duplicate" },
  { id: 3, name: "Hari" },
  { id: 2, name: "Ram Duplicate" },
];
function removeDuplicateObjects<T extends { id: any }>(arr: T[]): T[] {
  // const seen = new Set();
  // return arr.filter((item) => (seen.has(item.id) ? false : seen.add(item.id)));
  const map = new Map(arr.map((item) => [item.id, item]));
  console.log("map: ", map);

  return Array.from(map.values());
}
console.log(
  "removeDuplicateObjects : ",
  removeDuplicateObjects(duplicateUsers),
);

// remove duplicate 2

function removeDUplicate<T extends { id: any }>(arr: T[]): Map<["id"], T> {
  return new Map(arr.map((item) => [item.id, item]));
}
console.log("removeDUplicate: ", removeDUplicate(duplicateUsers));

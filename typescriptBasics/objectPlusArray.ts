// 21. Extract names from users

type User = {
  id: number;
  name: string;
  age: number;
  country: string;
  skills?: any[];
};

type Order = {
  id: number;
  name: string;
  price: number;
  category: string;
};

const orders: Order[] = [
  { id: 1, name: "Fan", price: 5000, category: "Electronics" },
  { id: 2, name: "Heater", price: 3000, category: "Electronics" },
  { id: 3, name: "Bulb", price: 500, category: "Electronics" },
  { id: 4, name: "Phone", price: 15000, category: "Electronics" },
  { id: 5, name: "Cooker", price: 3000, category: "Utensils" },
  { id: 6, name: "Table", price: 35000, category: "Furniture" },
  { id: 7, name: "Chair", price: 5000, category: "Furniture" },
];

const users = [
  {
    id: 1,
    name: "John",
    age: 30,
    country: "Nepal",
    skills: ["C", "C++", "Javascript"],
  },
  {
    id: 2,
    name: "Jane",
    age: 40,
    country: "Nepal",
    skills: ["C", "TYpescript", "java"],
  },
  {
    id: 3,
    name: "Alice",
    age: 20,
    country: "India",
    skills: ["C", "C#", "Python"],
  },
];

function extractNames(users: User[]) {
  return users.map((user) => user.name);
}

console.log(extractNames(users));

// 22. Filter active Students

type Student = {
  id: number;
  isActive: boolean;
  name: string;
};

const Students = [
  { id: 1, isActive: true, name: "Sagar" },
  { id: 2, isActive: false, name: "John" },
  { id: 3, isActive: true, name: "Jane" },
];

function filterActiveStudents(students: Student[]) {
  return students.filter((student) => student.isActive);
}

console.log("filterActiveStudents: ", filterActiveStudents(Students));

// find student by id

function findStudentById(students: Student[], id: number) {
  return students.find((student) => student.id === id);
}

console.log("findStudentById: ", findStudentById(Students, 2));

// sort user by age

function sortUserByAge(users: User[]) {
  return users.sort((a, b) => a.age - b.age);
}
console.log("sortUserByAge: ", sortUserByAge(users));

// group user by age

function groupUserByAge(users: User[]) {
  return users.reduce((acc: Record<number, User[]>, user) => {
    if (!acc[user.age]) {
      acc[user.age] = [];
    }

    acc[user.age]!.push(user);
    return acc;
  }, {});
}

console.log("groupUserByAge: ", groupUserByAge(users));

function countUserByCountry(users: User[]): number {
  return users.reduce((acc: any, user) => {
    acc[user.country] = (acc[user.country] || 0) + 1;
    return acc;
  }, {});
}

console.log("countUserByCountry: ", countUserByCountry(users));

function countStudentsByName(students: Student[]): number {
  return students.reduce((acc: any, student) => {
    acc[student.name] = (acc[student.name] || 0) + 1;
    return acc;
  }, {});
}

console.log("countStudentsByName: ", countStudentsByName(Students));

// 27. Sum order prices

function sumOfOrderPrice(orders: Order[]): number {
  return orders.reduce((acc: any, order) => acc + order.price, 0);
}

console.log("sumOfOrderPrice", sumOfOrderPrice(orders));

// 29. Get unique categories

function getUniqueCategories(orders: Order[]) {
  return [...new Set(orders.map((order) => order.category))];
}

console.log("getUniqueCategories: ", getUniqueCategories(orders));

// 30. Flatten user skills
function flatternSkills(users: User[]) {
  return users.flatMap((user) => user.skills);
}

console.log("FLatternSkill: ", flatternSkills(users));

// 31. Convert array to object

function convertArrayToObject(users: User[]) {
  return users.reduce((acc: any, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}

console.log("convertArrayToObject: ", convertArrayToObject(users));

// 32. Find average age
function findAverageOfUsersAge(users: User[]) {
  const sumOfAge = users.reduce((acc, user) => acc + user.age, 0);
  return sumOfAge / users.length;
}

console.log("findAverageOfUsersAge: ", findAverageOfUsersAge(users));

// 33. Get users older than 30
function getUserOlderThan30(users: User[]) {
  return users.filter((user) => user.age >= 30);
}

console.log("getUserOlderThan30: ", getUserOlderThan30(users));

// 34. Sort products by price
function sortOrderByPrice(orders: Order[]) {
  return orders.sort((a, b) => a.price - b.price);
}
console.log("sortOrderByPrice", sortOrderByPrice(orders));

// 35. Find highest priced Order

function getHighestPriceOfOrder(orders: Order[]) {
  return orders.reduce(
    (max, order) => (order.price > max ? order.price : max),
    0,
  );
}
console.log("getHighestPriceOfOrder: ", getHighestPriceOfOrder(orders));

function getHighestPriceOrderFromOrder(orders: Order[]) {
  return orders.reduce(
    (max, order) => (order.price > max!.price ? order : max),
    orders[0],
  );
}

console.log(
  "getHighestPriceOrderFromOrder: ",
  getHighestPriceOrderFromOrder(orders),
);
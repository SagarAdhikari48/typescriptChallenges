// Convert an array of users into an array containing only user names.
type user = {
  name: string;
  age: number;
  lastName: string;
};

function getUserNames(user: user[]): string[] {
  return user.map((user) => user.name);
}

const users = [
  { name: "Sagar", age: 25, lastName: "Adhikari" },
  { name: "Rahul", age: 30, lastName: "Gautam" },
  { name: "Priya", age: 28, lastName: "Nepal" },
  { name: "Sagar", age: 25, lastName: "Poudel" },
];

console.log(getUserNames(users));

function groupByAge(users: { name: string; age: number; lastName: string }[]) {
  return users.reduce((acc: Record<number, user[]>, user) => {
    if (!acc[user.age]) {
      acc[user.age] = [];
    }

    acc[user.age]!.push(user);
    return acc;
  }, {});
}

console.log(groupByAge(users));

function groupUserByLastName(
  users: { name: string; age: number; lastName: string }[],
) {
  return users.reduce((acc: Record<string, user[]>, user) => {
    if (!acc[user.lastName]) {
      acc[user.lastName] = [];
    }

    acc[user.lastName]!.push(user);
    return acc;
  }, {});
}

console.log("Group By lastName:", groupUserByLastName(users));

function groupUserByName(
  users: { name: string; age: number; lastName: string }[],
) {
  return users.reduce((acc: Record<string, user[]>, user) => {
    if (!acc[user.name]) {
      acc[user.name] = [];
    }
    acc[user.name]!.push(user);

    return acc;
  }, {});
}

console.log("group user by Name: ", groupUserByName(users));

// 11. Extract object keys
function extractObjectsKey(obj: Object): string[] {
  return Object.keys(obj);
}

console.log(
  "extractObjectsKey",
  extractObjectsKey({ name: "sagar", age: 20, email: "sagradhkr48@gmail.com" }),
);

// 12. Extract values

function extractValues(object: Object): any[] {
  return Object.values(object);
}
console.log(
  "extractValues",
  extractValues({ name: "sagar", age: 20, email: "sagradhkr48@gmail.com" }),
);

// 13. Merge objects
function mergeObjects(a: Object, b: Object) {
  return { ...a, ...b };
}

console.log(
  "mergeObjects: ",
  mergeObjects(
    { name: "sagar", age: 20, email: "sagar@gmail.com" },
    { name: "Rahul", email: "Rahul@gmail.com" },
  ),
);

// 14. Check if key exists

function checkIfKeyExists(obj: Object, key: string) {
  // return Object.keys(obj).includes(key);
  return key in obj;
}
console.log(
  "checkIfKeyExists: ",
  checkIfKeyExists(
    { name: "sagar", age: 20, email: " sagar@gmail.com" },
    "age",
  ),
);

// 15. Count object properties
function countObjectProperties(obj: Object): number {
  return Object.keys(obj).length;
}

console.log(
  "countObjectProperties: ",
  countObjectProperties({ name: "sagar", age: 20, email: "  sagar@gmail.com" }),
);

function convertObjectToArray(obj: Object): any[] {
  return Object.entries(obj);
}

console.log(
  "convertObjectToArray: ",
  convertObjectToArray({ name: "sagar", age: 20, email: "sagar@gmail.com" }),
);

//Remove properties
function removeProperties(obj: Object, key: string) {
  delete obj[key as keyof typeof obj];
  return obj;
}

console.log(
  "removeProperties: ",
  removeProperties(
    { name: "sagar", age: 20, email: "sagar@gmail.com" },
    "name",
  ),
);

// Rename Properties
function renameProperties(obj: any, oldKey: string, newKey: string) {
  obj[newKey as keyof typeof obj] = obj[oldKey as keyof typeof obj];
  delete obj[oldKey];
  return obj;
}
console.log(
  "renameProperties: ",
  renameProperties(
    { name: "sagar", age: 20, email: "  sagar@gmail.com" },
    "name",
    "fullName",
  ),
);


// Deep clone an object
function deepCloneObject(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
}

console.log(
  "deepCloneObject: ",
  deepCloneObject({ name: "sagar", age: 20, email: "sagar@gmail.com" }),
);    


//Deep freeze an object
function deepFreezeObject(obj: Object) {
  Object.freeze(obj);
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null) {
      deepFreezeObject(value);
    }
  });
  return obj;
}

console.log(
  "deepFreezeObject: ",
  deepFreezeObject({ name: "sagar", age: 20, email: "sagar@gmail.com" }),
);          
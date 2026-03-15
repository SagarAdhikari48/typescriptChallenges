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
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

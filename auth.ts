type User = {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
};

const users: User[] = [
  {
    id: 1,
    username: "admin",
    password: "password",
    isAdmin: true,
  },
  {
    id: 2,
    username: "user",
    password: "password",
    isAdmin: false,
  },
];


function login(username: string, password: string):string {
    const user = users.find((user) => user.username === username && user.password === password);
    if(!user){
        return "Invalid username or password";
    }

    return user.isAdmin ? `Welcome Admin ${user.username}`: `Welcome ${user.username}`;
}

console.log(login("admin", "password"));
console.log(login("user", "password"));
console.log(login("invalid", "password"));
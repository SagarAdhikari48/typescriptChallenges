// Convert an array of users into an array containing only user names.
type user = {
  name: string;
  age: number;
};

function getUserNames(user: user[]): string[] {
  return user.map((user) => user.name);
}

const users = [
  { name: "Sagar", age: 25 },
  { name: "Rahul", age: 30 },
  { name: "Priya", age: 28 },
  { name: "John", age: 25 },
];

console.log(getUserNames(users));

function groupByAge(users: { name: string; age: number }[]) {
    return users.reduce((acc:Record<number,user[]>, user)=>{
        if(!acc[user.age]){
            acc[user.age] = [];
         }
         
         acc[user.age]!.push(user);
         return acc;
     },{
    })
}

console.log(groupByAge(users));

```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};


<!-- To add this image here use ![name](./hello.jpg) -->

let newUser = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

2. Answer the following with reason:

- `user == newUser;` // output and reason
both of the object not same due to different location ( but type is same)- only value
- `user === newUser;`
both of the objects differnet but value is same and type is same)- check value and data type

- `user.name === newUser.name;`
only checking value and data type - both are same-primitve
- `user.name == newUser.name;`
user.name is primitive string
both value same is same
both of the object not same due to different location ( but type is same)- only value

- `user.sibling == newUser.sibling;`
user.sibiling is non primitive array
both value same is same
both of the object not same due to different location ( but type is same)- only value
- `user.sibling === newUser.sibling;`
different checking value - non primitive and data type - 
- `user.sibling == allBrothers;`
false-not same , same is data type, value is same but object is different

- `user.sibling === allBrothers;`
type is same ,value is same( baucause index is same name),differnt objects-  primitve-single value
- `brothersCopy === allBrothers;`
- `brothersCopy == allBrothers;`
- `brothersCopy == user.sibling;`
- `brothersCopy === user.sibling;`
all 60 to 64 false
- `brothersCopy[0] === user.sibling[0];`
- `brothersCopy[1] === user.sibling[1];`
- `user.sibling[1] === newUser.sibling[1];`
all value is same due to string -group of array is not same


![name](./hello.jpg)

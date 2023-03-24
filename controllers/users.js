import { v4 as uuidv4 } from 'uuid';

let users = [

    {
        firstName: "John",
        lastName: "Doe",
        age: "24"
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        age: "23"
    }

]

export const getUsers = (req, res) => {

    console.log(users);

    res.send('Welcome user!');

}

export const createUser = (req, res) => {

    // console.log('Post route ready');

    const user = req.body;

    const userId = uuidv4();   
    const userWithId = { ...user, id: userId };
    users.push(userWithId);

    res.send(`User named ${user.firstName} has been added to the list of users`);

}

export const getSingleUser = (req, res) => {

    const {id} = req.params;

    const findUser = users.find(user => user.id === id);


    // res.send('Id route!');
    res.send(findUser);

}

export const deleteUser = (req, res) => {

    const {id} = req.params;

    const deleteUser = users.filter((user) => user.id !== id);

    res.send(`User ${deleteUser.firstName} ${id} has been removed from the list`)

};

export const updateUser = (req, res) => {

    const {id} = req.params;
    const {firstName, lastName, age} = req.body;  // what can i change | frontend

    const userUpdate = users.find((user)=> user.id === id );

    if (firstName) {
        userUpdate.firstName;
    }

    if (lastName) {
        userUpdate.lastName;
    }

    if (age) {
        userUpdate.age;
    }

    res.send(`User with the id ${id} has been updated 🥳`);

}
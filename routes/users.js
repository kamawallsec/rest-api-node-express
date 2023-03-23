import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [

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

router.get('/', (req, res)=> {  
    console.log(users);

    res.send('Welcome user!');

});


router.post('/', (req, res)=> {

    // console.log('Post route ready');

    const user = req.body;

    const userId = uuidv4();   
    const userWithId = { ...user, id: userId };
    users.push(userWithId);

    res.send(`User named ${user.firstName} has been added to the list of users`);

});

router.get('/:id', (req, res)=> {

    const {id} = req.params;

    const findUser = users.find(user => user.id === id);


    // res.send('Id route!');
    res.send(findUser);

} );


export default router;
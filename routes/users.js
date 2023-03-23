import express from 'express';

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

})

export default router;
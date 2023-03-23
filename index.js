import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res)=> {

    console.log('Testing');
    res.send('Homepage');

})

app.listen(PORT, ()=> console.log(`Server listening on http://localhost:${PORT}`));
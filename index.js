const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('simple node server is running');
});

const users = [
    {ID: 1, name: 'Roxy', email: 'roxy@gmail.com'},
    {ID: 2, name: 'Bappy', email: 'bappy@gmail.com'},
    {ID: 3, name: 'Tousif', email: 'tousif@gmail.com'},
    {ID: 4, name: 'Samir', email: 'samir@gmail.com'},
    {ID: 5, name: 'sakal', email: 'sakal@gmail.com'}
];


// use of cors to load data on indexedDB.html file 
app.use(cors());

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Simple node server is running on ${port}`);
});
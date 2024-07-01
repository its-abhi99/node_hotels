const express= require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('Welcome to my hotel....How I can help you?');
})

//Error due to using callback function in newPerson.save (callback is no longer use)
/*
app.post('/person', (req,res) => {
    
    const data = req.body; //Assuming the request body contains the person data

    //Create a new Person document using the Mongoose Model
    const newPerson = new Person(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.mobile = data.mobile;
    // newPerson.email= data.email;
    // newPerson.address = data.address;
    // newPerson.salary = data.salary;
    newPerson.save((error, savedPerson) => {
        if(error){
            console.log('Error aving person: ',error);
            res.status(500).json({error :'Internal server error '})
        }else{
            console.log('data saved successfully');
            res.status(200).json(savedPerson);
        }
    })


})
*/
/*
app.get('/momos',(req,res) => {
    res.send('Sure sir, I would love to serve Momos');
})

app.get('/idli',(req,res) => {
    var customizedIDLI = {
        name: "rava idli",
        size:"10 cm diameter",
        is_sambhar: true,
        is_chutney : false,
    }

    res.send(customizedIDLI );
})

app.post('/items', (req,res) => {
    console.log("data is saved");
})
*/

//Import the person router files
const personRoutes = require('./routes/personRoutes');
//Use the routers
app.use('/person', personRoutes);
// Now we use Async and Await ( try and catch block)

//Import the Menu Router files
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the routers
app.use('/menu', menuItemRoutes);

const PORT = process.env.PORT || 3000;


app.listen(3000, ()=>{
    console.log('listening on port 3000');
});
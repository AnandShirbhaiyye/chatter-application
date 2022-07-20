const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const messageModel = require('./models/message');
const PORT = 5000;
const app = express();
require('dotenv').config();
const path = require('path');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('MongoDB Connected...!');
});

// mongoose.connect('mongodb+srv://anand123:anand123@nursery-plant.mpanrx9.mongodb.net/?retryWrites=true&w=majority',()=>{
//     console.log('connected to mongoDB');
// })

app.get('/health',(req,res)=>{
    res.json({
        success: true,
    })
})

app.post('/message', async (req,res)=>{

    //step 1 : destructuring  resourse from req.body

    const user = req.body.user;
    const messageType = req.body.messageType;
    const messageBody = req.body.messageBody;

    //const {user,messageType,messageBody} = req.body;

    //step 2 : create a new message object
    const newMessage = new messageModel({
        user:user,
        messageType:messageType,
        messageBody:messageBody,
    });
    
    //step 3 : 
    const savedMessage = await newMessage.save();
    res.send(savedMessage);
})

app.get('/message', async (req,res)=>{
    const messages = await messageModel.find();
    res.send(messages);
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
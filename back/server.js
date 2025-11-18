const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let feedbacks =[];
let nextId = 1;
app.get('/feedbacks',(req,res)=>{
    res.json(feedbacks);
});

app.post('/feedbacks',(req,res)=> {
    const {name, email, message, category}
    if(!message || !category) {
        return res.status(400).json({error:})
    }
})
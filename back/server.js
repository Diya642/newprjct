const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());


// In-memory storage
let feedbacks = [{id: 1, name: "oneteam"}];
let nextId = 1;

app.get('/',(req,res)=>{
    res.send("Welcome")
})

// GET all feedbacks
app.get('/feedbacks', (req, res) => {
res.json(feedbacks);
});


// POST create new feedback
app.post('/feedbacks', (req, res) => {
const { name, email, message, category } = req.body;
if (!message || !category) {
return res.status(400).json({ error: 'message and category are required' });
}
const newFb = {
id: nextId++,
name: name || 'Anonymous',
email: email || '',
message,
category,
createdAt: new Date().toISOString(),
};
feedbacks.unshift(newFb);
res.status(201).json(newFb);
});


// PUT update feedback by id
app.put('/feedbacks/:id', (req, res) => {
const id = Number(req.params.id);
const idx = feedbacks.findIndex(f => f.id === id);
if (idx === -1) return res.status(404).json({ error: 'Not found' });


const { name, email, message, category } = req.body;
if (!message || !category) {
return res.status(400).json({ error: 'message and category are required' });
}


feedbacks[idx] = {
...feedbacks[idx],
name: name || feedbacks[idx].name,
email: email || feedbacks[idx].email,
message,
category,
updatedAt: new Date().toISOString(),
};


res.json(feedbacks[idx]);
});


app.listen(PORT, () => console.log(`Feedback API running on http://localhost:${PORT}`));
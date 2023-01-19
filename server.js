const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

//app.get('/', (req,res) => res.send('navigate to route'));

app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, 'Develop/public/assets/index.html'))
);

app.get('/notes', (req,res) =>
    res.sendFile(path.join(__dirname, 'Develop/public/assets/notes.html'))
);


app.listen(PORT, () =>
    console.log(`Example listening at http://localhost:${PORT}`)
)
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bible Companion API is running 🚀');
});

app.get('/bible', (req,res) => {
    res.json({
        message: 'Bible route working',
        sampleVerse: 'In the beginning God created the heavens and the earth. (Genesis 1:1)'
    });
});

app.post('/qna', (req, res) => {
    const { question } = req.body;

    res.json({
        question,
        answer: `You asked: ${question}. (Simulated AI answer goes here).`
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');


const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    console.log('Request received');
    res.send('<h1>Everything looks good</h1>');
});

app.listen(8080, () => {
    console.log('Application listening on port 8080');
});
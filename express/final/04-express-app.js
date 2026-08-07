const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

// ✅ Matches any route that wasn't handled above
app.all('/*splat', (req, res) => {
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});
const express = require('express');
const app = express();
const logger=require('/logger');
const authorize=require('/authorize')
//  req => middleware => res
app.use('[logger,authorize]');
// api/home/about/products

app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">view products</a><br><a href="/about">about</a><br><a href="/api/items?user=john">items</a>');
});
app.get('/about', (req, res) => {
    res.send('about');
});
app.get('/api/products', (req, res) => {
    res.send('products');
});
app.get('/api/items', (req, res) => {
    res.send('items');
});
app.listen(5000, () => {
    console.log('SERVER IS RUNNING UPDATED CODE ON PORT 5000');
});
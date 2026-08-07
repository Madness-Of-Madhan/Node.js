const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>home page</h1><a href="/api/products">view products</a>');
});
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;

    // Convert route parameter to number and find matching item
    const singleProduct = products.find(
        (product) => Number(product.id) === Number(productID)
    );

    // ✅ FIX: Check if the product actually exists before responding
    if (!singleProduct) {
        return res.status(404).json({ message: 'Product Does Not Exist' });
    }

    return res.json(singleProduct);
});
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1) {
        // ✅ FIX: Return a 200 status with an empty data array instead of 404
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json({ success: true, data: sortedProducts });
});
app.listen(5000, () => {
    console.log('server is listening on port 5000....');
});
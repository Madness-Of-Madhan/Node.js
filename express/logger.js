const express =require('express');
const app = express();
//req=>middleware
const logger=((req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time);
    next();
}); 

app.get('/',logger,(req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">view products</a>');
});
app.get('/api/products',logger,(req,res)=>{
    res.send('products');
});
app.listen(5000,()=>{
    console.log('server is listening on port 5000....');
})
module.exports=logger;
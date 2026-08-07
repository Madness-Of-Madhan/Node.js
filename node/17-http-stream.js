const http=require('http');
const fs=require('fs');
const server=http.createServer();

server.on('request',(req,res)=>{
    const fileStream=fs.createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})
server.listen(5000)
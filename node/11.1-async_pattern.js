// // app.js
// console.log('first task');

// // Use a regular object instead of DOM querySelector
// const element = { textContent: '' };

// console.time('timer');
// for (let i = 0; i < 100000; i++) {
//     element.textContent = 'hello world';
// }
// console.timeEnd('timer');

// console.log('second task');
// ___________________________________________________________
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         console.log('user hit the server');
//         return res.end("Welcome to our home page"); // Added return
//     }
//     //Blocking code
    
//     if (req.url === '/about') {
//         return res.end("Here is our short history"); // Added return
//         for(let i=0;i<1000;i++)
//         {
//             for(let j=0;j<1000;j++)
//             {
//                 console.log(`${i} ${j}`);
//             }
//         }
//     }

//     // Default 404 response if no matching route is found
//     res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//     `);
// });

// server.listen(5000, () => {
//     console.log('Server Listening on port 5000...');
// });

// const {readFile}=require('fs').promises;

// async function readMyFile() {
//     try {
//         const data = await readFile('./content/first.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// readMyFile();


const {readFile,writeFile}=require('fs');
const util=require('util');
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);

async function readMyFile() {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`, {flag:'a'});
        console.log(first,second);
    } catch (err) {
        console.log(err);
    }
}

readMyFile();
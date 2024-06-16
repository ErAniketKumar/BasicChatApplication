//1 Import packages
const express = require('express')
const http=require('http')
const path=require('path');
const {Server}=require('socket.io')
const PORT=4000

//create instances

const app=express();
const myServer=http.createServer(app)
const io= new Server(myServer);

//server static file
app.use(express.static('public'));
const filePath=path.join(__dirname,'public');
console.log('this is file path',filePath);
//serve html

app.get('/', (req, res) => {
    res.sendFile(pathFile+'/index.html');
})


// connection stablish
io.on('connection',(socket)=>{
    // console.log(socket);
    console.log('A user connected Successfully');

    //get data from client site
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    })

    socket.on('disconnect',()=>{
        console.log('User Disconnect Successfully');
    })
})

//run server

myServer.listen(PORT,() => {
    console.log(`server start at ${PORT}`);
})


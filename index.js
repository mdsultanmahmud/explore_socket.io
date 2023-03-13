const express = require("express")
const app  = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const http = require("http")
const expressServer = http.createServer(app)

const {Server} = require("socket.io")
const io = new Server(expressServer)

io.on("connection", (socket) =>{
    console.log("User connected")
    // pass a data from srver to client 
    setTimeout(() =>{
        socket.send("I'm learning socket.io===> data comes from server to clients")
    }, 6000)
    socket.on("disconnect", () =>{
        console.log("user dis-connected")
    })
})

app.get('/', (req,res) =>{
    res.sendFile(__dirname+"/index.html")
})
expressServer.listen(port, () =>{
    console.log("server is running from port:", port)
})
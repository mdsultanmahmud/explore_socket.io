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
    // setTimeout(() =>{
    //     socket.send("I'm learning socket.io===> data comes from server to clients")
    // }, 6000)
    // socket.on("disconnect", () =>{
    //     console.log("user dis-connected")
    // })

    // setInterval(() =>{
    //     const today = new Date()
    //     const date = today.toLocaleTimeString()
    //     socket.send(date)
    // },4000)

    // socket.emit("myEvnts", "Data transfer from server to clients with custom events")

    // receive data form clients side 
    // socket.on("message", msg =>{ //with pre-defined events
    //     console.log(msg)
    // })

    // with custom events 
    // socket.on('send_msg', msg =>{
    //     console.log(msg)
    // })

    socket.on("disconnect", () =>{
        console.log('user disconnected')
    })
})

app.get('/', (req,res) =>{
    res.sendFile(__dirname+"/index.html")
})
expressServer.listen(port, () =>{
    console.log("server is running from port:", port)
})
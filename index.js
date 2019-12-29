let express = require('express')
let app = express()
let socketIO = require("socket.io")
let http = require('http').Server(app)


app.use(express.static('public'))
app.get('/test', function(req, res) {
    res.send('Hello world!');
});

const server = http.listen(8080, function() {
    console.log('listening on *:8080')
})
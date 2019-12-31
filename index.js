let express = require('express')
let app = express()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.use(express.static('public'))
app.get('/test', function (req, res) {
    res.send('Hello world!')
})

io.on('connection', (socket) => {

    socket.emit('connected', {'uname': generate_username()})

    socket.on('message', (data) => {
        io.emit('message', data)
    })
})

// HELPER

function generate_username() {
    return getArrayRandomElement(uname_1) + '_' + getArrayRandomElement(uname_2)
}

function getArrayRandomElement (arr) {
    if (arr && arr.length) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    return 'lucky_one'
  }

// CONSTANTS

const server = http.listen(8080, function () {
    console.log('listening on *:8080')
})

const uname_1 = ["dusty",
"fluffy",
"scaredy",
"sweetie",
"sassy",
"rusty",
"purry",
"burly",
"wild",
"playful",
"silly",
"lazy",
"clever",
"cute",
"sleepy",
"energetic",
"wise",
"funny",
"speedy",
"feisty"]

const uname_2 = ["bella",
"panda",
"romeo",
"chloe",
"casper",
"lucy",
"mimi",
"nini",
"cleo",
"tomcat",
"gracie",
"buddy",
"fiona",
"batman",
"bat",
"boo",
"ninja",
"shadow",
"oscar",
"diana",
"leo",
"kiki",
"felix",
"minou",
"bandit",
"misty",
"kitten",
"cali",
"mew",
"max",
"lola",
"mittens",
"nala",
"lily",
"coco",
"eve",
"oliver",
"frankie",
"bailey",
"poppy",
"dexter",
"snowball",
"sophie",
"caramel",
"patch",
"maru",
"noodle",
"whiskers",
"madame",
"minnie",
"pebbles",
"pepper",
"marie",
"roger",
"scooter",
"jiji",
"giggle",
"crackle",
"swoosh",
"flutter",
"bunny"]

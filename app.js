const express = require("express") //include
const bodyParser = require("body-parser") //include
const app = express()
const port = 8000
app.use(bodyParser.json()) //middleware
 
// / = root uri
app.get('/', (req, res) => {
res.send('Hello Mai!.')
})

// todolist method get post
var todolist = [
    {
        id: 1,
        text: "Doing homeeork"
    },
    {
        id: 2,
        text: "Drinking"
    }
]

var idCounter = todolist.length

app.get('/todo', (req, res) => {
    res.json(todolist)
})

app.get('/todo/:id', (req, res) => {
    var id = req.params.id
    var todo = todolist.filter(todo => todo.id == id)
    res.json(todo)
})

app.post('/todo', (req, res) => {
    idCounter +=1
    todolist.push({
        id: idCounter,
        text: req.body.text
    })
    // console.log(req.body)
    res.sendStatus(200)
})


app.listen(port, () => (console.log("App listening on port " + port)))


const TODOS = require("../data/todos.json");

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    try {
        if(req.body.username == "demo" && req.body.password == "demo") {
            res.send({
                token: 'test123'
            });
        }else {
            res.status(401).send({
                message: 'Wrong username or password '
            });
        }
    }catch(e) {
        res.status(500).send({
            message: 'something went wrong'
        });
    }
  });

app.get('/api/todos', (req, res) => {
    res.send(TODOS);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

module.exports = app;
var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tienda"
});


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/submit', urlencodedParser, function (req, res) {
    console.log("Im here");
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.usuario);
    console.log(req.body.correo);
    console.log(req.body.pass);
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected");
        var sql = "INSERT INTO `usuario` (`nombre`,`apellido`,`usuario`,`correo`,`pass`) VALUES ('" + req.body.nombre + "', '" + req.body.apellido + "','" + req.body.usuario + "', '" + req.body.correo + "', '" + req.body.pass + "')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("table created");
        });
    });
    res.sendFile('public/index.html', { root: __dirname });
});


app.listen(3000, function () {
    console.log('Listening on port 3000');
});
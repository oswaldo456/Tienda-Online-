const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
let usuarios = [];
app.use(cors());
//configuracion  middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/usuario', (req, res) => {
    const usuario = req.body;
    // Imprime el usuario
    console.log(usuario);
    usuarios.push(usuario);

    res.send('Se ha creado el usuario');
});

app.listen(port, () => console.log(`Ha empezado a ejecutarse ${port}!`));


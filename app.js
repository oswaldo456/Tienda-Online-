const express = require('express');
const app = express();
const port = 3000;
app.get('/Categorias', (req, res) => {
return res.send('Este servicio muestra las categorias');
});
app.get('/DetallesOrdenes', (req, res) => {
return res.send('Este servicio muestra la informacion de la orden');
});
app.get('/Productos', (req, res) => {
return res.send('Este servicio muestra los productos');
});
app.post('/Crear cuenta', (req, res) => {
return res.send('Servicio de crear cuenta');
});
app.post('/Crear ordenes', (req, res) => {
return res.send('Este servicio creara ordenes');
});
app.delete('/Borrar orden', (req, res) => {
return res.send('Este servicio elimina las ordenes');       
});
app.put('/', (req, res) => {
return res.send('Recibe el put');
});

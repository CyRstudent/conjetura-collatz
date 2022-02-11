/* eslint-disable */
const express = require('express');
const puerto = 3000;
const app = express();
app.get('/', async (req, res) =>{
	res.redirect('/collatz-conjeture/web/public/index.html')
});
app.use(express.static('./'))
app.listen(puerto, async () =>{
	console.log(`App escuchando en el puerto ${puerto}`)
	console.log(`Pagina web: http://localhost:${puerto}`)
});

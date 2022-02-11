/* eslint-disable */
const express = require('express');
const puerto = 0327;
const app = express();
app.get('/', async (req, res) =>{
	res.send(`https://localhost:${puerto}/public/index.html`);
});
app.use(express.static('./public'))
app.listen(puerto, async () =>{
	console.log(`App escuchando en el puerto ${puerto}`)
	console.log(`Pagina web: http://localhost:${puerto}`)
});

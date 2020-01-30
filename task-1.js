const express = require('express');

const app = express();
const port = 8000;

app.get('/:value', (req, res) => {
	res.send(req.params.value);
});

app.listen(port, () => {
	console.log('We are live on ' + port);
});
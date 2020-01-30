const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'password';

app.get('/', (req, res) => {
	res.send(password);
});

app.get('/encode/:value', (req, res) => {
	const encode = Vigenere.Cipher(password).crypt(req.params.value);
	res.send(encode);
});

app.get('/decode/:value', (req, res) => {
	const decode = Vigenere.Decipher(password).crypt(req.params.value);
	res.send(decode);
});

app.listen(port, () => {
	console.log('We are live on ' + port);
});


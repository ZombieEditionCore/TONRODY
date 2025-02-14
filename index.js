require('dotenv').config();
const express = require('express');
const { TonClient, WalletContractV4 } = require('ton');
const TonWeb = require('tonweb');

const app = express();
const port = process.env.PORT || 3000;

// Подключение к TON
const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));

// Маршрут для проверки работы
app.get('/', (req, res) => {
    res.send('TONRODY server is running!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
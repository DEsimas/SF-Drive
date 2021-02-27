const express = require('express');

const PORT = 8000;

const app = express();

const jsonParser = express.json();

app.use((request, response, next) => {
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} \n`
    console.log(data)
    next();
});

app.post('/', jsonParser, function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://192.168.1.37:4200/");
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

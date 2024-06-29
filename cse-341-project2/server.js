const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser  = require('body-parser');
const mongodb = require('./db/connect')

app.use('/', require('./routes'));
app.use(bodyParser.json());

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to database and listening on ${port}`);
    }
});

// app.listen(port, () => {console.log(`Server started on port ${port}`)});

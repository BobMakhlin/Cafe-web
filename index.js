const express = require('express');
const router = require('./routes/routes.js');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(router);
configeServer();
startServer();


function configeServer() {
}
function startServer() {
    app.listen(PORT, () => {
        console.log('The server was started');
    })
}

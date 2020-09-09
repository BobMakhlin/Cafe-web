const express = require('express');
const expressHbs = require('express-handlebars');
const router = require('./routes/routes.js');

const PORT = process.env.PORT || 2000;


const app = express();
const hbs = expressHbs.create({
    extname: 'hbs',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

app.use(router);
configureServer();
startServer();


function configureServer() {
    app.use(express.static('public'));

    app.engine('.hbs', hbs.engine);
    app.set("view engine", "hbs");
}
function startServer() {
    app.listen(PORT, () => {
        console.log('The server was started');
    })
}

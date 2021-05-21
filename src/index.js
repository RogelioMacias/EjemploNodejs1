const express = require('express');
const morgan = require('morgan');

app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./rutas/index.js'));
app.use('/api/programs',require('./rutas/programs.js'));
app.use('/api/users', require('./rutas/users.js'));

app.listen(3000, ()=> {
    console.log(`servidor en puerto ${app.get('port')}`);
})

module.exports = app;
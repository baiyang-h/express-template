const path = require('path');
const usersRouter = require('./users');
const foodRouter = require('./food');

module.exports = (app, express) => {
    app.get('/', (req, res) => {
        res.render('index', { title: '222' });
    });
    app.use('/v1/api', express.static('public/swagger'))
    app.use('/users', usersRouter);
    app.use('/food', foodRouter);
}

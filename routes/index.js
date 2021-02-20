const usersRouter = require('./users');
const foodRouter = require('./food')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', { title: '222' });
    });
    app.use('/users', usersRouter);
    app.use('/food', foodRouter);
}
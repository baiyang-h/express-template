import usersRouter from './users'
import foodRouter from './food'

export default (app) => {
    app.get('/', (req, res) => {
        res.render('index', { title: '222' });
    });
    app.use('/users', usersRouter);
    app.use('/food', foodRouter);
}

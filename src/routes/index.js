import usersRouter from './users'
import foodRouter from './food'

export default (app) => {
    app.get('/', (req, res) => {
        res.render('index', { title: '222', env: process.env.NODE_ENV });
    });
    app.use('/users', usersRouter);
    app.use('/food', foodRouter);
}

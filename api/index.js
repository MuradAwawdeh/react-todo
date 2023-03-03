const app = require('express')();

app.get('/api/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

module.exports = app;
module.exports = function (app) {

    app.get('/', function (req, res) {

        res.render('index.ejs');

    });

    app.get('/setedit', function (req, res) {

        res.render('setedit.ejs');

    });

    app.get('/classedit', function (req, res) {

        res.render('classedit.ejs');

    });


};
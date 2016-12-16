var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

// app.get('/reddit/xbox', function(request, res) {
//     res.render('pages/reddit');
// });
//
// app.get('/reddit/pc', function(request, res) {
//     res.render('pages/reddit');
// });
//
// app.get('/reddit/ps4', function(request, res) {
//     res.render('pages/reddit');
// });

app.get('/beta/:platform/:search?', function(req, res) {
    res.render('pages/newIndex');
});

app.get('/reddit', function(req, res) {
    res.render('pages/reddit');
});

app.get('/reddit/:platform/:search?', function(req, res) {
    res.render('pages/reddit');
});

app.get('*', function(req, res){
  res.render('pages/notfound');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

/**
 * Created by thibaultboursier on 06/09/15.
 */

var express = require('express'),
    monk = require('monk'),
    path = require('path'),
    app = express(),
    port = 3000,
    db =  monk('localhost:27017/foo');

app.use('/', express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/api/', function(req, res) {
    res.send('foo');
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, function() {
    console.log('listening on port ' + port)
});

/**
 * Created by thibaultboursier on 06/09/15.
 */

var express = require('express'),
    path = require('path'),
    app = express(),
    port = 3000;

app.use('/', express.static(__dirname + '/public'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, function() {
    console.log('listening on port ' + port)
});
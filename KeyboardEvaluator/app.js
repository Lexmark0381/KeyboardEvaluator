var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var DiffMatchPatch = require('diff-match-patch');

var dmp = new DiffMatchPatch();

var correctString = "Augusta Ada King-Noel, Countess of Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine."

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('userText', function (text) {
        var timeout = 1.0;
        var d = dmp.diff_main(correctString, text)
        var html = dmp.diff_prettyHtml(d);
        socket.emit('HTMLdiff', html);
    })


    socket.on('result', function(resultObject){
        console.log(resultObject);
    })

});

http.listen(3000, function(){
    console.log('listening on port 3000');
});




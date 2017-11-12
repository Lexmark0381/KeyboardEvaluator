var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var DiffMatchPatch = require('diff-match-patch');

var dmp = new DiffMatchPatch();

// var diff_match_patch_test = require("./diff_match_patch_test.js")


var x =  dmp.diff_main;

var correctString = "Augusta Ada King-Noel, Countess of Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine"

console.log(typeof x)
console.log(x)

// var dmp = new diff_match_patch();


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('text', function (data) {
        // console.log(data);
        // history.push(data);
        // console.log(history)
        listAnalyzer(data)
    })

});

http.listen(3000, function(){
    console.log('listening on port 3000');
});

listAnalyzer = function (list) {
    var deletions = 0
    for(var i = 0; i < list.length; i++) {
        try {
            if(list[i+1].length < list[i]){
                deletions += 1;
            }
        } catch (e){
            throw e;
        }
    }
    console.log("deletions : "+ deletions);

}



k
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

    socket.on('text', function (data) {
        // console.log(data);
        history.push(data);
        // console.log(history)
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



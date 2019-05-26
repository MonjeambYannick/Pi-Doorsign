const express = require('express');
const ejs = require('ejs');
const exec = require('child_process').exec;

var app = express();

const port = 3000;

var dataset = {0: {title: "Open", imgURL: "/img/open.png"}, 1: {title: "Closed", imgURL: "/img/closed.png"}, 2: {title: "Belegt", imgURL:""}};

//
app.use(express.static('public'))

// html render engine set to ejs
app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
  var id = 0;
  if(req.query.id != undefined) {
    id = req.query.id;
  }
   
  res.render('index.ejs', {id: id, title: dataset[id].title, imgURL: dataset[id].imgURL});
});

// starting server
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '...');
});

var kursscript = exec('pwd',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
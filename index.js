const express = require('express');
const ejs = require('ejs');
const exec = require('child_process').exec;
const fs = require('fs');

let app = express();

const port = 3030;

const data = JSON.parse(fs.readFileSync('data.json'));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var id = 0;
    if(req.query.id != undefined) {
      if(req.query.id < data.states.length) {
        id = req.query.id;
      }
    }

    if(id == 'e') {
      KursAccounts(true);
    } else if(id == 'd') {

    } else {
      res.render('index.ejs', {tabledata: data.tabledata, name: data.states[id].name, logo: data.states[id].logo, clock: data.states[id].clock, table: data.states[id].table, main: data.states[id].main})
    }

});

app.get('/edit', function(req, res) {
  res.send('Livia ist Cool !!') 
  //res.render('edit.ejs');
});

app.listen(port, function() {
    console.log('Server listening on Port: ' + port);
});

function KursAccounts(state) {
  if(state) {
    exec('echo state');
  }else {
    exec('echo state');
  }
}
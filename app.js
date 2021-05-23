var express = require('express');

var app = express();
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
  helpers: {
    section: function(name, options){
        if(!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
    }
  }
}))
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('home');
});

app.get('/allies',function(req,res){
  res.render('allies');
});

app.get('/baddies',function(req,res){
  res.render('baddies');
});

app.get('/powerups',function(req,res){
  res.render('powerups');
});

app.get('/games',function(req,res){
  res.render('games');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

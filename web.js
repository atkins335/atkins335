
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , intro = require('./routes/intro')
  , guitar = require('./routes/guitar')
  , ukulele = require('./routes/ukulele')
  , djembe = require('./routes/djembe')
  , singing = require('./routes/singing')
  , youtube = require('./routes/youtube')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// url set
app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/intro', intro.main);
app.get('/guitar', guitar.main);
app.get('/guitar/list', guitar.list);
app.get('/guitar/youtube', guitar.youtube);
app.get('/ukulele', ukulele.main);
app.get('/ukulele/list', ukulele.list);
app.get('/ukulele/youtube', ukulele.youtube);
app.get('/djembe', djembe.main);
app.get('/djembe/list', djembe.list);
app.get('/djembe/youtube', djembe.youtube);
app.get('/singing', singing.main);
app.get('/singing/list', singing.list);
app.get('/singing/youtube', singing.youtube);
app.get('/youtube', youtube.list);


http.createServer(app).listen(app.get('port'), function(){
	console.log('##### DUBI_DUBA SERVER START #####');
});

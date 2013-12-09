/**
 * singing
 */
// main
exports.main = function(req, res){
	console.log('##### DUBI_DUBA - /singing call #####');
	
	res.render('main', { pageId: 'singing', pageName : '노래' });
}

// video list
exports.list = function(req, res){
	console.log('##### DUBI_DUBA - /singing/list call #####');
	
	var video = require('../db/video');
	
	video.list('singing', function(result){
		res.render('list', { pageId : 'singing' });
	});
};

//youtube list
exports.youtube = function(req, res){
	console.log('##### DUBI_DUBA - /singing/youtube call #####');
	
	var video = require('../db/video');
	
	video.list('singing', function(result){
		res.render('videoList', { videoList: result, pageId : 'singing' });
	});
};
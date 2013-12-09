/**
 * djembe
 */
// main
exports.main = function(req, res){
	console.log('##### DUBI_DUBA - /djembe call #####');
	
	res.render('main', { pageId: 'djembe', pageName : '젬베' });
}

// video list
exports.list = function(req, res){
	console.log('##### DUBI_DUBA - /djembe/list call #####');
	
	var video = require('../db/video');
	
	video.list('djembe', function(result){
		res.render('list', { pageId : 'djembe' });
	});
};

//youtube list
exports.youtube = function(req, res){
	console.log('##### DUBI_DUBA - /djembe/youtube call #####');
	
	var video = require('../db/video');
	
	video.list('djembe', function(result){
		res.render('videoList', { videoList: result, pageId : 'djembe' });
	});
};
/**
 * guitar
 */
// main
exports.main = function(req, res){
	console.log('##### DUBI_DUBA - /guitar call #####');
	
	res.render('main', { pageId: 'guitar', pageName : '기타' });
}

// video list
exports.list = function(req, res){
	console.log('##### DUBI_DUBA - /guitar/list call #####');
	
	var video = require('../db/video');
	
	video.list('guitar', function(result){
		res.render('list', { pageId : 'guitar' });
	});
};

//youtube list
exports.youtube = function(req, res){
	console.log('##### DUBI_DUBA - /guitar/youtube call #####');
	
	var video = require('../db/video');
	
	video.list('guitar', function(result){
		res.render('videoList', { videoList: result, pageId : 'guitar' });
	});
};
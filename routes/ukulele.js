/**
 * singing
 */
// main
exports.main = function(req, res){
	console.log('##### DUBI_DUBA - /ukulele call #####');
	
	res.render('main', { pageId: 'ukulele', pageName : '우쿨렐레' });
}

// video list
exports.list = function(req, res){
	console.log('##### DUBI_DUBA - /ukulele/list call #####');
	
	var video = require('../db/video');
	
	video.list('ukulele', function(result){
		res.render('list', { pageId : 'ukulele' });
	});
};

//youtube list
exports.youtube = function(req, res){
	console.log('##### DUBI_DUBA - /ukulele/youtube call #####');
	
	var video = require('../db/video');
	
	video.list('ukulele', function(result){
		res.render('videoList', { videoList: result, pageId : 'ukulele' });
	});
};
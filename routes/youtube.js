/**
 * singing
 */
exports.list = function(req, res){
	console.log('##### DUBI_DUBA - /youtube call #####');
	
	var video = require('../db/video');
	
	video.list('youtube', function(result){
		res.render('videoList', { videoList: result, pageId : 'youtube' });
	});
};
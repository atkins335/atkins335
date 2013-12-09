/**
 * New node file
 */
exports.list = function(pageId, callback){
	var mysql = require('mysql');
	var mysqlConfig = {
		host : '127.0.0.1',
		user : 'root',
		//password : 'enqlenqk!@',
		database : 'DUBIDUBA'
	};

	var conn = mysql.createConnection(mysqlConfig);

	conn.query('SELECT * FROM VIDEO WHERE KIND = ?', [pageId], function(err, result){
		if(err){
			console.log('Mysql Query Execution Failed...');
			console.log(err);
		}else{
			console.log(result);
			
			// youtube thumbnail img를 가져오기 위해 id값 가져오기
			for(i=0; i<result.length; i++){
				var url = result[i].url;
				url = (url != '') ? url.split('?')[1] : '';
				var paramArr = (url != '') ? url.split('&') : '';
				
				if(paramArr != ''){
					for(j=0; j<paramArr.length; j++){
						var param = paramArr[j].split('=');
						
						if(param[0] == 'v'){
							result[i].videoId = param[1];
						}
					}
				}
			}
			
			callback(result);
		}
	});
};
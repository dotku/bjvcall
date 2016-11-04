var DynamicKey4 = require("./AgoraAPI/DynamicKey4");

module.exports.processReqest = function (req, res, socket){

    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');
    var method = '';
    
    if (req.method == 'POST') {
        method = 'POST';
    } else{
        method = 'GET';
    }
    
    req.on('data', function (data) {
        var textChunk = decoder.write(data);
        var returnedJson = catelogRequest(method, data, socket);
	
	if(typeof data !== 'undefined' || data != ''){
	    //res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end("BJData:" +returnedJson);
	}else{
	    res.writeHead(200);
	    res.end("welcome to Bluejay Mobile Health\n");
	}
    });

    req.on('end', function () {
        
    });
}

function catelogRequest(method, data, socket){
    if(typeof data === 'undefined' || data == null){
        throw "NodeJS:: processReqest: No request data!";
        return;
    }

    var dataObj = JSON.parse(data);
    var category = dataObj['category'];
	
    if(category == 'VIDEOCALL_CHINA_AGORA'){
        var vendor_key = "1cd1e48f41eb42fd89829d72b3df3fbf";
        var sign_key = "e1f27083254c4ca89f6dd5cd8ded5d15";
        var unixTs = Math.round(new Date().getTime() / 1000);
        var randomInt = Math.round(Math.random()*100000000);
        var expiredTs = 0;

        var channel_name = dataObj['data']['channel_name'];
        var uid = dataObj['data']['channel_name'];
        
        var media_channel_key = DynamicKey4.generateMediaChannelKey(vendor_key, sign_key, channel_name, unixTs, randomInt, uid, expiredTs);
        
        var returnJson = new Array();
        returnJson['dynamicKey'] = media_channel_key;
        
        return JSON.stringify(returnJson);
    }else if(category == 'ChatMsg'){
        var msg = dataObj['data'];
        var doctorId = msg['aps']['doctorId'];
		console.log(category + "_" + doctorId);
		socket.emit(category + "_" + doctorId);
		
		console.log('ChatMsg '+new Date());
		
    }else if(category == 'VideoCall'){
		
		var msg = dataObj['data'];
		var doctorId = msg['aps']['doctorId'];
		var patientId= msg['aps']['patientId'];
		console.log(category + "_" + doctorId);
		//console.log('data.aps', msg['aps']);
		socket.emit(category + "_" + doctorId,msg['aps']);
		
		console.log('VideoCall '+new Date());
		
    }else if(category == 'Patient_Intakeform'){
		
		var msg = dataObj['data'];
		var doctorId = msg['aps']['doctorId'];
		var patientId= msg['aps']['patientId'];
		console.log(category + "_" + doctorId);
		//console.log('data.aps', msg['aps']);
		socket.emit(category + "_" + doctorId,msg['aps']);
		
		console.log('Patient_Intakeform '+new Date());
		
    }else if(category == 'PatientOnOffStatus'){
		
		var msg = dataObj['data'];
		var doctorId = msg['aps']['doctorId'];
		var patientId= msg['aps']['patientId'];
		console.log(category + "_" + doctorId);
		//console.log('data.aps', msg['aps']);
		socket.emit(category + "_" + doctorId,msg['aps']);
		
		console.log('PatientOnOffStatus '+new Date());
		
    }else if(category == 'BookScheduleReminder'){
		
		var msg = dataObj['data'];
		var doctorId = msg['aps']['doctorId'];
		var patientId= msg['aps']['patientId'];
		console.log(category + "_" + doctorId);
		//console.log('data.aps', msg['aps']);
		socket.emit(category + "_" + doctorId,msg['aps']);
		
		console.log('BookScheduleReminder '+new Date());
		
    }else{
		console.log('category',category);
		console.log('dataObj',dataObj);
		console.log('No Condition '+new Date());
	}
    
    
    
}

'use strict';

window.BJVCall = (function(id, opt) {
	var id = id;
	var bjvcallOpt = {};
	var bjvcallObj = {};
	var statusObj = {
		msg: '<div class="animated infinite fadeIn status">Connecting...</div>'
	};
	var defaultCSSCover = '';
	var defaultCSSBadage = '';
	
	bjvcallObj.html = '';
	bjvcallObj.patient_name = 'Patient Name';
	bjvcallObj.heading = {};
	bjvcallObj.heading.logo = '/assets/images/logo.png';
	bjvcallObj.VCtrlCenter = {};
	bjvcallObj.VCtrlCenter.ctrl = [
		{	
			ctrlName: 'videoBtn',
			imageURL: '/assets/images/group.svg'
		},
		{
			ctrlName: 'muteBtn',
			imageURL: '/assets/images/oval-138.svg'
		},
	];
	bjvcallObj.VCtrlRight = {};
	bjvcallObj.ctrl = {
		volume: 80,
	}
	bjvcallObj.audio = true;

	if (typeof opt != 'undefined') {
		bjvcallOpt = opt;
	}

	bjvcallObj.close = function(){
		// bjvcallDom = $("#" + id + " .bjvcall-container").detach();
		// bjvcallOpt.status = 0;
		$("#" + id + " .bjvcall-container").hide();
	}
	bjvcallObj.open = function(){
		// bjvcallDom.appendTo($("#" + id + " .bjvcall-container"));
		$("#" + id + " .bjvcall-container").show();
	}
	bjvcallObj.genOpt = function(){
		genOpt();
	}
	bjvcallObj.genHTML = function(){
		bjvcallObj.html = '<div class="bjvcall-container">'
		// + ' <!--Visit Top Header-->'
		+ ' <div class="bjvcall-heading"> '
		+ '   <div class="container-fluid">'
		+ '     <div class="header-window-controller pull-left" >'
		+ '       <a href="javascript:;" class="bjvcall-close" title="close"><i class="glyphicon glyphicon-remove-sign"></i></a>'
		+ '       <a href="javascript:;" class="bjvcall-minimize" title="Minimize"><i class="glyphicon glyphicon-minus-sign"></i></a>'
		+ '       <a href="javascript:;" class="bjvcall-maximize" title="Maximize"><i class="glyphicon glyphicon-plus-sign"></i></a>'
		+ '     </div>'
		+ '     <div class="header-title pull-left">' + bjvcallOpt.heading.title + '</div>'
		+ '     <div class="header-status pull-left">' + bjvcallOpt.heading.status + '</div>'
		+ '     <div class="header-logo pull-right text-right col-xs-4">' + bjvcallOpt.heading.logo + '</div>'
		+ '   </div>'
		+ ' </div>'
		// + ' <!--Main Container-->'
		+ ' <div class="bjvcall-body">'
		+ '   <div class="text-center body-logo animated fadeIn">' 
		+ '     <div class="cover">' + bjvcallOpt.body.cover + '</div>'
		+ '     <div class="badage animated bounceIn"><i class="glyphicon glyphicon-ok"></i></div>'
		+ '   </div>'
		+ '   <div class="body-video-controller">'
		+ '     <div class="vctrl-left col-md-3 col-sm-3 col-xs-3 text-left">' + bjvcallOpt.body.VCtrlLeft + '</div>'
		+ '     <div class="vctrl-center col-md-6 col-sm-6 col-xs-6 text-center">' 
		+ ' 		<div class="align-bottom">' + bjvcallOpt.body.VCtrlCenter + '</div>'
		+ ' 	</div>'
		+ '     <div class="vctrl-right pull-right col-md-3 col-sm-3 col-xs-3 text-right">' 
		+ ' 		<div class="align-bottom align-right">' + bjvcallOpt.body.VCtrlRight + '</div>'
		+ '   </div>'
		+ ' </div>';
	}


	bjvcallObj.start = function(){
		if (bjvcallOpt.status == 1){
			bjvcallObj.open();
		} else {
			bjvcallObj.init();
		}
	}

	bjvcallObj.minimize = function(){
		console.log("bjvcallObj.minimize");
		$("#" + id + " .bjvcall-container").css("width", "512px");
		$("#" + id + " .bjvcall-container").css("height", "384px");
		$("#" + id + " .bjvcall-container").css("margin-left", "0px");
		$("#" + id + " .bjvcall-container").css("margin-right", "0px");
		$("#" + id + " .bjvcall-container").css("margin-top", "10%");
		$("#" + id + " .bjvcall-container").css("display", "relative");
		
		$("#" + id + " .bjvcall-container").css("left", ($("body").width() - $("#" + id + " .bjvcall-container").width())/2 + "px");
		// $("#" + id + " .bjvcall-container").draggable();

		$("#" + id + " .bjvcall-container").css("border", "1px solid #999");
		$("#" + id + " .bjvcall-container .bjvcall-body").css("height", $("#" + id + " .bjvcall-container").height() - $("#" + id + " .bjvcall-heading").height());
		
		

		$("#" + id + " .bjvcall-container .bjvcall-body .cover").css({
			height: "100px",
			width: "100px",
			fontSize: "50px",
			lineHeight: "100px"
		});

		

		$("#" + id + " .bjvcall-container .bjvcall-body .badage").css({
			height: "22px",
			width: "22px",
			fontSize: "10px",
			lineHeight: "22px",
			left: "30px",
			marginTop: "-20px"
		});

		$("#" + id + " .bjvcall-container .vctrl-left").hide();
		$("#" + id + " .bjvcall-container .align-bottom").addClass('mini');
		bjvcallOpt.size = "small";
	}

	bjvcallObj.maximize = function(){
		console.log("bjvcallObj.minimize");
		$("#" + id + " .bjvcall-container").css("width", "100%");
		$("#" + id + " .bjvcall-container").css("height", "100%");
		$("#" + id + " .bjvcall-container").css("margin-top", "0px");
		$("#" + id + " .bjvcall-container").css("top", "0px");
		$("#" + id + " .bjvcall-container").css("left", "0px");
		$("#" + id + " .bjvcall-container").css("right", "0px");
		$("#" + id + " .bjvcall-container").css("display", "relative");
		$("#" + id + " .bjvcall-container").css("cursor", "auto");
		$("#" + id + " .bjvcall-container").css("border", "1px solid #999");
		$("#" + id + " .bjvcall-container .bjvcall-body").css("height", $("#" + id + " .bjvcall-container").height() - $("#" + id + " .bjvcall-heading").height());
		$("#" + id + " .bjvcall-container").draggable();
		$("#" + id + " .bjvcall-container").draggable('disable');
		$("#" + id + " .bjvcall-container .vctrl-left").show();
		$("#" + id + " .bjvcall-container .bjvcall-body .cover").css(defaultCSSCover);
		$("#" + id + " .bjvcall-container .bjvcall-body .badage").css(defaultCSSBadage);
		$("#" + id + " .bjvcall-container .align-bottom").removeClass('mini');
		bjvcallOpt.size = "full";
	}

	/* SETTERS */
	bjvcallObj.setTitle = function(str) {
		bjvcallObj.patient_name = str;
		bjvcallObj.init();
	}

	bjvcallObj.setPatientName = function(str){
		bjvcallObj.setTitle(str);
	}
	
	bjvcallObj.setAudio = function(str) {

		switch (str) {
			case 'on':
				bjvcallObj.audio = true;
				alert('Audio On');
				break;

			case 'off':
				bjvcallObj.audio = false;
				alert('Audio Off');

				break;
			default: 
				console.log('bjvcallObj.audio', bjvcallObj.audio);
				bjvcallObj.audio ? bjvcallObj.setAudio('off') : bjvcallObj.setAudio('on');
				// do something
		}
	}

	bjvcallObj.setMute = function(){
		// different name for setAudio
		bjvcallObj.setAudio();
	}

	bjvcallObj.setVideo = function(str) {
		switch (str) {
			case 'on':
				bjvcallObj.video = true;
				alert('Video On');
				break;

			case 'off':
				bjvcallObj.video = false;
				alert('Video Off');

				break;
			default: 
				console.log('bjvcallObj.video', bjvcallObj.video);
				bjvcallObj.video ? bjvcallObj.setVideo('off') : bjvcallObj.setVideo('on');
				// do something
		}
	}

	

	bjvcallObj.setVolume = function(num) {
		var num = prompt('Set Your Value');
		bjvcallObj.ctrl.volume = num;
		$("#" + id).find('.volumeValue').html(num);
		alert('volume', num);
		// bjvcallObj.init();
		// bjvcallObj.open();
	}

	bjvcallObj.setOpt = function(opt){
		console.log('setOpt');
		var key;
		/*
		function setOpt(defaultOpt, customOpt) {
			var key;
			for (key in defaultOpt) {
				if (!defaultOpt.hasOwnProperty(key)) 
			}
		}
		*/
		/*
		for (key in opt) {
			if (key)
		}
		*/
		bjvcallOpt = opt;
		bjvcallObj.init();
	}

	/* EVENTS LISENERS */
	bjvcallObj.bindEvents = function(){
		$("#" + id + " .bjvcall-container .bjvcall-close").on('click', function(){
			console.log('bjvcall-close click');
			bjvcallObj.close();
		}); 

		$("#" + id + " .bjvcall-minimize").on('click', function(){
			bjvcall.minimize();
		});
		$("#" + id + " .bjvcall-maximize").on('click', function(){
			bjvcall.maximize();
		});

		$("#" + id + " .bjvcall-container .bjvcall-heading").on('mouseover', function(){
			if (bjvcallOpt.size == "small") {
				$("#" + id + " .bjvcall-container").css("cursor", "move");
				$("#" + id + " .bjvcall-container").draggable();
				$("#" + id + " .bjvcall-container").draggable('enable');
			}
		});

		$("#" + id + " .bjvcall-container .bjvcall-heading").on('mouseout', function(){
			$("#" + id + " .bjvcall-container").css("cursor", "auto");
			$("#" + id + " .bjvcall-container").draggable();
			$("#" + id + " .bjvcall-container").draggable('disable');
		});

		$("#" + id + " .bjvcall-container .videoBtn").on("click", function(){
			bjvcallObj.setVideo();
		});

		$("#" + id + " .bjvcall-container .muteBtn").on("click", function(){
			bjvcallObj.setMute();
		});

		$("#" + id + " .bjvcall-container .volumeBtn").on("click", function(){
			bjvcallObj.setVolume(80);
		});
	}

	bjvcallObj.init = function(){
		console.log('bjvcall: init');
		
		console.log('bjvcall: detect id', id);
		if (!id) {
			id = "bjvcall";
			var e = $("<div id='" + id + "'></div>");
			e.appendTo('body');
			console.log('bjvcall: created id', id);
			console.log('bjvcall: created dom', e);
		}

		console.log('bjvcall: genHTML');
		bjvcallObj.genOpt();
		
		console.log('bjvcall: genHTML');
		bjvcallObj.genHTML();

		console.log('bjvcall: clean all instance');
		if ($("#" + id + " .bjvcall-container")) {
			$("#" + id + " .bjvcall-container").remove();
		}
		
		console.log('bjvcall: append HTML code');

		$(bjvcallObj.html).appendTo($("#" + id)).hide();
		$("#" + id + " .bjvcall-container").draggable();
		bjvcallObj.bindEvents();
		
		// remember default css
		defaultCSSCover = {
			height: $("#" + id + " .bjvcall-container .bjvcall-body .cover").css('height'),
			width: $("#" + id + " .bjvcall-container .bjvcall-body .cover").css('width'),
			fontSize: $("#" + id + " .bjvcall-container .bjvcall-body .cover").css('fontSize'),
			lineHeight: $("#" + id + " .bjvcall-container .bjvcall-body .cover").css('lineHeight')
		}
		
		defaultCSSBadage = {
			height: $("#" + id + " .bjvcall-container .bjvcall-body .badage").css('height'),
			width: $("#" + id + " .bjvcall-container .bjvcall-body .badage").css('width'),
			fontSize: $("#" + id + " .bjvcall-container .bjvcall-body .badage").css('fontSize'),
			lineHeight: $("#" + id + " .bjvcall-container .bjvcall-body .badage").css('lineHeight'),
			left: $("#" + id + " .bjvcall-container .bjvcall-body .badage").css('left'),
			marginTop: $("#" + id + " .bjvcall-container .bjvcall-body .badage").css('marginTop')
		}

		try {
			// opentok play video
			
			bjvcallOpt.status = 1;
		} catch(e) {
			console.log(e);
			alert('internal error');
		}
	}
	
	
	
	bjvcallObj.init();

	/* Private Functions */
	function getPationIcon(name){
		var initials = name.match(/\b\w/g) || [];
		return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
	}

	function genOpt(){
		bjvcallOpt = {
			keys: {
				opentok: "OPENTOK_KEY_HERE"
			},
			patient : {
				gender: 'female',
				name: bjvcallObj.patient_name,
			},
			heading : {
				if_display: true,
				window_controller: {
					if_close: true,
					if_minimize: true,
					if_maximize: true,
					allow_move: true,
					allow_resize: false // planed feature
				},
				title: bjvcallObj.patient_name,
				status: statusObj.msg, // would be timer display after connected
				logo: "<img src='"+bjvcallObj.heading.logo+"' class='' style='line-height: 50px' width='100%'>"
			},
			body : {
				cover: getPationIcon(bjvcallObj.patient_name),
				VCtrlLeft: "<div class='minivideo'></div>",
				VCtrlCenter: "<a href='#'>" 
				+ "<div class='col-xs-6 text-right'>"
				+ "<div class='" + bjvcallObj.VCtrlCenter.ctrl[0].ctrlName + "'>"
				+ "  <img src='"+bjvcallObj.VCtrlCenter.ctrl[0].imageURL +"' class='' style='line-height: 50px'>"
				+ "</div>"
				+ "<div class='text pull-right text-center'>video</div>"
				+ "</div>"
				+ "<div class='col-xs-6 text-left'>"
				+ "<div class='" +bjvcallObj.VCtrlCenter.ctrl[1].ctrlName + "'>" 
				+ "  <img src='"+bjvcallObj.VCtrlCenter.ctrl[1].imageURL +"' class='' style='line-height: 50px'>"
				+ "</div>"
				+ "<div class='text text-center'>mute</div>"
				+ "</div>",
				VCtrlRight: "<a href='#'><div class='text pull-right volumeBtn'>" 
					+ "<div class='text-center volumeValue' style='height: 60px; line-height: 60px;'>" + bjvcallObj.ctrl.volume + "</div>"
					+ "<div class='text-center'> volume </div>"
					+ "</div></a>"

			},
			valume: 8,
			app_debug: true,
			size: 'full', //['small', 'big', full'],
			bjparam: {
				token: '', // required
				userid: '',
				admindoctor: '',
				passcode: '',
				others: {}
			},
			status: 0, //[{0: 'init status, nothing'}, {1: 'running'}, {-1: 'stop'}, {-2: 'error'}]
		}
	}

	return bjvcallObj;
});
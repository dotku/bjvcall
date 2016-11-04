'use strict';

window.BJVCall = function(id, opt) {
	var bjvcallOpt = {};
	var bjvcallObj = {};
	var statusObj = {
		msg: 'Connecting...'
	};
	var bjvcallDom;

	if (typeof opt != 'undefined') {
		bjvcallOpt = opt;
	} else {
		bjvcallOpt = {
			heading : {
				if_display: true,
				window_controller: {
					if_close: true,
					if_minimize: true,
					if_maximize: true,
					allow_move: true,
					allow_resize: false // planed feature
				},
				title: "BJVCall",
				status: statusObj.msg, // would be timer display after connected
				logo: "<img src='/assets/images/logo.png'>"

			},
			body : {
				cover: "[PATIENT_ICON]",
				VCtrlLeft: "[MINIVIDEO]",
				VCtrlCenter: "[VideoICON] | [AudioICON]",
				VCtrlRight: "[Volume]"
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
	
	$("#" + id + " .bjvcall-container").draggable();
	// $("#" + id + " .bjvcall-container").draggable('disable');

	bjvcallObj.close = function(){
		bjvcallDom = $("#" + id + " .bjvcall-container").detach();
		// bjvcallOpt.status = 0;
	}
	bjvcallObj.open = function(){
		bjvcallDom.appendTo($("#" + id + " .bjvcall-container"));
	}

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
	+ '     <div class="header-logo pull-right">' + bjvcallOpt.heading.logo + '</div>'
	+ '   </div>'
	+ ' </div>'
	// + ' <!--Main Container-->'
	+ ' <div class="bjvcall-body">'
	+ '   <div class="text-center body-logo">' + bjvcallOpt.body.cover + '</div>'
	+ '   <div class="body-video-controller">'
	+ '     <div class="vctrl-left col-md-3 text-left">' + bjvcallOpt.body.VCtrlLeft + '</div>'
	+ '     <div class="vctrl-center col-md-6 text-center">' + bjvcallOpt.body.VCtrlCenter + '</div>'
	+ '     <div class="vctrl-right col-md-3 text-right">' + bjvcallOpt.body.VCtrlRight + '</div>'
	+ '   </div>'
	+ ' </div>';
	
	bjvcallObj.init = function(){
		try {
			$(bjvcallObj.html).appendTo($("#" + id)).hide();
			bjvcallOpt.status = 1;
		} catch(e) {
			console.log(e);
			alert('internal error');
		}
	}

	bjvcallObj.start = function(){
		try{
			if (bjvcallOpt.status == 1){
				bjvcallObj.open();
			} else {
				$(bjvcallObj.html).appendTo($("#" + id));
				bjvcallOpt.status = 1;
			}
			// $("#" + id).hide();
		} catch (e) {
			console.log(e);
			alert('internal error');
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

		bjvcallOpt.size = "full";
	}

	$(function(){
		
		
		$("#" + id + " .bjvcall-container .bjvcall-close").on('click', function(){
			console.log('bjvcall-close click');
			bjvcallObj.close();
		}); 
		// .clone().appendTo("#" + id + " .bjvcall-container");
		// .appendTo(document.body);
		

		/*
		$("#bjidclose").on('click', function(){
			console.log('bjvcall-close click');
			bjvcallObj.close();
		});
		*/
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
	
	});

	return bjvcallObj;
}
# BJVCall
Version: v1.0.0  
BlueJay Video Call

## Install

```shell
bower install bjvcall
```

## General Usage

Step 1. Place `<div id="bjvcall"></div>` to the location you want to display the video in HTML.  
Step 2. Setup your option variable (Optional)  
	
Sample/default option object  

```javascript
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
		logo: "[LOGO]"

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
```

Step 3. Use JavaScript to control the program

```javascript
var bjvcall = BJVCall('bjvcall', bjvcallOpt);
$('.bjvcall-open').on('click', function(){
	bjvcall.start();
});
```

## Controller / Usage

```javascript
bjvcall.open(); // display the video call and start the video process
bjvcall.close(); // hide the video call and stop the video process
```

## Detail

### Initialization
There are two ways of setup the options:

```javascript
var bjvcall = BJVCall('htmlID', bjvcallOpt);
```

or 

```javascript
var bjvcall = BJVCall();
bjvcall.setOpt(bjvcallOpt);
```

## Concept
According to [iPhone Market Share Research in 2015](http://info.localytics.com/blog/research-shows-the-iphone-6-is-the-most-adopted-iphone-model-with-the-highest-user-engagement), 
iPhone 6 ~ iPhone 4 occupied the most market share (93.3%). 

- 4 / 4S: 960 × 640 px
- 5 / 5C / 5S / SE: 1136 × 640 px
- 6 / 6S / 7: 1334 × 750 px 
- 6 Plus / 6S Plus / 7 Plus: 1920 × 1080 px

We use 512px as mini view for first release.
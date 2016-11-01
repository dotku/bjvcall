# BJVCall
BlueJay Video Call

## General Usage Case
Step 1. Place `<div id="bjvcall"></div>` to the location you want to display the video in HTML.
Step 2. Setup your option variable (Optional)

Sample/default option object

```
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

```
var bjvcall = BJVCall('bjvcall');
$('.bjvcall-open').on('click', function(){
    bjvcall.start();
});
```

## Controller Usage
```
bjvcall.open(); // display the video call and start the video process
bjvcall.close(); // hide the video call and stop the video process
```

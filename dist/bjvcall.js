window.BJVCall = function($, id, opt) {
      var bjvcallOpt = {}
      var bjvcallObj = {};

      if (opt != 'undefined') {
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
            status: "Connecting...", // would be timer display after connected


          }
        }
      }
      bjvcallObj.close = function(){
        $("#" + id).html('');
      }

      bjvcallObj.html = 
      + '<div id="bjvcall">'
      + '  <!--Visit Top Header-->'
      + '  <div class="bjvcall-heading"> '
      + '    <div class="container-fluid">'
      + '      <div class="header-window-controller pull-left" >'
      + '        <a href="javascript:bjvcall.close();" title="close"><i class="glyphicon glyphicon-remove-sign"></i></a>'
      + '        <a href="#" title="Minimize"><i class="glyphicon glyphicon-minus-sign"></i></a>'
      + '        <a href="#" title="Maximize"><i class="glyphicon glyphicon-plus-sign"></i></a>'
      + '      </div>'
      + '      <div class="header-title pull-left">Michelle Zhang</div>'
      + '      <div class="header-status pull-left">Connecting...</div>'
      + '      <div class="header-logo pull-right">[LOGO]</div>'
      + '    </div>'
      + '  </div>'
      + '  <!--Main Container-->'
      + '  <div class="bjvcall-body"></div>'
      + '</div>';

      bjvcallObj.start = function(){
        $("#" + id).html(bjvcallObj.html);
      }
      bjvcallObj.start();
      return bjvcallObj;
    }
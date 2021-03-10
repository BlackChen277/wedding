(function ($) {
    "use strict";

    $.fn.extend({ 

      countdown100: function(endTime) {

        return this.each(function() {
          var obj = $(this);
          var timeNow = new Date();
          var t = Date.parse(endTime) - Date.parse(timeNow);

          if ( t < 0){
            t = 0
          }
          var clock = $(obj).FlipClock(t/1000, {
            clockFace: 'DailyCounter',
            countdown: true
          });


        });
      }
    });
})(jQuery);

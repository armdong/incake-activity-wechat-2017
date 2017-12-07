/**
 * js网页雪花效果
 */
;(function(){
  $.fn.snow = function(options){

    var icons = ['assets/imgs/anniversary/icon_bake.png', 'assets/imgs/anniversary/icon_cake.png', 'assets/imgs/anniversary/icon_fork.png', 'assets/imgs/anniversary/icon_gift.png'];
    
    var $flake = $('<div id="snowbox" />').css({'position': 'absolute', 'top': '0px','zIndex':'5'}),
      documentHeight = $('#pageAnniversary').height(),
      documentWidth = $('#pageAnniversary').width(),
      defaults = {
              minSize   : 10,   //雪花的最小尺寸
              maxSize   : 20,   //雪花的最大尺寸
              newOn   : 1000,   //雪花出现的频率
              flakeColor  : "#fff"
            },
      options = $.extend({}, defaults, options);
      var interval = setInterval( function(){
        var startPositionLeft = Math.random() * documentWidth-40,
          startOpacity = 0.5 + Math.random(),
          sizeFlake = options.minSize + Math.random() * options.maxSize,
          endPositionTop = documentHeight - 40,
          endPositionLeft = Math.random() * documentWidth-40,
          durationFall = documentHeight * 10 + Math.random() * 5000;
          
        //随机生成
        var random = Math.floor(Math.random()*4),
          _html = '';

        _html = '<img style="width: 100%;" src="' + icons[random] + '" />';
        $flake.html(_html),
          
        $flake.clone().appendTo('#pageAnniversary').css({
            left: startPositionLeft,
            opacity: startOpacity,
            width: sizeFlake + 'px',
            height: sizeFlake + 'px',
            color: options.flakeColor
          }).animate({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.2
          },durationFall,'linear',function(){
            $(this).remove()
          }
        );
      }, options.newOn);
  };
  
})();

;(function(window, document, $, undefined) {

  $(function() {
    $.fn.snow({
      minSize: 60,
      maxSize: 100,
      newOn: 8000
    });
  });

})(window, document, jQuery);
/**
 * js网页雪花效果
 */
;(function () {
  $.fn.snow = function (options) {

    var icons = [
      'assets/imgs/xmas-newyear/icon_snow.png', 
      'assets/imgs/xmas-newyear/icon_dot.png', 
      'assets/imgs/xmas-newyear/icon_light.png'
    ];

    var $flake = $('<div class="snowbox" />').css({ 'position': 'absolute', 'top': '80px', 'zIndex': '5', 'transition': 'transform 2s linear' }),
      documentHeight = $('#xmas').height(),
      documentWidth = $('#xmas').width(),
      defaults = {
        minSize: 10,   //雪花的最小尺寸
        maxSize: 20,   //雪花的最大尺寸
        newOn: 1000,   //雪花出现的频率
        flakeColor: "#fff"
      },
      options = $.extend({}, defaults, options);

    var interval = setInterval(function () {

      var startPositionLeft = Math.random() * documentWidth - 40,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        endPositionTop = documentHeight - 40,
        endPositionLeft = Math.random() * documentWidth - 40,
        durationFall = documentHeight * 6 + Math.random() * 5000;

      //随机生成
      var random = Math.floor(Math.random() * icons.length),
        _html = '';

      if (random == 0) {
        sizeFlake = 30 + Math.random() * 60;
      }

      _html = '<img style="width: 100%;" src="' + icons[random] + '" />';
      $flake.html(_html);

      $flake.clone().appendTo('#xmas').css({
        left: startPositionLeft,
        opacity: startOpacity,
        width: sizeFlake + 'px',
        height: sizeFlake + 'px',
        color: options.flakeColor
      }).animate({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.2
      }, durationFall, 'linear', function () {
        $(this).remove()
      });
    }, options.newOn);
  };

})();

;(function (window, document, $, undefined) {

  $(function () {
    $.fn.snow({
      minSize: 5,
      maxSize: 10,
      newOn: 800
    });
  });

})(window, document, jQuery);
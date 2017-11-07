(function(window, document, $, undefined) {

  $(function() {

    // initialization
    fnInitialization();
  });

  function fnInitialization() {
    
    // Event handler for pound change
    $('.area-03').on('click', '.pound', function(e) {

      var $priceElem = $(this).parent().siblings('.price'),
        $currentElem = $priceElem.find('.current'),
        $originalElem = $priceElem.find('.original'),
        iCurrent = $(this).data('current'),
        iOriginal = $(this).data('original');

      $(this).addClass('active').siblings().removeClass('active');
      $currentElem.html('<i>￥</i>' + iCurrent);
      $originalElem.html('￥' + iOriginal);
    });
  }

})(window, document, jQuery);
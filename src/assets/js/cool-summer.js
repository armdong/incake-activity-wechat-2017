(function($ , window , document){
    $(function(){
        var $float_footer = $("#float-footer"),
            $oBtnVcode = $("#btn-vcode"),
            $clientH = $(window).height(),
            $oBtnFooter = $('#float-footer'),
            $iBtnFooterH = $oBtnFooter.height(),
            $oFrmRegister = $('.frm-register'),
            $iFrmRegisterT = $oFrmRegister.offset().top,
            $register = $('.register').find('li');
            $btn = $('.btn'),
            $mask = $('.mask'),
            $result = $('.result'),
            $mask_result = $('#mask-result'),
            $btn_register = $('#btn-register'),
            $go_official = $('.go-official');
            count = 0, // 验证重复获取验证码
            time = 58;

        //节流加载
        // var throttle = _.throttle(scroll, 200);
        // $(window).on('scroll', throttle);
        $btn.on('click',function(){
            fnScrollTop($oFrmRegister)
        });
        $go_official.on('click',function(){
            $mask.hide();
            $mask_result.fadeIn(function(){
                $result.fadeIn();
            });
        });
        $btn_register.on('click',function(){
            $result.hide();
            $mask_result.fadeIn(function(){
                $mask.fadeIn();
            });
        });
        $('.delete').on('click',function(){
            $mask_result.fadeOut();
        });
        $(window).on('scroll', function() {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT + $clientH > $iFrmRegisterT) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }
        });
        $register.click(function(){
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
        $oBtnFooter.on('click', function() {
            fnScrollTop($oFrmRegister);
        });

        $oBtnVcode.on('click', function() {
            verification($oBtnVcode);
        });
    });

    function verification(obj){
        if(count == 0){
            count = 1;
            obj.addClass('active').text('59" 后重新发送');
            var interval = setInterval(function(){
                obj.text(time-- +'" 后重新发送');
                if(time==-1){
                    count = 0;
                    clearInterval(interval);
                    time = 58;
                    obj.removeClass('active').text('获取验证码');
                }
            },1000);
        }
    }
    // 滑倒指定位置
    function fnScrollTop($obj) {
        $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
        $('.txt-mobile').focus();
    }
    
})(jQuery , window , document);

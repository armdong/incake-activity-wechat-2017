(function(){
	var data = {
			list:[{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake01.jpg',
				name:'女王芝士',
				en:'Queen Cheese cake'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake02.jpg',
				name:'浓情巧克力',
				en:'Love in Chocolate'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake03.jpg',
				name:'云朵女孩',
				en:'Spotless Girl‘s cake'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake04.jpg',
				name:'抹茶利兹',
				en:'Matcha Leeds'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake05.jpg',
				name:'经典奶香',
				en:'Classic creme'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake06.jpg',
				name:'至爱红丝绒',
				en:'Love Red Velvet'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake07.jpg',
				name:'草莓物语',
				en:'Strawberry Tale'
			},{
				linkimg:'assets/imgs/fuzhou-didi-consociatio/cake08.jpg',
				name:'无添加蔗糖',
				en:'Sugar-free Almond'
			}]
		}
		
		var $cake = $("#cake");
		var _html = template('tplCake', data);
		$cake.append(_html);
		
		$("#cake").on('click','.buy',function(){
			$(".signin-shade").fadeIn();
		});
		$(".close").click(function(){
			$(".signin-shade").fadeOut();
		});
		$(".signin ul").on("click","li",function(){
			$(this).addClass("active");
		$(this).siblings().removeClass("active");
		});
})();

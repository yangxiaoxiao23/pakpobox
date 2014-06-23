// JavaScript Document
//轮播图效果
$(function(){
	var contentEl = $('.content'),
		imgsEl = contentEl.find('.slide-li'),
		imgFlag = contentEl.find('.slide-flag span');
	
	imgFlag.click(function(){
		imgFlag.removeClass('active');
		$(this).addClass('active');
		var index = $(this).attr('index');
		imgsEl.fadeOut(500);
		imgsEl.filter('[index=' + index + ']').fadeIn(500);
	});
	
	
	var fun = function(){
		var activeIndex = imgFlag.filter('[class="active"]').attr('index');
		activeIndex++;
		if(activeIndex == 3){
			activeIndex = 0;
		}
		imgFlag.removeClass('active');
		imgFlag.filter('[index=' + activeIndex + ']').addClass('active').click();
	};
	
	var timer = setInterval(fun, 2000);
	
	imgFlag.mouseover(function(){
		clearInterval(timer);
	});
	
	imgFlag.mouseout(function(){
		timer = setInterval(fun, 2000);
	})
});

//使用JQuery hover
$(function(){
	var myPakpoEl = $('.toolbar .mypakpo'),
		mypakpoBdEl = myPakpoEl.find('.mypakpo-bd'),
		mypakpoA = mypakpoBdEl.find('a'),
		mypakpoDlEl = myPakpoEl.find('.mypakpo-dl');
	
	myPakpoEl.hover(function(){
		
		mypakpoBdEl.css({
			'border-top':'1px solid #e2e2e2',
			position:'relative',
			top:'-1px',
			background:'#fff'
		});
		
		mypakpoA.css({
			'background-position':'80px -212px'
		});
		
		mypakpoDlEl.css({
			position:'relative',
			top:'-5px',
			'z-index':1,
			display:'block'
		});
	}, function(){
		mypakpoBdEl.css({
			'border-top':'none',
			position:'static',
			background:'none'
		});
		
		mypakpoA.css({
			'background-position':'80px -190px'
		});
		
		mypakpoDlEl.css({
			position:'static',
			display:'none'
		});
	});
});
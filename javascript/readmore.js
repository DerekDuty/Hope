var text1 = $('.text-overflow1');
    var btn1 = $('#btn-overflow1');

    var   h1 = text1[0].scrollHeight; 

if(h1 >100) {
	btn1.addClass('less');
	btn1.css('display', 'block');
}

btn1.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn1.hasClass('less')) {
      btn1.removeClass('less');
      btn1.addClass('more');
      btn1.text('Read less');
      text1.animate({'height': h1});
  } else {
      btn1.addClass('less');
      btn1.removeClass('more');
      btn1.text('Read more');
      text1.animate({'height': '90px'});
  }  
});

var text2 = $('.text-overflow2');
	var btn2 = $('#btn-overflow2');
    var   h2 = text2[0].scrollHeight; 

if(h2 >100) {
	btn2.addClass('less');
	btn2.css('display', 'block');
}

btn2.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn2.hasClass('less')) {
      btn2.removeClass('less');
      btn2.addClass('more');
      btn2.text('Read less');
      text2.animate({'height': h2});
  } else {
      btn2.addClass('less');
      btn2.removeClass('more');
      btn2.text('Read more');
      text2.animate({'height': '90px'});
  }  
});



var text3 = $('.text-overflow3');
	var btn3 = $('#btn-overflow3');
    var   h3 = text3[0].scrollHeight; 

if(h3 >100) {
	btn3.addClass('less');
	btn3.css('display', 'block');
}

btn3.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn3.hasClass('less')) {
      btn3.removeClass('less');
      btn3.addClass('more');
      btn3.text('Read less');
      text3.animate({'height': h3});
  } else {
      btn3.addClass('less');
      btn3.removeClass('more');
      btn3.text('Read more');
      text3.animate({'height': '90px'});
  }  
});



var text4 = $('.text-overflow4');
    var btn4 = $('#btn-overflow4');

    var   h1 = text4[0].scrollHeight; 

if(h1 >100) {
	btn4.addClass('less');
	btn4.css('display', 'block');
}

btn4.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn4.hasClass('less')) {
      btn4.removeClass('less');
      btn4.addClass('more');
      btn4.text('Read less');
      text4.animate({'height': h1-40});
  } else {
      btn4.addClass('less');
      btn4.removeClass('more');
      btn4.text('Read more');
      text4.animate({'height': '90px'});
  }  
});


var text5 = $('.text-overflow5');
    var btn5 = $('#btn-overflow5');

    var   h1 = text5[0].scrollHeight; 

if(h1 >100) {
	btn5.addClass('less');
	btn5.css('display', 'block');
}

btn5.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn5.hasClass('less')) {
      btn5.removeClass('less');
      btn5.addClass('more');
      btn5.text('Read less');
      text5.animate({'height': h1-90});
  } else {
      btn5.addClass('less');
      btn5.removeClass('more');
      btn5.text('Read more');
      text5.animate({'height': '90px'});
  }  
});


var text6 = $('.text-overflow6');
    var btn6 = $('#btn-overflow6');

    var   h1 = text6[0].scrollHeight; 

if(h1 >100) {
	btn6.addClass('less');
	btn6.css('display', 'block');
}

btn6.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn6.hasClass('less')) {
      btn6.removeClass('less');
      btn6.addClass('more');
      btn6.text('Read less');
      text6.animate({'height': h1});
  } else {
      btn6.addClass('less');
      btn6.removeClass('more');
      btn6.text('Read more');
      text6.animate({'height': '90px'});
  }  
});


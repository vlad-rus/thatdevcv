
$(document).ready(function() {
	var cat= $('#cat');
	var bg = $('#background');
	var skate = $('#skate');
	var plane = $('.plane');
	var txt = $('.txt');
	var count = 0;

	
$("#cat").click(function(){	
     if ($('.plane').is(':animated'))
  {
      return false;
  }
    count++;
    skate.effect("bounce", {times:8, distance:3}, 10000)
	cat.effect("bounce", {times:8, distance:3}, 10000)
	cat.attr("src", "blackcat.png");
    txt.fadeOut(10);
	bg.animate({'marginLeft': '-=1500px'}, {duration:6000, complete: function () {cat.attr("src", "blackcat2.png"); bg.stop();  }} );
    plane.animate({'marginLeft': '-=3300px'}, {duration:8000});
    txt.animate({'marginLeft': '-=1550px'}, {duration:6000, complete: function () {txt.fadeIn(2500);} });
	
	
    if(count>2) {
		cat.unbind('click');
	}
});	

	
	
$(function() {
    var words = ['DEVELOPER', 'PIZZA ENTHUSIAST', 'BASKETBALL FAN'],
        i = 0,
        $el = $('#change')
    setInterval(function() {
        i++ < words.length - 1 || (i = 0);
        $el.fadeOut(function() {
            $el.text(words[i]).fadeIn();
        });
    }, 2000); 
});
	

});
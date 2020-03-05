$(window).scroll(function(){
var fromtop = $(document).scrollTop();
var scrolltop = $(document).scrollTop();       // pixels from top of screen
var docheight = $(document).height();
var winheight = $(window).height();
var distfrombtm = (docheight-winheight-fromtop);
if(fromtop > 100){fromtop=100};
var opacityRemainder = (0.3*((100-fromtop)/100));

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
var bottomcheck = ($(window).scrollTop() + $(window).height());
if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
    console.log($(window).scrollTop());
    console.log($(window).height());
    console.log($(document).height());
    $('.topnav').css({opacity: 0});
    $('.btmnav').css({opacity: 1});
  } else {
    console.log($(window).scrollTop());
    console.log($(window).height());
    console.log($(document).height());
    $('.btmnav').css({opacity: 0});
    $('.topnav').css({opacity: (1-opacityRemainder)});// use a better formula for better fading
    $('.topnav').css({transition: 'opacity 0.55s'});
  }



});

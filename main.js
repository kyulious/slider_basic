var $frame = $("#slider");
var $btns = $frame.find(".btns li");
var $panel = $frame.find(".panel");
var $circle = $frame.find("#circle");
var speed = convertSpeed($circle);
var enableClick = true;

$btns.on("click", function(e){
    e.preventDefault();
    var isOn = $(this).hasClass("on");

    if(isOn) return;

    if(enableClick){
        activation(this);
        enableClick = false;
    }    
});

function activation(self){
    var i = $(self).index();
    $panel.animate({ marginLeft : (-100*i)+"%" }, speed, function(){
        enableClick = true;
    });

    $btns.removeClass("on");
    $btns.eq(i).addClass("on");

    $circle.removeClass();
    $circle.addClass("rot"+(i+1));
}

function convertSpeed(el){
    var speed = el.css("transition-duration");
    speed = parseFloat(speed.split("s")[0]) *1000;
    return speed;
}
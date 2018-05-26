$(window).mousemove(getMousePosition);

var mouseX;

var mouseY;

function getMousePosition(event){

    mouseX = event.pageX;

    mouseY = event.pageY;



    $(".head-image").css("z-index","0");

    if(mouseX <1310 && mouseY <458){

        $(".left").css("z-index","1");

    } else{

        $(".front").css("z-index","1");

    }

}

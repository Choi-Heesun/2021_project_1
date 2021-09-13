/*slide*/
function slide() {

    $(".prev").click(function(){
        $(".slide li:last").prependTo(".slide");
        $(".slide").css({marginLeft:-1200})
        $(".slide").stop().animate({marginLeft:0},400)
    });

    $(".next").click(function(){
        $(".slide").stop().animate({ marginLeft: -1200 }, function () {
            $(".slide li:first").appendTo(".slide");
            $(".slide").css({ marginLeft: 0},1000)
        });
    });

    $(".slide").stop().animate({ marginLeft: -1200 }, function () {
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({ marginLeft: 0},1000)
    }); 
}
setInterval(slide, 3500);


/*slide_2*/

    var i = 0;

    function slide2(){
        i++;
        if(i > $("#slide_2 li:last").index()){
            i=0;
        }
        $("#slide_2 li").eq(i).stop().fadeIn("slow");
        $("#slide_2 li").eq(i-1).stop().fadeOut();
    }
    setInterval(slide2, 3500);






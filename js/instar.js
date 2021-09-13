$.ajax({

    url: "./json/instar.json",
    dataType: "json",
    success: function (data) {

        if (data.length > 0) {
            for (var i in data) {

                var url = data[i].url;

                $(".ibox").eq(i).append('<a href="#">' + "<img src='img/" + data[i].url + "'/>" + '</a>');

            }
        }
    }
});

window.onload = function () {
    var title = document.getElementsByClassName("subtitle")[1];
    title.style.fontFamily = "'Josefin Sans', sans-serif";
    title.style.fontWeight = "600";
    title.style.fontSize = "20px";
    title.style.textAlign = "center";
    title.style.width = "100%"
    title.style.margin = "15px 0 0 0"


    var instar = document.getElementById("instar");
    instar.style.width = "1200px";
    instar.style.height = "375px";
    instar.style.padding = "30px 0 70px 0 ";
    instar.style.boxSizing = "border-box";
    instar.style.overflow = "hidden";


    var ibox = document.getElementsByClassName("ibox");

    for (var i = 0; i < ibox.length; i++) {
        ibox[i].style.width = "150px";
        ibox[i].style.height = "150px";
        ibox[i].style.float = "left";
        ibox[i].style.margin = "50px 25px 0 0"
        ibox[6].style.margin = "50px 0 0 0"      

    }

    $(".ibox").hover(function(){
        $(this).css({"opacity":"0.5","transition":"0.5s"});
    },function(){
        $(this).css({"opacity":"1","transition":"0.5s"});
    });


};




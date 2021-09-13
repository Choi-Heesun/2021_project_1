$.ajax({
    url:"./json/arrivals.json",
    dataType:"json",
    success: function(data){

        if(data.length > 0){
            for(var i in data){

                var url = data[i].url;
                var product = data[i].product;
                var price = data[i].price;
                var icon = data[i].icon;
                var cart = data[i].cart;
                var heart = data[i].heart;

                $(".nbox").eq(i).append('<a href="#">' + '<img src="img/' + data[i].url + '"/>' + '</a>');
                $(".nbox").eq(i).append('<p><a href="#">' + data[i].product + '</a></p>');
                $(".nbox").eq(i).append('<h4>' + data[i].price + '</h4>');
                $(".nbox").eq(i).append('<div class="newicon">' + '<img src="img/' + data[i].icon + '"/>' + '</div>');
                $(".nbox").eq(i).append('<div id="iconbox">'+'<div class="icon">' + '<a href="#">' + '<img src="img/' + data[i].cart + '"/>' + '</a>' + '</div>' + '<div class="icon">' + '<a href="#">' + '<img src="img/' + data[i].heart + '"/>' + '</a>' + '</div>' + '</div>');
           
                $(".nbox > a > img").css({"width":"285px", "height":"285px"}).attr("alt","newimg")

                $(".nbox > p > a").css({
                    "font-size":"12px",
                    "margin":"8px 0 0 0",
                    "text-decoration":"none",
                    "color":"black"
                })

                $(".nbox > h4").css({
                    "font-size":"13px",
                    "margin":"8px 0 0 0",
                    "color":"#E09F7B"
                })

                $(".nbox > .newicon").css({
                    "width":"285px",
                    "height":"20px",
                    "margin":"8px 0 8px 0"
                    
                })

                $(".nbox > #iconbox").css({
                    "width":"84px",
                    "height":"38px"
                })

                $(".nbox > #iconbox > .icon").css({
                    "width":"38px",
                    "height":"38px",
                    "float":"left",
                })

                $(".nbox > #iconbox > .icon:first-child").css({
                    "margin":"0 8px 0 0"
                })
                
            }
        }
    }
    

});

window.onload = function(){

    var newa = document.getElementById("new");
    newa.style.width = "1200px";
    newa.style.height = "1100px";
    newa.style.padding = "50px 0 70px 0";
    newa.style.boxSizing = "border-box";

    var title = document.getElementsByClassName("subtitle");
    title.style.fontFamily = "'Josefin Sans', sans-serif";
    title.style.fontWeight = "600";
    title.style.fontSize = "20px";
    title.style.textAlign = "center";
    title.style.width = "100%"
    $("#new > h2").css({"margin":"0 0 10px 0"});
    $("#new > h2 > span").css({"font-weight":"300"});

    var nbox = document.getElementsByClassName("nbox")
    for(var i = 0; i < nbox.length; i++){
        nbox[i].style.width = "285px"
        nbox[i].style.height = "420px"
        nbox[i].style.float = "left"

        nbox[i].style.margin = "40px 20px 30px 0"
        nbox[3].style.margin = "40px 0 30px 0"
        nbox[4].style.margin = "25px 20px 0 0"
        nbox[5].style.margin = "25px 20px 0 0"
        nbox[6].style.margin = "25px 20px 0 0"
        nbox[7].style.margin = "25px 0 0 0"

        nbox[i].style.overflow = "hidden"
        nbox[i].style.textAlign = "center"
    }

};

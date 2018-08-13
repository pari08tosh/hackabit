/*setTimeout(function() {
        $("#rocket").fadeOut(100);
        $(".fire").fadeOut(100);
        $("#hackabit-image").css({"opacity": "1", "transition" : "opacity 1s linear"});
},8000);

var rocketFun = function(){

      let imageMargin = document.getElementById("hackabit-image").css("margin-left");
      let imageWidth = $("#hackabit-image").width();
      let landingHeight = $(".artboard").height();
      let firemargin = $(".fire").css("left");
      let fireWidth = $(".fire").width();
      let rocketFire = $(".rocket-fire").parent().width();
      

      imageMargin = imageMargin.slice(0, -2);
      firemargin = firemargin.slice(0, -2);

      $(".artboard").css({
            "margin-left" : "-25px",
      });

      $("#rocket").css({
            "width" : String( Number(imageWidth*21.48/100) ) + "px",
      });

      $(".rocket-fire").css({
            "margin-top" : String( Number(landingHeight*0.7) ) + "px",
      });

      /*$(".rocket-fire").css({
        "padding-left" : String( Number(rocketFire*10.4/100) ) + "px",
      });*/
/*}

rocketFun();
      
$(window).resize(function(){
      rocketFun();
});*/

$(document).ready(() => {
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if($(window).scrollTop() >= 591)
    {
      $(".navbar").removeClass('nav-hide');
      $(".scrollup").css("display", "none");
    }
    else
    {
      $(".navbar").addClass('nav-hide'); 
      $("#hackabit-image").removeAttr("data-wow-delay");
      $(".scrollup").css("display", "block");
    }
    /*if($(window).scrollTop() >= 3500 && $(window).scrollTop() <= 4000)
    {
      //alert("sf");
      $(".carousel-control").css({"visibility" : "visible"});
    }
    else
    {
      $(".carousel-control").css({"visibility" : "hidden"}); 
    }*/

  })

  $(".know-more").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

  

})
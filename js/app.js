$(function(){
  $('div.see_more').click(function(){
    if($("div.hidden").is(':hidden')){
      $("div.hidden").slideDown(500);
      $('div.see_more span').html('recolher');
      $('div.see_more').animate({
        marginTop: "-35px"
      }, 500);
    }else{
      $("div.hidden").slideUp(500);
      $('div.see_more span').html('veja outras áreas');
      $('div.see_more').animate({
        marginTop: "0px"
      }, 500);
    }
  });
});

// $(function () {
//   $("a.link_arrow").mouseover(function() {
//     $(".arrow").animate({
//       marginTop: "20px"},
//       500, function(){
//       });
//     });
//   $("a.link_arrow").mouseout(function() {
//       $(".arrow").animate({
//         marginTop: "0px"},
//         500, function(){
//         });
//       });
// });

$(function () {

  $(".abstract").waypoint(function (direction) {
    if (direction === "down") {
        $(".counter").each(function () {
        var $this = $(this);
        var counterNumber = $this.attr("data-count");
        $({
          couterInit: $this.text()
        }).animate({
          couterInit: counterNumber
        }, {
          duration: 5000,
          easing: 'linear',
          step: function () {
            $this.text(Math.ceil(this.couterInit));
          },
          complete: function () {
            $this.text(this.counterNumbercountNum);
          }
        })
      });
    }
  },{
    offset:"50%"
  });

});

$(function(){
  AOS.init({
    duration: 1200,
  });
});

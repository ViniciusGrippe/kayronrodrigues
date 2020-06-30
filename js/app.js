$(function () {
  $("a.link_arrow").mouseover(function() {
    $(".arrow").animate({
      marginTop: "20px"},
      500, function(){
      });
    });
  $("a.link_arrow").mouseout(function() {
      $(".arrow").animate({
        marginTop: "0px"},
        500, function(){
        });
      });
});

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

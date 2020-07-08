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

$("#my-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
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


$(function(){
  AOS.init({
    duration: 1200,
  });
});

//$(".contact-card").addClass("hide");
$("label").on("click",function() {
  $(this).toggleClass( "selected");
  if ($(".selectors .selected").length > 0 ) {
    var $show = $(this).attr("value");
    $(".contact-card." + $show).toggleClass("show").removeClass("hide").fadeIn(200);
    var $hide = $("div.contact-card").not(".show");
    $($hide).fadeOut(300).addClass("hide");
  }
  else { 
    $(".contact-card").removeClass("show").removeClass("hide").fadeIn(200);
  }
});
$("label#all").on("click",function() {
  $("label").removeClass("selected");
  $(".contact-card").removeClass("show").removeClass("hide").fadeIn(200);
})
window.onload = function() {
 
    alert( "welcome" );
 
};

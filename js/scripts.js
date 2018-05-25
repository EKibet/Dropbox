$(document).ready(function() {

$('.thumbnail').hover(
    function(){
        $(this).find('.hoverOn').slideDown(250); //.fadeIn(250)
    },
    function(){
        $(this).find('.hoverOn').slideUp(250); //.fadeOut(205)
    }

  );
$(".list-inline-item").hover(
    function(){
      $(this).find(".upload").slideDown(250);
    },
    function(){
      $(this).find(".upload").slideUp(250);
    }
  );
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
});

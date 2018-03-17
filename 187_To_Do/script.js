//  Click on to-do to toggle done/undone
const lis = document.getElementsByClassName('ltodo');
[].forEach.call(lis, function(elem) {
  elem.addEventListener('click', function (event) {
    this.classList.toggle('done');
  });
});

//  Working JQuery version of above...
//$("ul").on("click", "li", function(){
//  $(this).toggleClass("done");
//});





//  Click on the garbage can (the spans in the list) to delete to-do
const spans = document.querySelectorAll('ul span');
[].forEach.call(spans, function(elem) {
  elem.addEventListener('click', function (event) {
    //  Maybe the fade can be done with add/remove CSS class? (@keyframes)
    var s = this.parentNode.style;
    s.opacity = 1;
    (function fade() {
      (s.opacity -= .1) < .1 ? s.display="none" : setTimeout(fade, 30);
    })();
    event.stopPropagation();
    //this.parentNode.remove();
  });
});

//  Working JQuery version of above...
//$("ul").on("click", "span", function(event){
//  $(this).parent().fadeOut(500,function(){
//    $(this).remove();
//  });
//  // need to do this or event bubbles up
//  event.stopPropagation();
//});





//  Watch keystrokes in input area. Upon newline (return) add to-do











//  Working JQuery version of above...
// $("input[type='text']").keypress(function(event){
//   if(event.which === 13){
//     var todoText = $(this).val();
//     if ($(this).val() !== "") {
//       $(this).val("");
//       $("ul").append("<li class='ltodo'><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
//     }
//   }
// });






//  Add or remove the text area when big plus sign is clicked
$("#plus").click(function(){
  $("input[type='text']").fadeToggle("fast", "linear");
});

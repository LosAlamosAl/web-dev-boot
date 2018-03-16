//  Click on to-do to toggle done/undone
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

//  Click on the garbage can (the spans in the list) to delete to-do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  // need to do this or event bubbles up
  event.stopPropagation();
});

//  Watch keystrokes in input area. Upon newline (return) add to-do
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

//  Add or remove the text area when big plus sign is clicked
$("#plus").click(function(){
  $("input[type='text']").fadeToggle("fast", "linear");
});

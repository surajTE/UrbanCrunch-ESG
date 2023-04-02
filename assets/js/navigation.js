$(".menu").on("click", function(){
   window.location.href = this.id+'.html'; 
});

$("#open_serivice").on("click", function(){
   $("#services").trigger('click');
});

// $("#top_menu_bar").on("click", function(){
//    $("#top_menu").toggle("display", "block");
// });

$("#top_menu_bar").click(function(){
  $("#top_menu").toggle();
});
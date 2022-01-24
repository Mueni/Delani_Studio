$(document).ready(function(){
    $("#designImage").click(function(){
      $("#designImage").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#designImage").slideDown('1500');
    });

   /*  $("#designImage").click(function() {
        $("#designImage").slideDown('1500').hide('1000');
        $("#design").toggle();
    });

    $("#design").click(function() {
        $("#design").slideUp('1500');
        $("#designImage").slideDown('1500').show('1000');
        $("#design").toggle();
    }); */

    $("#developmentImage").click(function(){
      $("#developmentImage").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#developmentImage").slideDown('1500');
    });
  
    $("#PMImage").click(function(){
      $("#PMImage").slideDown('1500').hide('1000');
      $("#projectManagement").show('1500');
    });
    $("#projectManagement").click(function(){
      $("#projectManagement").slideUp('1500');
      $("#PMImage").slideDown('1500');
    });
  });
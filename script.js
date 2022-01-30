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
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#cover").show();
    }).mouseout(function(){
      $("#cover").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#cover2").show();
    }).mouseout(function(){
      $("#cover2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#cover3").show();
    }).mouseout(function(){
      $("#cover3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#cover4").show();
    }).mouseout(function(){
      $("#cover4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#cover5").show();
    }).mouseout(function(){
      $("#cover5").hide();
    });
    $("#work6").mouseover(function(){
      $("#cover6").show();
    }).mouseout(function(){
      $("#cover6").hide();
    });
    $("#work7").mouseover(function(){
      $("#cover7").show();
    }).mouseout(function(){
      $("#cover7").hide();
    });
    $("#work8").mouseover(function(){
      $("#cover8").show();
    }).mouseout(function(){
      $("#cover8").hide();
    });
  });
  
  $(document).ready(function(){
    $("#contactForm").submit(function(){
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if (name  && email && message) {
        alert (name + " " + "Your message has been received, Thank you for reaching out to us.");
      }
      else {
        alert("Please fill out all fields, none should be blank!");
      }
      
    });
  
  });
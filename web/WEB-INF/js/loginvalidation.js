$(document).ready(function() {

        $("#eye").click(function() {
           $(this).toggleClass("fa-eye fa-eye-slash");
           var type = $(this).hasClass("fa-eye") ? "text" : "password";
           $("#pass").attr("type", type);
        });


    $("#email").keyup(function() {
        var email = $(this).val();
        if(email == "mega91raja@gmail.com") {
        $("#email_error").html("").hide();
        } else {
        $("#email_error").fadeIn("panel").html("Enter Email");
        }
    });

    $("#pass").keyup(function() {
        var pass = $(this).val();
        if(pass == "9790842304") {
        $("#pass_error").html("").hide();
        } else {
        $("#pass_error").fadeIn("panel").html("Enter Password");
        }
    });

        $("#btn").click(function(){
          const email= $("#email").val();
          const pass= $("#pass").val();
          if(email == "" || pass == "") {
              $("#email_err").html("Please enter Email").addClass("error-msg");
              $("#pass_err").html("Please enter Password").addClass("error-msg");
          } /*else {
              $("#email_err").html("").removeClass("error-msg");
              $("#pass_err").html("").removeClass("error-msg");
          }*/
});

/*submitHandler: function(form) {
          form.submit();
          }*/

    /*$("#btn").click(function () {
      //e.preventDefault();
      var form = $("#login");
      if (!form.valid()) {
        alert("invalid");
        return false;
      } else {
      alert("valid");
        return true;
      }
    });*/
   /* var login = $("#login");
        if(!login.valid()) {
            return false;
        }*//*
    var login = $("#login");
    login.submit(function (e) {*/

         /*|| pass != "9790842304" || email != "mega91raja@gmail.com"*/
  /* var login = $("#login")
    if(login.valid()) {
       e.currentTarget.submit();
        return true;
    }*/


  /*  login.validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            }
        },

        messages: {
                email: "Please enter Email",
                password: "Please enter Password"
        }
    });*/
    });


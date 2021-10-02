
$(document).ready(function(){
var login = $("#login_form");
    $("#eye").on("click", function() {
        if($("#pass").val() != ""){
            $(this).toggleClass("fa-eye fa-eye-slash");
            $("#pass").attr("type",($(this).hasClass("fa-eye")) ? "text" : "password");
        }
    });
    login.validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: "Enter Email",
            password: "Enter Password"
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "email") {
                $("#email_err_lbl").html(error);
                return false;
                }
            if (element.attr("name") == "password") {
                $("#pass_err_lbl").html(error);
                return false;
            }
        }
    });
    $("#submit_btn").on("click",function(){
    var login = $("#login_form");
        if(!login.valid()){
            return false;
        }
        if($("#email").attr("data-email") == $("#email").val() && $("#pass").attr("data-pass") == $("#pass").val()) {
            //alert("Wait until 10 seconds for page redirect to another page...")
            setTimeout("pageRedirect()", 10000);
        } else if($("#email").attr("data-email") != $("#email").val() && $("#pass").attr("data-pass") != $("#pass").val()) {
            $("#email_error, #pass_error").fadeIn("slow");
            $("#email_error, #pass_error").fadeIn(5000);
        } else {
            $("#email_error, #pass_error").fadeOut("slow");
            $("#email_error, #pass_error").fadeOut(5000);
        }

        if ($("#email").attr("data-email") != $("#email").val()) {
            $("#email_error").fadeIn("slow");
            $("#email_error").fadeIn(5000);
        } else {
             $("#email_error").fadeOut("slow");
             $("#email_error").fadeOut(5000);
        }

        if ($("#pass").attr("data-pass") != $("#pass").val()) {
            $("#pass_error").fadeIn("slow");
            $("#pass_error").fadeIn(5000);
        } else {
             $("#pass_error").fadeOut("slow");
             $("#pass_error").fadeOut(5000);
        }

        function pageRedirect() {
            window.location.replace = "SignUp.html";
        }



    });
});
$(document).ready(function(){
        $("#eye").click(function() {
            $(this).toggleClass("fa-eye fa-eye-slash");
            var type = $(this).hasClass("fa-eye") ? "text" : "password";
            $("#pass").attr("type",type);
        });

    var login = $("#login_form");
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
            $("#email").focus();
            return false;
            }
        if (element.attr("name") == "password") {
            $("#pass_err_lbl").html(error);
            $("#password").focus();
            return false;
         }
        },
        submitHandler: function(form) {
           form.submit();
        }
    });
});
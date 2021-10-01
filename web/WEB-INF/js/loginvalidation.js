$(document).ready(function(){
var login = $("#login_form");
    $("#eye").on("click", function() {
        if($("#pass").val() != ""){
            $(this).toggleClass("fa-eye fa-eye-slash");
            $("#pass").attr("type",$(this).hasClass("fa-eye")?"text":"password");
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
        if(!login.valid()){
            return false;
        }
    });
});
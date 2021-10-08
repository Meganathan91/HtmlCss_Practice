$(document).ready(function(){
    $("#reset_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Enter Email",
                email: "Enter valid Email"
            }
        },
        errorPlacement: function(error,element) {
            if(element.attr("name") == "email") {
                $("#reset_error_msg").html(error);
                return false;
            }
        }
    });
     /*$("#email").keyup(function(){
        if($("#email").val() == "") {
            $("#email_error_msg").text("Enter Valid Email").fadeIn(500);
            } else {
                $("#email_error_msg").fadeOut(500);
            }
     });*/
    $("#reset-btn").on("click",function(){
    $("#email_error_msg").fadeOut(500);
        if(!$("#reset_form").valid()) {
            return false;
        }
        if($("#email").val() != $("#email").attr("data-email")) {
            $("#email_error_msg").html("Please Enter valid Email");
            $("#email_error_msg").fadeIn(500);
            return false;
        }
    });
});
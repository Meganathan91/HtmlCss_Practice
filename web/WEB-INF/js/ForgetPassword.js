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
    $("#reset-btn").on("click",function(){
        $("#email_error_msg").fadeOut(1000);
        if(!$("#reset_form").valid()) {
            return false;
        }
        if($("#email").val() != $("#email").attr("data-email")) {
            $("#email_error_msg").html("Please Enter valid Email-id");
            $("#email_error_msg").fadeIn(1000);
            return false;
        } else {
            alert("Password reset Successfully");
        }
    });
});
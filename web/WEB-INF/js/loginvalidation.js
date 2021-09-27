$(document).ready(function() {
        $("#eye").click(function() {
           $(this).toggleClass("fa-eye fa-eye-slash");
           var type = $(this).hasClass("fa-eye") ? "text" : "password";
           $("#pass").attr("type", type);
        });

        $("#email").click(function() {
        var email = $(this).val();

        if(email == "") {
        $("#email_error").addClass("flip").html("hi");
        }
    });

    /*$("#login_form").validate({
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

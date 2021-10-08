var login = $("#login_form");
$(document).ready(function() {
    $("#login_form").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                required: "Enter Email",
                email: "Enter valid email",

            },
            password: {
                required: "Enter Password",
            }
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
    $("#pass").keypress(function(e) {
            if(e.which === 32) {
                return false;
            }
        });
    $("#eye").on("click", function() {
        if ($("#pass").val() != "") {
            $(this).toggleClass("fa-eye fa-eye-slash");
            $("#pass").attr("type", ($(this).hasClass("fa-eye")) ? "text" : "password");
        }
    });
    $("#submit_btn").on("click", function() {
        if (!$("#login_form").valid()) {
            return false;
        }
        if ($("#email").attr("data-email") != $("#email").val() || $("#pass").attr("data-pass") != $("#pass").val()) {
            //alert("Wait until 10 seconds for page redirect to another page...")
            $("#email_password_error").text("Given Username or Password incorrect");
            $("#email_password_error").show();
            setTimeout(function() { $("#email_password_error").hide(); }, 5000);
            return false;
        } else {
            alert("Successfully login, click Ok and after wait 5 second's to redirect to Success page...");
            window.setTimeout(function() {
            window.location.href = "SuccessPage.html?UserName=" + $("#email").attr("data-email");
            }, 5000);
        //alert($("#email").attr("data-email"));
        }
    });
});
var tabindex = 0;
$(document).ready(function(){
    $("#nationality").select2();
    $("#date").select2();
    $("#month").select2();
    $("#year").select2();

    $(function() {
        $('input,select,button').each(function() {
            if (this.type != "hidden") {
            var element = $(this);
            element.attr("tabindex", tabindex + 1);
                tabindex++;
            }
        });
    });

    $("#fname").keydown(function(e) {
        if(e.shiftkey) {
            return false;
        } else {
            var key = e.keyCode;
            if(!((key == 8) || (key == 9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                $(".error_msg_fname").fadeIn(500);
                $(".error_msg_fname").text("Please Enter Only Alphabets").addClass("error");
                return false;
            } else {
                $(".error_msg_fname").fadeOut(500);
            }
        }
    });

    $("#lname").keydown(function(e) {
        if(e.shiftkey) {
            return false;
        } else {
            var key = e.keyCode;
            if(!((key == 8) || (key == 9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                $(".error_msg_lname").fadeIn(500);
                $(".error_msg_lname").text("Please Enter Only Alphabets").addClass("error");
                return false;
            } else {
                $(".error_msg_lname").fadeOut(500);
            }
        }
    });

    $("#nationality").on("change", function() {
        //var value = $(this).val();
        if($(this).val() == "") {
            $(".error_msg_national").fadeIn(500);
            $(".error_msg_national").text("Please Select at least one option").addClass("error");
            return false;
        } else {
            $(".error_msg_national").fadeOut(500);
        }
    });

    $("#date").on("change", function() {
        //var value = $(this).val();
        if($(this).val() == "") {
            $(".error_msg_date").fadeIn(500);
            $(".error_msg_date").text("Please Select date").addClass("error");
            return false;
        } else {
            $(".error_msg_date").fadeOut(500);
        }
    });

    $("#month").on("change", function() {
        //var value = $(this).val();
        if($(this).val() == "") {
            $(".error_msg_month").fadeIn(500);
            $(".error_msg_month").text("Please Select month").addClass("error");
            return false;
        } else {
            $(".error_msg_month").fadeOut(500);
        }
    });

    $("#year").on("change", function() {
        //var value = $(this).val();
        if($(this).val() == "") {
            $(".error_msg_year").fadeIn(500);
            $(".error_msg_year").text("Please Select year").addClass("error");
            return false;
        } else {
            $(".error_msg_year").fadeOut(500);
        }
    });

    $("#email").on("keyup", function() {
    var email_id = $(this).val();
        if(isEmail(email_id) == false) {
            $(".error_msg_email").fadeIn(500);
                $(".error_msg_email").text("sorry only letters (a-z) numbers (0-9) and periods (.) are allowed").addClass("error");
                    return false;
            } else {
                $(".error_msg_email").fadeOut(500);
        }
    });

    function isEmail(email_id) {
        var regex = /^([a-zA-Z0-9])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
        if(!regex.test(email_id)) {
            return false;
        } else {
            return true;
        }
    }
    $("#SignUp_Form").validate({
        rules : {
            fname: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            lname: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            gender: {
                required: true
            },
            password: {
                 required: true,
                 minlength: 5,
                 maxlength: 12
             },
             confirmpassword: {
                 required: true,
                 minlength: 5,
                 maxlength: 12,
                 equalTo: "#password"
             },
             mobilenumber: {
                required: true,
                number:true,
                minlength: 10,
                maxlength: 10
             },
             otp: {
                required: true,
                number:true,
                minlength: 4,
                maxlength: 4
             },
            email: {
                required: true,
                email: true
            },
            nationality: {
                required: true
            },
            date: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Enter your first name",
                minlength: "Enter at least 3 characters",
                maxlength: "First name too long more than (30) characters"
            },

            lname: {
                required: "Enter your last name",
                minlength: "Enter at least 3 characters",
                maxlength: "First name too long more than (30) characters"
            },

            gender: {
                required: "Select gender"
            },

            password: {
                required:  "Enter Password",
                minlength: "Password must be at least 5 characters",
                maxlength: "Password not exceed 12 characters"
            },

            confirmpassword: {
                required: "Enter Confirm Password",
                minlength: "Password must be at least 5 characters",
                maxlength: "Password not exceed 12 characters",
                equalTo: "Password, confirm password don't match"
            },
            mobilenumber: {
                required: "Enter mobile number",
                number: "please enter numeric only",
                minlength: "Phone number field accept only 10 digits",
                maxlength: "Phone number field accept only 10 digits"
            },
            otp: {
                required: "Enter otp",
                number: "please enter numeric only",
                minlength: "Enter 4 digits otp number",
                maxlength: "Enter 4 digits otp number"
            },
            email: {
                required: "Enter Email",
                email: "Please enter a valid email address"
            },
            nationality: {
                required: "Please select an option"
            },
            date: {
                required: "Select date"
            },
            month: {
                required: "Select month"
            },
            year: {
                required: "Select year"
            }
        },

        errorPlacement: function(error, element) {
            if(element.attr("name") == "nationality") {
                    $(".error_msg_nationality").html(error);
                }
            if(element.attr("name") == "gender") {
                $(".error_msg_gender").html(error);
                return false;
            }
            if(element.is(":radio")) {
                error.appendTo(element.parent(".gender"));
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#signup_btn").on("click", function(){
        if(!($("#SignUp_Form")).valid()) {
            return false;
        } else {
            alert("Successfully registered");
        }
    });
});
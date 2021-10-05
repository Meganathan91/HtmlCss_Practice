    $(document).ready(function() {
    $('input').keypress(function(e){
        if(e.which === 32) {
            $("#error_msg").text("Space is not Allowed");
                   $("#error_msg").show();
                   setTimeout(function() { $("#error_msg").hide(); }, 500);
                   return false;
        }
    });
    $(function(){
        $("#datepicker").datepicker({
            dateFormat: "yy-MM-dd",
            maxDate: new Date()
        });
    });
    var signupForm = $("#signup_form");
       signupForm.validate({
          rules: {
             firstname: {
                required: true,
                minlength: 3,
                maxlength: 30
             },
             lastname: {
                required: true,
                minlength: 3,
                maxlength: 30
             },
             email: {
                 required: true,
                 email: true
             },
             password: {
                 required: true,
                 minlength: 5,
                 maxlength: 12
             },
             conformPassword: {
                 required: true,
                 minlength: 5,
                 maxlength: 12,
                 equalTo: "#pass"
             },
             phonenumber: {
                 required: true,
                 number: true,
                 minlength: 10,
                 maxlength: 10
             },
             gender: {
                 required: true
             },
             birthdate: {
                required: true,
             }
          },
          messages: {
                firstname: {
                required: "Enter your first name",
                minlength: "Enter at least 3 characters",
                maxlength: "First name too long more than (30) characters"

                },
                lastname: {
                required: "Enter last name"
                },
                email: {
                    required: "Enter Email",
                    email: "Please enter a valid email address"
                },
                phonenumber: {
                   required: "Enter 10 digits mobile no",
                   number: "Please enter valid phone number",
                   minlength: "Phone number field accept only 10 digits",
                   maxlength: "Phone number field accept only 10 digits"
                },
                password: {
                    required:  "Enter Password",
                    minlength: "Password must be at least 5 characters",
                    maxlength: "Password not exceed 12 characters"
                },
                conformPassword: {
                    required: "Enter Confirm Password",
                    minlength: "Password must be at least 5 characters",
                    maxlength: "Password not exceed 12 characters",
                    equalTo: "Password, confirm password don't match"
                },
                gender: "Select Gender",
                birthdate: {
                    required: "Enter your DOB"
                }
          },
          errorPlacement: function(error,element) {

               if (element.attr("name") == "firstname") {
                   $("#fname_err_msg").html(error);
                   return false;
               }
              /* if ($("#fname").val() == ' ') {
                   $("#fname_err_msg").html("Space not allowed");
                   return false;
               }*/
               if (element.attr("name") == "lastname") {
                   $("#lname_err_msg").html(error);
                   return false;
               }

                if (element.attr("name") == "email") {
                   $("#email_err_msg").html(error);
                   return false;
               }
                if (element.attr("name") == "phonenumber") {
                      $("#phone_err_msg").html(error);
                      return false;
                  }
                if (element.attr("name") == "password") {
                   $("#pass_err_msg").html(error);
                   return false;
               }
                if (element.attr("name") == "conformPassword") {
                   $("#cpass_err_msg").html(error);
                   return false;
               }

                if (element.attr("name") == "gender") {
                   $("#gender_err_msg").html(error);
                   return false;
               }
               else {
                   $("#birthdate_err_msg").html(error);
                   return false;
               }

               if(element.is(":radio")) {
                  error.appendTo(element.parents(".gender"));
               } else {
                      error.insertAfter(element);
               }
          }/*,
          submitHandler: function(form) {
          form.submit();
            var fname = $('input[name="firstname"]').val();
            var lname = $('input[name="lastname"]').val();
            var email = $('input[name="email"]').val();
            var phone = $('input[name="phonenumber"]').val();
            var password = $('input[name="password"]').val();
            var conformPassword = $("input[name='conformPassword']").val();
            var gender = $("input[name='gender']:checked").val();
            var birthdate = $('input[name="birthdate"]').val();
          console.log(fname +"\n"+ lname +"\n"+ email +"\n"+ phone +"\n"+ password +"\n"+ conformPassword +"\n"+ gender +"\n"+ birthdate);
          }*/
          });
          $("#submit_signup_btn").on("click", function() {
                  if (!$("#signup_form").valid()) {
                      return false;
                  }
          });
    });
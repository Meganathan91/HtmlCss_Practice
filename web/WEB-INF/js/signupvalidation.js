$(document).ready(function() {
var signupForm = $("#signup");
   signupForm.validate({
      rules: {
         firstname: {
            required: true
         },
         lastname: {
            required: true
         },
         email: {
             required: true,
             email: true,
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
            date: true
         }
      },
      messages: {
            firstname: "Enter first name",
            lastname: "Enter last name",
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
                required: "Enter your DOB",
                date: "Please enter correct date format"
            }
      },
      errorPlacement: function(error,element) {
           if (element.attr("name") == "firstname") {
               $("#fname_err_msg").html(error);
               return false;
           }
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
      },
      submitHandler: function(form) {
          form.submit();
      }
   });
 });
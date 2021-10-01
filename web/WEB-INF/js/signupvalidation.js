$(document).ready(function() {

$("#fname").keypress(function(e){
    if($(this).val() == ' ') {
        $("#fname_err_msg").html("Space not allowed").addClass("error");
    return false;
    } else {
        $("#fname_err_msg").html("").removeClass("error");
    }
});
$("#lname").keypress(function(e){
    if(e.which === 32) {
    $("#lname_err_msg").html("Space not allowed").addClass("error");
    return false;
    }
});
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

            firstname: {
            required: "Enter first name"
            },
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
           if ($("#fname").val() == ' ') {
               $("#fname_err_msg").html("Space not allowed");
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
        var fname = $('input[name="firstname"]').val();
        var lname = $('input[name="lastname"]').val();
        var email = $('input[name="email"]').val();
        var phone = $('input[name="phonenumber"]').val();
        var password = $('input[name="password"]').val();
        var conformPassword = $("input[name='conformPassword']").val();
        var gender = $("input[name='gender']:checked").val();
        var birthdate = $('input[name="birthdate"]').val();
      console.log(fname +"\n"+ lname +"\n"+ email +"\n"+ phone +"\n"+ password +"\n"+ conformPassword +"\n"+ gender +"\n"+ birthdate);
      }
      });
     /*$("#signup").submit(function(event){
        //event.preventDefault();
        var name = $("input[type='text']",this).val();
        var email = $("#email",this).val();*//**//*
        var fieldValuePairs = $("#signup").serializeArray();
        $.each(fieldValuePairs, function(index, fieldValuePair) {
            console.log("Item " + index + " is [" + fieldValuePair.name + "," + fieldValuePair.value + "]");
        });
        var name = $("#fname").val();
        console.log(name);
        });*/

 });
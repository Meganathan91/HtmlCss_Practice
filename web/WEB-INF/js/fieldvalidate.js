$(document).ready(function() {
var signupForm = $("#signup");
   signupForm.validate({
      rules: {
         firstname: {
            required: true,
            noSpace: true
         },
         lastname: {
            required: true
         },
         email: {
             required: true,
             email: true,
             maxlength: 255
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
             equalTo: '[name=password]'
         },
         phone: {
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
            firstname: "Please enter first name",
            lastname: "Please enter last name",
            email: "Please enter Email",
            password: "Enter Password",
            conformPassword: "Enter Confirm Password",
            phone: "Enter 10 digits mobile no",
            gender: "<span>Select Gender</span>",
            birthdate: {
                required: "Enter your DOB",
                date: "Please enter correct date format"
            }
      },
      submitHandler: function(form) {
          form.submit();
        },
      errorPlacement: function(error,element) {
        if(element.is(":radio")) {
            error.appendTo(element.parents(".gender"));
        } else {
            error.insertAfter(element);
        }
      }
   });
/*
   $('#btn').click(function() {
           if (signupForm.valid()) {
               alert('form is valid - not submitted');
               return false;
           } else {
               alert('form is not valid');
           }
       });*/
 });
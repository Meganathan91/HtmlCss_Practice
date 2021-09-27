$(document).ready(function() {
   $("#signup").validate({
      rules: {
         firstname: "required",
         lastname: "required",
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
      }

   });

});
$(document).ready(function() {
        $("#email").on("keyup", function() {
            const mail = $("#email").val();
            if( mail != "mega91raja@gmail.com") {
                $("#emailverify").html("Invalid Email");
            } else {
                $("#emailverify").hide();
            }
            });
        $("#pass").on("keyup", function() {
            const pass = $("#pass").val();
            if( pass != "9790842304") {
                $("#passverify").html("Invalid Password");
            } else {
                $("#passverify").hide();
            }
    });
});
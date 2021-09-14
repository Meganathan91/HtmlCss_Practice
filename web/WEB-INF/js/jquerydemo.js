$("document").ready(function(){

        $("#btn").click(function(){
            $("#h").hide();
        });

        $("#fname, #lname").click(function(){
            console.log("click");
        });

        $("#lname,#fname").focus(function(){
            console.log("focus");
        });

        $("#h").on("click",function(){
            alert("on and off event");
        });

        $("#btn").click(function(){
            $("#h").off("click");
        });

        $("#fname").focusin(function(){
                    $(this).css("background-color","orange");
        });

        $("#fname").focusout(function(){
                    $(this).css("background-color","green");
        });

        $("#fname").blur(function(){
                    $(this).css("background-color","red");
        });

        $("#fname").focus(function(){
            $(this).css("background-color","green");
        });

        $("#btn").click(function(){
            alert("click event");
        });

        $("#fname").change(function(){
            //$(this).css("background-color","red");
            alert("change event");
        });

        $("#fname").dblclick(function(){
            // $(this).css("background-color","blue");
            alert("selected name input field");
        });

        $("#fname").hover(function(){
                $(this).css("background-color","blue");
                },
             function(){
           $(this).css("background-color","pink");
        });
});
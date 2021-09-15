$("document").ready(function(){
        var x = 0;
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

        $("#mouse").mousedown(function(){
            $("p").text("Mouse down Event");
        });

        $("#mouse").mouseup(function(){
            $("p").text("Mouse up Event");
        });

        $("#mouse").mouseenter(function(){
            $("p").text("Mouse enter Event");  // mouseover
        });

        $("#mouse").mouseleave(function(){     // mouseout
            $("p").text("Mouse leave Event");
        });

        /* key event */

        $("#fname").keydown(function(){
            console.log("keydown");
        });

        $("#fname").keyup(function(){
            console.log("keyup");
        });

        $("#lname").keypress(function(){
            $("span").text(x += 1);
       });

          /* jquery effects */

       $("#btn").click(function(){
            $("#effect").show();
       });

      $("#btn").click(function(){
            $("img").toggle();
      });

     $("#btn").click(function(){
           $("#div_1").fadeIn();
           $("#div_2").fadeIn("slow");      // here replace fadeIn by toggle and see the result
           $("#div_3").fadeIn(3000);
     });

    $("#btn").click(function(){
           $("#div_4").fadeOut();
           $("#div_5").fadeOut("slow");
           $("#div_6").fadeOut(3000);
     });

    $("#btn").click(function(){
           $("#div_7").fadeTo("slow",0.5);
           $("#div_8").fadeTo("slow",0.3);
           $("#div_9").fadeTo("slow",0.8);
    });

        /* jquery slide effect */

    $("#div_10").click(function(){
        $("#div_11").slideDown(3000);
    });

        /* jquery slide stop effect */

    $("#stop_effect").click(function(){
        $("#div_11").stop();
    });

            /* jquery callback effect */

    $("#calbk-eft").click(function(){
        $("#h_1").toggle(3000,function(){
            alert("callback effect");
        });
    });

                /* jquery chaining effect */

    $("#calbk-eft").click(function(){
            $("#h_1").css("color","red").slideUp(1000).slideDown(2000);
    });

});
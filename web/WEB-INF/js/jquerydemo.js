$("document").ready(function() {
    var x = 0;
    $("#btn").click(function() {
        $("#h").toggle();
    });
    $("#fname").click(function() {
        console.log("click");
    });
    $("#lname").focus(function() {
        console.log("focus");
    });
    $("#h").on("click", function() {
        alert("on and off event");
    });
    $("#btn").click(function() {
        $("#h").off("click");
    });
    $("#lname").focusin(function() {
        $(this).css("background-color", "orange");
    });
    $("#lname").focusout(function() {
        $(this).css("background-color", "green");
    });
    $("#fname").blur(function() {
        $(this).css("background-color", "red");
    });
    /*$("#fname").focus(function() {
        $(this).css("background-color", "green");
    });*/
    $("#btn").click(function() {
        alert("click event");
    });
    $("#fname").change(function() {
        //$(this).css("background-color","red");
        alert("change event");
    });
    $("#fname").dblclick(function() {
        // $(this).css("background-color","blue");
        alert("selected name input field");
    });
    $("#fname").hover(function() {
        $(this).css("background-color", "blue");
    }, function() {
        $(this).css("background-color", "pink");
    });
    $("#mouse").mousedown(function() {
        $("#mouse_1").text("Mouse down Event");
    });
    $("#mouse").mouseup(function() {
        $("#mouse_1").html("<b>Mouse up Event bold style</b>");
    });
    $("#mouse").mouseenter(function() {
        $("#mouse_1").html("<i>Mouse enter Event italic</i>");
        // mouseover
    });
    $("#mouse").mouseleave(function() {
        // mouseout
        $("#mouse_1").text("Mouse leave Event");
    });
    /* key event */
    $("#fname").keydown(function() {
        console.log("keydown");
    });
    $("#fname").keyup(function() {
        console.log("keyup");
    });
    $("#lname").keypress(function() {
        $("span").text(x += 1);
    });
    /* jquery effects */
    $("#btn").click(function() {
        $("#effect").show();
    });
    $("#btn").click(function() {
        $("img").toggle();
    });
    $("#fade_effect").click(function() {
        $("#div_1").fadeIn();
        $("#div_2").fadeIn("slow");
        $("#div_3").fadeIn(2000);
        // here replace fadeIn by toggle and see the result $("#div_3").fadeIn(3000);
    });
    $("#fade_effect").click(function() {
        $("#div_4").fadeOut();
        $("#div_5").fadeOut("slow");
        $("#div_6").fadeOut(3000);
    });
    $("#fade_effect").click(function() {
        $("#div_7").fadeTo("slow", 0.5);
        $("#div_8").fadeTo("slow", 0.3);
        $("#div_9").fadeTo("slow", 0.8);
    });
    /* jquery slide effect */
    $("#div_10").click(function() {
        $("#div_11").slideDown(3000);
    });
    /* jquery slide stop effect */
    $("#stop_effect").click(function() {
        $("#div_11").stop();
    });
    /* jquery callback effect */
    $("#calbk-eft").click(function() {
        $("#h_1").toggle(3000, function() {
            alert("callback effect");
        });
    });
    /* jquery chaining effect */
    $("#calbk-eft").click(function() {
        $("#h_1").css("color", "red").slideUp(1000).slideDown(2000);
    });
    /* jQuery html : get text() */
    $("#btn_1").click(function() {
        alert($("#p_1").text());
    });
    /* jQuery html : get val() */
    $("#btn_1").click(function() {
        console.log($("#name").val());
    });
    /* jquery get attr() */
    $("#btn_1").click(function() {
        console.log($("a").attr("title"));
    });
    /* jquery set: text() */
    $("#btn_2").click(function() {
        console.log($("#p_2").text("set html content"));
    });
    /* jquery set: html() */
    $("#btn_2").click(function() {
        $("#p_3").html("<i> set html content </i>");
    });
    /* jquery set: val() */
    $("#btn_2").click(function() {
        $("#name").val("mani");
    });
    /* jquery set value for href and title tag using attr() */
    $("a").click(function() {
        $("a").attr({
            "href": "https://www.megas.com/",
            "title": "new title"
        });
    });

    /* jquery html: add */

    $("#btn_3").click(function(){
        $("#p_4").append("<b>Name</b> ");
    });

    $("#btn_3").click(function(){
         $("#p_4").prepend(" <i>w3school</i> ");
    });

    $("#btn_3").click(function(){
         $("#txt_1").before("<b>Name</b> ");
    });

    $("#btn_3").click(function(){
         $("#txt_1").after(" <button>Reset</button> ");
    });

    $("#btn_4").click(function(){
         $("#img_1").before("<b>html</b> ");
    });

    $("#btn_5").click(function(){
         $("#img_1").after("<i>image</i>");
    });

    /* jquery html: remove and empty */

    $("#btn_6").click(function(){
         $("#div_12").remove();        // remove: remove parent and child element.
    });

    $("#btn_7").click(function(){
         $("p").empty();               // empty remove only child element.
    });

    $("#btn_8").click(function(){
        $("p").remove("#p_5, #p_6");    // remove with filter using paragraph tag id.
    });

        /* jquery html: add classes, removeClass and toggleClass */

    $("#btn_9").click(function(){
        $("#div_13").addClass("border-5-solid-green padding-15");
    });

    $("#btn_10").click(function(){
        $("#div_13").removeClass();
    });

    $("#btn_11").click(function(){
        $("#div_13").toggleClass("bg-color-lightGray padding-15");
    });

        /* jquery html: css() method */

    $("#p_8").mouseenter(function(){
        $(this).css({"background-color":"red","text-align":"center"});
    });

         /* jquery traversing ancestors methods parent, parents and parentsUntil*/

    $("#btn_12").click(function(){
        $("#span_1").parentsUntil("#div_15").css({"color": "red", "border": "2px solid red"});
    });

         /* jquery traversing Descendants methods children and find */

    $("#btn_13").click(function(){
        $("#div_14").children().css({"color":"blue"});
    });

    $("#btn_16").click(function(){
        $("#div_14").find("#ul_1, #li_1").css({"border": "2px solid yellow"});
    });

         /* jquery traversing siblings methods */

    $("#btn_14").click(function(){
        $("#p_12").siblings().css({"color":"red"});
    });

    $("#btn_15").click(function(){
        $("#h_3").prev().css({"color":"blue"});
    });

    $("#btn_17").click(function(){
        $("#h_2").prevAll().css({"color":"orange"});
    });

    $("#btn_18").click(function(){
        $("#h_4").prevUntil("#h_2").css({"color":"yellow"});
    });

    $("#btn_19").click(function(){
        $("#h_3").next().css({"color":"blue"});
    });

    $("#btn_20").click(function(){
        $("#h_2").nextAll().css({"color":"orange"});
    });

    $("#btn_21").click(function(){
        $("#p_12").nextUntil("#p_10").css({"color":"yellow"});
    });

             /* jquery traversing filtering methods */

    $("#btn_22").click(function(){
       $("p").first().css({"color":"blue"});
    });

    $("#btn_23").click(function(){
       $("p").last().css({"color":"blue"});
    });

    $("#btn_24").click(function(){
       $("p").eq(9).css({"color":"red"});
    });

    // suppose here input id not having all p element selected and applied the style. example #p_30 not id all p element selected style.

    $("#btn_25").click(function(){
       $("p").not("#p_11").css({"color":"lightblue"});
    });

    $("#btn_26").click(function(){
       $("p").filter("#p_9, #p_10").css({"color": "Violet"});
    });

});

function add() {
    let text1 = "<p><b> html add append </b></p>";
    let text2 = $("<p></p>").text("append text");
    let text3 = document.createElement("p");
    text3.innerHTML = "jquery";
    $("#p_4").append(text1,text2,text3); // here change append by prepend content added beginning
    }
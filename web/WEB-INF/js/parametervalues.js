$(document).ready(function () {  
        var User = GetParameterValues('UserName');
        //alert("Hello " + User );
        $("#spn_UserName").text(User);
        function GetParameterValues(param) {  
            var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            //alert(window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'));
            for (var i = 0; i < url.length; i++) {  
                var urlparam = url[i].split('=');  
                if (urlparam[0] == param) {  
                    return urlparam[1];
                }  
            }  
        }  
});
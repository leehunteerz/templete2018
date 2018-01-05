$(function () {
    var content = $("#content div p").html();

    function layout() {
        var windowWidth = $(window).width();
        var bodyHeight = $("body").height();
        var length = content.length;
        var cutlength = $("body").width() * 230 / 640;
        if (windowWidth > 500) {
            $("#content div p").css("height", "80px");
            if (length >= cutlength) {
                $("#detail").css("display", "inline-block");
                var short_content = content.substr(0, cutlength) + "...";
                $("#content div p").html(short_content);
                $("#store_content").html(content);
            } else {
                $("#detail").css("display", "none");
                $(".link_wrap").css("top", "40px");
            }
        } else {
            $("#detail").css("display", "none");
            $("#content div p").css("height", "auto");
            var pHeight = $("#content div p").css("height");
            var line = parseInt(pHeight.split("px")[0]) / 22;
            var maxLine = parseInt((bodyHeight * 0.5 - 150) / 22);
            if (line <= maxLine) {
                $("#content div p").css("height", 22 * line + "px");
            } else {
                $("#content div p").css("height", 22 * maxLine + 13 + "px");
            }

            var textHeight = $("#content div p").height();
            $(".link_wrap").css("top", "calc( 25% - 0.5 * " + textHeight + "px - 50px )");
        }
    }

    $(window).resize(function () {
        layout();
    });
    $("#content").click(function (event) {
        var check = $("#detail").css("display");
        if (check == "inline-block") {
            $("#content div p").html($("#store_content").html());
            var height = $("#content div p").css("height").split("px")[0];
            height = parseInt(height) + 41;
            $("#content div p").css("height", height + "px");
            $("#detail").css("display", "none");
        }
    });

    layout();
});

// JavaScript source code

$(document).ready(function () {
    $.fn.message({ text: "Hello! Click anywhere to close me.",delay:10000 });
});

(function ($) {
    $.fn.message = function (options) {
        var options = $.extend({
            text: "Hello World!",
            delay:5000
        }, options);

        var timeout;


        var hideMessage = function () {

            $(".modal_bg, .modal_window").hide();
            $("body").css({ "overflow": "auto" });
            clearTimeout(timeout);
        }


        $("a").click(function () {
            var HeightDocument = $(document).height();
            var WidthDocument = $(document).width();
            var HeightScreen = $(window).height();
            $(".modal_bg").css({ "width": WidthDocument, "height": HeightDocument });
            $(".modal_bg").fadeIn(1000);
            $(".modal_bg").fadeTo("slow", 0.8);
            var Top_modal_window = $(document).scrollTop() + HeightScreen / 2 - $(".modal_window").height() / 2;
            $(".modal_window").css({ "top": Top_modal_window + "px", "display": "block" });
            $("label").text(options.text);
            $("body").css({ "overflow": "hidden" });
            timeout = setTimeout(hideMessage,options.delay);
        });

        $(".modal_window button").click(hideMessage);

        $(".modal_bg").click(hideMessage);
    }
})(jQuery);


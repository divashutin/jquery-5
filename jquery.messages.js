// JavaScript source code

$(document).ready(function () {
                $("a").click(function () {
                    var HeightDocument = $(document).height();
                    var WidthDocument = $(document).width();
                    var HeightScreen = $(window).height();
                    $(".modal_bg").css({ "width": WidthDocument, "height": HeightDocument });
                    $(".modal_bg").fadeIn(1000);
                    $(".modal_bg").fadeTo("slow", 0.8);
                    var Top_modal_window = $(document).scrollTop() + HeightScreen / 2 - $(".modal_window").height() / 2;
                    $(".modal_window").css({ "top": Top_modal_window + "px", "display": "block" });
                    $("body").css({ "overflow": "hidden" });
                    return false;
                });
                $(".modal_window button").click(function () {
                    $(".modal_bg, .modal_window").hide();
                    $("body").css({ "overflow": "auto" })
                });
                $(".modal_bg").click(function () {
                    $(".modal_bg, .modal_window").hide();
                    $("body").css({ "overflow": "auto" });
                });
            });
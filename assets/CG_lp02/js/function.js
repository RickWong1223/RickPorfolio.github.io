$(document).ready(function() {

    /*畫面跳到指定位置*/
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 60 }, 300);
    });

    $(".menu").hide(); /*一開始選單先藏起來*/
    $('#nav-icon').click(function() { /*點擊展開選單*/
        $(this).toggleClass('open');
        $(".menu").slideToggle("normal");
    });
    $(".menu > ul > div > li > a").click(function(event) {
        $('#nav-icon').toggleClass('open');
        $(".menu").slideToggle("normal");
        /*漢堡選單的按鈕點下去之後會收起選單*/
    });

    $(document).ready(function() {
        $("#flip").click(function() {
            $("#panel").slideToggle("slow");
            $(".anitarget").toggleClass("slideInLeft")
        });
    });
});
//Section visibility & navigation handling

$(document).ready(function() {
    $(".pg-section:not(:first)").hide();

    $(".nav-link").click(function(e) {
        e.preventDefault()

        var target = $(this).attr("href");

        $(".pg-section").hide();

        $(target).fadeIn(500);
    });
});

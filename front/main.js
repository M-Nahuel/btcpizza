//Section visibility & navigation handling

$(document).ready(function() {
    $(".pg-section:not(:first)").hide();

    $(".nav-link").click(function(e) {
        e.preventDefault()

        var target = $(this).attr("href");

        $(".pg-section").hide();

        $(target).fadeIn(500);
    });

    $('#random').click(function() {
        $('#carouselMenu').carousel({ interval: 100 });
        
        let totalSlides = $('#carouselMenu .carousel-item').length;
        let randSlide = Math.floor(Math.random() * totalSlides);
        
        $('#carouselMenu').carousel(randSlide);
        $('#carouselMenu').carousel('pause');
      });
});
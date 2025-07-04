$(document).ready(function () {
    $('#slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: '.pagination-intro',
        startPosition: 1
    });
    $('#slider2').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: '.pagination-intro',
        startPosition: 1
    });
    $('#slider3').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: '.pagination-testimonial',
        startPosition: 1
    });
    $('#slider4').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: '.pagination-testimonial',
        startPosition: 1
    });
    $('.pagination-intro .oval').click(function () {
        let index = $(this).index();
        $('#slider').trigger('to.owl.carousel', [index, 300]);
        $('#slider2').trigger('to.owl.carousel', [index, 300]);
    });
    $('.next-arrow').click(function () {
        $('#slider').trigger('next.owl.carousel');
        $('#slider2').trigger('next.owl.carousel');
    });
    $('.previous-arrow').click(function () {
        $('#slider').trigger('prev.owl.carousel', [300]);
        $('#slider2').trigger('prev.owl.carousel', [300]);
    })
    $('.pagination-testimonial .oval-testimonial').click(function () {
        let index = $(this).index();
        $('#slider3').trigger('to.owl.carousel', [index, 300]);
        $('#slider4').trigger('to.owl.carousel', [index, 300]);
    });
});
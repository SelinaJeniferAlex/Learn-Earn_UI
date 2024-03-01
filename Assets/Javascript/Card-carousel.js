function slider_carouselInit() {
    $('.owl-carousel.slider_carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });
}
slider_carouselInit();

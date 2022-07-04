import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation,Pagination]);

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    /* watchOverflow: true, */

    spaceBetween: 25,

    simulateTouch: true,

    grabCursor: true,

    slidesPerView: 5,

    loop: true,

    /* loopedSlides: 5, */
});

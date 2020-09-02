export default {
  init() {
    // JavaScript to be fired on all pages

    $(window).load(function () {
      $('h2').bigtext();
      $('h1').bigtext();
    })


    $(document).ready(function () {
      $('.galeria').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 2000,

      })
    })
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    var w = $(window).width();
    if (w > 768) {
      $('header.banner').mouseenter(function () {
        $('.foto-home').css({
          'filter': 'blur(10px)',
          'opacity': '0.8',
        })

      })
      $('header.banner').mouseleave(function () {
        $('.foto-home').css({
          'filter': 'blur(0)',
          'opacity': '1',
        })

      })
    }


    $(window).resize(function () {
      $('h2').bigtext();
      $('h1').bigtext();
    })
  },
};

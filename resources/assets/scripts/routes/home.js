export default {
  init() {
    // JavaScript to be fired on all pages

    $(window).load(function(){
      $('h2').bigtext();
      $('h1').bigtext();
    })
    $(window).resize(function(){
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
    $('header.banner').mouseenter(function(){
      $('.foto-home').css('filter', 'blur(7px)')
    })
    $('header.banner').mouseleave(function () {
      $('.foto-home').css('filter', 'blur(0)')
    })
  },
};

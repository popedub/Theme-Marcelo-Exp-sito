
import Cookies from 'js-cookie/src/js.cookie';
export default {
  init() {
    // JavaScript to be fired on the about us page
    $(document).ready(function () {

      $('.link-filtro').click(function () {
        var getFiltro = '.category-' + $(this).data('filter');
        var titular = $(this).text();
        Cookies.remove('itemFiltro', { sameSite: 'strict' })
        Cookies.remove('itemTitular', { sameSite: 'strict' })
        Cookies.set('itemFiltro', getFiltro, { sameSite: 'strict' })
        Cookies.set('itemTitular', titular, { sameSite: 'strict' })
        // localStorage.setItem('itemFiltro', getFiltro);
        // localStorage.setItem('itemTitular', titular);

      })



      $(window).scroll(function () {

        var y = $(this).scrollTop();
        if (y > 300) {
          $('.back-top').fadeIn();
        } else {
          $('.back-top').fadeOut();
        }
      });


      $('.back-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 400);
        return false;
      });

    })



    $('button.audio').click(function () {
      $(this).siblings().removeClass('active');
      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.overlay-sidebar.audio').toggleClass('show-sidebar');
      $(this).toggleClass('active');

      var w = $(window).width();


      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.audio').removeClass('show-sidebar');
        if (w > 768) {
          $('.entry-content').css('border-right', '1px solid black');
          $('.btn-group').css('border-left', 'none');
        }

        $('.arrow-left').addClass('d-none');
      }

      if ($(this).hasClass('active')) {
        $('.arrow-left').toggleClass('d-none');
        if (w > 768) {
          setTimeout(function () {
            $('.entry-content').css('border-right', '1px solid transparent');
            $('.btn-group').css('border-left', '1px solid black');
          }, 400) //los mismos milisegundos que se demora el panel en moverse
        }

      }
    })

    $('button.video').click(function () {
      $(this).siblings().removeClass('active');

      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.overlay-sidebar.video').toggleClass('show-sidebar');
      $(this).toggleClass('active');

      var w = $(window).width();

      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.video').removeClass('show-sidebar');
        if (w > 768) {
          $('.entry-content').css('border-right', '1px solid black');
          $('.btn-group').css('border-left', 'none');
        }
        $('.arrow-left').addClass('d-none');
      }

      if ($(this).hasClass('active')) {
        $('.arrow-left').toggleClass('d-none');
        if (w > 768) {
          setTimeout(function () {
            $('.entry-content').css('border-right', '1px solid transparent');
            $('.btn-group').css('border-left', '1px solid black');
          }, 400) //los mismos milisegundos que se demora el panel en moverse
        }
      }
    })

    $('button.imagenes').click(function () {
      $(this).siblings().removeClass('active');

      $('.overlay-sidebar').removeClass('show-sidebar');
      $(this).toggleClass('active');
      $('.overlay-sidebar.imagenes').toggleClass('show-sidebar');

      var w = $(window).width();

      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.imagenes').removeClass('show-sidebar');
        if (w > 768) {
          $('.entry-content').css('border-right', '1px solid black');
          $('.btn-group').css('border-left', 'none');
        }
        $('.arrow-left').addClass('d-none');
      }

      if ($(this).hasClass('active')) {
        $('.arrow-left').toggleClass('d-none');
        if (w > 768) {
          setTimeout(function () {
            $('.entry-content').css('border-right', '1px solid transparent');
            $('.btn-group').css('border-left', '1px solid black');
          }, 400) //los mismos milisegundos que se demora el panel en moverse
        }
      }
    })

    $('.arrow-left').click(function () {
      $(this).toggleClass('d-none')
      var w = $(window).width();
      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.buttons-group-fixed button').removeClass('active');
      if (w > 768) {
        $('.entry-content').css('border-right', '1px solid black');
      }
      $('.btn-group').css('border-left', 'none');
    })


  },
  finalize() {

      var altura = function () {
        var altura = $('article header').outerHeight() + $('header.banner').outerHeight();
        $('.entry-content').css('margin-top', altura);
        $('.content-sidebar').css('margin-top', altura);

      }
      var w = $(window).width();
      if (w > 768) {

          altura();


        $(window).on('resize', function () {
          altura();
        })
      }





  },
};

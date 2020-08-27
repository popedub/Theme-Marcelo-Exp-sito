
export default {
  init() {
    // JavaScript to be fired on the about us page
    $(document).ready(function () {

      $('.link-filtro').click(function(){
        var getFiltro = '.category-' + $(this).data('filter');
        var titular = $(this).data('filter')
        localStorage.setItem('itemFiltro', getFiltro);
        localStorage.setItem('itemTitular', titular);

      })




    })

    $('button.audio').click(function () {
      $(this).siblings().removeClass('active')
      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.overlay-sidebar.audio').toggleClass('show-sidebar');

      $(this).toggleClass('active');
      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.audio').removeClass('show-sidebar');
        $('.entry-content').css('border-right', '1px solid black');
        $('.btn-group').css('border-left', 'none');
      }
      if ($(this).hasClass('active')) {

        setTimeout(function () {
          $('.entry-content').css('border-right', '1px solid transparent');
          $('.btn-group').css('border-left', '1px solid black');
        }, 400) //los mismos milisegundos que se demora el panel en moverse
      }
    })

    $('button.video').click(function () {
      $(this).siblings().removeClass('active');
      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.overlay-sidebar.video').toggleClass('show-sidebar');
      $(this).toggleClass('active');
      if(!$(this).hasClass('active')) {
        $('.overlay-sidebar.video').removeClass('show-sidebar');
        $('.entry-content').css('border-right', '1px solid black');
        $('.btn-group').css('border-left', 'none');
      }
      if ($(this).hasClass('active')) {

        setTimeout(function () {
          $('.entry-content').css('border-right', '1px solid transparent');
          $('.btn-group').css('border-left', '1px solid black');
        }, 400) //los mismos milisegundos que se demora el panel en moverse
      }
    })

    $('button.imagenes').click(function () {
      $(this).siblings().removeClass('active');
      $('.overlay-sidebar').removeClass('show-sidebar');
      $(this).toggleClass('active');
      $('.overlay-sidebar.imagenes').toggleClass('show-sidebar');



      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.imagenes').removeClass('show-sidebar');
        $('.entry-content').css('border-right', '1px solid black');
        $('.btn-group').css('border-left', 'none');
      }

      if ($(this).hasClass('active')) {

        setTimeout(function () {
          $('.entry-content').css('border-right', '1px solid transparent');
          $('.btn-group').css('border-left', '1px solid black');
        }, 400) //los mismos milisegundos que se demora el panel en moverse
      }
    })




  },
  finalize() {
    var altura = function() {
      var altura = $('article header').outerHeight() + $('header.banner').outerHeight();
      $('.entry-content').css('margin-top', altura);
      $('.content-sidebar').css('margin-top', altura);
    }
    $(window).load(function () {
      altura();
    })

    $(window).resize(function(){
      altura();
    })

    // var scroll =  $('.entry-content');
    // scroll.mouseenter(function(){
    //   $('body').css('overflow', 'scroll');
    // })
    // scroll.mouseleave(function () {
    //   $('body').css('overflow', 'hidden');
    // })

    // var scroll2 = $('.content-sidebar ');
    // scroll2.mouseenter(function () {
    //   $('body').css('overflow', 'scroll');
    //   $(this).css({
    //     'position': 'relative',
    //   });

    // })
    // scroll2.mouseleave(function () {
    //   $('body').css('overflow', 'hidden');

    // })
  },
};

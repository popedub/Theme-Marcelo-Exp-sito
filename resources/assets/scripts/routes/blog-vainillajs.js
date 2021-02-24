var accents = require('remove-accents');
var Isotope = require('isotope-layout/dist/isotope.pkgd')
var imagesLoaded = require('imagesloaded/imagesloaded.pkgd')
import Cookies from 'js-cookie/src/js.cookie'

export default {
  init() {
    // JavaScript to be fired on the home page
    $(document).on('ready', function () {
      $('.btn-link').each(function () {
        if ($(this).data('filter') === Cookies.get('itemFiltro')) {
          $(this).addClass('active')
        }

      })
      if (Cookies.get('itemTitular') != null) {
        var clase = Cookies.get('itemTitular')
        clase = accents.remove(clase).toLowerCase();
        $('.titular h2').remove();
        $('.titular').append('<h2>' + Cookies.get('itemTitular') + '</h2>');
        $('.descripcion').addClass('d-none');
        $('.descripcion-contenidos').addClass('d-none');
        $('.descripcion' + '.' + clase).toggleClass('d-none');
      }


    })

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

    // init Isotope
    $(window).load(function () {
      var grid = document.querySelector('.grid');
      var iso = new Isotope(grid, {
        itemSelector: 'article',
        percentPosition: true,
        layoutMode: 'fitRows',
        initLayout: false,
        transitionDuration: '0.2s',
        fitRows: {
          // use element for option
          columnWidth: '.grid-sizer',
        },
        // disable scale transform transition when hiding
        hiddenStyle: {
          opacity: 0,
        },
        visibleStyle: {
          opacity: 1,
        },
      });
      // layout Isotope after each image loads
      imagesLoaded(grid, function () {
        iso.layout();

        //filter si venimos de la página de single
        if (Cookies.get('itemFiltro') != null) {
          iso.arrange({
            filter: Cookies.get('itemFiltro'),
          });
          Cookies.remove('itemFiltro')
          Cookies.remove('itemTitular')
        }

      });

      var borderItems = function (articles) {
        //remove border bottom from las 3 items

        let items = articles;

        //SI ES MÓDULO DE 3

        if (items.length % 3 == 0) {
          let ultimos = items.slice(Math.max(items.length - 3, 1))
          for (let i = 0; i < ultimos.length; i++) {


            ultimos[i].className += ' no-border-bottom';

          }
          //si sólo hay 3
          if (items.length == 3) {
            for (let i = 0; i < items.length; i++) {


              items[i].className += ' no-border-bottom';

            }
          }
          //si es hay 6, 9, 12, etc
          //para remover el estilo del border
          if (items.length > 3) {

            let itemBorder = items.slice(0, items.length - 3);
            for (let i = 0; i < itemBorder.length; i++) {
              if (itemBorder[i].classList.contains('no-border-bottom')) {
                itemBorder[i].classList.remove('no-border-bottom');
              }
            }
          }
          //SI ES MODULO 2
        } else if (items.length % 3 == 2) {

          let ultimos = items.slice(Math.max(items.length - 2, 1))
          for (let i = 0; i < ultimos.length; i++) {


            ultimos[i].className += ' no-border-bottom';

          }
          //si sólo hay 2
          if (items.length == 2) {
            for (let i = 0; i < items.length; i++) {


              items[i].className += ' no-border-bottom';

            }
          }
          // si es modulo 2 pero hay más de 3
          //para remover el estilo del border
          if (items.length > 3) {

            let itemBorder = items.slice(0, items.length - 2);
            for (let i = 0; i < itemBorder.length; i++) {
              if (itemBorder[i].classList.contains('no-border-bottom')) {
                itemBorder[i].classList.remove('no-border-bottom');
              }
            }
          } // si es modulo 1 o sólo hay uno o módulo 1 y hay más de 3
        } else if (items.length % 3 == 1 || items.length == 1 || items.length > 3) {

          let ultimos = items.slice(Math.max(items.length - 1, 1))
          for (let i = 0; i < ultimos.length; i++) {


            ultimos[i].className += ' no-border-bottom';

          }
          if (items.length == 1) {

            items[0].className += ' no-border-bottom';
          }
          //para remover el estilo del border
          if (items.length > 3) {
            let itemBorder = items.slice(0, items.length - 1);
            for (let i = 0; i < itemBorder.length; i++) {
              if (itemBorder[i].classList.contains('no-border-bottom')) {
                itemBorder[i].classList.remove('no-border-bottom');
              }
            }
          }
        }
      }



      // store filter for each group
      var filters = {};
      // filter items on button click
      // document.querySelector('#filtros').addEventListener('click', function (event) {

      //   // get group key

      //   //var $this = event.target;

      //   var filterValue;
      //   var buttonGroup = event.target.parentNode;
      //   //var $buttonGroup = $this.parents('.filter-button-group');
      //   //var filterGroup = $buttonGroup.attr('data-filter-group');
      //   var filterGroup = buttonGroup.getAttribute('data-filter-group');

      //   // set filter for group
      //   //filters[filterGroup] = $this.attr('data-filter');

      //   filters[filterGroup] = event.target.getAttribute('data-filter');



      //   // combine filters
      //   filterValue = concatValues(filters);
      //   iso.arrange({ filter: filterValue });



      // });
      //  change is-checked class on buttons
      var buttonGroups = document.querySelectorAll('.btn-link');
      for (var i = 0; i < buttonGroups.length; i++) {
        var btnGroup = buttonGroups[i];
        radioButtonGroup(btnGroup);
      }

      function radioButtonGroup(btnGroup) {
        btnGroup.addEventListener('click', function (event) {
          var filterValue;
          var buttonGroup = event.target.parentNode;
          var filterGroup = buttonGroup.getAttribute('data-filter-group');
          filters[filterGroup] = event.target.getAttribute('data-filter');


          if (btnGroup.classList.contains('active')) {
            event.target.classList.remove('active');

            filters[filterGroup] = '';
          } else {

           document.querySelectorAll('a.btn-link').forEach(
              i => i.classList.remove('active')
            )




            event.target.classList.add('active');
            console.log(filters)
          }
          // combine filters
          filterValue = concatValues(filters);
          iso.arrange({ filter: filterValue });


        });
      }

      // flatten object by concatting values
      function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
          value += obj[prop];
        }
        return value;
      }

      //cambiamos el titular de la página de filtros

      $('.texto-titular').on('click', 'a', function () {
        // get text from buttom

        var $titular = $(this).text();
        var $old_titular = $('.titular h2').text();

        $old_titular = accents.remove($old_titular).toLowerCase();
        //para mostrar las descriptiones de las categorias
        $titular = accents.remove($titular).toLowerCase();
        var clase = $titular;
        clase = clase.replace(/\s+/g, '-');


        if ($titular != $old_titular) {
          $('.titular h2').remove();
          $('.titular').append('<h2>' + $(this).text() + '</h2>');
          $('.descripcion-contenidos').addClass('d-none');
          $('.descripcion').addClass('d-none');
          $('.descripcion' + '.' + clase).toggleClass('d-none');

          if ($('.descripcion').hasClass(clase)) {
            $('.descripcion-contenidos').addClass('d-none');
            $('.descripcion').addClass('d-none');
            $('.descripcion' + '.' + clase).toggleClass('d-none');
          }


        } else if ($titular === $old_titular) {
          // console.log('mismo texto')
          $('.titular h2').toggleClass('invisible');

          $('.descripcion').each(function () {
            if (!$(this).hasClass(clase)) {

              $(this).addClass('d-none')
            }

          })

          $('.descripcion' + '.' + clase).toggleClass('d-none');
          $('.descripcion-contenidos').toggleClass('d-none');

          if (!$('.descripcion' + '.' + clase).hasClass('d-none')) {
            $('.descripcion-contenidos').addClass('d-none')


          }

        }

      });


      $('.texto-header').on('click', 'a', function () {
        // get text form buttom

        var $titular = $(this).text();
        var $old_titular = $('.page-header h1').text();
        var clase = accents.remove($titular)
        clase = clase.toLowerCase();
        clase = clase.replace(/\s+/g, '-');



        if ($(this).text() != $('.page-header h1').text()) {
          $('.page-header h1').remove();
          $('.page-header').append('<h1>' + $titular + '</h1>');

          if ($('.descripcion').hasClass(clase)) {
            $('.descripcion-contenidos').addClass('d-none');
            $('.descripcion').addClass('d-none');
            $('.descripcion' + '.' + clase).addClass('parent').toggleClass('d-none');
          }

        } else if ($titular === $old_titular) {
          $('.page-header h1').remove();
          $('.page-header').append('<h1>' + 'Contenidos' + '</h1>');
          if ($('.descripcion').hasClass(clase)) {

            $('.descripcion' + '.' + clase).toggleClass('d-none');
            $('.descripcion-contenidos').toggleClass('d-none');
          }
        }

      });


      //cuándo isotope ha renderizado los elementos, check el border-right
      iso.on('layoutComplete',
        // eslint-disable-next-line no-unused-vars
        function (event) {
          var w = $(window).width()
          if (w > 768) {


            var elems = iso.getFilteredItemElements()
            //queda mirar los breakpoints
            var count = 1;
            $.each(elems, function () {


              if (count == 1 || count == 2) {
                $(this).css('border-right', '1px solid black')
              }
              if (count === 3) {
                $(this).css('border-right', 'none')
                count = 0;
              }
              count++;
            })
            //llamo a la funcion para remover el border-bottom de los últimos items

            borderItems(elems)

          }

        }
      )
      $(window).resize(function () {
        iso.on('layoutComplete',
          // eslint-disable-next-line no-unused-vars
          function (event) {
            var w = $(window).width()
            if (w > 768) {


              var elems = iso.getFilteredItemElements()
              //queda mirar los breakpoints
              var count = 1;
              $.each(elems, function () {


                if (count == 1 || count == 2) {
                  $(this).css('border-right', '1px solid black')
                }
                if (count === 3) {
                  $(this).css('border-right', 'none')
                  count = 0;
                }
                count++;
              })
              //llamo a la funcion para remover el border-bottom de los últimos items

              borderItems(elems)

            }

          }
        )
      })

    })

  },
};

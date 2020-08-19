var accents = require('remove-accents');
export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

    // init Isotope
    $(window).load(function () {

      var $grid = $('.grid').isotope({
        itemSelector: 'article',
        percentPosition: true,
        layoutMode: 'fitRows',
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
      $grid.imagesLoaded(function () {
        $grid.isotope('layout');
      });

      var borderItems = function(articles){
        //remove border bottom from las 3 items

          let items = articles;

        //SI ES MÓDULO DE 3

        if (items.length % 3 == 0) {
          let ultimos = items.slice(Math.max(items.length - 3, 1))
          for (let i = 0; i < ultimos.length; i++) {


            ultimos[i].className += ' no-border-bottom';

          }
          //si sólo hay 3
          if(items.length == 3) {
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
          if(items.length == 2) {
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
        } else if(items.length % 3 == 1 || items.length == 1 || items.length > 3) {

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
      $('.filter-button-group').on('click', 'a', function () {
        // get group key
        var $this = $(this);

        var filterValue;

        var $buttonGroup = $this.parents('.filter-button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');


        if ($this.is('.active')) {
          filters[filterGroup] = '';
          $this.removeClass('active')

        } else {
          $this.toggleClass('active').siblings().removeClass('active');
        }



        // combine filters
        filterValue = concatValues(filters);
        $grid.isotope({ filter: filterValue });

      });
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
        // get text form buttom

        var $titular = $(this).text();
        var $old_titular = $('.titular h2').text();
        //var clase = $titular.toLowerCase();
        //clase = $.trim(clase);
        var clase = accents.remove($titular)
        clase = clase.toLowerCase();
        console.log(clase)

        if ($(this).text() != $('.titular h2').text()){
          $('.titular h2').remove();
          $('.titular').append('<h2>' + $titular + '</h2>');

          if ($('.descripcion').hasClass(clase)){
            $('.descripcion-contenidos').addClass('d-none');
            $('.descripcion').addClass('d-none');
            $('.descripcion' + '.' + clase ).toggleClass('d-none');
          }


        } else if ($titular === $old_titular ) {

          $('.titular h2').toggleClass('invisible');
          if ($('.descripcion').hasClass(clase)) {

            $('.descripcion' + '.' + clase).toggleClass('d-none');
            $('.descripcion-contenidos').toggleClass('d-none');
          }

        }

      });
      $('.texto-header').on('click', 'a', function () {
        // get text form buttom

        var $titular = $(this).text();
        var $old_titular = $('.page-header h1').text();


        if ($(this).text() != $('.page-header h1').text()) {
          $('.page-header h1').remove();
          $('.page-header').append('<h1>' + $titular + '</h1>');

        } else if ($titular === $old_titular) {
          $('.page-header h1').remove();
          $('.page-header').append('<h1>' + 'Contenidos' + '</h1>');
        }

      });
      //cuándo isotope ha renderizado los elementos, check el border-right
      $grid.on('layoutComplete',
        // eslint-disable-next-line no-unused-vars
        function (event) {
          var elems = $grid.isotope('getFilteredItemElements')
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
      )

    })

  },
};

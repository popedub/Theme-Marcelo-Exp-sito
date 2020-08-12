export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    $(document).ready(function () {
      $('tbody:first-child').prepend('<div class="grid-sizer"></div>');
    })
    // init Isotope
    $(window).load(function(){
      var $grid = $('.grid').isotope({
        itemSelector: 'article',
        percentPosition: true,
        layoutMode: 'fitRows',
        fitRows: {
          // use element for option
          columnWidth: '.grid-sizer',
        },
      });
      // layout Isotope after each image loads
      $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
      });
      // filter items on button click
      $('.filter-button-group').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      //cuándo isotope ha renderizado los elementos, check el border-right
      $grid.on('layoutComplete',
        // eslint-disable-next-line no-unused-vars
        function (event) {
          var elems = $grid.isotope('getFilteredItemElements')
          //queda mirar los breakpoints
          var count = 1;
          $.each(elems, function(){
            console.log(count)

            if(count == 1 || count == 2) {
              $(this).css('border-right', '1px solid black')
            }
            if (count === 3) {
              $(this).css('border-right', 'none')
              count = 0;
            }
            count++;
          })


        }
      );
    })

  },
};

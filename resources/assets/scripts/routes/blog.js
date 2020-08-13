export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS

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


        if($this.is('.active')) {
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

      //cuándo isotope ha renderizado los elementos, check el border-right
      $grid.on('layoutComplete',
        // eslint-disable-next-line no-unused-vars
        function (event) {
          var elems = $grid.isotope('getFilteredItemElements')
          //queda mirar los breakpoints
          var count = 1;
          $.each(elems, function(){


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

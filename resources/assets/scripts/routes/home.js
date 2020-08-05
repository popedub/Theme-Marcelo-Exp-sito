export default {
  init() {
    // JavaScript to be fired on the home page
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: 'article',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-sizer',
      },
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  },
};

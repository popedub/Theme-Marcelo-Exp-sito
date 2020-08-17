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
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired

  },
};

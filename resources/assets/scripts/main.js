// import external dependencies
import 'jquery';
import 'bootstrap/js/src/util';
import 'bigtext/dist/bigtext';
import 'slick-carousel/slick/slick';
import 'lightgallery/dist/js/lightgallery-all.js';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import blog from './routes/blog';
import templateBio from './routes/templatebio';
import single from './routes/single';
import home from './routes/home';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  blog,
  // About Us page, note the change from about-us to aboutUs.
  templateBio,
  single,
  home,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

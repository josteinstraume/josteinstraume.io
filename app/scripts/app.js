'use strict';

(function() {

  skel.init({
    reset: 'full',
    breakpoints: {
      'global': { range: '*', href: 'styles/style.css', lockViewport: true },
      'wide': { range: '-1680', href: 'styles/style-wide.css' },
      'normal': { range: '-1280', href: 'styles/style-normal.css' },
      'mobile': { range: '-640', href: 'styles/style-mobile.css' },
      'mobilep': { range: '-360', href: 'styles/style-mobilep.css' }
    }
  });

  // Events (JS).

    // Remove "loading" class once the page has fully loaded.
      window.onload = function() {
        document.body.className = '';
      }

    // Prevent scrolling on touch.
      window.ontouchmove = function() {
        return false;
      }

    // Fix scroll position on orientation change.
      window.onorientationchange = function() {
        document.body.scrollTop = 0;
      }

})();

// Custom Javascript Initialization
var Custom = function() {
  'use strict';

  // Handle Overlay
  var closeMenu = function() {
    var overlay = $('.js__bg-overlay'),
      headerOverlay = $('.js__header-overlay'),
      trigger = $('.js__trigger'),
      menu = $('#close-menu');

    menu.on('click', function() {
      overlay.toggleClass('-is-open');
      headerOverlay.toggleClass('-is-open');
      trigger.toggleClass('-is-active');
    });
  }

  return {
    init: function() {
      closeMenu(); // initial setup for Overlay
    }
  }
}();

$(document).ready(function() {
  Custom.init();
});

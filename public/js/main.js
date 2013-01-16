/*
 * Call some of our helper functions - plugins.js
 * https://github.com/h5bp/mobile-boilerplate/wiki/JavaScript-Helper
 */

MBP.scaleFix();
MBP.hideUrlBarOnLoad();
//new MBP.autogrow(document.getElementById('myTextarea'), 14); // 14 - line height

/**
 *  Call our functions
 */

(function($){

$(function() {



}); // End document.load (DOM loaded)

$(window).load(function() {



}); // End window.load (Everything loaded)

function windowScroll() {
    if( $(window).scrollTop() > 163 ) {
        $('body').addClass('toolbar');
        $('header').not('.toolbar').hide().addClass('toolbar').fadeIn( 400 );
        $("#top-link").fadeIn();
    } else if( $(window).scrollTop() < 32 ) {
        $('body.toolbar').removeClass('toolbar');
        $('header.toolbar').removeClass('toolbar').show();
        $("#top-link").fadeOut();
    } else {
        $('body.toolbar').removeClass('toolbar');
    }
};

})(this.jQuery); // End jquery namespace
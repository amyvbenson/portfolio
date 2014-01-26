$(document).ready(function() {

    'use strict';

    function showOverlay() {
        
        var overlay = $('.overlay');

        if( overlay.length ) {
            overlay.addClass('show');
            return;
        }

        $('body').append('<div class="overlay show"></div>');

    }

    function closeItem() {
        $('.overlay').removeClass('show');
        $('.site__description').removeClass('show');
    } 

    $('body').on('click', '.overlay', function() {
        closeItem();
    });

    $('.site__close').on('click', function() {
        closeItem();
    });

    $('.site__title').on('click', function() {
        showOverlay();
        $(this).next('.site__info').find('.site__description').addClass('show');
    });

});
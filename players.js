$(document).ready(function () {

    $('.buttons').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
            $('.Pname').show(400);
        } else {
            $('.image').not('.' + filter).hide(200);
            $('.image').filter('.' + filter).show(400);
            $('.Pname').not('.' + filter).hide(400);
            $('.Pname').filter('.' + filter).show(200);
        }

    });

    $('.gallery').magnificPopup({

        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});

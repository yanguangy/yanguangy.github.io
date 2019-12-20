var mod = main.init();
mod.root.children[1].jingy6.jou2015.on('touchend', function () {
    window.stepIndex = 1;
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    })
    $('.btn-left').hide();
    $('.mark-box').show();
})
mod.root.children[1].jingy6.jou2016.on('touchend', function () {
    window.stepIndex = 2;
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    })
    $('.mark-box').show();
})
mod.root.children[1].jingy6.jou2017.on('touchend', function () {
    window.stepIndex = 3;
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    })
    $('.mark-box').show();
})
mod.root.children[1].jingy6.jou2018.on('touchend', function () {
    window.stepIndex = 4;
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    })
    $('.mark-box').show();
})
mod.root.children[1].jingy6.jou2019.on('touchend', function () {
    window.stepIndex = 5;
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    });
    $('.btn-right').hide();
    $('.mark-box').show();
})
$('.btn-left').on('touchend', function () {
    window.stepIndex = window.stepIndex - 1;
    if (window.stepIndex < 2) {
        $('.btn-left').hide();
    } else {
        $('.btn-left').show();
    }
    if (window.stepIndex < 5) {
        $('.btn-right').show();
    }
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    })
});
$('.btn-right').on('touchend', function () {
    window.stepIndex = window.stepIndex + 1;
    if (window.stepIndex > 4) {
        $('.btn-right').hide();
    } else {
        $('.btn-right').show();
    }
    if (window.stepIndex > 1) {
        $('.btn-left').show();
    }
    $('.mark-list').css({
        'left': (window.stepIndex - 1) * -474,
    })
})
$('.btn-close').on('click', function () {
    $('.mark-box').hide();
})

mod.stage.size(640, window.innerHeight).update();

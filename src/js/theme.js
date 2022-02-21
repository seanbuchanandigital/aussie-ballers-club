sliderConfig = {
    arrows: false,
    dots: true,
    appendDots: null
}

function initSlickSlider(slider, config){
    slider.slick(config);
}

function sliderControls(slider, action){
    let userAction = action.data('control');
    slider.slick(userAction);
}

$(document).ready(function(){
    let slider = $('.slick-slider');
    let sliderButtons = slider.next().find('button');

    sliderConfig.appendDots = slider.next().children().children().children('.slider-dots');

    if(slider.length){
        initSlickSlider(slider, sliderConfig);

        sliderButtons.each(function(i,e){
            $(e).on('click', function(){
                sliderControls(slider, $(this));
            });
        });
    }
});
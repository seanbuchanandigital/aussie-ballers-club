slideshowConfig = {
    slider: '.abc-slideshow .slick-slider',
    dots: '.slider-dots',
    settings: {
        arrows: false,
        dots: true,
        appendDots: null
    }
}

function initSlideshow(slider, config){
    slider.slick(config);
}

let sliderPause = false;

function sliderControls(slider, action){
    let userAction = action.data('control');

    if(userAction === 'slickPause' && sliderPause === false){
        // Change current pause button state
        action.children('svg').eq(0).hide();
        action.children('svg').eq(1).show();

        // Change current play button state
        action.prev().children('svg').eq(0).hide();
        action.prev().children('svg').eq(1).show();

        sliderPause = true;
    } else if(userAction === 'slickPlay' && sliderPause === true){
        // Change current pause button state
        action.children('svg').eq(0).show();
        action.children('svg').eq(1).hide();

        // Change current play button state
        action.next().children('svg').eq(0).show();
        action.next().children('svg').eq(1).hide();

        sliderPause = false;
    }

    slider.slick(userAction);
}

listCollectionConfig = {
    slider: '.abc-list-collection .slick-slider',
    dots: '.slider-dots',
    settings: {
        arrows: false,
        dots: true,
        appendDots: null
    }
}

function initListCollection(slider, config){
    slider.slick(config);
}

$(document).ready(function(){
    if($(slideshowConfig.slider).length){

        $(slideshowConfig.slider).each(function(i,e){
            slideshowConfig.settings.appendDots = $(e).next().children().children().children(slideshowConfig.dots);
            initSlideshow($(e), slideshowConfig.settings);

            let sliderButtons = $(e).next().find('button');

            sliderButtons.each(function(i,ele){
                $(ele).on('click', function(){
                    sliderControls($(e), $(this));
                });
            });

        });
    }

    if($(listCollectionConfig.slider).length){

        $(listCollectionConfig.slider).each(function(i,e){
            listCollectionConfig.settings.appendDots = $(e).next().children().children().children(listCollectionConfig.dots);
            initListCollection($(e), listCollectionConfig.settings);

            let sliderButtons = $(e).next().find('button');

            sliderButtons.each(function(i,ele){
                $(ele).on('click', function(){
                    sliderControls($(e), $(this));
                });
            });
        });
    }
});
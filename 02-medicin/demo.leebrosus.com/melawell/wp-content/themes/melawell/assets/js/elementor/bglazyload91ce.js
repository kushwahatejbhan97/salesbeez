(function($){if(!(window.Waypoint)){$('.elementor-section.lazyelementorbackgroundimages,.elementor-column-wrap.lazyelementorbackgroundimages').removeClass('lazyelementorbackgroundimages');if(window.console&&console.warn){console.warn('Waypoint library is not loaded so backgrounds lazy loading is turned OFF');}
return;}
$('.lazyelementorbackgroundimages').each(function(){var $section=$(this);new Waypoint({element:$section.get(0),handler:function(direction){$section.removeClass('lazyelementorbackgroundimages');},offset:$(window).height()*1.5});});})(jQuery)
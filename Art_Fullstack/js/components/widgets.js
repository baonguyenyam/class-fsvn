!function(n){Berserk.behaviors.widgets_carousel_init={attach:function(e,i){if(n(".brs-carousel:not(.rendered)").length){if(void 0===n.fn.slick)return console.log("Waiting for the slick library"),void setTimeout(Berserk.behaviors.widgets_carousel_init.attach,i.timeout_delay,e,i);var s=n(e).parent().find(".brs-carousel:not(.rendered)").addClass("rendered");s.on("init",function(e,i){i.$dots.removeClass("slick-dots"),i.$dots.addClass("brs-carousel__dots-circled")}),s.slick({infinite:!1,arrows:!1,dots:!0}).addClass("rendered")}}},Berserk.behaviors.widgets_slider_cube_init={attach:function(e,i){var s=n(".brk-slider-cube:not(.rendered)",e);if(s.length){if("undefined"==typeof Swiper)return console.log("Waiting for the swiper cube library"),void setTimeout(Berserk.behaviors.widgets_slider_cube_init.attach,i.timeout_delay,e,i);s.each(function(){var e=n(this),i=e.find(".brk-slider-cube__items"),s=e.find(".brk-slider-cube__pagintaion"),t=e.find(".brk-slider-cube__overlay");e.addClass("rendered");var a=new Swiper(i,{init:!1,effect:"cube",spaceBetween:0,loop:!0,loopedSlides:2,autoHeight:!0,speed:900,cubeEffect:{shadow:!1,slideShadows:!1,shadowOffset:20,shadowScale:.94},pagination:{el:s,clickable:!0}});window.addEventListener("load",function(e){a.init()}),a.on("touchStart",function(){t.hasClass("deactive")?t.removeClass("deactive"):(t.addClass("deactive"),setTimeout(function(){t.removeClass("deactive")},500))}),s.find("span").each(function(){n(this).on("click",function(){t.hasClass("deactive")?t.removeClass("deactive"):(t.addClass("deactive"),setTimeout(function(){t.removeClass("deactive")},500))})})})}}};var e=n(".brk-sc-view-swiper");e.length&&e.find(".brk-sc-view-swiper__btn").each(function(){n(this).on("click",function(){e.hasClass("row-view")?(e.removeClass("row-view"),e.addClass("col-view")):e.hasClass("col-view")&&(e.removeClass("col-view"),e.addClass("row-view"))})}),Berserk.behaviors.widgets_price_slider_init={attach:function(e,i){var s=n(e).parent().find(".brk-sc-price-slider:not(.rendered)");if(s.length){if("function"!=typeof n.fn.slider)return console.log("Waiting for the price slider library"),void setTimeout(Berserk.behaviors.widgets_price_slider_init.attach,i.timeout_delay,e,i);s.each(function(){var e=n(this),i=n(this).find(".brk-sc-price-slider__container"),s=n(this).find("input.sliderValue"),t=+i.attr("data-min-value"),a=+i.attr("data-max-value");function r(e){var i=e.val().length;i<=1?e.css("width","14px"):2==i?e.css("width","22px"):3==i?e.css("width","30px"):4==i?e.css("width","37px"):5<=i&&e.css("width","45px")}e.addClass("rendered"),i.slider({range:!0,min:t,max:a,step:1,values:[t,a],slide:function(e,i){for(var s=0;s<i.values.length;++s)n("input.sliderValue[data-index="+s+"]").val(i.values[s])},change:function(){s.each(function(){r(n(this))})}}),s.each(function(){r(n(this))}),s.on("keyup",function(){r(n(this))}),s.change(function(){var e=n(this);n(".brk-sc-price-slider__container").slider("values",e.data("index"),e.val())})})}}}}(jQuery);
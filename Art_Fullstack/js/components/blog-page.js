!function(s){Berserk.behaviors.blog__page_init={attach:function(e,o){if(!(s(".brk-related-carousel:not(.rendered)").length<1)){if(void 0===s.fn.slick)return console.log("Waiting for the slick library"),void setTimeout(Berserk.behaviors.blog__page_init.attach,o.timeout_delay,e,o);s(e).parent().find(".brk-related-carousel:not(.rendered)").each(function(){var e=s(this).find(".brk-related-carousel__items");e.on("init afterChange",function(e,o){o.$dots.removeClass("slick-dots"),o.$dots.addClass("brk-related-carousel__dots")}),e.slick({dots:!0,prevArrow:!1,nextArrow:!1,infinite:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),s(this).addClass("rendered")})}}}}(jQuery);
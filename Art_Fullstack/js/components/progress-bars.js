!function(a){Berserk.behaviors.progressbar_init={attach:function(e,r){if(!(a(".progress__bar:not(.rendered), .progress__curve:not(.rendered), .progress__count:not(.rendered)").length<1)){var t=a(".progress__bar:not(.rendered)",e).addClass("rendered");t.length&&a(document).on("scroll",function(){t.not(".scrolled").each(function(){if(a(this).offset().top<a(window).scrollTop()+a(window).height()){var e=a(this),r=e.attr("data-valuemin"),t=e.attr("data-valuenow");e.css({width:t+"%"}),e.parent().parent().find(".progress__bar-counter").removeClass("hide").counter({start:r,end:t,time:.7,step:50}),e.addClass("scrolled");var n=a(".progress__stripe");n.length&&n.each(function(){var n=a(this);setTimeout(function(){var e=n.find(".progress__bar-counter"),r=n.find(".progress").width(),t=n.find(".progress__bar").width();e.width();r/2-10<t&&e.css({color:"#fff"})},1e3)})}})}).trigger("scroll");var n=a(".progress__curve:not(.rendered)",e).addClass("rendered");n.length&&(a(window).on("resize",function(){n.each(function(){var e=a(this),r=(e.data("value"),e.find("path")),t=e.width(),n=e.height(),o=65*t/100,s=90*t/100;r.attr("d","M 0 "+n+" L "+o+" "+n+" Q "+s+" "+n+" "+t+" 0")})}),a(window).on("scroll",function(){n.not(".scrolled").each(function(){var e=a(this).offset().top,r=a(window).scrollTop()+a(window).height(),t=a(this),n=t.data("value")/100,o=t.find("path");e<r&&(o.css({"stroke-dashoffset":153-153*n+"%"}),t.addClass("scrolled"))})}),a(window).trigger("resize"));var o=a(".progress__count:not(.rendered)",e).addClass("rendered");o.length&&a(window).on("scroll",function(){o.not(".scrolled").each(function(){var e=a(this).offset().top,r=a(window).scrollTop()+a(window).height(),t=a(this),n=parseInt(t.find(".count-value").text()),o=parseInt(t.find(".count-amount").text()),s=t.find(".progress__bar"),d=100*n/o+"%";e<r&&(s.css({width:d}),t.addClass("scrolled"))})})}}}}(jQuery);
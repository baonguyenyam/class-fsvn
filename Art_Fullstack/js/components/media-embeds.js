!function(r){Berserk.behaviors.media_embeds_init={attach:function(e,t){var s,d,i,n,o;r(".fb-video:not(.rendered)",e).addClass("rendered").length&&(s=document,d="script",i="facebook-jssdk",o=s.getElementsByTagName(d)[0],s.getElementById(i)||((n=s.createElement(d)).id=i,n.src="https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v2.11",o.parentNode.insertBefore(n,o))),r(".brk-hosted-video:not(.rendered)",e).addClass("rendered").each(function(e){var t=r(this).find(".brk-hosted-video__btn"),s=r(this).find("video"),d=r(this).find("source"),i=d.attr("data-src");r(this).find(".brk-hosted-video__img");r(this).hasClass("brk-hosted-video_inner")||(t.attr("href","#brk-hosted-video-"+e),s.attr("id","brk-hosted-video-"+e),t.click(function(e){d.attr("src",i),setTimeout(function(){s.get(0).play()},100)})),r(this).hasClass("brk-hosted-video_inner")&&t.click(function(e){s.css("display","block"),t.css("display","none"),d.attr("src",i),setTimeout(function(){s.get(0).play()},100)})})}}}(jQuery);
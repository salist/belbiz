"use strict";!function(){var n=$("#nav-toggle");n.length>0&&n.on("click",function(){this.classList.toggle("active")})}(),function(){var n=$("#link-show-secret"),t=$("#blog-heart");n.on("click",function(){t.addClass("content-showed")})}(),function(){var n=$("#block-contacts"),t=$("#open-form");t.on("click",function(){n.addClass("form-opened")})}(),function(){var n=$("#nav-toggle");n.on("click",function(){$("body").toggleClass("menuShowed")})}(),function(){$('a[href^="#anchor-"]').click(function(){var n=$(this).attr("href");return"#"!==n?($("html, body").animate({scrollTop:$(n).offset().top},500),!1):void 0})}(),function(){var n=$("#select-beast");n.length>0&&n.selectmenu({width:"100%",change:function(n,t){var o=t.item.label,c=$(".checkboxList");c.hide(),$("#"+o.toLowerCase()).show(400)}})}();
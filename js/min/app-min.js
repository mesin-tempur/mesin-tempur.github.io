function searchInputReveal(){$(document).on("open.zf.reveal",function(){$("#searchInput").add("#searchRoleInput").focus()}),$(document).on("closed.zf.reveal",function(){$("#searchInput").add("#searchRoleInput").val("")})}function categoriMultilevel(){var e=$(".cat-list"),n=e.find(".first-level-cat"),a=e.find(".second-level-cat"),s=e.find(".third-level-cat"),i=e.find(".has-child"),t=e.find(".back-to-first"),o=e.find(".back-to-second"),l=e.find(".second-level-cat-link");i.on("click tap",function(){n.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")}),t.on("click tap",function(){n.removeClass("hidden"),a.addClass("hidden")}),l.on("click tap",function(){a.addClass("hidden")}),o.on("click tap",function(){s.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")})}function filterCanvas(){var e=$("#off-canvas-filter-cat"),n=e.find(".off-canvas-filter-cat-content"),a=$(".canvas-filter-trigger");a.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden")}),e.on("closed.zf.offcanvas",function(){n.addClass("hidden")})}function filterPush(){var e=$(".off-canvas-filter-cat-content"),n=e.find(".filter-menu"),a=e.find(".button-area"),s=e.find(".back-to-filter-menu"),i=e.find(".filter-action"),t=i.find(".push-opt"),o=$("#off-canvas-filter-cat .close-button");a.on("click tap",function(){console.log("YEAY"),$($(this).attr("data-target")).removeClass("hidden"),n.add(o).addClass("hidden")}),s.on("click tap",function(){n.add(o).removeClass("hidden"),i.addClass("hidden")}),t.on("click tap",function(){$(this).siblings().removeClass("selected"),$(this).addClass("selected")})}function descToggle(){var e=$(".product-description"),n=e.find(".display-toggle"),a=e.find(".height-wrap"),s=n.find("a");a.height()>200?(e.addClass("teaser"),n.css("display","block")):e.css("padding-bottom","10px"),s.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>'),s.on("click tap",function(){e.hasClass("teaser")?(e.removeClass("teaser"),s.html('lihat lebih sedikit <span class="icon ic-arrow-up"></span>')):(e.addClass("teaser"),s.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>'))})}function passwordVisibility(){var e=$(".password-toggle"),n=e.find(".pass-btn"),a=e.find("#password"),s=e.find("#repassword"),i=e.find("#newpassword");n.click(function(){var t=e.find(".button-hide");n.toggle(),t.is(":visible")?a.add(s).add(i).attr("type","text"):a.add(s).add(i).attr("type","password")})}function urlStore(){var e=$(".url-block"),n=e.find(".url-input"),a=e.find(".toko-name-url");n.keyup(function(){var e=n.val();e=e.replace(/\s+/g,"-").toLowerCase(),a.text(e)})}function fullonfocus(){$(".fullonfocus").focus(function(){$(this).parent().addClass("forcefull"),$(".fullcancel").css("display","")}).blur(function(){$(this).parent().removeClass("forcefull"),$(".fullcancel").css("display","none"),$(".fullonfocus").val("")})}function fxdBottom(){var e=$(".js-position-anchor"),n=$(window).height(),a=e.height();$(window).on("scroll",function(){var a=$(window).scrollTop(),s=e.offset().top,i=s-n+62;a>=i?$(".js-fxdBtm").css("display","none"):$(".js-fxdBtm").css("display","")})}function megaMenu(){var e=$("#category-wrapper"),n=e.find("#js-megamenu"),a=e.find(".js-megabutton"),s=e.find(".cat-lvl-1"),i=e.find(".subcat-wrapper");a.mouseover(function(){n.addClass("active"),$(this).addClass("active-btn"),$("#js-dark-overlay").css({display:"block",opacity:"1"})}),s.mouseover(function(){s.removeClass("active-cat"),$(this).addClass("active-cat"),i.removeClass("active"),$(this).children(".subcat-wrapper").addClass("active")}),e.mouseleave(function(){n.removeClass("active"),s.removeClass("active-cat"),i.removeClass("active"),a.removeClass("active-btn"),$("#js-dark-overlay").css({display:"none",opacity:"0"})})}function headerSticky(){$(window).scroll(function(){$(this).scrollTop()>80?($("header").addClass("header-sticky"),$(".category-wrapper").addClass("fxd-cat")):($("header").removeClass("header-sticky"),$(".category-wrapper").removeClass("fxd-cat"))})}function mobileFilter(){$(".js-mobile-filter-btn").on("click",function(){$(".new-filter-cat").addClass("open").css("visibility","visible")}),$(".js-close-filter").on("click",function(){$(".new-filter-cat").removeClass("open").css("visibility","")})}$(document).foundation(),$(document).ready(function(){$(".jPanelMenu-panel").addClass("trans-reset left-menu-closed");var e=$.jPanelMenu({menu:".menu-position-left",trigger:".left-menu-btn",direction:"left",clone:!1,openPosition:"80%",after:function(){$(".jPanelMenu-panel").toggleClass("trans-reset")},afterOpen:function(){$(".menu-overlay").removeClass("hidden"),$(".jPanelMenu-panel").addClass("posfx")},afterClose:function(){$(".menu-overlay").addClass("hidden"),$(".jPanelMenu-panel").removeClass("posfx")}});e.on()}),searchInputReveal(),urlStore(),$(function(){var e=$(".js-searchbar-overlay").find("input"),n=$(".js-searchbar").find("input");e.on("focus click tap",function(){$(".off-canvas-content").css("display","none"),$(".js-search-main").css("display","block"),n.focus()}),$(".js-dismiss-search").on("click tap",function(){$(".off-canvas-content").add(".js-search-main").add(".top-searchbar").css("display","")}),$(".js-toggle-searchbar").on("click tap",function(){$(".top-searchbar").is(":visible")?$(".top-searchbar").css("display","none"):($(".off-canvas-content").css("display","none"),$(".js-search-main").css("display","block"),n.focus())})}),$(function(){$(".with-inc").prepend('<div class="increment-btn up-num">+</div>'),$(".with-inc").append('<div class="increment-btn down-num">-</div>'),$(".increment-btn").on("click",function(){var e=$(this),n=e.parent().find("input").val();if("+"==e.text())var a=parseFloat(n)+1;else if(n>0)var a=parseFloat(n)-1;else a=0;e.parent().find("input").val(a)})}),$("#kodeVoucher").change(function(){$("#voucherInput").slideToggle()}),$(function(){$(".with-inc").prepend('<div class="increment-btn up-num">+</div>'),$(".with-inc").append('<div class="increment-btn down-num">-</div>');var e=$(".with-inc"),n=e.find("input"),a=e.find(".increment-btn"),s=e.find(".up-num"),i=e.find(".down-num");a.on("click tap",function(){var e=$(this),a=e.siblings(n).val();if("+"===e.text())var s=parseFloat(a)+1;else if(a>0)var s=parseFloat(a)-1;else s=0;e.siblings("input").val(s)})}),$(".full-banner").slick({dots:!1,infinite:!0,speed:400,autoplay:!0,autoplaySpeed:4e3,infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".halfsplit-banner").slick({dots:!1,infinite:!0,speed:400,autoplay:!0,autoplaySpeed:3500,slidesToShow:2,slidesToScroll:2,mobileFirst:!0,responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".cm-slide").slick({dots:!1,infinite:!0,slidesToShow:2,slidesToScroll:2,speed:400,autoplay:!0,autoplaySpeed:6e3,mobileFirst:!0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:5,arrows:!0}},{breakpoint:640,settings:{slidesToShow:3,slidesToScroll:3,arrows:!0}}]}),$("#dropdown-cat-search").click(function(e){e.stopPropagation(),$(this).toggleClass("active")}),$("html").click(function(){$("#dropdown-cat-search").removeClass("active")}),megaMenu(),headerSticky(),mobileFilter();
//# sourceMappingURL=./app-min.js.map
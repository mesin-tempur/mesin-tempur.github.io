function searchInputReveal(){$(document).on("open.zf.reveal",function(){$("#searchInput").add("#searchRoleInput").focus()}),$(document).on("closed.zf.reveal",function(){$("#searchInput").add("#searchRoleInput").val("")})}function categoriMultilevel(){var n=$(".cat-list"),a=n.find(".first-level-cat"),s=n.find(".second-level-cat"),t=n.find(".third-level-cat"),i=n.find(".has-child"),e=n.find(".back-to-first"),o=n.find(".back-to-second"),c=n.find(".second-level-cat-link");i.on("click tap",function(){a.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")}),e.on("click tap",function(){a.removeClass("hidden"),s.addClass("hidden")}),c.on("click tap",function(){s.addClass("hidden")}),o.on("click tap",function(){t.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")})}function filterCanvas(){var n=$("#off-canvas-filter-cat"),a=n.find(".off-canvas-filter-cat-content"),s=$(".canvas-filter-trigger");s.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden")}),n.on("closed.zf.offcanvas",function(){a.addClass("hidden")})}function filterPush(){var n=$(".off-canvas-filter-cat-content"),a=n.find(".filter-menu"),s=n.find(".button-area"),t=n.find(".back-to-filter-menu"),i=n.find(".filter-action"),e=i.find(".push-opt"),o=$("#off-canvas-filter-cat .close-button");s.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden"),a.add(o).addClass("hidden")}),t.on("click tap",function(){a.add(o).removeClass("hidden"),i.addClass("hidden")}),e.on("click tap",function(){$(this).siblings().removeClass("selected"),$(this).addClass("selected")})}function descToggle(){var n=$(".product-description"),a=n.find(".display-toggle"),s=n.find(".height-wrap"),t=a.find("a");s.height()>200?(n.addClass("teaser"),a.css("display","block")):n.css("padding-bottom","10px"),t.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>'),t.on("click tap",function(){n.hasClass("teaser")?(n.removeClass("teaser"),t.html('lihat lebih sedikit <span class="icon ic-arrow-up"></span>')):(n.addClass("teaser"),t.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>'))})}function passwordVisibility(){var n=$(".password-toggle"),a=n.find(".pass-btn"),s=n.find("#password"),t=n.find("#repassword"),i=n.find("#newpassword");a.click(function(){var e=n.find(".button-hide");a.toggle(),e.is(":visible")?s.add(t).add(i).attr("type","text"):s.add(t).add(i).attr("type","password")})}function urlStore(){var n=$(".url-block"),a=n.find(".url-input"),s=n.find(".toko-name-url");a.keyup(function(){var n=a.val();n=n.replace(/\s+/g,"-").toLowerCase(),s.text(n)})}function fullonfocus(){$(".fullonfocus").focus(function(){$(this).parent().addClass("forcefull"),$(".fullcancel").css("display","")}).blur(function(){$(this).parent().removeClass("forcefull"),$(".fullcancel").css("display","none"),$(".fullonfocus").val("")})}function fxdBottom(){var n=$(".js-position-anchor"),a=$(window).height(),s=n.height();$(window).on("scroll",function(){var s=$(window).scrollTop(),t=n.offset().top,i=t-a+62;s>=i?$(".js-fxdBtm").css("display","none"):$(".js-fxdBtm").css("display","")})}$(document).foundation(),searchInputReveal(),urlStore(),$(function(){var n=$(".js-searchbar-overlay").find("input"),a=$(".js-searchbar").find("input");n.on("focus click tap",function(){$(".off-canvas-content").css("display","none"),$(".js-search-main").css("display","block"),a.focus()}),$(".js-dismiss-search").on("click tap",function(){$(".off-canvas-content").add(".js-search-main").add(".top-searchbar").css("display","")}),$(".js-toggle-searchbar").on("click tap",function(){$(".top-searchbar").is(":visible")?$(".top-searchbar").css("display","none"):($(".off-canvas-content").css("display","none"),$(".js-search-main").css("display","block"),a.focus())})}),$(function(){$(".with-inc").prepend('<div class="increment-btn up-num">+</div>'),$(".with-inc").append('<div class="increment-btn down-num">-</div>'),$(".increment-btn").on("click",function(){var n=$(this),a=n.parent().find("input").val();if("+"==n.text())var s=parseFloat(a)+1;else if(a>0)var s=parseFloat(a)-1;else s=0;n.parent().find("input").val(s)})}),$("#kodeVoucher").change(function(){$("#voucherInput").slideToggle()}),$(function(){function n(){s.on("click tap",function(){i.addClass("is-visible"),e.addClass("slide-open"),t.addClass("is-open"),s.hasClass("left-slide")&&e.addClass("from-left"),s.hasClass("right-slide")&&e.addClass("from-right")}),i.on("click tap",function(){i.removeClass("is-visible"),e.removeClass("slide-open from-left from-right")})}var a=$(".page-container"),s=a.find(".menu-button"),t=a.find(".slide-menu"),i=a.find(".js-slide-exit"),e=a.find(".off-canvas-content");n()});
//# sourceMappingURL=./app-min.js.map
function searchInputReveal(){$(document).on("open.zf.reveal",function(){$("#searchInput").add("#searchRoleInput").focus()}),$(document).on("closed.zf.reveal",function(){$("#searchInput").add("#searchRoleInput").val("")})}function categoriMultilevel(){var n=$(".cat-list"),a=n.find(".first-level-cat"),t=n.find(".second-level-cat"),e=n.find(".third-level-cat"),i=n.find(".has-child"),s=n.find(".back-to-first"),d=n.find(".back-to-second"),l=n.find(".second-level-cat-link");i.on("click tap",function(){a.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")}),s.on("click tap",function(){a.removeClass("hidden"),t.addClass("hidden")}),l.on("click tap",function(){t.addClass("hidden")}),d.on("click tap",function(){e.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")})}function filterCanvas(){var n=$("#off-canvas-filter-cat"),a=n.find(".off-canvas-filter-cat-content"),t=$(".canvas-filter-trigger");t.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden")}),n.on("closed.zf.offcanvas",function(){a.addClass("hidden")})}function filterPush(){var n=$(".off-canvas-filter-cat-content"),a=n.find(".filter-menu"),t=n.find(".button-area"),e=n.find(".back-to-filter-menu"),i=n.find(".filter-action"),s=i.find(".push-opt"),d=$("#off-canvas-filter-cat .close-button");t.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden"),a.add(d).addClass("hidden")}),e.on("click tap",function(){a.add(d).removeClass("hidden"),i.addClass("hidden")}),s.on("click tap",function(){$(this).siblings().removeClass("selected"),$(this).addClass("selected")})}function descToggle(){var n=$(".product-description"),a=n.find(".display-toggle"),t=n.find(".height-wrap"),e=a.find("a");t.height()>200?(n.addClass("teaser"),a.css("display","block")):n.css("padding-bottom","10px"),e.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>'),e.on("click tap",function(){n.hasClass("teaser")?(n.removeClass("teaser"),e.html('lihat lebih sedikit <span class="icon ic-arrow-up"></span>')):(n.addClass("teaser"),e.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>'))})}function passwordVisibility(){var n=$(".password-toggle"),a=n.find(".pass-btn"),t=n.find("#password"),e=n.find("#repassword"),i=n.find("#newpassword");a.click(function(){var s=n.find(".button-hide");a.toggle(),s.is(":visible")?t.add(e).add(i).attr("type","text"):t.add(e).add(i).attr("type","password")})}function urlStore(){var n=$(".url-block"),a=n.find(".url-input"),t=n.find(".toko-name-url");a.keyup(function(){var n=a.val();n=n.replace(/\s+/g,"-").toLowerCase(),t.text(n)})}function fullonfocus(){$(".fullonfocus").focus(function(){$(this).parent().addClass("forcefull"),$(".fullcancel").css("display","")}).blur(function(){$(this).parent().removeClass("forcefull"),$(".fullcancel").css("display","none"),$(".fullonfocus").val("")})}$(document).foundation(),searchInputReveal(),urlStore(),$(function(){$(".with-inc").prepend('<div class="increment-btn up-num">+</div>'),$(".with-inc").append('<div class="increment-btn down-num">-</div>'),$(".increment-btn").on("click",function(){var n=$(this),a=n.parent().find("input").val();if("+"==n.text())var t=parseFloat(a)+1;else if(a>0)var t=parseFloat(a)-1;else t=0;n.parent().find("input").val(t)})});
//# sourceMappingURL=./app-min.js.map
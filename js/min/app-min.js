function searchInputReveal(){$(document).on("open.zf.reveal",function(){$("#searchInput").first().focus()}),$(document).on("closed.zf.reveal",function(){$("#searchInput").val("")})}function categoriMultilevel(){var t=$(".cat-list"),n=t.find(".first-level-cat"),a=t.find(".second-level-cat"),e=t.find(".third-level-cat"),i=t.find(".has-child"),d=t.find(".back-to-first"),c=t.find(".back-to-second"),s=t.find(".second-level-cat-link");i.on("click tap",function(){n.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")}),d.on("click tap",function(){n.removeClass("hidden"),a.addClass("hidden")}),s.on("click tap",function(){a.addClass("hidden")}),c.on("click tap",function(){e.addClass("hidden"),$($(this).attr("data-target")).removeClass("hidden")})}function filterCanvas(){var t=$("#off-canvas-filter-cat"),n=t.find(".off-canvas-filter-cat-content"),a=$(".canvas-filter-trigger");a.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden")}),t.on("closed.zf.offcanvas",function(){n.addClass("hidden")})}function filterPush(){var t=$(".off-canvas-filter-cat-content"),n=t.find(".filter-menu"),a=t.find(".button-area"),e=t.find(".back-to-filter-menu"),i=t.find(".filter-action"),d=i.find(".push-opt"),c=$("#off-canvas-filter-cat .close-button");a.on("click tap",function(){$($(this).attr("data-target")).removeClass("hidden"),n.add(c).addClass("hidden")}),e.on("click tap",function(){n.add(c).removeClass("hidden"),i.addClass("hidden")}),d.on("click tap",function(){$(this).siblings().removeClass("selected"),$(this).addClass("selected")})}$(document).foundation(),searchInputReveal();
//# sourceMappingURL=./app-min.js.map
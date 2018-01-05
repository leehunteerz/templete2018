
var banner_display_id="";
var track_handler_url="https://services.sketchbook.com/api/v3/track/?productline=sb";
var link_url="sketchbook://banner/open-url?url=https://www.sketchbook.com/blog/trents-tips-evolving-more-painterly-style/?utm_source=inapp&source=news";
var link_color="banner_color_7";
var image_type="png";
$(".link_wrap a").attr("href", link_url);
$(".link_wrap").attr("id", link_color);
$("#pic").css("background-image", "url(resource/picture." + image_type + ")");

(function(a){a(function(){var g=a("#wp_rp_ajax_nonce").val(),i=function(c,b,d){a.ajax({url:ajaxurl,data:{action:"rp_subscribe",subscription:b,_wpnonce:g,email:c||"0"},success:d,type:"POST"})},j=function(){var c=1!==a("#wp_rp_desktop_custom_theme_enabled:checked").length;a("#wp_rp_desktop_theme_custom_css").prop("readonly",c)};j();a("#wp_rp_desktop_custom_theme_enabled").click(j);document.location.search.match(/ref=turn-on-rp/)&&(a("#wp_rp_static_base_url").val(),a("#wp_rp_settings_form").append('<input type="hidden" value="statistics+thumbnails+promoted" name="wp_rp_turn_on_button_pressed" id="wp_rp_turn_on_button_pressed">'),
a("#wp_rp_settings_form").append('<input type="hidden" value="turn-on-banner" name="wp_rp_button_type" id="wp_rp_button_type">'),a("#wp_rp_settings_form").submit());a("#wp_rp_subscribe_email").length&&(a("#wp_rp_subscribe_email").val().length?a("#wp_rp_subscribe_button").hide():a("#wp_rp_unsubscribe_button").hide());a("#wp_rp_subscribe_button").on("click",function(c){var b=a("#wp_rp_subscribe_email").val();c.preventDefault();b&&(a("#wp_rp_subscribe_button").attr("disabled",!0),i(b,"activityreport,newsletter",
function(b){a("#wp_rp_subscribe_button").attr("disabled",!1);parseInt(b)&&(a("#wp_rp_subscribe_button").hide(),a("#wp_rp_unsubscribe_button").show(),alert("Subscription successful!"))}))});a("#wp_rp_unsubscribe_button").on("click",function(c){c.preventDefault();a("#wp_rp_unsubscribe_button").attr("disabled",!0);i(!1,"",function(b){a("#wp_rp_unsubscribe_button").attr("disabled",!1);parseInt(b)&&(a("#wp_rp_subscribe_email").val(""),a("#wp_rp_unsubscribe_button").hide(),a("#wp_rp_subscribe_button").show())})});
a(".wp_rp_notification .close").on("click",function(c){a.ajax({url:a(this).attr("href"),data:{noredirect:!0},_wpnonce:g});a(this).parent().slideUp(function(){a(this).remove()});c.preventDefault()});a("#wp_rp_wrap .collapsible .collapse-handle").on("click",function(c){var b=a(this).closest(".collapsible"),d=b.find(".container"),f=b.hasClass("collapsed"),e=b.attr("block");f?(d.slideDown(),a.post(ajaxurl,{action:"rp_show_hide_"+e,show:!0,_wpnonce:g})):(d.slideUp(),a.post(ajaxurl,{action:"rp_show_hide_"+
e,hide:!0,_wpnonce:g}));b.toggleClass("collapsed");if("statistics"===e){var e="statistics_"+(f?"on":"off"),d=void 0,b=new Image,f="https:"===location.protocol?"https://":"http://",e={"zem-habit-platform":"wordpress-rp","zem-habit-action":e,"zem-habit-timestamp":(new Date).getTime()},d=d||{},e=a.extend(d,e),d=f+"eyepatch.zemanta.com/log/?",h="";a.each(e,function(a,b){h+=a+"="+encodeURIComponent(b)+"&"});f=h.slice(0,h.length-1);b.src=d+f}c.preventDefault()})})})(jQuery);

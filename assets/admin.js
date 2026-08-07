/* WOWSA Announcement Bar — media library picker for the initiative lockup. */
(function ($) {
	"use strict";

	$(function () {
		var frame;
		var $input = $("#wowsa-ab-lockup");
		var $preview = $("#wowsa-ab-lockup-preview");
		var $remove = $("#wowsa-ab-lockup-remove");

		$("#wowsa-ab-lockup-select").on("click", function (event) {
			event.preventDefault();

			if (frame) {
				frame.open();
				return;
			}

			frame = wp.media({
				title: "Choose an initiative lockup",
				button: { text: "Use this lockup" },
				library: { type: "image" },
				multiple: false
			});

			frame.on("select", function () {
				var attachment = frame.state().get("selection").first().toJSON();
				$input.val(attachment.id);
				$preview.attr("src", attachment.url).show();
				$remove.show();
			});

			frame.open();
		});

		$remove.on("click", function (event) {
			event.preventDefault();
			$input.val("");
			$preview.attr("src", "").hide();
			$(this).hide();
		});
	});
})(jQuery);

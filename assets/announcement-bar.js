/* WOWSA Announcement Bar — dismissal handling. */
(function () {
	"use strict";

	var bar = document.querySelector(".wowsa-ab");
	if (!bar) {
		return;
	}

	var button = bar.querySelector(".wowsa-ab__dismiss");
	if (!button) {
		return;
	}

	var storageKey = "wowsa-ab-dismissed:" + (bar.getAttribute("data-wowsa-ab-key") || "default");

	function read() {
		try {
			return window.localStorage.getItem(storageKey);
		} catch (e) {
			return null;
		}
	}

	function write() {
		try {
			window.localStorage.setItem(storageKey, "1");
		} catch (e) {
			/* storage unavailable — dismissal lasts for this page view only */
		}
	}

	if (read()) {
		bar.hidden = true;
		return;
	}

	button.addEventListener("click", function () {
		bar.hidden = true;
		write();
	});
})();

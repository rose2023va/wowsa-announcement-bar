=== WOWSA Announcement Bar ===
Contributors: wowsa
Requires at least: 5.6
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later

A reusable institutional announcement bar for WOWSA initiatives.

== Description ==

One announcement at a time, displayed above the primary navigation across the
WOWSA site. Built as a permanent design-system component: reusing it for a new
initiative requires only a new lockup, new text and a new destination URL.

Design constraints (fixed, by intent):

* Height 44–48px, WOWSA Navy background, white text
* Antique Gold CTA, underline on hover only
* No gradients, shadows, buttons, photographs or background graphics
* Lockup displayed at 30px high (28px on mobile)

== Installation ==

1. Upload the `wowsa-announcement-bar` folder to `/wp-content/plugins/`, or
   upload the zip via Plugins → Add New → Upload Plugin.
2. Activate the plugin.
3. Go to Settings → Announcement Bar and configure it.

If your theme does not fire `wp_body_open`, add the shortcode
`[wowsa_announcement_bar]` at the very top of `header.php` instead.

== Admin controls ==

* Enable / disable the bar
* Upload or choose an initiative lockup (SVG or PNG, via the media library)
* Edit announcement text
* Edit CTA text and destination URL (with optional new-tab behaviour)
* Optional start and end dates
* Enable / disable the dismiss (×) button
* Exclude the home page, specific page IDs and specific URL slugs

== First announcement (WOWSA Awards 2026) ==

* Lockup: WOWSA Awards 2026 lockup
* Text: 2026 WOWSA Awards nominations are now open. Help recognize the people
  shaping the next century of open water swimming.
* CTA: Submit a Nomination
* URL: https://wowsaawards.com

== Developer notes ==

Suppress the bar from a theme or plugin:

`add_filter( 'wowsa_announcement_bar_display', '__return_false' );`

A body class `has-wowsa-announcement-bar` is added whenever the bar renders,
for themes that need to offset a sticky header.

== Changelog ==

= 1.0.0 =
* Initial release.

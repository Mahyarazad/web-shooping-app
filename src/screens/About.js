import React from "react";
import './scss/About.css'

export const About = (props) => {
	return (
		<div className="body">
			<p> About Me </p>
			<p>
		
				our new “viewport-relative” units appeared in the CSS specifications
				between 2011 and 2015, as part of the W3C’s CSS Values and Units Module
				Level 3. The new units – vw, vh, vmin, and vmax – work similarly to
				existing length units like px or em, but represent a percentage of the
				current browser viewport. Viewport Width (vw) – A percentage of the full
				viewport width. 10vw will resolve to 10% of the current viewport width,
				or 48px on a phone that is 480px wide. The difference between % and vw
				is most similar to the difference between em and rem. A % length is
				relative to local context (containing element) width, while a vw length
				is relative to the full width of the browser window. Viewport Height
				(vh) – A percentage of the full viewport height. 10vh will resolve to
				10% of the current viewport height. Viewport Minimum (vmin) – A
				percentage of the viewport width or height, whichever is smaller. 10vmin
				will resolve to 10% of the current viewport width in portrait
				orientations, and 10% of the viewport height on landscape orientations.
				Viewport Maximum (vmax) – A percentage of the viewport width or height,
				whichever is larger. 10vmax will resolve to 10% of the current viewport
				height in portrait orientations, and 10% of the viewport width on
				landscape orientations. Sadly, and strangely, vmax units are not yet
				available on Internet Explorer or Edge. While these units are derived
				from viewport height or width, they can all be used everywhere lengths
				are accepted – from font-size to positioning, margins, padding, shadows,
				borders, and so on. Let’s see what we can do! Responsive Typography It’s
				become very popular to use viewport units for responsive typography –
				establishing font-sizes that grow and shrink depending on the current
				viewport size. Using simple viewport units for font-size has an
				interesting (dangerous) effect. As you can see, fonts scale very quickly
				– adjusting from unreadably small to extra large in a very small range.
				This direct scaling is clearly too dramatic for daily use. We need
				something more subtle, with minimums and maximums, and more control of
				the growth rate. That’s where calc() becomes useful. We can combine a
				base size in more steady units (say 16px) with a smaller
				viewport-relative adjustment (0.5vw), and let the browser do the math:
				calc(16px + 0.5vw) rt Width (vw) – A percentage of the full viewport
				width. 10vw will resolve to 10% of the current viewport width, or 48px
				on a phone that is 480px wide. The difference between % and vw is most
				similar to the difference between em and rem. A % length is relative to
				local context (containing element) width, while a vw length is relative
				to the full width of the browser window. Viewport Height (vh) – A
				percentage of the full viewport height. 10vh will resolve to 10% of the
				current viewport height. Viewport Minimum (vmin) – A percentage of the
				viewport width or height, whichever is smaller. 10vmin will resolve to
				10% of the current viewport width in portrait orientations, and 10% of
				the viewport height on landscape orientations. Viewport Maximum (vmax) –
				A percentage of the viewport width or height, whichever is larger.
				10vmax will resolve to 10% of the current viewport height in portrait
				orientations, and 10% of the viewport width on landscape orientations.
				Sadly, and strangely, vmax units are not yet available on Internet
				Explorer or Edge. While these units are derived from viewport height or
                our new “viewport-relative” units appeared in the CSS specifications
				between 2011 and 2015, as part of the W3C’s CSS Values and Units Module
				Level 3. The new units – vw, vh, vmin, and vmax – work similarly to
				existing length units like px or em, but represent a percentage of the
				current browser viewport. Viewport Width (vw) – A percentage of the full
				viewport width. 10vw will resolve to 10% of the current viewport width,
				or 48px on a phone that is 480px wide. The difference between % and vw
				is most similar to the difference between em and rem. A % length is
				relative to local context (containing element) width, while a vw length
				is relative to the full width of the browser window. Viewport Height
				(vh) – A percentage of the full viewport height. 10vh will resolve to
				10% of the current viewport height. Viewport Minimum (vmin) – A
				percentage of the viewport width or height, whichever is smaller. 10vmin
				will resolve to 10% of the current viewport width in portrait
				orientations, and 10% of the viewport height on landscape orientations.
				Viewport Maximum (vmax) – A percentage of the viewport width or height,
				whichever is larger. 10vmax will resolve to 10% of the current viewport
				height in portrait orientations, and 10% of the viewport width on
				landscape orientations. Sadly, and strangely, vmax units are not yet
				available on Internet Explorer or Edge. While these units are derived
				from viewport height or width, they can all be used everywhere lengths
				are accepted – from font-size to positioning, margins, padding, shadows,
				borders, and so on. Let’s see what we can do! Responsive Typography It’s
				become very popular to use viewport units for responsive typography –
				establishing font-sizes that grow and shrink depending on the current
				viewport size. Using simple viewport units for font-size has an
				interesting (dangerous) effect. As you can see, fonts scale very quickly
				– adjusting from unreadably small to extra large in a very small range.
				This direct scaling is clearly too dramatic for daily use. We need
				something more subtle, with minimums and maximums, and more control of
				the growth rate. That’s where calc() becomes useful. We can combine a
				base size in more steady units (say 16px) with a smaller
				viewport-relative adjustment (0.5vw), and let the browser do the math:
				calc(16px + 0.5vw) rt Width (vw) – A percentage of the full viewport
				width. 10vw will resolve to 10% of the current viewport width, or 48px
				on a phone that is 480px wide. The difference between % and vw is most
				similar to the difference between em and rem. A % length is relative to
				local context (containing element) width, while a vw length is relative
				to the full width of the browser window. Viewport Height (vh) – A
				percentage of the full viewport height. 10vh will resolve to 10% of the
				current viewport height. Viewport Minimum (vmin) – A percentage of the
				viewport width or height, whichever is smaller. 10vmin will resolve to
				10% of the current viewport width in portrait orientations, and 10% of
				the viewport height on landscape orientations. Viewport Maximum (vmax) –
				A percentage of the viewport width or height, whichever is larger.
				10vmax will resolve to 10% of the current viewport height in portrait
				orientations, and 10% of the viewport width on landscape orientations.
				Sadly, and strangely, vmax units are not yet available on Internet
				Explorer or Edge. While these units are derived from viewport height or
                our new “viewport-relative” units appeared in the CSS specifications
				between 2011 and 2015, as part of the W3C’s CSS Values and Units Module
				Level 3. The new units – vw, vh, vmin, and vmax – work similarly to
				existing length units like px or em, but represent a percentage of the
				current browser viewport. Viewport Width (vw) – A percentage of the full
				viewport width. 10vw will resolve to 10% of the current viewport width,
				or 48px on a phone that is 480px wide. The difference between % and vw
				is most similar to the difference between em and rem. A % length is
				relative to local context (containing element) width, while a vw length
				is relative to the full width of the browser window. Viewport Height
				(vh) – A percentage of the full viewport height. 10vh will resolve to
				10% of the current viewport height. Viewport Minimum (vmin) – A
				percentage of the viewport width or height, whichever is smaller. 10vmin
				will resolve to 10% of the current viewport width in portrait
				orientations, and 10% of the viewport height on landscape orientations.
				Viewport Maximum (vmax) – A percentage of the viewport width or height,
				whichever is larger. 10vmax will resolve to 10% of the current viewport
				height in portrait orientations, and 10% of the viewport width on
				landscape orientations. Sadly, and strangely, vmax units are not yet
				available on Internet Explorer or Edge. While these units are derived
				from viewport height or width, they can all be used everywhere lengths
				are accepted – from font-size to positioning, margins, padding, shadows,
				borders, and so on. Let’s see what we can do! Responsive Typography It’s
				become very popular to use viewport units for responsive typography –
				establishing font-sizes that grow and shrink depending on the current
				viewport size. Using simple viewport units for font-size has an
				interesting (dangerous) effect. As you can see, fonts scale very quickly
				– adjusting from unreadably small to extra large in a very small range.
				This direct scaling is clearly too dramatic for daily use. We need
				something more subtle, with minimums and maximums, and more control of
				the growth rate. That’s where calc() becomes useful. We can combine a
				base size in more steady units (say 16px) with a smaller
				viewport-relative adjustment (0.5vw), and let the browser do the math:
				calc(16px + 0.5vw) rt Width (vw) – A percentage of the full viewport
				width. 10vw will resolve to 10% of the current viewport width, or 48px
				on a phone that is 480px wide. The difference between % and vw is most
				similar to the difference between em and rem. A % length is relative to
				local context (containing element) width, while a vw length is relative
				to the full width of the browser window. Viewport Height (vh) – A
				percentage of the full viewport height. 10vh will resolve to 10% of the
				current viewport height. Viewport Minimum (vmin) – A percentage of the
				viewport width or height, whichever is smaller. 10vmin will resolve to
				10% of the current viewport width in portrait orientations, and 10% of
				the viewport height on landscape orientations. Viewport Maximum (vmax) –
				A percentage of the viewport width or height, whichever is larger.
				10vmax will resolve to 10% of the current viewport height in portrait
				orientations, and 10% of the viewport width on landscape orientations.
				Sadly, and strangely, vmax units are not yet available on Internet
				Explorer or Edge. While these units are derived from viewport height or
				width
			</p>
		</div>
	);
};

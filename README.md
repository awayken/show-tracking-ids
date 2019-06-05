# Show Tracking IDs Bookmarklet

  > Reveal special data attributes for use in Google Tag Manager.

To get meaningful event data from your HTML, you need an easy way to select those elements from tools like
Google Analytics and Google Tag Manager. IDs are easy to select, but they must be unique on the page and so
they don't work for repeated elements. CSS classes are also pretty easy to select, but it can be hard to
tell whether a class is intended for JavaScript, styling, event tracking or nothing at all. A better solution
is to use custom data attributes instead.

Data attributes are easy to select using Attribute Selectors, and their purpose is to allow for data to live
alongside the markup it describes. We are using the same data attribute with unique values per tag type.
This bookmarklet makes it easy to see which tracking IDs are being used and which elements they are attached to.

Enjoy!

/* BMC HOMEMART — GitHub Pages image safety
   Ensures local image URLs are resolved from the current page path and
   provides a harmless fallback for accidental path/case mismatches.
*/
(function () {
  'use strict';

  function resolveLocalImage(src) {
    if (!src || /^(?:data:|blob:|https?:|\/\/)/i.test(src)) return src;
    try {
      var u = new URL(src, document.baseURI);
      return u.href;
    } catch (e) {
      return src;
    }
  }

  function install(img) {
    if (!img || img.dataset.bmcImageGuard) return;
    img.dataset.bmcImageGuard = '1';

    var original = img.getAttribute('src');
    if (original && /(?:^|\/)image\//i.test(original)) {
      img.setAttribute('src', resolveLocalImage(original));
    }

    img.addEventListener('error', function () {
      // Do not loop or replace with a fake image. Keep the browser's normal
      // broken-image state if the server genuinely has no matching file.
      img.dataset.bmcImageFailed = '1';
    }, { once: true });
  }

  function scan() {
    document.querySelectorAll('img[src]').forEach(install);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }

  new MutationObserver(scan).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();

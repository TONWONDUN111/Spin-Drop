(function () {
  'use strict';

  var LOCAL_CHECKOUT = 'checkout.html?v=20260605';

  function isBlockedShopifyUrl(rawUrl) {
    if (!rawUrl) return false;
    try {
      var url = new URL(String(rawUrl), window.location.href);
      return /(^|\.)myshopify\.com$/i.test(url.hostname);
    } catch (_err) {
      return false;
    }
  }

  function safeTarget(rawUrl) {
    if (isBlockedShopifyUrl(rawUrl)) return LOCAL_CHECKOUT;
    return rawUrl;
  }

  function rewriteAnchors(root) {
    var ctx = root && root.querySelectorAll ? root : document;
    var anchors = ctx.querySelectorAll('a[href]');
    for (var i = 0; i < anchors.length; i += 1) {
      var a = anchors[i];
      var href = a.getAttribute('href') || '';
      if (isBlockedShopifyUrl(href)) {
        a.setAttribute('href', LOCAL_CHECKOUT);
      }
    }
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    if (!isBlockedShopifyUrl(href)) return;

    event.preventDefault();
    window.location.href = LOCAL_CHECKOUT;
  }, true);

  var nativeOpen = window.open;
  if (typeof nativeOpen === 'function') {
    window.open = function (url, target, features) {
      var nextUrl = safeTarget(url);
      return nativeOpen.call(window, nextUrl, target, features);
    };
  }

  rewriteAnchors(document);

  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        var m = mutations[i];
        for (var j = 0; j < m.addedNodes.length; j += 1) {
          var node = m.addedNodes[j];
          if (node && node.nodeType === 1) rewriteAnchors(node);
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
})();

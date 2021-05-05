'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "20d9cd6dc02adcebddb1090d6a4fa006",
"assets/assets/images/ic_aboutUs.png": "5e0ae5dca3a9354ca2ece77d5aa87c17",
"assets/assets/images/ic_addList.png": "e2787d9e31923c97073fa79ec3fcfe9a",
"assets/assets/images/ic_appBar.png": "26888598a6afb2e5d4f61880f17d99f5",
"assets/assets/images/ic_apple.png": "c1a97ea947b695c3c2d71c97a8ac493b",
"assets/assets/images/ic_back.png": "59aca4bcd3fb1ab30d217b89e74e7bb9",
"assets/assets/images/ic_bad.png": "21a1b84410957f96cb1b24beb4ab9667",
"assets/assets/images/ic_bath.png": "f2489ebfb0342801b21d124aca732785",
"assets/assets/images/ic_changePassword.png": "637e3622430f6ffe78a028836ae50b84",
"assets/assets/images/ic_checkMark.png": "af7bd3e4f3b8bd084862e7b915f16c07",
"assets/assets/images/ic_check_arrow.png": "4b66beb1308af7c574f59811beba6f24",
"assets/assets/images/ic_close.png": "f34fca67a2af310a3fb4e3b5778bc891",
"assets/assets/images/ic_contact.png": "f1e973817cd02a0997c359c6abcb1160",
"assets/assets/images/ic_content_color.png": "9b731199b966d479224f6cd0c3a85a9c",
"assets/assets/images/ic_edit_image.png": "49c2fbe5bfe1e8815e6667fbb6bb5824",
"assets/assets/images/ic_facebook.png": "144214b9dcb15454c89803b0b95a892f",
"assets/assets/images/ic_facebook_share.png": "8d344f30d8ea3f796ae38dd7d2add4ef",
"assets/assets/images/ic_fav.png": "6038568267bb7d4dea3b0bc75bb57d10",
"assets/assets/images/ic_fav_fill.png": "ba28544f68a065b8048f7c8e9a6850ff",
"assets/assets/images/ic_fb.png": "835c226d5963938bd451234d316bf27c",
"assets/assets/images/ic_feedback.png": "ba26ca9175cf14db5e8e7b8eb95252c6",
"assets/assets/images/ic_filter.png": "b40687c5284b30cff838c3d85acca18a",
"assets/assets/images/ic_google.png": "d627ea0ce94ab3f1a22ce43f393b47cd",
"assets/assets/images/ic_home.png": "a0a19a137ce8c15aca8903928640a20c",
"assets/assets/images/ic_home_rank.png": "691b313745a30083356e3f1e7994dffb",
"assets/assets/images/ic_howtouseapp.png": "fa84c7317042648df7079d4349c81c04",
"assets/assets/images/ic_image_upload.png": "c233c73afa59b519a37b03199c40ebce",
"assets/assets/images/ic_insta.png": "6280d181048e0d5baa8435375f8ca3df",
"assets/assets/images/ic_invite.png": "7ced104a8dded1466382d806bd45a46e",
"assets/assets/images/ic_jordan.png": "dc8101a83e3a96e5e6b06561713f379f",
"assets/assets/images/ic_language.png": "bbc15666d50d2b8842a992678f70ba6f",
"assets/assets/images/ic_left-arrow-d.png": "f05f0c9d7c777389ff1f17a03677a467",
"assets/assets/images/ic_logo.png": "b071e8a143e38df7fbd6cf3dfa802fad",
"assets/assets/images/ic_map.png": "8eb7b33bc5d56583ac0d66b81acc4f76",
"assets/assets/images/ic_map_location.png": "bbebfa30c4353eedfca22c3d906bb00f",
"assets/assets/images/ic_menu.png": "c797d6816aeb201e65f3044583711777",
"assets/assets/images/ic_middle_man.png": "a22cb561edb6e67bcd30d5611b80ac1f",
"assets/assets/images/ic_myInformation.png": "d7512c85e196fd902318b9c80193aeb2",
"assets/assets/images/ic_myProfile.png": "613b3927ae9d985429204560110eaaf0",
"assets/assets/images/ic_my_ads.png": "ed22260fd0e3e7ab7ae2084c76b7ac26",
"assets/assets/images/ic_my_ads_fav.png": "3d7d48a30b165f0e86d4705cd8b286b3",
"assets/assets/images/ic_notification.png": "114bf72f770932ee193c95b882ec87c4",
"assets/assets/images/ic_parking.png": "f17400557d96eca3fc5a56c6a3860250",
"assets/assets/images/ic_phone.png": "902bf6b20d366a1b7252d07792b2429a",
"assets/assets/images/ic_playstore.png": "3748d64ebb0beacd66c914d620905e94",
"assets/assets/images/ic_popular-search-bg.png": "d97f06e702ef1e74502cf0c03335a7ba",
"assets/assets/images/ic_pro.png": "ce6054c9ea097519f454dfd39bb7c464",
"assets/assets/images/ic_property.png": "d88a9eb4bab95cc69b3d5affba77073b",
"assets/assets/images/ic_property_details_image.png": "9a1459b84d8a276819d23aca0c9b3269",
"assets/assets/images/ic_right-arrow-d.png": "b0b6886e8d74630bbba06d07feefebe6",
"assets/assets/images/ic_search.png": "6c221cd253fbd80eeac1e6ccc2c16e6d",
"assets/assets/images/ic_search_p.png": "1fc359d8cab10b19c8b01f74a7b89e1c",
"assets/assets/images/ic_search_textField.png": "946d45b534ac8142193b61dc7a637f3b",
"assets/assets/images/ic_share_email.png": "25a5771f69b0d36149792f8c4376dd59",
"assets/assets/images/ic_side_aboutus.png": "0e6376e658fc53cff4a7bd10071ecf4b",
"assets/assets/images/ic_side_add_fav.png": "e53c53b2729f678f107ad5a573eadf21",
"assets/assets/images/ic_side_add_home.png": "63f9311da21fa1aa8a9d24340787a366",
"assets/assets/images/ic_side_add_language.png": "368be0a1aa9edd5d05420d52e9fcf076",
"assets/assets/images/ic_side_add_map.png": "07e4203105b9c548722a1d8f606c7734",
"assets/assets/images/ic_side_add_property.png": "a05759ead889cf44dc910daafcf6863f",
"assets/assets/images/ic_side_contactus.png": "0728b57603ea9221fbb5d68dfd188e28",
"assets/assets/images/ic_side_logout.png": "76ca7d0c801988c1ff92564021b88069",
"assets/assets/images/ic_side_search_property.png": "27156b15587d1917c2dbcbfca5a4a848",
"assets/assets/images/ic_side_termsprivacy.png": "be3c551b73eb2976f66b11bb11b7634b",
"assets/assets/images/ic_splash_back.png": "e0559b3e6a43f3f166822752ba54ae3c",
"assets/assets/images/ic_splash_web_back.png": "d67b5f82e700b1289bade5f6cb5a2876",
"assets/assets/images/ic_terms.png": "34cbc670e809d2c85372a275cc995b1f",
"assets/assets/images/ic_title-bg.png": "dedd5f4f91b0f09f6d6d7494f7c58004",
"assets/assets/images/ic_whatsapp-blue-web.png": "4068ba2dec8bb879290a40157de28872",
"assets/assets/images/ic_whatsapp-green-web.png": "78153d9f1368351ce8a2c71f20aa7ffc",
"assets/assets/images/ic_whatsapp_blue.png": "fb5fd0683f429b9b55ff38085554cfe0",
"assets/assets/images/ic_whatsapp_green.png": "33235e61927587ec6e40309e431a5009",
"assets/assets/images/ic_whatsapp_share.png": "d9ef97d1700005a11136755df9ee3fb2",
"assets/assets/images/ic_white_logo.png": "6ee7f6f6a1a6aac87c4a86ebbc26a073",
"assets/assets/images/ic_youtube.png": "8744480805a183fe82fdd277fa39bc38",
"assets/assets/images/img_intro_back.png": "1a16325ba7200dbfa8072035b45555f2",
"assets/assets/images/img_intro_one.png": "47a1ad8f356c3ad3a0094a4d16021595",
"assets/assets/images/img_intro_two.png": "e699abd6d778601059f4ae56af492442",
"assets/assets/images/left-arrow.png": "0f475aa596a7aa042b214152af576612",
"assets/assets/images/no-internet.png": "f44b53df5fcb782da3f6df648c84071f",
"assets/assets/images/right-arrow.png": "bbb51464d4b9eca34364c0322acee8bd",
"assets/assets/images/web-banner.png": "87b24c93ff154d534022237be711b65a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "20440e53f34c09a80b7907c2ef8aadf3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "44af6f63ec1078dfa2cc9ff063c5726c",
"/": "44af6f63ec1078dfa2cc9ff063c5726c",
"main.dart.js": "b516aab58c171a93cfaaeb669953b775",
"manifest.json": "f100122cfff3580d7b4022b5bca534fa",
"version.json": "88d1b939270a4f9c2245a25f66bc5878"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

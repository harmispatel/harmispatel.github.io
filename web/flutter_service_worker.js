'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a427e7f15d65c4cead97e84f0505208b",
"index.html": "52b58f2fbccc5a7a8fad2f1f0d4e5f2d",
"/": "52b58f2fbccc5a7a8fad2f1f0d4e5f2d",
"firebase-messaging-sw.js": "5af4ccb2ccfd33575d124ed6d6e292aa",
"main.dart.js": "4f8fc689af9726a7ee8c9f35c1a2e4a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d5ba4da40ff5ef251997492137d1547a",
"assets/AssetManifest.json": "672306ecc45ad8eca073e41554749ba1",
"assets/NOTICES": "0302b95a346475620f00700025c5b759",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/img/ic_cart_selected.png": "8ef5494b5a3797dc1279bdfe2c0a253a",
"assets/assets/img/ic_truck.png": "ff35a6dd2ed7b64cf37867e521dd4d80",
"assets/assets/img/ic_cart_unselected.png": "2effbde7903543a1998d9effe6f7ec39",
"assets/assets/img/ic_more_buy_again.png": "f00564f2a081053fd90f5e281698f280",
"assets/assets/img/ic_radio_unselect.png": "1d83c781b9fc1a0dfe9367a15723bd77",
"assets/assets/img/ic_more_privacy_policy.png": "fa1fb44a2dbf22fc84d8d5d7d9fbe25f",
"assets/assets/img/ic_more_logout.png": "70fd2ea151e2ba3c5d79e039dabd3df8",
"assets/assets/img/ic_more_unselected.png": "7cac9a906558f348cd742d5574215f0a",
"assets/assets/img/ic_more_contact_us.png": "3247a83bacc12abb9bda5fd511b94776",
"assets/assets/img/ic_home_header.png": "4534571b49ad671c275e9a784825049b",
"assets/assets/img/ic_profile.png": "8ce2033e7af8c0a715192e7d78b099d9",
"assets/assets/img/ic_home_selected.png": "38990d6cb99b26f9b3d77dad997adb80",
"assets/assets/img/ic_arrow_back.png": "30a52bc298be5a97b837ccae4a14ee67",
"assets/assets/img/ic_header_logo.png": "91698eb3265b59990f9c7dc95a8ce1ca",
"assets/assets/img/ic_category_unselected.png": "b03a01b6cb34e8d20f6592e981e22df3",
"assets/assets/img/ic_deals_unselected.png": "3c225e70700b0481e98e196137a10d63",
"assets/assets/img/ic_radio_select.png": "c693a08224a3ebd0e937bfa8795ddfac",
"assets/assets/img/ic_category_selected.png": "83807727c7ef91ed7f68f7fd454c8729",
"assets/assets/img/ic_location_white.png": "c3f258b29a30bbf6c5d389ff96b7d671",
"assets/assets/img/ic_search.png": "604459e0c0a03ad61960b456da79e609",
"assets/assets/img/ic_more_shopping_list.png": "90eba111bb687f349a5bca71b4174dd2",
"assets/assets/img/ic_scan.png": "b37e6b1a85c425bd18648cb7ebd9c9b1",
"assets/assets/img/ic_deals_selected.png": "3c225e70700b0481e98e196137a10d63",
"assets/assets/img/ic_home_unselected.png": "4cb8346fc0772544b4ce340d9bae4541",
"assets/assets/img/ic_more_terms_condition.png": "6ec100898ab3bf16471e782206409213",
"assets/assets/img/ic_logo.png": "971fd06f13036c33429577e74f042c2b",
"assets/assets/img/ic_more_receipt.png": "e93b97ff7220f03344fded196df87926",
"assets/assets/img/ic_more_orders.png": "f25212260dd83d05fa81f60156fef1a6",
"assets/assets/img/ic_more_address.png": "a0578204273b1cbf7096cf8efa949f59",
"assets/assets/img/ic_more_selected.png": "7383af24d2c49f23311f52cfbdad17db",
"assets/assets/img/ic_more_about_us.png": "09e1605d96316cab9a95f976f86915a1"
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

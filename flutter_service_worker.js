'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "028eca5a80058498cca364fbf045964a",
"version.json": "d725723ad34fa583fee029f8ad46721f",
"aabb1.png": "61e350c1741e7b4450756d9affb0be0a",
"index.html": "cae23649102781f0b4cf24a10197704b",
"/": "cae23649102781f0b4cf24a10197704b",
"main.dart.js": "526d6414b8d157906287dd7237b97eaf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"%E5%BD%92%E6%A1%A3.zip": "a1097948d07809f8ca4fd43a34a69b6d",
"icons/Icon-192.png": "ea1bc6b78746610654a0e8ecb1614a92",
"icons/Icon-maskable-192.png": "ea1bc6b78746610654a0e8ecb1614a92",
"icons/Icon-maskable-512.png": "d57c43e5271b60c154006f6ab590c067",
"icons/Icon-512.png": "d57c43e5271b60c154006f6ab590c067",
"manifest.json": "e5b66390fc5042694dcb799077fb314d",
"assets/AssetManifest.json": "6f7a9e419bd5e607eab37872a5273373",
"assets/NOTICES": "f25672f7ffd79c7a01a5bd667813be36",
"assets/FontManifest.json": "134a3876c2ade816e49c828af141bd40",
"assets/AssetManifest.bin.json": "eeeaa34efcceae404132b0aeec501b2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ead9ba0f575cb5d75c237b527e9e30be",
"assets/fonts/MaterialIcons-Regular.otf": "729d8d684e0beb1297dd769bbfbb1820",
"assets/assets/images/leaderboard_first.webp": "1d30cc2dea6db33edc101eeb9176d9a3",
"assets/assets/images/hint_blue.webp": "854d2734047cdf8289566ddf01dce225",
"assets/assets/images/loading_checkbox.webp": "a99e42904b010c91e77c8301301cb012",
"assets/assets/images/challenge_blue.webp": "361262cc40cc20d077c4e4f688f7e27b",
"assets/assets/images/loading_input_bg.webp": "f95e6798e15beb5c87730342c6b84859",
"assets/assets/images/level_how_to_play_quan2.webp": "88ed9f371146d1af06881c8239563a7e",
"assets/assets/images/level_vs.webp": "cb2134be34ae4b8fba0b1552901bc95a",
"assets/assets/images/leaderboard_bottom_bg.webp": "0195cac31a150726e29725774887c789",
"assets/assets/images/leaderboard_list_bg.webp": "fd5669b595e39b542ff3a82e7fe55c4c",
"assets/assets/images/personal_bg.webp": "67bcc470b08b07734c8e8c7663cf2f55",
"assets/assets/images/level_how_to_play_bg.webp": "e884a0b475d24f349f1b483d69d61152",
"assets/assets/images/daily_hui_di2.webp": "6caa193ddb11c2594a7cd81e5e2475fd",
"assets/assets/images/daily_hui_di3.webp": "ea00bfee6571b0477a34bb9a461d8514",
"assets/assets/images/game_level_kuang_bt.webp": "46e62d78e2b83244c757d8a1cbe12b1b",
"assets/assets/images/jian_tou.png": "a010168a1ecc46c8e350cd323f1c0fb8",
"assets/assets/images/loading_tip_bg.webp": "9665c4e13f7207242f5a2f11de7dd145",
"assets/assets/images/leaderboard_third.webp": "f59f0f6a0da879ed3f0af7bf8990366b",
"assets/assets/images/home_daily.webp": "eaa3cec9c6a55db7faf488f54d1b2a60",
"assets/assets/images/daily_popup.webp": "2e11a3c8a74ef51ae93c7308af942333",
"assets/assets/images/home_head.webp": "a50553acfb0840cc9b6c2b27ef640adf",
"assets/assets/images/level_how_to_play_quan3.webp": "6ce4bb9c083117bce03d898b5628d374",
"assets/assets/images/icon-foreground-1024x1024.webp": "1cabbd0ba7f27dedcfea6f089b1736a2",
"assets/assets/images/setting_switch_open_bg.webp": "830944024b4b8b41dccb471a51020cf5",
"assets/assets/images/download_bg.webp": "24723c43227cc00d51d29111434bdd97",
"assets/assets/images/daily_dui_hao.webp": "276e826cd0381ad39955952431333aac",
"assets/assets/images/org.webp": "6d37111f9fc50fb017ee91bb35ad654c",
"assets/assets/images/level_share.webp": "1bd2a3cdaf94f1b02e999f1fbd06dcac",
"assets/assets/images/level_how_to_play_icon.webp": "1d54ae2a76940245cf05a6ef48801edf",
"assets/assets/images/level_how_to_play_bt.webp": "0f15a2698ab83727380d3f372bba620c",
"assets/assets/images/input_close.webp": "8844a36eb85a6d172b0005a2d1950ae1",
"assets/assets/images/game_level_reset.webp": "8df33b7790301a80c5acbb059b82df2d",
"assets/assets/images/loading_button_blue_bg.webp": "827e1bcf20ba5bc4e747179c4a4e8fd0",
"assets/assets/images/leaderboard_select.webp": "ce1d54fb81ee8bac69b0e8a483287763",
"assets/assets/images/bgtest.webp": "af24392236ffca4d11b349e351ef2072",
"assets/assets/images/download_android.webp": "6a0ce5ccec118543846f556f49263946",
"assets/assets/images/level_huang_guan.webp": "a23111803a4cc727d1d5427c6a91137e",
"assets/assets/images/icon-1024x1024.webp": "52958dff95ca96070bd995d4557eb200",
"assets/assets/images/hint_orange.webp": "fb368eda39521fcf9039092f1bb66eaa",
"assets/assets/images/loading_center.webp": "4bd31488dfebc43decaec45c9f9d7d12",
"assets/assets/images/how_to_play_bg.webp": "8b7064568c8307eebfcdd2bb409fce2e",
"assets/assets/images/guide_kuang_bg.webp": "743e302a95d5ce423a7632b9d6683ad1",
"assets/assets/images/board_green.webp": "e3916447a97d7b525cf072c0ff165788",
"assets/assets/images/daily_hui_di_small1.webp": "4369b7ff47d07acb4fb7aab2f2a6252f",
"assets/assets/images/daily_blue_bg.webp": "6570065715ad04923fa93127b4c8d2cf",
"assets/assets/images/daily_orage_bg.webp": "914b6872ccb18d695a0b96e7945d76b5",
"assets/assets/images/download_ios.webp": "ea383d016071779bca3805d6469599ee",
"assets/assets/images/challenge_orange.webp": "430c88800b10fec2695419dd5b5769ed",
"assets/assets/images/download_icon.webp": "98f32b5d551537a91e767f86ab85acd3",
"assets/assets/images/home_setting.webp": "bbe7e02b833ed4e7824d7d864790034b",
"assets/assets/images/leaderboard_top_bg.webp": "2620658f74e8687278d09af79dc593e0",
"assets/assets/images/home_bottom_kuang.webp": "88fc96a88a52b90479b7d17cbfcc1d95",
"assets/assets/images/level_how_to_play_guai.webp": "ae980451e6fdd2f7380d689964dee383",
"assets/assets/images/icon-background-1024x1024.webp": "79428c873a000592b8a47fceca587183",
"assets/assets/images/daily_bg.webp": "a7718f0d3b1b79dae02aa6c029b99624",
"assets/assets/images/setting_switch_close_bg.webp": "fc08a6639d0937dd09970350b2e49ba3",
"assets/assets/images/bgtestheng.webp": "d8636c3e8dc3d28a9f26e7cf0781d41a",
"assets/assets/images/leaderboard_xian.png": "ccf4310a8bf880bede352ee01d7401b6",
"assets/assets/images/cloud-2044822.webp": "8e721fc17731919751d64d1c14635b8b",
"assets/assets/images/board_white.webp": "d8b2ea2b426805b0e841d728e851acca",
"assets/assets/images/setting_gan_tan.webp": "03d5c5b6059a5ff9925268b0eb8b4bab",
"assets/assets/images/guide_san_jiao.webp": "203a1e63b72219b83bde209e3864eecc",
"assets/assets/images/icon-borderless-1024x1024.webp": "baa4d20dcf2b77c52a8f83d872a524bd",
"assets/assets/images/level_bg.webp": "1f56600d1ac5061b9e919b0a8c14f4ff",
"assets/assets/images/question.webp": "9ba11a7e1b31e6d5378db6a948937f6c",
"assets/assets/images/daily_hui_di_small2.webp": "24077ef622207fa5936bc8648da0cf4d",
"assets/assets/images/send.webp": "77eb36ddc4b396bb28e1cffaee5c299e",
"assets/assets/images/hint_gray.webp": "dcd364649fe5872a69a047e25b6bd77f",
"assets/assets/images/daily_hui_di_small3.webp": "6165f73ac6943765b8fcd4526f01fafa",
"assets/assets/images/close.webp": "6530e10267ec4b4a6a686ed2aa2dc032",
"assets/assets/images/level_head_my.webp": "d6f06e0907ac346b889e132a275c8d45",
"assets/assets/images/level_hui_dian.webp": "be2e0a5b37ea7ac44056a479f1d5ee32",
"assets/assets/images/loading_intput_password_zheng_yan.webp": "89889879d56ef87f9f390c5d1efdef18",
"assets/assets/images/setting_wen.webp": "15e8f661a05c663a49920525459ccb61",
"assets/assets/images/leaderboard_second.webp": "f5477490d29457efcfc70383672d1dcd",
"assets/assets/images/loading_input_password_yan.webp": "b2f1e58042950c9481f2887bccd60433",
"assets/assets/images/home_leaderboard.webp": "9ca33b0f26de25a6b36baf782865cab1",
"assets/assets/images/loading_check_dui.webp": "b1c9f93ab6bbe665ca2233c0583de677",
"assets/assets/images/dialog_blue.webp": "01bc5b1d5ddaccf4cc7fa74d47471339",
"assets/assets/images/loading_tip_icon.webp": "59d593883781380129247da391e2cd68",
"assets/assets/images/leaderboard_icon.webp": "9ca33b0f26de25a6b36baf782865cab1",
"assets/assets/images/level_how_to_play_quan1kuang.webp": "1324d3d4d4db00c1bbd2e0fc5f58b688",
"assets/assets/images/home_challenge.webp": "abf0da6e7c95e2e13cf9b31c14965423",
"assets/assets/images/dialog_bg.webp": "fcdd78a5c2070fec845e5e9dba1b8362",
"assets/assets/images/game_level_green_bt.webp": "109c7f94ea9eae01f7edcded867b77f5",
"assets/assets/images/setting.webp": "a4b9a64d92c569ca60c06702ca0236b5",
"assets/assets/images/board_yellow.webp": "9fa3367872fd323945cb25472eab1d9f",
"assets/assets/images/level_right.webp": "e3eaec442823c0764a3767e955ac73a6",
"assets/assets/images/daily_hui_di1.webp": "3bfbe8b751636d502153ca8c15e84f7a",
"assets/assets/images/howtoplaytest.webp": "91e41fae1664403ba3f5d0db0e7139f0",
"assets/assets/images/loading_you_ke.webp": "64bd709568157b97fe1fa272ae907923",
"assets/assets/images/level_how_to_play_jiang_bei.webp": "d720402b1f2746d2ab398cda3048383e",
"assets/assets/images/board_gray.webp": "82db4df47a7d6df99f5d7ffd2e9eaa6d",
"assets/assets/images/challenge_icon.webp": "b87bdf18ea8b47b4c68e4ea717239b6c",
"assets/assets/images/level_head_ai.webp": "612604d62bb34a7531ff501b358da335",
"assets/assets/images/level_how_to_play_quan1.webp": "60883f6a8a6f7f418c91e0db73bcdffd",
"assets/assets/images/home_logo.webp": "98f32b5d551537a91e767f86ab85acd3",
"assets/assets/audio/button.mp3": "b54bb89a1840dbaeb74af913cfd784bc",
"assets/assets/audio/bgm.mp3": "09b0887452f0ca68d79dcce46dbc1457",
"assets/assets/dictionary/ru.json": "39e71fcdab498a7b7a822237655ca262",
"assets/assets/dictionary/en.json": "2b2c5bcda77c753aee7276a01b797098",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

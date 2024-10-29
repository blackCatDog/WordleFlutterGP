'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "59682e0d545faf91bf321f9831bb952e",
"version.json": "d725723ad34fa583fee029f8ad46721f",
"index.html": "cae23649102781f0b4cf24a10197704b",
"/": "cae23649102781f0b4cf24a10197704b",
"main.dart.js": "6d25f6519fe439684320c7f7a0b85aa3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e5b66390fc5042694dcb799077fb314d",
"assets/AssetManifest.json": "bafe9b8c2ab1c4e267be0fa41472d01a",
"assets/NOTICES": "a6f5bd51b649f87b580995178ac67077",
"assets/FontManifest.json": "134a3876c2ade816e49c828af141bd40",
"assets/AssetManifest.bin.json": "83221d6ea6e55a7cf478cdc811db61ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e0cc0a6720109f4235f638fe755c03cd",
"assets/fonts/MaterialIcons-Regular.otf": "208ddc3f4fe4cd9319973f8fdfb74873",
"assets/assets/images/icon-background-1024x1024.png": "0fef144003e19e83e9e5e88f8cffa4bb",
"assets/assets/images/level_how_to_play_bt.png": "f4e4c686f133668ecad4e63d6584f251",
"assets/assets/images/how_to_play_bg.png": "f35e8ea356a654aac47b3fe2f4f6933a",
"assets/assets/images/icon-foreground-1024x1024.png": "f7b289b77e8e95df39348c9136db0e05",
"assets/assets/images/board_white.png": "a9a6da587eed3a33c9c952f292cb7b3b",
"assets/assets/images/loading_check_dui.png": "51c238e2a501a186e8031f5774adb908",
"assets/assets/images/guide_kuang_bg.png": "9e6f9feb523a3f1315397351a2c234fb",
"assets/assets/images/daily_dui_hao.png": "cf4fb4feb873e57dd56a5a8f576443a2",
"assets/assets/images/daily_hui_di_small2.png": "f8e32f13a68d36bad211a7a847ba8704",
"assets/assets/images/daily_hui_di_small3.png": "1b7005f460df80e1aae30ac13db31540",
"assets/assets/images/level_how_to_play_bg.png": "9e5c65112b5ea69c94b38a027987943f",
"assets/assets/images/loading_tip_bg.png": "b3b1733be87bef685b841b636b8291b8",
"assets/assets/images/setting_switch_close_bg.png": "c54ff15dd765e36e1922a7d77cc4de25",
"assets/assets/images/guide_select_dian.png": "3acc7da82050263e94475965266d96f0",
"assets/assets/images/board_gray.png": "14992e5862d36d2bfb915adc75009248",
"assets/assets/images/daily_hui_di_small1.png": "532320331e156618006e03a76698439f",
"assets/assets/images/daily_orage_bg.png": "b63bc9dd37ab62f743a7795304acf730",
"assets/assets/images/level_how_to_play_quan1kuang.png": "8a5bf9e8ef06575f75def16d9301a601",
"assets/assets/images/question.png": "582f2bc23314553fcb6f83c256e44b4b",
"assets/assets/images/level_head_my.png": "0a229086275b2127802c5e7462924c2c",
"assets/assets/images/daily_bg.png": "49bf87a1ed3345b16654e0fe1990ec8c",
"assets/assets/images/level_huang_guan.png": "f0d827f03dd429499dd27f81d78eecf0",
"assets/assets/images/board_green.png": "c0217788d951b241382685391e9fd0c0",
"assets/assets/images/setting_wen.png": "47f45f0bc28287915dd1e51926ed44e1",
"assets/assets/images/dialog_blue.svg": "98c62d927ff430fa21782af32b074598",
"assets/assets/images/guide_san_jiao.png": "fa1467ec9a0a078171e08276b7004928",
"assets/assets/images/level_vs.png": "a693846d7d4520badb56ba55649ce7f2",
"assets/assets/images/game_level_green_bt.png": "9bc81ec38609b902359d7b86a2b09152",
"assets/assets/images/hint_orange.png": "44a5be060a6c4573241e07ccff4f41c1",
"assets/assets/images/org.svg": "30ecfb82fd8bef385ac562e4e443fe82",
"assets/assets/images/icon-1024x1024.png": "873782e3099f12760af189307f031409",
"assets/assets/images/level_hui_dian.png": "4c738be72880e7e21097b79e2d60d9f3",
"assets/assets/images/guide_shou.png": "836818624287e75e993196c341098b05",
"assets/assets/images/level_bg.png": "2f8bec6a50fe60287a50b799d7c6be0b",
"assets/assets/images/daily_popup.png": "280e8ae2545f78f5696011674abd92d0",
"assets/assets/images/guide_xian_duan.png": "d85f56e978bdbc4edbe9d79059eec71a",
"assets/assets/images/level_head_ai.png": "f05a0fc021b2c497ec4f4073d2e76636",
"assets/assets/images/setting_switch_open_bg.png": "ca874b44c2da9021f59447b93abffeb5",
"assets/assets/images/loading_input_bg.png": "170dd2f2a8c827dcb7669e774d779c11",
"assets/assets/images/cloud-2044822.svg": "2e0d6136a4b6702ad4de464c3f6a7e31",
"assets/assets/images/dialog_bg.svg": "97161856a420af0e4ceb082a52a99b04",
"assets/assets/images/hint_gray.png": "0d6edc4dd61edbd2cb7f1b1fbacb7343",
"assets/assets/images/howtoplaytest.png": "268ff2536509925f2c1d9c0454841b06",
"assets/assets/images/level_how_to_play_quan1.png": "eb8c6d16db1c9428be15cb440b7a8933",
"assets/assets/images/board_yellow.png": "3e5c259287c63f8e06c2cfdfa730b132",
"assets/assets/images/level_share.png": "b246f579d97f8896a6abb851bbe1b704",
"assets/assets/images/loading_checkbox.png": "ce1a878f60012303f1659ff398ecc6cd",
"assets/assets/images/level_how_to_play_quan2.png": "837e0d4b0e412b337daef6f729ed9269",
"assets/assets/images/loading_you_ke.png": "769898b0dc4b9d33174facde4db40aad",
"assets/assets/images/level_how_to_play_guai.png": "1d8a29f12876b15d8ebda16e57e055df",
"assets/assets/images/home_xian.png": "fe22334c76784ff1f6720599b80f70bf",
"assets/assets/images/bgtestheng.png": "98f24ced54260cbaa81515210a72b981",
"assets/assets/images/level_how_to_play_quan3.png": "dd3ef7167f1f7d33690e4861e69fa9d0",
"assets/assets/images/home_logo.png": "8029f9cf539b199c837ea18dc1e1ac04",
"assets/assets/images/loading_tip_icon.png": "f1810ea0264cc4a4af2dd05d833effcd",
"assets/assets/images/icon-borderless-1024x1024.png": "2710edda50e719696e9536ee3f18baa1",
"assets/assets/images/daily_hui_di1.png": "8ad2b930f8e3c3350ef15a3982cab805",
"assets/assets/images/daily_hui_di3.png": "f325b271c89c0bd2023aade0f69f5189",
"assets/assets/images/loading_intput_password_zheng_yan.png": "5648e45d737c480ecbd6391851329466",
"assets/assets/images/game_level_kuang_bt.png": "83ba61d90c6ac21d38024def25ac46e3",
"assets/assets/images/home_challenge.png": "16e785980f7b4357dbb6ab6f532f3170",
"assets/assets/images/loading_input_password_yan.png": "55d1f746d0fdc8d66273c3490b353643",
"assets/assets/images/home_leaderboard.png": "50f06e6e1df51e7a0491a8f8998521eb",
"assets/assets/images/level_how_to_play_icon.png": "dccdc83c69cff3ad33ce899afd60d988",
"assets/assets/images/home_bottom_kuang.png": "eef7f17092dc7aacd6e9e64463295f72",
"assets/assets/images/home_daily.png": "ac6e1c68b9508d8a155f55929614ad79",
"assets/assets/images/daily_blue_bg.png": "2b70669e3b606bc5b3ebb236d43aa250",
"assets/assets/images/daily_hui_di2.png": "1b9963b7b15cb095dcf90812cfc775d8",
"assets/assets/images/setting_gan_tan.png": "4aa5e5c42a33f0533d7c86cbf789c02b",
"assets/assets/images/level_how_to_play_jiang_bei.png": "7167b8793b13e3781c62705f660bea20",
"assets/assets/images/guide_xian_chang.png": "3e720a6c91260ba794662a813655e4a1",
"assets/assets/images/hint_blue.png": "1e2a49d95253e142ef9c1e8b143c9c7f",
"assets/assets/images/send.png": "8b73a9292fc43aacff06054f45f6da18",
"assets/assets/images/level_right.png": "e72b678765c29617164b15e0f3beb2c3",
"assets/assets/images/setting.png": "6a5141d2bf184cdbbaf9f37eb9ff2fd4",
"assets/assets/images/home_setting.png": "aa6c234c19646f5c5186de9e8e801779",
"assets/assets/images/loading_button_blue_bg.png": "8971e65d668d32a5cacc863e5986e02c",
"assets/assets/images/input_close.png": "2caa46ed833640ac578b2e9445ee55f2",
"assets/assets/images/loading_center.png": "3ba69cef4923ce8aa1de17fb576a167c",
"assets/assets/images/game_level_reset.png": "431d2575bdd2fdee31c19566565d814e",
"assets/assets/images/bgtest.png": "2b701eadf4928cda97bf0a18da8f3ea9",
"assets/assets/images/close.png": "a560d7d4f93ade4f016aacfd69840769",
"assets/assets/images/home_head.png": "5285409db54a8b0d7c3afc7ab3707f61",
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

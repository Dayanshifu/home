if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
  }

const CACHE_NAME = 'littleyan';

const URLS = [                // Add URL you want to cache in this list.
  // '/',                     // If you have separate JS/CSS files, add path to those files here
  '/index.html',,
  '/404.html',
  '/js/main.js',
  '/js/main.js',
  '/css/all.css',
  '/js/changemod.js',
  '/js/hitokoto.js',
  '/js/search.js',
  '/js/sou.js',
  '/js/time.js',
  '/js/weather.js',
  '/js/zkdjs.js',
  '/img/baidu.png',
  '/img/bing.ico',
  '/img/favicon.ico',
  '/img/google.png',
  '/img/sou.svg',
  '/img/bg2k.jpg',
  '/img/bg4k.jpg',
  '/img/bg540p.jpg',
  '/img/bg720p.jpg',
  '/img/bg900p.jpg',
  '/img/bg1080p.jpg',
  '/img/icon16x.png',
  '/img/icon48x.png',
  '/img/icon57x.png',
  '/img/icon72x.png',
  '/img/icon96x.png',

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS);
    }).then(_ => {
      return self.skipWaiting();
    });
  );
});

// Respond with cached resources
self.addEventListener('fetch', function (e) {
    e.respondWith(
      caches.match(e.request).then(function (request) {
        if (request) {
          // 如果缓存存在，直接返回缓存
          console.log('responding with cache : ' + e.request.url);
          return request;
        } else {
          // 缓存不存在，发起请求获取资源返回
          console.log('file is not cached, fetching : ' + e.request.url);
          return fetch(e.request);
        }
      });
    );
  });
  
  // Delete outdated caches
self.addEventListener('activate', function (e) {
    e.waitUntil(
      caches.keys().then(function (keyList) {
        // `keyList` contains all cache names under your username.github.io
        // filter out ones that has this app prefix to create white list
        // 以 app_prefix 开头这里会返回0，会被过滤掉
        // 所以 cacheWhitelist 只包含当前脚本最新的key或者其他脚本添加的 cache
        var cacheWhitelist = keyList.filter(function (key) {
          return key.indexOf(APP_PREFIX);
        });
        // add current cache name to white list
        cacheWhitelist.push(CACHE_NAME);
  
        return Promise.all(keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log('deleting cache : ' + keyList[i] )
            return caches.delete(keyList[i])
          }
        }));
      }).then(function () {
        // 更新客户端
        clients.claim();
      })
    );
  });
  
  const prefix = '_site';

module.exports = {
  staticFileGlobs: [
    '!_site/assets/**/**.*',
    '!_site/service-worker.js',
    prefix + '/**/**.html',     // 所有页面，文章页面的html（必须包含）
    prefix + '/js/*.js',        // 所有 js 文件
    prefix + '/css/*.css',      // 所有 css 文件
    prefix + '/images/**.*', // 个人用于存放博客相关图片的文件夹，正常情况是没有的
    prefix + '/*.json',
  ],
  stripPrefix: prefix
}
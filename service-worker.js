"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mozan/index.html","02a4557ad70c12e1afdd5271253c2d71"],["/mozan/static/css/main.a903e99f.css","b19018f69b8def07dcdda5c3e1a3b52d"],["/mozan/static/js/main.e729be40.js","7869801970d46b10ef2933ab47cfecc0"],["/mozan/static/media/1.3d600083.jpg","3d600083f5e28159235f7ad44631293f"],["/mozan/static/media/2.ab8fe9d5.jpg","ab8fe9d5cc8dafd381bf7fcff6adc76b"],["/mozan/static/media/3.3bf64a53.jpg","3bf64a5309367729379615ebbe2f802c"],["/mozan/static/media/BG.7cb23503.jpg","7cb235037b55a670130e1de9281863b4"],["/mozan/static/media/bigpic_03.6295510f.jpg","6295510f7ea76b35a7ff9513eaa07d8a"],["/mozan/static/media/iconfont.09a5666a.ttf","09a5666a98d0af4c662b86cf8592ab91"],["/mozan/static/media/iconfont.a28b7823.svg","a28b78238ee08ab79225c04e6d1767e1"],["/mozan/static/media/iconfont.deb18e6b.eot","deb18e6b32d98b4cd9686bc317c40ce5"],["/mozan/static/media/iconfont.e5573a17.woff","e5573a17a42be32213de839600725d59"],["/mozan/static/media/menu.ee1c43ae.svg","ee1c43ae5e37a897e45ea799e186b51e"],["/mozan/static/media/shop.21b3d8c1.svg","21b3d8c16dfabc8a977bcb7a65551abf"],["/mozan/static/media/sousuo.a15a4fd3.svg","a15a4fd37112d019fc50b6c0ea510c3a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/mozan/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
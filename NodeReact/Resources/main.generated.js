module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/interop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/interop.js":
/*!******************************!*\
  !*** ./Resources/interop.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("﻿var workerpool = __webpack_require__(/*! workerpool */ \"./node_modules/workerpool/dist/workerpool.min.js\");\r\n\r\nvar enginePool = null;\r\n\r\nfunction execCode(requireList, code) {\r\n    var xs = requireList.map(require);\r\n\r\n    var result = eval(code);\r\n\r\n    return result;\r\n}\r\n\r\nmodule.exports = {\r\n    evalCode: function (callback, requireList, code) {\r\n\r\n        try {\r\n            var result = execCode(requireList, code);\r\n            callback(null, result);\r\n        } catch (err) {\r\n            callback(err, null);\r\n        }\r\n\r\n\r\n        //try {\r\n        //    if (enginePool === null) {\r\n        //        enginePool = workerpool.pool('./interop.js');\r\n        //    }\r\n\r\n        //    enginePool.exec('execCode', [requireList, code])\r\n        //        .then(function (result) {\r\n        //            callback(null /* errors */, result);\r\n        //        })\r\n        //        .catch(function (err) {\r\n        //            callback(err, null);\r\n        //        });\r\n        //}\r\n        //catch (err) {\r\n        //    callback(err, null);\r\n        //}\r\n    }\r\n};\n\n//# sourceURL=webpack:///./Resources/interop.js?");

/***/ }),

/***/ "./node_modules/workerpool/dist/workerpool.min.js":
/*!********************************************************!*\
  !*** ./node_modules/workerpool/dist/workerpool.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {/**\n * workerpool.js\n * https://github.com/josdejong/workerpool\n *\n * Offload tasks to a pool of workers on node.js and in the browser.\n *\n * @version 5.0.2\n * @date    2019-11-06\n *\n * @license\n * Copyright (C) 2014-2019 Jos de Jong <wjosdejong@gmail.com>\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not\n * use this file except in compliance with the License. You may obtain a copy\n * of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT\n * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n * License for the specific language governing permissions and limitations under\n * the License.\n */\n!function(e,r){ true?module.exports=r():undefined}(\"undefined\"!=typeof self?self:this,function(){return d=[function(e,r,t){function o(e){return void 0!==e&&null!=e.versions&&null!=e.versions.node}var n=t(2);e.exports.isNode=o,e.exports.platform=o(process)?\"node\":\"browser\",e.exports.isMainThread=!process.connected,e.exports.cpus=\"browser\"===e.exports.platform?self.navigator.hardwareConcurrency:n(\"os\").cpus().length},function(e,r,t){\"use strict\";function a(e,t){var o=this;if(!(this instanceof a))throw new SyntaxError(\"Constructor must be called with the new operator\");if(\"function\"!=typeof e)throw new SyntaxError(\"Function parameter handler(resolve, reject) missing\");var n=[],i=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var s=function(e,r){n.push(e),i.push(r)};this.then=function(n,i){return new a(function(e,r){var t=n?c(n,e,r):e,o=i?c(i,e,r):r;s(t,o)},o)};var r=function(t){return o.resolved=!0,o.rejected=!1,o.pending=!1,n.forEach(function(e){e(t)}),s=function(e,r){e(t)},r=u=function(){},o},u=function(t){return o.resolved=!1,o.rejected=!0,o.pending=!1,i.forEach(function(e){e(t)}),s=function(e,r){r(t)},r=u=function(){},o};this.cancel=function(){return t?t.cancel():u(new f),o},this.timeout=function(e){if(t)t.timeout(e);else{var r=setTimeout(function(){u(new p(\"Promise timed out after \"+e+\" ms\"))},e);o.always(function(){clearTimeout(r)})}return o},e(function(e){r(e)},function(e){u(e)})}function c(t,o,n){return function(e){try{var r=t(e);r&&\"function\"==typeof r.then&&\"function\"==typeof r.catch?r.then(o,n):o(r)}catch(e){n(e)}}}function f(e){this.message=e||\"promise cancelled\",this.stack=(new Error).stack}function p(e){this.message=e||\"timeout exceeded\",this.stack=(new Error).stack}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.always=function(e){return this.then(e,e)},a.all=function(e){return new a(function(t,o){var n=e.length,i=[];n?e.forEach(function(e,r){e.then(function(e){i[r]=e,0==--n&&t(i)},function(e){n=0,o(e)})}):t(i)})},a.defer=function(){var t={};return t.promise=new a(function(e,r){t.resolve=e,t.reject=r}),t},(f.prototype=new Error).constructor=Error,f.prototype.name=\"CancellationError\",a.CancellationError=f,(p.prototype=new Error).constructor=Error,p.prototype.name=\"TimeoutError\",a.TimeoutError=p,e.exports=a},function(module,exports){var requireFoolWebpack=eval(\"typeof require !== 'undefined' ? require : function (module) { throw new Error('Module \\\" + module + \\\" not found.') }\");module.exports=requireFoolWebpack},function(e,r,t){var o=t(0);r.pool=function(e,r){return new(t(4))(e,r)},r.worker=function(e){var r=t(8);r.add(e)},r.Promise=t(1),r.platform=o.platform,r.isMainThread=o.isMainThread,r.cpus=o.cpus},function(e,r,t){var s=t(1),o=t(5),n=t(0),i=new(t(7));function u(e,r){\"string\"==typeof e?this.script=e||null:(this.script=null,r=e),this.workers=[],this.tasks=[],(r=r||{}).nodeWorker&&console.warn('WARNING: Option \"nodeWorker\" is deprecated since workerpool@5.0.0. Please use \"workerType\" instead.'),this.forkArgs=r.forkArgs||[],this.forkOpts=r.forkOpts||{},this.debugPortStart=r.debugPortStart||43210,this.nodeWorker=r.nodeWorker,this.workerType=r.workerType||r.nodeWorker||\"auto\",this.maxQueueSize=r.maxQueueSize||1/0,r&&\"maxWorkers\"in r?(function(e){if(!a(e)||!c(e)||e<1)throw new TypeError(\"Option maxWorkers must be an integer number >= 1\")}(r.maxWorkers),this.maxWorkers=r.maxWorkers):this.maxWorkers=Math.max((n.cpus||4)-1,1),r&&\"minWorkers\"in r&&(\"max\"===r.minWorkers?this.minWorkers=this.maxWorkers:(function(e){if(!a(e)||!c(e)||e<0)throw new TypeError(\"Option minWorkers must be an integer number >= 0\")}(r.minWorkers),this.minWorkers=r.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),\"thread\"===this.workerType&&o.ensureWorkerThreads()}function a(e){return\"number\"==typeof e}function c(e){return Math.round(e)==e}u.prototype.exec=function(e,r){if(r&&!Array.isArray(r))throw new TypeError('Array expected as argument \"params\"');if(\"string\"==typeof e){var t=s.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error(\"Max queue size of \"+this.maxQueueSize+\" reached\");var o=this.tasks,n={method:e,params:r,resolver:t,timeout:null};o.push(n);var i=t.promise.timeout;return t.promise.timeout=function(e){return-1!==o.indexOf(n)?(n.timeout=e,t.promise):i.call(t.promise,e)},this._next(),t.promise}if(\"function\"==typeof e)return this.exec(\"run\",[String(e),r]);throw new TypeError('Function or string expected as argument \"method\"')},u.prototype.proxy=function(){if(0<arguments.length)throw new Error(\"No arguments expected\");var t=this;return this.exec(\"methods\").then(function(e){var r={};return e.forEach(function(e){r[e]=function(){return t.exec(e,Array.prototype.slice.call(arguments))}}),r})},u.prototype._next=function(){if(0<this.tasks.length){var e=this._getWorker();if(e){var r=this,t=this.tasks.shift();if(t.resolver.promise.pending){var o=e.exec(t.method,t.params,t.resolver).then(r._boundNext).catch(function(){e.terminated&&(r._removeWorker(e),r._ensureMinWorkers()),r._next()});\"number\"==typeof t.timeout&&o.timeout(t.timeout)}else r._next()}}},u.prototype._getWorker=function(){for(var e=this.workers,r=0;r<e.length;r++){var t=e[r];if(!1===t.busy())return t}return e.length<this.maxWorkers?(t=this._createWorkerHandler(),e.push(t),t):null},u.prototype._removeWorker=function(e){i.releasePort(e.debugPort),e.terminate(),this._removeWorkerFromList(e)},u.prototype._removeWorkerFromList=function(e){var r=this.workers.indexOf(e);-1!==r&&this.workers.splice(r,1)},u.prototype.terminate=function(t,o){this.tasks.forEach(function(e){e.resolver.reject(new Error(\"Pool terminated\"))}),this.tasks.length=0;var n=function(e){this._removeWorkerFromList(e)}.bind(this),i=[];return this.workers.slice().forEach(function(e){var r=e.terminateAndNotify(t,o).then(n);i.push(r)}),s.all(i)},u.prototype.clear=function(e){console.warn(\"Pool.clear() is deprecated. Use Pool.terminate() instead.\"),this.terminate(e)},u.prototype.stats=function(){var e=this.workers.length,r=this.workers.filter(function(e){return e.busy()}).length;return{totalWorkers:e,busyWorkers:r,idleWorkers:e-r,pendingTasks:this.tasks.length,activeTasks:r}},u.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var e=this.workers.length;e<this.minWorkers;e++)this.workers.push(this._createWorkerHandler())},u.prototype._createWorkerHandler=function(){return new o(this.script,{forkArgs:this.forkArgs,forkOpts:this.forkOpts,debugPort:i.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType})},e.exports=u},function(e,r,s){\"use strict\";var u=s(1),a=s(0),c=s(2);function f(){var e=d();if(!e)throw new Error(\"WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required\");return e}function p(){if(\"function\"!=typeof Worker&&(\"object\"!=typeof Worker||\"function\"!=typeof Worker.prototype.constructor))throw new Error(\"WorkerPool: Web Workers not supported\")}function d(){try{return c(\"worker_threads\")}catch(e){if(\"object\"==typeof e&&null!==e&&\"MODULE_NOT_FOUND\"===e.code)return null;throw e}}function h(e,r){var t=new r(e);return t.isBrowserWorker=!0,t.on=function(e,r){this.addEventListener(e,function(e){r(e.data)})},t.send=function(e){this.postMessage(e)},t}function l(e,r){var t=new r.Worker(e,{stdout:!1,stderr:!1});return t.isWorkerThread=!0,t.send=function(e){this.postMessage(e)},t.kill=function(){this.terminate()},t.disconnect=function(){this.terminate()},t}function k(e,r,t){var o=t.fork(e,r.forkArgs,r.forkOpts);return o.isChildProcess=!0,o}function m(e){e=e||{};var r=process.execArgv.join(\" \"),t=-1!==r.indexOf(\"--inspect\"),o=-1!==r.indexOf(\"--debug-brk\"),n=[];return t&&(n.push(\"--inspect=\"+e.debugPort),o&&n.push(\"--debug-brk\")),process.execArgv.forEach(function(e){-1<e.indexOf(\"--max-old-space-size\")&&n.push(e)}),Object.assign({},e,{forkArgs:e.forkArgs,forkOpts:Object.assign({},e.forkOpts,{execArgv:(e.forkOpts&&e.forkOpts.execArgv||[]).concat(n)})})}function t(e,r){var o=this,t=r||{};function n(e){for(var r in o.terminated=!0,o.terminating&&o.terminationHandler&&o.terminationHandler(o),o.terminating=!1,o.processing)void 0!==o.processing[r]&&o.processing[r].resolver.reject(e);o.processing=Object.create(null)}this.script=e||function(){if(\"browser\"!==a.platform)return __dirname+\"/worker.js\";if(\"undefined\"==typeof Blob)throw new Error(\"Blob not supported by the browser\");if(!window.URL||\"function\"!=typeof window.URL.createObjectURL)throw new Error(\"URL.createObjectURL not supported by the browser\");var e=new Blob([s(6)],{type:\"text/javascript\"});return window.URL.createObjectURL(e)}(),this.worker=function(e,r){if(\"web\"===r.workerType)return p(),h(e,Worker);if(\"thread\"===r.workerType)return l(e,t=f());if(\"process\"!==r.workerType&&r.workerType){if(\"browser\"===a.platform)return p(),h(e,Worker);var t=d();return t?l(e,t):k(e,m(r),c(\"child_process\"))}return k(e,m(r),c(\"child_process\"))}(this.script,t),this.debugPort=t.debugPort,e||(this.worker.ready=!0),this.requestQueue=[],this.worker.on(\"message\",function(e){if(\"string\"==typeof e&&\"ready\"===e)o.worker.ready=!0,o.requestQueue.forEach(o.worker.send.bind(o.worker)),o.requestQueue=[];else{var r=e.id,t=o.processing[r];void 0!==t&&(delete o.processing[r],!0===o.terminating&&o.terminate(),e.error?t.resolver.reject(function(e){for(var r=new Error(\"\"),t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]];return r}(e.error)):t.resolver.resolve(e.result))}});var i=this.worker;this.worker.on(\"error\",n),this.worker.on(\"exit\",function(e,r){var t=\"Workerpool Worker terminated Unexpectedly\\n\";t+=\"    exitCode: `\"+e+\"`\\n\",t+=\"    signalCode: `\"+r+\"`\\n\",t+=\"    workerpool.script: `\"+o.script+\"`\\n\",t+=\"    spawnArgs: `\"+i.spawnargs+\"`\\n\",t+=\"    spawnfile: `\"+i.spawnfile+\"`\\n\",t+=\"    stdout: `\"+i.stdout+\"`\\n\",t+=\"    stderr: `\"+i.stderr+\"`\\n\",n(new Error(t))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.terminationHandler=null,this.lastId=0}t.prototype.methods=function(){return this.exec(\"methods\")},t.prototype.exec=function(e,r,t){t=t||u.defer();var o=++this.lastId;this.processing[o]={id:o,resolver:t};var n={id:o,method:e,params:r};this.terminated?t.reject(new Error(\"Worker is terminated\")):this.worker.ready?this.worker.send(n):this.requestQueue.push(n);var i=this;return t.promise.catch(function(e){if(!(e instanceof u.CancellationError||e instanceof u.TimeoutError))throw e;delete i.processing[o],i.terminate(!0)}),t.promise},t.prototype.busy=function(){return 0<Object.keys(this.processing).length},t.prototype.terminate=function(e,r){if(e){for(var t in this.processing)void 0!==this.processing[t]&&this.processing[t].resolver.reject(new Error(\"Worker terminated\"));this.processing=Object.create(null)}if(\"function\"==typeof r&&(this.terminationHandler=r),this.busy())this.terminating=!0;else{if(this.worker){if(\"function\"==typeof this.worker.kill)this.worker.kill();else{if(\"function\"!=typeof this.worker.terminate)throw new Error(\"Failed to terminate worker\");this.worker.terminate()}this.worker=null}this.terminating=!1,this.terminated=!0,this.terminationHandler&&this.terminationHandler(this)}},t.prototype.terminateAndNotify=function(e,r){var t=u.defer();return r&&(t.promise.timeout=r),this.terminate(e,function(e){t.resolve(e)}),t.promise},e.exports=t,e.exports._tryRequireWorkerThreads=d,e.exports._setupProcessWorker=k,e.exports._setupBrowserWorker=h,e.exports._setupWorkerThreadWorker=l,e.exports.ensureWorkerThreads=f},function(e,r){e.exports='!function(o){var n={};function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=n,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&\"object\"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:r}),2&e&&\"string\"!=typeof r)for(var n in r)t.d(o,n,function(e){return r[e]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,\"a\",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p=\"\",t(t.s=0)}([function(module,exports,__webpack_require__){var requireFoolWebpack=eval(\"typeof require !== \\'undefined\\' ? require : function (module) { throw new Error(\\'Module \\\\\" + module + \\\\\" not found.\\') }\"),worker={};if(\"undefined\"!=typeof self&&\"function\"==typeof postMessage&&\"function\"==typeof addEventListener)worker.on=function(e,r){addEventListener(e,function(e){r(e.data)})},worker.send=function(e){postMessage(e)};else{if(\"undefined\"==typeof process)throw new Error(\"Script must be executed as a worker\");var WorkerThreads;try{WorkerThreads=requireFoolWebpack(\"worker_threads\")}catch(e){if(\"object\"!=typeof e||null===e||\"MODULE_NOT_FOUND\"!=e.code)throw e}if(WorkerThreads&&null!==WorkerThreads.parentPort){var parentPort=WorkerThreads.parentPort;worker.send=parentPort.postMessage.bind(parentPort),worker.on=parentPort.on.bind(parentPort)}else worker.on=process.on.bind(process),worker.send=process.send.bind(process),worker.on(\"disconnect\",function(){process.exit(1)})}function convertError(o){return Object.getOwnPropertyNames(o).reduce(function(e,r){return Object.defineProperty(e,r,{value:o[r],enumerable:!0})},{})}function isPromise(e){return e&&\"function\"==typeof e.then&&\"function\"==typeof e.catch}worker.methods={},worker.methods.run=function run(fn,args){var f=eval(\"(\"+fn+\")\");return f.apply(f,args)},worker.methods.methods=function(){return Object.keys(worker.methods)},worker.on(\"message\",function(r){try{var e=worker.methods[r.method];if(!e)throw new Error(\\'Unknown method \"\\'+r.method+\\'\"\\');var o=e.apply(e,r.params);isPromise(o)?o.then(function(e){worker.send({id:r.id,result:e,error:null})}).catch(function(e){worker.send({id:r.id,result:null,error:convertError(e)})}):worker.send({id:r.id,result:o,error:null})}catch(e){worker.send({id:r.id,result:null,error:convertError(e)})}}),worker.register=function(e){if(e)for(var r in e)e.hasOwnProperty(r)&&(worker.methods[r]=e[r]);worker.send(\"ready\")},exports.add=worker.register}]);'},function(e,r,t){\"use strict\";function o(){this.ports=Object.create(null),this.length=0}(e.exports=o).prototype.nextAvailableStartingAt=function(e){for(;!0===this.ports[e];)e++;if(65535<=e)throw new Error(\"WorkerPool debug port limit reached: \"+e+\">= 65535\");return this.ports[e]=!0,this.length++,e},o.prototype.releasePort=function(e){delete this.ports[e],this.length--}},function(module,exports,__webpack_require__){var requireFoolWebpack=eval(\"typeof require !== 'undefined' ? require : function (module) { throw new Error('Module \\\" + module + \\\" not found.') }\"),worker={};if(\"undefined\"!=typeof self&&\"function\"==typeof postMessage&&\"function\"==typeof addEventListener)worker.on=function(e,r){addEventListener(e,function(e){r(e.data)})},worker.send=function(e){postMessage(e)};else{if(\"undefined\"==typeof process)throw new Error(\"Script must be executed as a worker\");var WorkerThreads;try{WorkerThreads=requireFoolWebpack(\"worker_threads\")}catch(e){if(\"object\"!=typeof e||null===e||\"MODULE_NOT_FOUND\"!=e.code)throw e}if(WorkerThreads&&null!==WorkerThreads.parentPort){var parentPort=WorkerThreads.parentPort;worker.send=parentPort.postMessage.bind(parentPort),worker.on=parentPort.on.bind(parentPort)}else worker.on=process.on.bind(process),worker.send=process.send.bind(process),worker.on(\"disconnect\",function(){process.exit(1)})}function convertError(t){return Object.getOwnPropertyNames(t).reduce(function(e,r){return Object.defineProperty(e,r,{value:t[r],enumerable:!0})},{})}function isPromise(e){return e&&\"function\"==typeof e.then&&\"function\"==typeof e.catch}worker.methods={},worker.methods.run=function run(fn,args){var f=eval(\"(\"+fn+\")\");return f.apply(f,args)},worker.methods.methods=function(){return Object.keys(worker.methods)},worker.on(\"message\",function(r){try{var e=worker.methods[r.method];if(!e)throw new Error('Unknown method \"'+r.method+'\"');var t=e.apply(e,r.params);isPromise(t)?t.then(function(e){worker.send({id:r.id,result:e,error:null})}).catch(function(e){worker.send({id:r.id,result:null,error:convertError(e)})}):worker.send({id:r.id,result:t,error:null})}catch(e){worker.send({id:r.id,result:null,error:convertError(e)})}}),worker.register=function(e){if(e)for(var r in e)e.hasOwnProperty(r)&&(worker.methods[r]=e[r]);worker.send(\"ready\")},exports.add=worker.register}],e={},g.m=d,g.c=e,g.d=function(e,r,t){g.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},g.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},g.t=function(r,e){if(1&e&&(r=g(r)),8&e)return r;if(4&e&&\"object\"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(g.r(t),Object.defineProperty(t,\"default\",{enumerable:!0,value:r}),2&e&&\"string\"!=typeof r)for(var o in r)g.d(t,o,function(e){return r[e]}.bind(null,o));return t},g.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return g.d(r,\"a\",r),r},g.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},g.p=\"\",g(g.s=3);function g(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return d[r].call(t.exports,t,t.exports,g),t.l=!0,t.exports}var d,e});\n//# sourceMappingURL=workerpool.map\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./node_modules/workerpool/dist/workerpool.min.js?");

/***/ })

/******/ });
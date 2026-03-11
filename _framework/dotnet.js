//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"80d3e14f5e08b4888f464e3cd0d0b2445b63ec46",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-+bdQfA9T8F/XGIh4jB0MuGL3ASRxqHxyavoa+gRVBCQ=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.4xbsgn06op.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.zj9dll5ffg.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.gxid1jnzlg.wasm",
        "integrity": "sha256-7GGgE/xC8VPxoauPHCELdkCxfHORbzK0Au3Y25vPeIY=",
        "cache": "force-cache"
      }
    ],
    "icu": [
      {
        "virtualPath": "icudt.dat",
        "name": "icudt.oh1zvcfom8.dat",
        "integrity": "sha256-tO5O5YzMTVSaKBboxAqezOQL9ewmupzV2JrB5Rkc8a4=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.tb2wlvvne3.dll",
        "integrity": "sha256-N2tgdo7WBpu3JP8B/TUkN+xZXbDpA35SuPH9erU1eAs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.y85wmbrkp4.dll",
        "integrity": "sha256-knScYlqN3FcJxSFeGhTrq516KZfqdmVocBYRDnyEEWk=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Blazored.LocalStorage.dll",
        "name": "Blazored.LocalStorage.somf8dykn2.dll",
        "integrity": "sha256-ZGOhicUlxsmaD44LUlk9QGefwrharIvp8bP1r4UKlPU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Bromix.MudBlazor.MaterialDesignIcons.dll",
        "name": "Bromix.MudBlazor.MaterialDesignIcons.j7kuua9m2l.dll",
        "integrity": "sha256-MejXbNiM4pKT5NpFaoMw/Aei7wKnQYIkShKU5I92E0Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "ConcurrentCollections.dll",
        "name": "ConcurrentCollections.ud9az6afbl.dll",
        "integrity": "sha256-/naMXE+KLBCbTgZ32AT6ZVwXJsNZV2NfZtwe0LP7dzQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Humanizer.dll",
        "name": "Humanizer.ycpjcwk4qy.dll",
        "integrity": "sha256-3qzxlUwzCke4pdc1Jx5XbepJN9HlvSoUXzrM+Gr+u84=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MessagePack.dll",
        "name": "MessagePack.eqoptzx9d5.dll",
        "integrity": "sha256-ir2PqNZvQdW90kO3QMndOSkVqLTfE3PfWh8/3+CTqcg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MessagePack.Annotations.dll",
        "name": "MessagePack.Annotations.l6qv48kgpt.dll",
        "integrity": "sha256-TXqgfSiMajkQnu32Q147qMQTNCh27Qi7WmTVXdOd0E0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Authorization.dll",
        "name": "Microsoft.AspNetCore.Authorization.2kuxl3jst8.dll",
        "integrity": "sha256-DpbDYpV4QhqxhDIkPnMCxJNqUA3F60v9sRaT93GqVyI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.i8jepecp4j.dll",
        "integrity": "sha256-4glJ9fgq5Pkt/rODJ/bRelVTXaObFMDMck5gTqF74Eo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Forms.dll",
        "name": "Microsoft.AspNetCore.Components.Forms.8yqlyvkngj.dll",
        "integrity": "sha256-UEYOZNaOvxqD6idUgd0EzK1idL2ONe9wi+EIoVlMajA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.irmy2xmb1e.dll",
        "integrity": "sha256-vi2stdUpPH1i0YwYeKD2+uQ+6SRtAL+nxa4XDZpFZXk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.tm6oi4ygms.dll",
        "integrity": "sha256-a8as5r3/7EWFg8oBfx1GmLGffHRtYZzpbz2m8NffUo8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Metadata.dll",
        "name": "Microsoft.AspNetCore.Metadata.8cohbmrm4g.dll",
        "integrity": "sha256-eMgEmZgF/y9W2BI8clihXKp9TQFgadOtSxYMxsgP2aI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.au4k3w826d.dll",
        "integrity": "sha256-fkfhvrZffzikMh+9D6zF5reRpW0gFvBECM0UtZIJ34s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.qhhwzeky57.dll",
        "integrity": "sha256-ciQwwkVsQ3CaOQw+QR850f0yzLfIILOdGZfiVzzwpYE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Binder.dll",
        "name": "Microsoft.Extensions.Configuration.Binder.jea6jizi94.dll",
        "integrity": "sha256-1VrMFy0WVaqrZwCtiFO6EIih3a8RD1VIGf3teSsn+Eg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.FileExtensions.dll",
        "name": "Microsoft.Extensions.Configuration.FileExtensions.hjr6o23irv.dll",
        "integrity": "sha256-Ex8a89mTbKvtL8KNRidRS91pIFGBuZ5gbzyCMruSQxk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.qxykz8r2j7.dll",
        "integrity": "sha256-3kD3md47851dcBtSVaM5NOLJXfTQK4dnInewulWlpDs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.lt4j9hnphl.dll",
        "integrity": "sha256-1yOj2FzP8QKiqtHz/Tm7iapxusjRWxvFa97WcIfvsmY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.yvfnzk5829.dll",
        "integrity": "sha256-LtN5TsWJcvA86Td6Fv7Bxzx+H/zAOSiQV5wF+3icDxM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.dll",
        "name": "Microsoft.Extensions.Diagnostics.bdrpa2haw9.dll",
        "integrity": "sha256-MYdVgD22A97fAI+BUVft28dxj+Z31qqQkaTmCmafVes=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.dll",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.5qil2dxgco.dll",
        "integrity": "sha256-8wfysQFj5CWTgi3XaLUwUW6497ok/aNXbRi0mo8PBfU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Abstractions.dll",
        "name": "Microsoft.Extensions.FileProviders.Abstractions.0tqu7t49zj.dll",
        "integrity": "sha256-NF4p9oh0FBJLGPZ95mjBb/d+IPsZW7ukI04JorsfnyI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Physical.dll",
        "name": "Microsoft.Extensions.FileProviders.Physical.2epiptkybb.dll",
        "integrity": "sha256-9qFE8C1cOELbFpzcb7yimQh6Pbywx0FhxCJGeigzBsw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileSystemGlobbing.dll",
        "name": "Microsoft.Extensions.FileSystemGlobbing.f9crq32sqe.dll",
        "integrity": "sha256-LSOjBy0r537OpmdBRbgCfqYjLLlQZ6Ee65YZk4L1Bek=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Localization.dll",
        "name": "Microsoft.Extensions.Localization.cbjuwc84ih.dll",
        "integrity": "sha256-SA3Rme3Bpo0Zh/dT0KU8JahFroGxFHPuTqST+hGC+Zo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Localization.Abstractions.dll",
        "name": "Microsoft.Extensions.Localization.Abstractions.pec77i134d.dll",
        "integrity": "sha256-bwamQLkN1u3D5w4PmlTCUIMo2HSZL3gZFVKTJugDu9s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.2f9y1gbnik.dll",
        "integrity": "sha256-0ko0v1Y/tFifFdZuuQLI6m5pGTOEAdjBlJ1SP7nsCH8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.va9m73rf2w.dll",
        "integrity": "sha256-aWQuacMlnk3v7lhYu7mjYmDKIXFST1VRARD0x/hncNQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.oqvssjxlaa.dll",
        "integrity": "sha256-sKfKGG7+bG5Sd51fC1aY/Yzz2B6u6TM6RDEvWeakMus=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.ConfigurationExtensions.dll",
        "name": "Microsoft.Extensions.Options.ConfigurationExtensions.hughn57ku1.dll",
        "integrity": "sha256-iYoXJ7JRs2ImJgX+fQMTOrmeJCno4H+IIntK/aZpd/A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.ago8e7tp9u.dll",
        "integrity": "sha256-NnhekZW+LdvT7KEalLvWs/SsDvwn+4Tb8EL+2OFuVWg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Validation.dll",
        "name": "Microsoft.Extensions.Validation.8q3kjbo8a1.dll",
        "integrity": "sha256-IDHcvMBxHGOJFwHcmy2NzR1LO5+k8hj6nLc4T9sU900=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.pjhpcx9y62.dll",
        "integrity": "sha256-FeWeAViTyttYD1BoSE/k5LyjyIJOREUtcq5p8NPObX4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.08j823ta3r.dll",
        "integrity": "sha256-sG5kNXDXbE3iyFdj4ax8D5Fvk/dWgfNgU0JWhkuJU30=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.NET.StringTools.dll",
        "name": "Microsoft.NET.StringTools.3qbrf4v2ki.dll",
        "integrity": "sha256-5RyGeP1gKiHCSbNp6DOWYBmTUTJHb5Q02olr74CLo7E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MudBlazor.dll",
        "name": "MudBlazor.6ooe33qd4e.dll",
        "integrity": "sha256-mtyraoXoF0WrC16uY+/wLm8fojOoRcizBX7rtZo0Eis=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Newtonsoft.Json.dll",
        "name": "Newtonsoft.Json.m2k37x25ww.dll",
        "integrity": "sha256-oowlHf422IHp4kYuFxRBuLDsFW/j9FJgLJFJsbnv4Fs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.dll",
        "name": "RandN.igdvdcvnje.dll",
        "integrity": "sha256-4uIYrGkV3qVOE78ruJrcQhRJFxEHKU2NP9u6vxbY34Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.ChaCha.dll",
        "name": "RandN.ChaCha.f8q0tdh2u9.dll",
        "integrity": "sha256-MVoP4+5aN5jwTaONCQLhVMpdDSD3P+j71WobYR8VT1U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.Core.dll",
        "name": "RandN.Core.a7v6xh2d9r.dll",
        "integrity": "sha256-dugzkjx1REZFNMa9tfg4FZ/B/bzqNMRJue2TSRkVUSc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.Pcg32.dll",
        "name": "RandN.Pcg32.swab6fbpfk.dll",
        "integrity": "sha256-BKI1U25rlHvUTxLdr+t22Mnfzr+3TJc6xg87tSuGfvA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Serilog.dll",
        "name": "Serilog.lr063t0uuv.dll",
        "integrity": "sha256-n790Qam9yUWWUtxm4Y8AgEBlHxTLjXp7uAasSotyLRA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Serilog.Extensions.Logging.dll",
        "name": "Serilog.Extensions.Logging.4bbpnk2zhn.dll",
        "integrity": "sha256-gNPtvj46wLTFvHZEdCIOfaEd+NKF4AmPPcG2WnNMhQc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Hashing.dll",
        "name": "System.IO.Hashing.hjpvyowi32.dll",
        "integrity": "sha256-DdW6jv+HhdEe5HykwRM2D4wziteVaDYhdxw+zPTnB70=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Tomlyn.dll",
        "name": "Tomlyn.onjw4f4z40.dll",
        "integrity": "sha256-fLRPwZYevRaHyoVYjJ66VZ23Hthqw7Y3qVwiW7UjcDw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.umz3umpg9j.dll",
        "integrity": "sha256-2qIQmLQlg2u3r9P2M+Lk64WqGm/QMX3sX6k8UMKSu+Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.og87wz3nqe.dll",
        "integrity": "sha256-aF3L5T6bJJyIx1qC7I/ySjbRyW1owa0QUm5APbdHrMo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.iuny1gapip.dll",
        "integrity": "sha256-xpEyyC6/Jl3Y68VTwGhjlQHO5iYCBpCvZ1zSFbQfP2M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.307d7esqay.dll",
        "integrity": "sha256-swM8dIaN3ExVWIqwppo63TFki29SiKFSEYg+iEYdKjM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.jy19bcihkp.dll",
        "integrity": "sha256-1ZIGeIXOR8ej9A4gWqYGY2ddF4nt+YUMpCxZO6plslc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.yo6ig9wlog.dll",
        "integrity": "sha256-YgbcqO27/URmcWIRe9T1UHtYqqM7VI4ghSn51tzGI/o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.djmqa755k7.dll",
        "integrity": "sha256-mUogqkrTzjIh+Kytz6EF3gxpssBTxsqPA770ai2Ga9k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.cjlndde81e.dll",
        "integrity": "sha256-ONK5TvwFJdrQIcIbR4n1yyTG3YPBto98HBhzXkbCEl0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.16mqyzj1xz.dll",
        "integrity": "sha256-R88HvW8ZdYe5YC7of27zpe7c6ZXfUjik3jRd0lXRhsU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.hdoghscp79.dll",
        "integrity": "sha256-m39iPEFXZtKFlUy2yo8RYobotO9QAtPp1dS1ZOo0lJw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.zrfnearkf0.dll",
        "integrity": "sha256-YWqLrarqvqnyfT+Oa6ew++h+MVKpjZi0talRaYkuiwM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.jej3afsrcq.dll",
        "integrity": "sha256-BRXTZDeGXIDBQKL6nhwUbAeV8T2NK1tGmEFetzjaIGE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.sg2oknxuuf.dll",
        "integrity": "sha256-hP2CTKVRBdeeYGXMK2AzYIVDQ5gTUtvM+7MG+m4+PFA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.ya66e9kit5.dll",
        "integrity": "sha256-lkjGWjObJAfAmOQ6BpQjzrtbnAd7eDMpEd6qpdf2gyg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.67l9kjlp3c.dll",
        "integrity": "sha256-btw6NXxUuA63rvU0Q96vuQAW5tdfj4f1Wo2RMyor4qs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.w0xeuep48t.dll",
        "integrity": "sha256-UPux6CiZVNiJllEebTe9dycASPEpPnWly3SlEOoW6kY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.x8v2jqew1r.dll",
        "integrity": "sha256-sYUlFSuEtlkj7uA4KY0AtexEUSKhZISmHwTnQ8HLQfQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.1euxvles8m.dll",
        "integrity": "sha256-5xSML5QWxLK2XTsxvp99+ZHuXd2DNhr3aGMPYllBEjo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.1qsft2rsjp.dll",
        "integrity": "sha256-KXSk8IdzZoJ9d7q6/VAuBmp89fMB0EFTWl9bzmi1AcU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.paq8pls8lz.dll",
        "integrity": "sha256-39uw6R4gCH3rz6/G3vcjbfaNLj2AD98KJhNJgIPvEW0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.xjlnbb32qa.dll",
        "integrity": "sha256-I4zU6yanjQCM3dGMTk1ybZYVETzCYPH9LBQsOBx/jvA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.xg82cp33p1.dll",
        "integrity": "sha256-YRf04b+mAQRsMCwXsRq8t/5IrJBZxdYe8vK/P1q4kK4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.nliqezpaee.dll",
        "integrity": "sha256-qyqriwwGuGNsRAAb0AhWdchd3aqj+nydaZgWPvV2Dso=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.km3o39ujua.dll",
        "integrity": "sha256-pJAplCHWOEyYBFrgHYLHRucrJtIiKFNbRTdGag7/8IM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.q4o8rdb3hp.dll",
        "integrity": "sha256-KutJS/LUkeMjybC6Kk0GIgEM9Ncz+53rW2jJxV5qB0U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.0oebzyk6pr.dll",
        "integrity": "sha256-AKrKbgoRi0pe0b2GpXOlD6EXnkwekoM3ow97bxFgUkk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.8n7dat6mn4.dll",
        "integrity": "sha256-9CXZF8IBAWYC2U5fWia49JXM7QfSFMPyhjiuveqg0r4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.j1bnpig7m1.dll",
        "integrity": "sha256-p5hfNzfUuIQLQiiepvPlSLdCEpCmtC16QDgEnJPMAMM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.9ohd4dzqhd.dll",
        "integrity": "sha256-uSIxtLuZN4wKfHOWBb0EGF06bAxCjXakWXXI3meEH4U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.o6w9vjz8s7.dll",
        "integrity": "sha256-MOa0mfqt9WRJBTBGgXJAJo6aOoYHBY+0fmjmWkj7yPM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.k9vkpan1q9.dll",
        "integrity": "sha256-SKyg/jJAJMJfUTIfHoLKaOacShYGfS2CRvecnmFGDg8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.pq8ecx0ptu.dll",
        "integrity": "sha256-P+ypt3mv8xuar9TJ31hJgJzXbLZHcktGZKIRd/RxrPM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.s0s2mitxuj.dll",
        "integrity": "sha256-pJfVvN/nB/KiOn/+/qAjR2an7OvAVz7TSeh4TzX0UL4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.i8uqgrunk7.dll",
        "integrity": "sha256-buiHAqx7aHGEScnLvfp06w3QwwDD6Z1zWA5nrAdAVbw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.petlu5pjdl.dll",
        "integrity": "sha256-Ieq99ewN54YhiNsyKZULUHhWHuhFpjK0sr26hM/LgPE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.bs5xvihsns.dll",
        "integrity": "sha256-dU04ri6soUfBXj9sOQyLCzpQtQbi315Ak6ELITJu9mw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.e2cm67edw5.dll",
        "integrity": "sha256-lkj0CoKruJV3RC3tBB+aejAalVXn82ywbCUmIHPCPjs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.tnoueo074r.dll",
        "integrity": "sha256-pzngg/O5/qzw0g5jgLsIoK9/B9jp0KAGKzRCUEsslck=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.dskdyv4eeb.dll",
        "integrity": "sha256-g1dnaMBpcU7RphTB2Mb3bq45ivkRFhFK/ERNlwdicLY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.7lnf6f19u0.dll",
        "integrity": "sha256-K9cBYAtNgrAL18rS9CBkNg/B3sh/n51Q7BrnPt14+lM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.ruyohk8709.dll",
        "integrity": "sha256-c4eaLnSopiV0Lgv5gVry3qzBRBDIxknBF+wnqITlS50=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.2be0qfcv96.dll",
        "integrity": "sha256-br75BZ2QE742aYiohznB8x/fJs8JpUh/7+pVy60MH8A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.g1ulkyevsw.dll",
        "integrity": "sha256-rHgtR+x4rGnYzf0gkfuWYSYPgIpw/NLhoP5wdORUF5g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.kdqg0mnq8y.dll",
        "integrity": "sha256-iPHC2rnsHBhCkR2MRbApz8zf7SkAlmuNKFhvMS71Ids=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.lxr7x5mtxr.dll",
        "integrity": "sha256-KR6O7xM5bCA9bDmnuXHfUYLbgZLD7qbxWxKNblNG98c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.188vgtwasm.dll",
        "integrity": "sha256-n6DGpDeaFYuxMRc1yWumeECq8utANLHyaYB3ArSMczY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.edljl2r6lz.dll",
        "integrity": "sha256-DmClikBiOMHhifpswk61Vq8VbLxMoxFLd0Ph8oS8cLY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.21bb6nj393.dll",
        "integrity": "sha256-ln6EscRbxfUdNOtkk+HsY9GsQ71qfzK4qh7CoNPeflQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.0znlxhdp54.dll",
        "integrity": "sha256-nCH/wHtM+1JHdCJ8hqjqYTC+731Cqb4TzcvTp0Pf82Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.02jeg5pu7p.dll",
        "integrity": "sha256-+KuIo6juVZkMD50dvtbxtCbnhc2/CyOijPhzNJ0aYmE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.23ppbdoqd5.dll",
        "integrity": "sha256-Popjab5+qgEv9U72ANTQPTggKvxnuy6HJefgKRrYQUg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.6vgadecwo1.dll",
        "integrity": "sha256-4lhyfa/ihsJ04JE3EaB27DXrPDZCwpTEPnDrkjy6buY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.axouzz3ozw.dll",
        "integrity": "sha256-Uoe+9I2RfxePCaailOlXXzhWfwmKbBcbeHWNrUdmbHw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.t9idrb98xd.dll",
        "integrity": "sha256-wTSBmjYXlnV7AT5qdFGoNcNUmoUK2da3yU5gZnq+xGM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.6ydocmrfjq.dll",
        "integrity": "sha256-Yo8pPlnDawHnFBMwI3btUa5lERLYalt1u+qb6iuhT+g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.9b3pg7y370.dll",
        "integrity": "sha256-BUn4oD5Y905rmCQqTVUA/ehkN/kpXXEAKgyQDN4ghGY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.oowf63iqlo.dll",
        "integrity": "sha256-OKWbZjgrTdpGwxfr9CXdgK2vXBVPJ4EZp5tZvJPnqxE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.hjfau15d2j.dll",
        "integrity": "sha256-LX8lji77pHsMqL9ymmJva7aDgu49EmWwA3MLMdwChvY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.3fwc441jun.dll",
        "integrity": "sha256-HxMCYPFt0rsXbePyAXNSbLcR+A8R6sMfpWnKmUNVT7Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.qw3l1kpkb5.dll",
        "integrity": "sha256-9vftdEPxmaKxfMsbQ8Cfo0GO7PXn2lr/4vdgIBOUhhc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.yi5lcihztx.dll",
        "integrity": "sha256-xgyKRoiVy7rtZLzeLG/0GvLXdxkzt1mPji4eomL2G3w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.401c7mlw6q.dll",
        "integrity": "sha256-7KAH5xUd3k7POUGED2vhvNXcGnJzk8BWNlQiu8mp0uw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.7pustoq0kl.dll",
        "integrity": "sha256-a8faaXPUyvoPUg9Ky8KaaQ6eiw6RSpDeFp7ceKhPL4k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.be36b9cda2.dll",
        "integrity": "sha256-TfqRZy1TnJn3wBowO3xoqBC9LegQnPNS1GEz0wBBups=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.l22pp633ob.dll",
        "integrity": "sha256-Q6ghQp7SQQ+hEpL+TS2N7O8uNhb6UeRUVipcxsO6HZU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.h3wxkdbbdb.dll",
        "integrity": "sha256-vXiOBQ3xPDQC05ExzVBxKNwfiIYxcnNU1BdDF3DuHQM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.yir4bfbylt.dll",
        "integrity": "sha256-puRvsgoT0heoQmTijk6a79kHs5S12ueVR5G4ZFJiH9g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.fsd0ixj9vb.dll",
        "integrity": "sha256-zyu2Fd1E3FcHoP52izcoYKtxHXSJ8sgwXC6la4EBe0U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.qcsxo8p1ke.dll",
        "integrity": "sha256-yhWXzbV/Nw45CbsonliaxbPPht0qDXfrrg9I8Gn+1ow=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.t7wq4u2ze1.dll",
        "integrity": "sha256-mcHLWojE8QMd/xywBmlWA4e/vrs4+NTnDNGuBvEKBrg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.pebasni1uz.dll",
        "integrity": "sha256-QRCBcU88PhZM0VvStfGBKct1K8zgmzYYP9CN4q+AATQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.xyef5npfo3.dll",
        "integrity": "sha256-iSoSeaZXA7ZFCjz/kQnDIaAM/t56iI5zYIAZDcDxxfA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.p723mq6wsp.dll",
        "integrity": "sha256-9Qud7UrSslYSjLnSdKamnfV6dQybqUZEojYGJFgyORU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.aqzk82nh4b.dll",
        "integrity": "sha256-4vHtk1ylBY1kOK2WJ4i96IrjdXVNeQTJJBpo4opL47k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.ixxxnsp3lw.dll",
        "integrity": "sha256-+h6Yy7yMwdX5RKE/vq9s1Qa8wLKJWKp+ToCXBCrMrkU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.o3ap8arzld.dll",
        "integrity": "sha256-nCDEhVbHi1KjHk6SnUi3NPswuB6FZte5TD8UW7iNGbk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.p9s5brb0xz.dll",
        "integrity": "sha256-o/qfwyNi73CxtsB0PE5aOXiLaCloWRGw7+hnbtFUj1w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.vgs2za08tg.dll",
        "integrity": "sha256-n2ccaOD6YHV+9tAgHaOeFVnewAEMoKj40HRQDcyS2kE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.mkwzkiddnk.dll",
        "integrity": "sha256-WkQiDrsJgK6+sWfRrfc4bG7YJKRlDGBEuXSaNrN124M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.gwsi6jmmud.dll",
        "integrity": "sha256-0DQIThVRGSB4qkXphImo8GlD4surW7hoIZGjogAXECY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.4j2hq3o6mu.dll",
        "integrity": "sha256-EG0j7/IIpHJJualdrocUmNF+gwEtJEnS89Z7tSqFG5c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.lbvzjfp0qo.dll",
        "integrity": "sha256-r1eNc4wvjPGjrOjRwcwDgZnTWajPv1YNYlET8DGDt20=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.xg35ak2mei.dll",
        "integrity": "sha256-0Vo2YjCsrrtR4Vdk76Dzb15lkWTkUHw7mG6ejmgS5RA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.cxkywdel3p.dll",
        "integrity": "sha256-kM3jEEM06xL86Kr2OVW1/1tQWBCEFNFlNAEXbMaVgOA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.3fk9act8fa.dll",
        "integrity": "sha256-n5n0pvWpiBIST1bjpC8X3QAUCwDmYyQiyTZuY/JDF0M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.noyatudlx6.dll",
        "integrity": "sha256-6awJonbFWfGSDLupHeCl9VNsJsetWYMMVM65QbhIBNA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.qx7sjv8spi.dll",
        "integrity": "sha256-0pmSwpU+oN23gcm3xeZYLPWL/qG3TuX4Pd5a+YLHS3I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.yhbj23rumu.dll",
        "integrity": "sha256-CuFeuRuqYwSbfe57E4uor5YCNbpTGdY7H5Cn6nFItH0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.rbq35fqar0.dll",
        "integrity": "sha256-B4kzZh8e+JN4LlwsKhQilGItDPxzGFnRMppBnbJg43M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.0ann8ygfeo.dll",
        "integrity": "sha256-aJpTec/gKpG+sLYzy1hWyXTlgwvHvRlp4ttqtDQ4d/c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.59u15qxd7n.dll",
        "integrity": "sha256-aWzzXJiEkMgmbUBBa16AKjDPYg4CrMrLO7eHb1xtx88=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.n03bjtafwo.dll",
        "integrity": "sha256-B8vfU0WQ1Zg/y50T0AnKfQdKnJOs0SrcpkJwEbD85F8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.ogc9j5ac8h.dll",
        "integrity": "sha256-WG7AQRbtauE4HLv9tm7aYEKChWRKJbtu3v15SDcMVy0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.b6fzg1lzp0.dll",
        "integrity": "sha256-bQTKRtTnGb2Ffr6qizBj56VwF7uu/8MX1R2ER7lXuk8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.pjuh46fsb4.dll",
        "integrity": "sha256-5QC/sQE87gACcpwc4CiTjbiEeYOIhbvc7F0QlEpzyFU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.kwiqufnp0h.dll",
        "integrity": "sha256-zPPJrdnOJA61aXWYjAIZ/EBWIOP5ukjINsjFZxFjdAw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.6hpvc8d7cj.dll",
        "integrity": "sha256-us6e+GteCq8ZxF0je2WGCS8kvvSr9VPHajOwil7gZFk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.ce35v253aj.dll",
        "integrity": "sha256-dHf/6NEd7JpdSoLXrxSGn7Ab4STnIt8A3+C6stiUJoU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.virw5zw98g.dll",
        "integrity": "sha256-VySmbr+7UI1By1/WK0/DN1EJQsIF3c7Hm6Cz6RYvh5Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.104epo9tkm.dll",
        "integrity": "sha256-PwvVEz3Fx9HPa9jeHz1P6qiF9HpjNW3yNPIDQDQbmvU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.qajpes3bcf.dll",
        "integrity": "sha256-8ts0YCyqOl0SJxqXeqvrOIuIJ6K1esoQxUh5pgKvR9M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.jqrq5ldytn.dll",
        "integrity": "sha256-FQh8TrAbl37q8sekhQtSa8FTqc1cIhYAlYS1nSKKq/I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.71kkhxi7li.dll",
        "integrity": "sha256-a1cRC4ud1+QqH0vXg79zo89zfCDkNEiCidu6LmSzazQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.3c374tri2g.dll",
        "integrity": "sha256-o1Q5mGSmhb1dMji5ESfd113tpHpJW0oBrrIIqcwPfg0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.15bfpo0pxm.dll",
        "integrity": "sha256-28BnAT7VCOzTR1mhbiz9h5WcoKtyGubWgEEWgAcc/cs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.zjy7lvra3v.dll",
        "integrity": "sha256-URTiB2lltvyl2VSL6jyodY9v8wr8NdmFtI07tr9ag+E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.m6fq56ldmy.dll",
        "integrity": "sha256-XlxWQxBNVD56xI5pM9/6A98IizSPEsdEzeFdHAkjbks=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.8nc9089jsy.dll",
        "integrity": "sha256-vOfJ7Eb7L4fRQMpXHCRJKr96K5aI6HQkr7Z+A7FCQ84=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.gn0b6mnzpc.dll",
        "integrity": "sha256-9BnOXOksROe68B1lVTCDXzmpznsEVsxLDEnDJTjkt0M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.u8rfyxpdu4.dll",
        "integrity": "sha256-ro1x7rAtM68nqef+kcgkZiaISm/TEPGRUrmNGRcbWfg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.g8f4retxt4.dll",
        "integrity": "sha256-ICm0BfF3tDEbrD5DdaQ9g1o+VXB9R1B8MZTBpEGqqo4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.tkub0af8jb.dll",
        "integrity": "sha256-czhaweq8s9Ku+zGR7g1vgIo72yj8MidCDad7n58jST8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.obvwwvolcq.dll",
        "integrity": "sha256-bN1hz05rtGmhrp3LE/zzX4av+OVbCc037RU4lCnMqTs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.8iebpgw1ej.dll",
        "integrity": "sha256-MFedRtOAF2Qz2otSuBQsn8xzOkhEWgijj5enz5cseHM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.da7i0hqmio.dll",
        "integrity": "sha256-mwZ7Ob2gAhvu29lkBoWqzAdcqkMWB8D7pM0/buuxt+g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.lyjn6d7ow8.dll",
        "integrity": "sha256-M7Hrfi4r3KW9uNFMZHtzMVjKIq3j1+01n/KKTERlU1E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.wtt0al6427.dll",
        "integrity": "sha256-/EqeBP0qWeOp+BWi9mu6vCZqat3K0+n/QLxzW7//Yss=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.75xdd437t0.dll",
        "integrity": "sha256-C5bfTJSZRS0C7+OI9zR2MUzAbKZ33YoeUTUnJaC9tSM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.xlfojzxdb0.dll",
        "integrity": "sha256-++stLWpSh9a4VZ44cOvQP6W/qlhA2nnZ3TKXUE1Lbpw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.bmzhji8mjg.dll",
        "integrity": "sha256-bbaXDKaiFkutXu0A2ZIxQQPc1ht4V3ap7WXDpZbcnxU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.nthtirx6qz.dll",
        "integrity": "sha256-hdLBLVxXZyOaIJ1Y5SN+zVXNltYT2psE/mfHBLTbi1M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.bqbvi3iyov.dll",
        "integrity": "sha256-IytLWJMhEQc608P2bmyvxCxLgTC9EvDP/0hC7c23iQY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.qonkf09ou3.dll",
        "integrity": "sha256-6rM2kXS58rkGNAD6WqpaWvD6ook48p5c1ZL+nLKhrMk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.ixistq8m1j.dll",
        "integrity": "sha256-1jNvE+rDMx9j4P1ZXFluGdaYZUOwC1oEX/abwySme9E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.ifhcatvkln.dll",
        "integrity": "sha256-PrG+tAdOA9Y9BoCxNKAwsomDjgctkRNWCgCLtRhwnJw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.z0uy5nwyl9.dll",
        "integrity": "sha256-fdIyQW8q6L24Letiqh9k83Syc5NhkVbB/dnjccCanNA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.bstk1mlsqz.dll",
        "integrity": "sha256-NSOsdecin8D1Zg0cUGTH9K/9x/MmUcfjQTFz5ZyqKrs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.btx7cev0ih.dll",
        "integrity": "sha256-7xpH5MVC9lhQzdj8i5OVbYBp4TceQbkho38VytoBxCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.cmbu8scpo8.dll",
        "integrity": "sha256-VI4N05eMIVcS4aGgiHY3l+1IMhzQn+SVF3KEDo/mQCg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.tnaqgjz8sh.dll",
        "integrity": "sha256-eSSIJLqGOD45LkzjDMULhGyqcElRe2TPuqF0YXaBhbg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.l1dxiblrx0.dll",
        "integrity": "sha256-t9Fnc5tEKKGMmUFohGiIWYoLE6u+EQocyeiO1rH2RP4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.ww47l2cx21.dll",
        "integrity": "sha256-oJElAst2x0cqmqmk5woYdFEkr+nrnMrbxmchf1DYFxA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.1cptfon06b.dll",
        "integrity": "sha256-gWSx5yYTYrcxuWEEToPXNnkMpFQcIg1A/DdbI+zaaQQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.ss87tcwu7w.dll",
        "integrity": "sha256-tGq/W5TaOdqNfnimQogQGp7OnMqiLl1s0HbOd811DVE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.ivz614dp74.dll",
        "integrity": "sha256-Hjy459dxjmhbY9gjgp+qnFQi85QIugjcqxVMpBukQuo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.5lc1klwx69.dll",
        "integrity": "sha256-B8IMtVaX9lnj21pySKCiNvDm7mQG3H6oWl3BAFkE26I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.ckrn54d9fe.dll",
        "integrity": "sha256-TLCmkywzvRN3RkyTKOJTOr8BSWf9JQCzQiqrJZDHoVQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.91v8ptoyfw.dll",
        "integrity": "sha256-HZyotELltaZG/xATJUcxnEWggT/HQHxZvL4i50iM5bM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.i9et2l781l.dll",
        "integrity": "sha256-dhOom4O/GdpnnygDVjLtnj20LigdQIxIt/zqXByRt8w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.no532vb8oc.dll",
        "integrity": "sha256-efLgjpCjusbuVDL/ED/rs8ZzuHt5w6KsV4iEe3KgrdU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.xnslvznumq.dll",
        "integrity": "sha256-XV9SqRTicVkcP9Dhpp8X9YwF4c7/pJLLpK9SJ4a0bb4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.8qy7p3ojg0.dll",
        "integrity": "sha256-cG8RZSyoKzrgFrj79LSv5Ht6DeETm0oI7XXeUAI2JEM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.3mufs7welc.dll",
        "integrity": "sha256-RR8eiJPgQj+Z6IaHeWgiAm0+SyqYLBHaclsRzE5lW9c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.0tmd6rlavi.dll",
        "integrity": "sha256-tJb0qDoYBGI9Sy4tmDfCJnsd8Rcy1eh51C8VqPTUJIw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.djz5bytyqt.dll",
        "integrity": "sha256-17ngrp9FYsXXU4kV/zFh/8LmqizYuP8w59CxGsu5AQY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.88vsj934yt.dll",
        "integrity": "sha256-GHS3fhnjxtE3BDFo9JWpMLoponnC4tywsjKlnKRjJrk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.9i9cyjqmre.dll",
        "integrity": "sha256-IWk+YSiLibUWgD94HvBgM/k9wgNCgEhbUQmjlVJ1XbQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.xmamyzp4ah.dll",
        "integrity": "sha256-WT271ESJ3RZKdN7XTSQDDbkeVfLkNtY9Kak/stD2niE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.vtbh9z113o.dll",
        "integrity": "sha256-I7tnNMgtvqtu7YYIcFzyaE5hToEvdpQELrQ1wRCqpnY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.byqrxdtgp7.dll",
        "integrity": "sha256-zVnmephufYKK7ubTVoAvd8gf0vTcPaOnCLrkUPe5T18=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.h851l202h7.dll",
        "integrity": "sha256-wc153QmsIVB7/raNrd7FDJb/Lton4JVG4Oaa/BE0CDw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.3by69vzmc7.dll",
        "integrity": "sha256-LyiGUTM5gMVmgfpRfbtY+eApXyPWJMrHbV9/HZolbQQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.nqrz075gp2.dll",
        "integrity": "sha256-L0M0WkPyyx4IEDOzacrJyfXJxEemI8nonUALGWBnr7c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.9g9p8k56jl.dll",
        "integrity": "sha256-GaQLAFEJrQIhllC0FheZDORHTKGhulaFfqLDP1pqXak=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.sirqn6htrn.dll",
        "integrity": "sha256-LFMbu7hB/3j6szfx+Dp9u6zOoPoRPv5unth5mhSjRl0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.wmkjxtx9sp.dll",
        "integrity": "sha256-OJRRfb5eioYIlsV5I1nmzjVYU+tNnf6XECOkMb+4SyQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.3f2pytedeo.dll",
        "integrity": "sha256-gRGolQxuaMrxDTAmekj50kvqT+JSfkigcLMRCt6U89Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.sqoql2yl8p.dll",
        "integrity": "sha256-PCPGvIHpOwni7eAxLTtEk78SyW9ryB7DExj/dv3Jryk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.dpzri4inw2.dll",
        "integrity": "sha256-ga/qMh7cHWJT8EKGO3AJx7AZH/bwTx+kFnkbeWtqNpQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.6tz9ln88lf.dll",
        "integrity": "sha256-dnGuXx/OP6qfFXypQ8ictZ8j33CpPEHcpxEN2Sc0X4U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.oea7qsk8o4.dll",
        "integrity": "sha256-kEV/H1tBD1f7ABunPljsrMd0w/KhHILTvtX9dj5pjCE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.rghg5x6ks7.dll",
        "integrity": "sha256-lZoV07x4C5vSSe9ihyqNjAmgUbjLZ8bIgL/QvvprxFc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.ml7xnz9ndg.dll",
        "integrity": "sha256-utfFmZHcufIMRb/ypUKUh4Va/UVF97LnDy1UZioV9uU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.br33cra5qr.dll",
        "integrity": "sha256-x+3IBGl/jNknI2SXFTlx2s97aRYWYtNIMRARNQq2zoc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.wgcsg43s04.dll",
        "integrity": "sha256-4AF7ZFthTI/RT/YM0uD7yYQD5VT/YWAM7ozvflTMbEc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.5wxbnu9gl9.dll",
        "integrity": "sha256-Vb9p161zlC8tbY/mviFG7lhDjgLJAL7Vs6X6jUkzgSs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.ox1x2ftvan.dll",
        "integrity": "sha256-9AmRqz6PYCnmEYyNAfpyVYnDJsKo5+JrIOM/bL0aVdc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.su7tu19dit.dll",
        "integrity": "sha256-/ODowiLvArq2GHFMBslNeIODuxjayIaAWdyfN3IMy2Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.8mhktbypj1.dll",
        "integrity": "sha256-0MCJinlAp6LQ1NxK9e5+LH0owLRTJvXGEma57wyNfzk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.gxertl74ms.dll",
        "integrity": "sha256-VKUSCVL+EO5ciEIDv35U+aaJ4HljFn4/ikp1o5bQUgY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.mku0eos5ru.dll",
        "integrity": "sha256-xsjGBYUsENEbt/8O35tUU79ytptQ3KYVFzT9U2DDuW8=",
        "cache": "force-cache"
      }
    ],
    "satelliteResources": {
      "af": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fq9clrm0e0.dll",
          "integrity": "sha256-uWJEYwvQQ6nX9M+aAncqd93MhKX8dgTA8AA/vJBhd+w=",
          "cache": "force-cache"
        }
      ],
      "ar": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.5yqmk4mlo8.dll",
          "integrity": "sha256-EwrW2A1nQYeFAI+pdf/rdkXormpTiEGfbOPhDHteIXI=",
          "cache": "force-cache"
        }
      ],
      "az": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.uepnzyszxm.dll",
          "integrity": "sha256-mtSipsQoQoWcIbnB4z7dQhfPKq5MYYCKrvJledSi9yY=",
          "cache": "force-cache"
        }
      ],
      "bg": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.n8byc1yifx.dll",
          "integrity": "sha256-Zz16Pz8c/J8h3afqXBecP32Mlc9xg78jIVtgHVvPtAY=",
          "cache": "force-cache"
        }
      ],
      "bn": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.feq5hlyfr3.dll",
          "integrity": "sha256-5xnEb+5zoBpBd3hPRsn+Pm5OUYNV1e5kk6MvGIeISdw=",
          "cache": "force-cache"
        }
      ],
      "ca": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.ngbb5k0u3t.dll",
          "integrity": "sha256-OXzg0ui6ZMmKECTr+B+T20aGDYcbmNDVWJYG0rDfFO0=",
          "cache": "force-cache"
        }
      ],
      "cs": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.zhj6j4a7kf.dll",
          "integrity": "sha256-yXTfhFtHEyfB0VnAl245q7HiAjLh1IjMm8xw709JSRs=",
          "cache": "force-cache"
        }
      ],
      "da": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.x0fanxr8cj.dll",
          "integrity": "sha256-b0p7a2GyZ8nAuEGZJ9k468iOuaGht6o62/969SkFszA=",
          "cache": "force-cache"
        }
      ],
      "de": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.ire9q9ukyj.dll",
          "integrity": "sha256-/rBvDk02gEUUX8K7pKEIndZM+uddpH5PHiTMqLH/cPI=",
          "cache": "force-cache"
        }
      ],
      "el": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.qrmw58mjqy.dll",
          "integrity": "sha256-RqD4pd6D7hYS5PiD2juMmTpwkg1txvp7DiqRiGpR4f0=",
          "cache": "force-cache"
        }
      ],
      "es": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.v35bd0k10u.dll",
          "integrity": "sha256-ZWQn1LPtnxnftjH1vuRodcdBeT6VzKyeejn8aIpjQXY=",
          "cache": "force-cache"
        }
      ],
      "fa": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.ymd5xm69if.dll",
          "integrity": "sha256-trILmOWI3VLYT+iuQSvc+dNAgHAH005TKSJRi/GgLeQ=",
          "cache": "force-cache"
        }
      ],
      "fi": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.e6k9c10uco.dll",
          "integrity": "sha256-Zn78upIm9FU1qIijY91Cg3WlIUXTg0STaaCnsBnN47E=",
          "cache": "force-cache"
        }
      ],
      "fil": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.6rhibxvcmk.dll",
          "integrity": "sha256-YilamMAnCnsj6smo8qwBi3rtWvQwwnzS6rgJlYlEksE=",
          "cache": "force-cache"
        }
      ],
      "fr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.2rqte2p0nc.dll",
          "integrity": "sha256-Ui2Pt8SAOvTnspL/7qbmkOACrutYdABIh4v2Md21aFY=",
          "cache": "force-cache"
        }
      ],
      "he": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.9i07i3j0kl.dll",
          "integrity": "sha256-UWx4z5VvJ/c/eIR5gyhosYxq0Y/qxbLUvDqOHmzkOZE=",
          "cache": "force-cache"
        }
      ],
      "hr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.k8lmvpa6a6.dll",
          "integrity": "sha256-/EftjMKLbNid5pjaoTwNWu0I5tsxewiweXoKxWyiEps=",
          "cache": "force-cache"
        }
      ],
      "hu": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.2i6cb9fu1q.dll",
          "integrity": "sha256-FjU3x8hLvXXZP24bx2bGqcNsczPsD4Nry0m7SuiZPL8=",
          "cache": "force-cache"
        }
      ],
      "hy": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.gg8g0v23bk.dll",
          "integrity": "sha256-MLUWoGBTPW61WWYboHzYreTpEXCVQWOUJXMu+JUKxxQ=",
          "cache": "force-cache"
        }
      ],
      "id": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.n7w0m663pt.dll",
          "integrity": "sha256-7Y4Jp/TUzfHJu95dlNn3Wao7zfswlBW8QuJSi5RDnjM=",
          "cache": "force-cache"
        }
      ],
      "is": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.cfol4jg315.dll",
          "integrity": "sha256-GCGPnniDywvGac8Q1XkKeyEap02JRYA3qQKHYsHV+C8=",
          "cache": "force-cache"
        }
      ],
      "it": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.knonbtwygz.dll",
          "integrity": "sha256-kNsxmaOFtkIDLnSlwjQgE0T43T7ShZwdnzZ3+B/ar6k=",
          "cache": "force-cache"
        }
      ],
      "ja": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.gnsyqrf0t1.dll",
          "integrity": "sha256-jFsVHof/urAFujsqAXlnv3Lqq0icKiqv6EoMJ+TJwaE=",
          "cache": "force-cache"
        }
      ],
      "ko": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.5hktbyoup1.dll",
          "integrity": "sha256-F0BVauvGKCK6UvKzR8R/+MCckqXuZDmh54fNHzODRS4=",
          "cache": "force-cache"
        }
      ],
      "ku": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.x4hveeub71.dll",
          "integrity": "sha256-gc5d5BZhRfsPXB2g18ZhZj16b1HnTUrBqY0VoQW1CnA=",
          "cache": "force-cache"
        }
      ],
      "lb": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fptyo07nfd.dll",
          "integrity": "sha256-He1bDKP0ZYPKjeByG5wDfnbVYukPRJvA5gTl00ZejfY=",
          "cache": "force-cache"
        }
      ],
      "lt": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.3h5rl5b53t.dll",
          "integrity": "sha256-d632CZtEdDxTIDap28qMZw9DlljLQ1Kbxem7DQvFsj8=",
          "cache": "force-cache"
        }
      ],
      "lv": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.z2hu01ujyh.dll",
          "integrity": "sha256-+/VIjCEFVUJi4HbytJu7hpVuZ77Q9eLTXw6O+ieLC7c=",
          "cache": "force-cache"
        }
      ],
      "ms": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.uvbuqwpyim.dll",
          "integrity": "sha256-Vn7k9d0la+r0cb5uznDejmSgKlQ16ogy3+00RjJ8KkQ=",
          "cache": "force-cache"
        }
      ],
      "mt": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.4h0pyfiykm.dll",
          "integrity": "sha256-qGyIV36YnYtNWEJY3A4hfd9lq7xmYSyjdbgegrq8z9g=",
          "cache": "force-cache"
        }
      ],
      "nb": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.7anul2tbeb.dll",
          "integrity": "sha256-oSF/gTk+Ot/aiSVvWlvgk3u6rnMF+EzWAgwjsTY+baQ=",
          "cache": "force-cache"
        }
      ],
      "nl": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.42zmyexl9j.dll",
          "integrity": "sha256-BPtRYQHa0WWRXPZOSkKMabdJLdfEe2OEE5dlJd3Dn5Y=",
          "cache": "force-cache"
        }
      ],
      "pl": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.dypoxzh5os.dll",
          "integrity": "sha256-m+kM0iBNPnSxmuMbhZsbGhJhXh5/fa9iQLyAho0jhUU=",
          "cache": "force-cache"
        }
      ],
      "pt": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.7t2d719hhn.dll",
          "integrity": "sha256-eyrexL/5JEdEkPzS5dvYDyOuaWXT2GLlFBaVYyL33Os=",
          "cache": "force-cache"
        }
      ],
      "pt-BR": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.tjtvtrn2sp.dll",
          "integrity": "sha256-WSA0x0ILfR163UCdjaU+8okJWWOUHpbFzfqXICTL4rM=",
          "cache": "force-cache"
        }
      ],
      "ro": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.q02h177ta7.dll",
          "integrity": "sha256-hg5jMri35aWfbDsVv1Lb/IPPGSdzA94xT21fsHLc3fE=",
          "cache": "force-cache"
        }
      ],
      "ru": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.cmf0rnu63z.dll",
          "integrity": "sha256-7Jluvs05Xi7IB4HjPWJ5b7WD/DRg37cNli3NZoolc6w=",
          "cache": "force-cache"
        }
      ],
      "sk": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fm0dk61sx0.dll",
          "integrity": "sha256-Z8DIIbNKkWchXJhY+YZu3xt2qucYjgvzjTQpUk+EgO0=",
          "cache": "force-cache"
        }
      ],
      "sl": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.nex1poieil.dll",
          "integrity": "sha256-Xxi+a/5GhLEAJcTiYfNCPTjmBisgY2Tcer4GFaGxBco=",
          "cache": "force-cache"
        }
      ],
      "sr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.4u8pwv1iqx.dll",
          "integrity": "sha256-/ITNoHT/uI4fFNFl+/0GvX5GeTpBVB4LZOLLwBVRi/o=",
          "cache": "force-cache"
        }
      ],
      "sr-Latn": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.o19f1yvljx.dll",
          "integrity": "sha256-jHRDKEdQpTpDwEIHr5/aqdcujTM2UjHtw3RwvdTHg1s=",
          "cache": "force-cache"
        }
      ],
      "sv": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.61n98p3ayi.dll",
          "integrity": "sha256-2pjTShI2IwZRFSLUTI0bDpvFiiGR0x+wq+bE+GfWBzU=",
          "cache": "force-cache"
        }
      ],
      "th": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.2ooidfj59x.dll",
          "integrity": "sha256-nnnzs3M7jMCIpuH/oxVj2RLpMNetIih4gJi/M74thDs=",
          "cache": "force-cache"
        }
      ],
      "tr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.tjiww6a62a.dll",
          "integrity": "sha256-F8JuSgRS/yi6O397U38M8W3c3sErsSZDnscrzK/mn68=",
          "cache": "force-cache"
        }
      ],
      "uk": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.uyzx0tww9n.dll",
          "integrity": "sha256-Vsh7kvkyTKY+XuQHCkI8B9ooJQaLhb+4XqNMRMdLxPQ=",
          "cache": "force-cache"
        }
      ],
      "uz-Cyrl-UZ": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.qchq4yo3oz.dll",
          "integrity": "sha256-WmYL3Ia/WxQrTiF/fe/d5WGkH9g/DhbWdlNdWPA3XXc=",
          "cache": "force-cache"
        }
      ],
      "uz-Latn-UZ": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.l3kw1pkm3z.dll",
          "integrity": "sha256-wZJgI5C/Bg4tMuVfUZuZxKsUdLaolKfk9En55BQRXVM=",
          "cache": "force-cache"
        }
      ],
      "vi": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.zyrv18e7op.dll",
          "integrity": "sha256-pf/HkEEvOnP0RHLxBy4zFsPwuMYarCYF/jdXvenHc88=",
          "cache": "force-cache"
        }
      ],
      "zh-CN": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.9pm4a7osml.dll",
          "integrity": "sha256-E27f4sDd2Bq+p+3Bpcam78tWCc+vsxaara+BZ3AoO3o=",
          "cache": "force-cache"
        }
      ],
      "zh-Hans": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.r30zbzax5c.dll",
          "integrity": "sha256-ud22oUj3a7fRjGo7TjcBvI5r71xvLCmEuaoZOKcve8g=",
          "cache": "force-cache"
        }
      ],
      "zh-Hant": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.ntilkqhebn.dll",
          "integrity": "sha256-ix6TGUfdvQYCw1gESokOAXyI8O47QCh73JNaUq4NeeY=",
          "cache": "force-cache"
        }
      ]
    }
  },
  "debugLevel": 0,
  "appsettings": [
    "../appsettings.json"
  ],
  "globalizationMode": "all",
  "extensions": {
    "blazor": {}
  },
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "Microsoft.AspNetCore.Components.Routing.RegexConstraintSupport": false,
        "System.Diagnostics.Debugger.IsSupported": false,
        "System.Diagnostics.Metrics.Meter.IsSupported": false,
        "System.Diagnostics.Tracing.EventSource.IsSupported": false,
        "System.GC.Server": true,
        "System.Globalization.Invariant": false,
        "System.TimeZoneInfo.Invariant": false,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": false,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault": true
      }
    }
  }
}/*json-end*/);export{gt as default,ft as dotnet,mt as exit};

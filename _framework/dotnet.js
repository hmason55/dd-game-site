//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"8e0f8ed2312954727f8919d7d1c2f78b483b4ee7",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-Z27fpSv7G8i42tGnIq2Uw0RjprzRUMUHkRLC+OR+C1M=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.6ilbvndvcf.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.v2rwe8u38b.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.3bptkeu1pi.wasm",
        "hash": "sha256-X9HNNO0PWod7guUohAjrSJMj6QxYLCm+SljNYaT8Nho=",
        "cache": "force-cache"
      }
    ],
    "icu": [
      {
        "virtualPath": "icudt_CJK.dat",
        "name": "icudt_CJK.tjcz0u77k5.dat",
        "hash": "sha256-SZLtQnRc0JkwqHab0VUVP7T3uBPSeYzxzDnpxPpUnHk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_EFIGS.dat",
        "name": "icudt_EFIGS.tptq2av103.dat",
        "hash": "sha256-8fItetYY8kQ0ww6oxwTLiT3oXlBwHKumbeP2pRF4yTc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_no_CJK.dat",
        "name": "icudt_no_CJK.lfu7j35m59.dat",
        "hash": "sha256-L7sV7NEYP37/Qr2FPCePo5cJqRgTXRwGHuwF5Q+0Nfs=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.gaylcvzex5.dll",
        "hash": "sha256-2Ljo4BwnQDQ8AgujeqHea7cLTJmpOqq1oI89sMWMk9w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.b730hjd5bg.dll",
        "hash": "sha256-N/1DDTVAZCwEWZnNnIpQWMt48zxJViPjvPpieD/hceY=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Blazored.LocalStorage.dll",
        "name": "Blazored.LocalStorage.somf8dykn2.dll",
        "hash": "sha256-ZGOhicUlxsmaD44LUlk9QGefwrharIvp8bP1r4UKlPU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "ConcurrentCollections.dll",
        "name": "ConcurrentCollections.ud9az6afbl.dll",
        "hash": "sha256-/naMXE+KLBCbTgZ32AT6ZVwXJsNZV2NfZtwe0LP7dzQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Humanizer.dll",
        "name": "Humanizer.fa3m3j6lp6.dll",
        "hash": "sha256-J2ntgmW2kaVILHJQbtJ03FJEb6FkGZeowSxm9bkmPTk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MessagePack.dll",
        "name": "MessagePack.nwp6oqzhyc.dll",
        "hash": "sha256-p/jTCo5vShtEW/Z1JiGkp7H0/xH11Nxi26DY19aZXjY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MessagePack.Annotations.dll",
        "name": "MessagePack.Annotations.upko4j8wxf.dll",
        "hash": "sha256-HlHgh5h7yFflWGPrTphsLy8L8XIw6ywkPl3CXDTnz4Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Authorization.dll",
        "name": "Microsoft.AspNetCore.Authorization.oq5uxtdhjp.dll",
        "hash": "sha256-kN00uGREJYNfiokzpvxJvqVMLJIcEqJazSSJLWc6MLg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.qk6pyv09aa.dll",
        "hash": "sha256-dpRK6M3VqUrsjlVhJt232wSJHTjB7FjKV9GxmurM6TE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Forms.dll",
        "name": "Microsoft.AspNetCore.Components.Forms.y4bveqxp5c.dll",
        "hash": "sha256-IhAMH16nza0uY+rBavp6OH7N4nuLuUOZYopRBzFhxYY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.z1zvm6yvyc.dll",
        "hash": "sha256-N1EWNKzrS8Qj42oEqmNUfW8jvwKz6weNK3pV+/JoBZI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.jxu6js1agj.dll",
        "hash": "sha256-F1Uv3JNOsBBeVJoad9CLUx+R1xjNKfivGHIs1OD5rZ4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Metadata.dll",
        "name": "Microsoft.AspNetCore.Metadata.lchk59vc8t.dll",
        "hash": "sha256-K5LX7SfB1WfebdwoUh9jztvQtglIp9Xt3biWIJ46Tls=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.qbzs30cbc6.dll",
        "hash": "sha256-KvvoEPSYjevYwAEQU+LFt1H6zs0hGTP0i6D0/8EruUs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.emcn1svvzg.dll",
        "hash": "sha256-puBDq8M5tzQb99q/bxAbwW/V0Q3N5nWHrGQY9/1mFfA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Binder.dll",
        "name": "Microsoft.Extensions.Configuration.Binder.hbdlole60x.dll",
        "hash": "sha256-U90dKS/pnZTAPUKmeD47NgTChHWAx297H24OsUGQSdA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.FileExtensions.dll",
        "name": "Microsoft.Extensions.Configuration.FileExtensions.p7rb6xxzlk.dll",
        "hash": "sha256-hRjK8fOIjtMxiKkkle1RkFlk7GapFsCdNGB4756KCwQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.t55w3z4j0x.dll",
        "hash": "sha256-387Y0ydmHAqe3BsxItKMClItRdgk1kghMy3LEjK9Pqc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.22jl3igfrm.dll",
        "hash": "sha256-un5FpThnv89LEpl8LVZc58DqqVldK1CcVmBbRqKCKLE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.ft64px20h3.dll",
        "hash": "sha256-fQfiWIolauWYOvai5k6sYDy4HY8iTb6l5l7ajWclgXU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.dll",
        "name": "Microsoft.Extensions.Diagnostics.b0lmh348oh.dll",
        "hash": "sha256-2/Btfz0pN0AKxwby8EkVSamqSk9v+d7KYq2S7CmubC4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.dll",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.84rfodwuex.dll",
        "hash": "sha256-+NyD85+nqleDP+BsavFJs8BQMlv9qfIyVVe4Suf9laU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Abstractions.dll",
        "name": "Microsoft.Extensions.FileProviders.Abstractions.jk0trkog1k.dll",
        "hash": "sha256-I/OrjJK0aHtTRUOV07CfCUDDaSAlsgIIgndRM9AtDKw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Physical.dll",
        "name": "Microsoft.Extensions.FileProviders.Physical.a9hsurzlin.dll",
        "hash": "sha256-oh+zU88GhWzbi2Q7kn2C5YjNj7PQ1ELcizjNksFnlEE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileSystemGlobbing.dll",
        "name": "Microsoft.Extensions.FileSystemGlobbing.ilqalx7n6f.dll",
        "hash": "sha256-Ji4kL53SaEIoZKEoLZpD5Vxf3ElyXlnYqPUPcYu4gT0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.qve7dg6y63.dll",
        "hash": "sha256-FpRN5oLx24BbiqQUjhZ9XBamOnX/jT11PLmjodxsY/8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.w8l5l5wdax.dll",
        "hash": "sha256-0KPM4MryvdpK99VBNaMhtFQ4AVlH/ZAtfC5qCjBzDFU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.jlc25ghtxb.dll",
        "hash": "sha256-uZ4JEesYoYGZI9gS9uVCS0pjtpWb/N4m2PICvIqegH4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.ConfigurationExtensions.dll",
        "name": "Microsoft.Extensions.Options.ConfigurationExtensions.8jj0486ngr.dll",
        "hash": "sha256-5CaKov/6Y1sopKsRqix1t0QieOEumPzXLGd5I8Dq1S4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.qp8b51rlpl.dll",
        "hash": "sha256-3rlRyN4wktgd1EWaxOUbgZiD8w9kiKvEv7kV8eM9sYM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Validation.dll",
        "name": "Microsoft.Extensions.Validation.3tjp21w3lx.dll",
        "hash": "sha256-h9aFjuJQF+8U/AEGCF+kQxBd+3hZCnLxNE1qO82ZjJg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.zgaqu7rowj.dll",
        "hash": "sha256-fT6prdmIOniUNHSvcU37CFtIxJW3oVWwLQDrRvDSRHo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.pz96cgmbv5.dll",
        "hash": "sha256-FWS9NUw6VtNfMYswsGO1bllWTcjKgOEKIPQSKRT2Im0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.NET.StringTools.dll",
        "name": "Microsoft.NET.StringTools.3qbrf4v2ki.dll",
        "hash": "sha256-5RyGeP1gKiHCSbNp6DOWYBmTUTJHb5Q02olr74CLo7E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Newtonsoft.Json.dll",
        "name": "Newtonsoft.Json.m2k37x25ww.dll",
        "hash": "sha256-oowlHf422IHp4kYuFxRBuLDsFW/j9FJgLJFJsbnv4Fs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.dll",
        "name": "RandN.igdvdcvnje.dll",
        "hash": "sha256-4uIYrGkV3qVOE78ruJrcQhRJFxEHKU2NP9u6vxbY34Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.ChaCha.dll",
        "name": "RandN.ChaCha.f8q0tdh2u9.dll",
        "hash": "sha256-MVoP4+5aN5jwTaONCQLhVMpdDSD3P+j71WobYR8VT1U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.Core.dll",
        "name": "RandN.Core.a7v6xh2d9r.dll",
        "hash": "sha256-dugzkjx1REZFNMa9tfg4FZ/B/bzqNMRJue2TSRkVUSc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "RandN.Pcg32.dll",
        "name": "RandN.Pcg32.swab6fbpfk.dll",
        "hash": "sha256-BKI1U25rlHvUTxLdr+t22Mnfzr+3TJc6xg87tSuGfvA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Serilog.dll",
        "name": "Serilog.20ssqycj0n.dll",
        "hash": "sha256-PuF3kLG/AOq8ohdiiN5sBYl3vFsH5tmDnPaohDPXIxE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Hashing.dll",
        "name": "System.IO.Hashing.ls5g0fz3fz.dll",
        "hash": "sha256-VQ0QuwunhQV5FfsOy8aj6IAv3uLirCLYCWZpHMsR4v8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.xuasdlcb45.dll",
        "hash": "sha256-+UZqvueZ/e52u0JGL4fxKnFgpyLj39zC4s24dUQWJxE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.xntp8bipbs.dll",
        "hash": "sha256-kyltsnYpbnLKb6K0jykuKnFpcDAPHi1oaKv9ZoONJto=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.story77ody.dll",
        "hash": "sha256-cAR6z6nevdJ6qVc/g68/HvGOn88USy/xvJJW89nJsYY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.822l769m11.dll",
        "hash": "sha256-sEzIsfABvP8zmwI89ejXlp7WAnJJOZFVkuN7QXVmUKU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.4lllmz9uxy.dll",
        "hash": "sha256-eE1sDwMjGTuDwpULQfygg8pJeaOojWMbu2VCSnySStM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.38pknq0rv9.dll",
        "hash": "sha256-TWQbc4vxtUzmz2x8qNWNlOQeKLwnsTjkDVbP77hdKCA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.o4pip92uka.dll",
        "hash": "sha256-SJNso8ZGXpGogNYs3RJBWccWcSytaV5owWZuTr/NXUY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.rcvfrtac11.dll",
        "hash": "sha256-e3taVKjltzxl8qsZym51EhwiFhlP2Fl5ewURd+e4YNQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.oqyc3pr31p.dll",
        "hash": "sha256-4JHm58H9v3hFvPoKVKgJ8tpYc7YV+im1YKA3ETQXaSA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.73bsz0jzva.dll",
        "hash": "sha256-IxqdLvSDlB18851GM3CDfB73eGqVxvValg0QxJby/XI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.0x0vhznz3e.dll",
        "hash": "sha256-nJzp97AtRwarTfyMFtliEif3YMcBwv4fAA+fgUlqN9o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.wnzifxvarl.dll",
        "hash": "sha256-DIgN5CzMeuYVuoss4BgD6mftysfWjLVd0XlX8YP6Pj8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.7b1lkr6un3.dll",
        "hash": "sha256-HUYo+yFLxBP0OZx8i8XUGdMB2+MCY4arNx87KYXFJ7I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.u6mltd9x11.dll",
        "hash": "sha256-lsRTbZpx6tNtdVktcgZteBO++wSaoKTTyRqYi4BaCAA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.dautlhsiq7.dll",
        "hash": "sha256-lZdQcmXGZSx0s8v5KFw9517zfpdURGySSTtHcD8acFk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.gc0wvey6qx.dll",
        "hash": "sha256-QB8WW9FKLsWU1MpU8bXCq9+EGGvjiqOrUK+7hXml8Ys=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.6gguaxqj0q.dll",
        "hash": "sha256-OoNcetS53JuGI/MXp1sDJXVKOIAvz3XodkgSFSTzzK0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.m26fi2bnt7.dll",
        "hash": "sha256-ftbDgljTxbwC1N8hc6wGWPqsnHhO0dlrdLlBZhZJnqI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.48m1sbgmev.dll",
        "hash": "sha256-PLGHMH3fZpXW+94MPLsjyv082VaFGTrveqfxeCp+Nzo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.vh4ua2xojk.dll",
        "hash": "sha256-vesaaJM3kqnqU2DzVBtRaX3Kgyr0qgmKjEZKYfL20tI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.fn3mm9j91w.dll",
        "hash": "sha256-+8XSsPWBich1JPQ96WxiuS19iqg+PHON2dkdDEZm7fY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.okf4q0qdx8.dll",
        "hash": "sha256-KJ5wmrtptJD9p3qpAHcYHqXCCJmIcWF/U0HWNQWb8YI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.xg48y4j0x8.dll",
        "hash": "sha256-XxX5A9YHIc+lygZ2a1VisO2bqxwcEiyTZHCey2W1kbE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.xutdjtv9xj.dll",
        "hash": "sha256-l3AKOyW4soXBOCZXJFhbvy23wLx55cUmDMdZLHHPf/E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.063l2e7tbb.dll",
        "hash": "sha256-SO1EU0SqsSsDnd7WvAPziB+dVcf1LdTIwFqH+KVQTkI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.t02c99xvb7.dll",
        "hash": "sha256-PdJgxnHIOwNtlCFc4N/vDY6nV58t3TtM3cX1EcdgImo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.rawvc7o32x.dll",
        "hash": "sha256-Q/1ekxsdojR1gz8RBp0optYLyq0ds0M+zJxESw59UyY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.xctrum54aa.dll",
        "hash": "sha256-YRMFMErfg5UEEW0Kfv00ayCMXmdAcu0rVP1hOvYjML4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.xs2o2sk302.dll",
        "hash": "sha256-z6kxTuR0lMCYlrJEOTNmJJM1zn0saPeeFRdQLW3IsRA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.cugtknfu3p.dll",
        "hash": "sha256-hLoOaruihRgTUacCZTNrYIrg5f/N0QKYUquK9m8ZWYQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.x1xg5joa0e.dll",
        "hash": "sha256-VVwGDYTC2Q4wGWZ7wRFavZEunoJ12wfZIx21bfa7LyM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.l1sh2ian7v.dll",
        "hash": "sha256-xy3PCNjmOEjM/KQvsFqP5M+KkD9a+cMEesxwri1K+UM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.s47h3747lj.dll",
        "hash": "sha256-XJ10nl2bJlN4gsNeN5rdWIm7UDLzFmsUk2U0BJDnJKs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.u6h4a4ne8r.dll",
        "hash": "sha256-+gWc5P1x7uWJNGY6Dg/ecVSsEwPSDtzeXsnvX//4vCI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.22mhaua2wx.dll",
        "hash": "sha256-6iuD1NP0i6I8BVUd8Xu1A6WZFOhk/V95wUSfz8KF9ec=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.71zm4ctzzv.dll",
        "hash": "sha256-JeECuVwt+V70gMzaQmazOPh3+mLB3Xj8tpcVnlH4nTk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.t0rif82r45.dll",
        "hash": "sha256-TcjpKci2f7Q9cAoxMCDFD25kJbYY65wi1p+STR+Scks=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.ll2i008tek.dll",
        "hash": "sha256-qZ3QKZlQzrxtXcG3eJnfkspovIR312bJrpfEvmGSlUo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.xhug5ybpsq.dll",
        "hash": "sha256-myRs7Vi2tsjlPhF9NTiQh62L6i4hCOZ4NzK7wx3lF2I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.qqekktmggf.dll",
        "hash": "sha256-XvAAMVBmG2LXAZfML5U6ftbrOQGtZfZNf/Rn4Ugxik4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.t3gbttciyp.dll",
        "hash": "sha256-t8hgqcJ/v4nTJg31wNkBHlhIWYXgAnYi64Ve4u1NER0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.k4u9q4e365.dll",
        "hash": "sha256-PHUM8IfH6zuCgE2w7/qMXvmCyr8fFdqZmPvphGzTVFg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.pwn3ybum0y.dll",
        "hash": "sha256-N5a7O4uYZc2hDsv1btwAHLYODr337UsEGn6vwjqpCvc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.7jumg75e2c.dll",
        "hash": "sha256-7V8GhaV5skzSZ+GxZhOeHj0U9Gybis+N8RojcnsmKeI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.mu2td95ye1.dll",
        "hash": "sha256-rnTTX1gjMYc6nyA3tR3AuQo8Fc63W/toZzhGd0zhrlc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.qetsembpqc.dll",
        "hash": "sha256-Hqa2Va7DHbn5Dt9oyIh1XBjVKrF0oh6ZyOO/2cT1KMs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.ocx7fekye8.dll",
        "hash": "sha256-aDRlLnCPkNDnDwfujNw4giWLV3VFlhQVKyBZyEFYrCw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.yj5hfjmetx.dll",
        "hash": "sha256-ok61Zk2C1U/o0NOLu2/xf9Rn7l/mqMdjuHbOR1iCyc0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.2x4u8jjt2s.dll",
        "hash": "sha256-muc1a359RpaBCagBuTogcZhGjvETc3c4z9mc/3Z1oVM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.avpwbquni3.dll",
        "hash": "sha256-CoIwLKIadtG61gfZ08WLs0O1gMfo85Bp47wJ7u8zxWA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.usnh4bek5s.dll",
        "hash": "sha256-vgItGhTmgowJjzEQp54G7pK2m/xsqJs/4NqkG1MammE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.uav7d35b87.dll",
        "hash": "sha256-yjxBkkGMxkfsYSbCL/k2kiw2U84QyUnwjsiE7L06pMQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.g93w10d3jn.dll",
        "hash": "sha256-hAley/g5auQufcMjAvugn1APU7aVq1IgFT48YPXWxVs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.257sm4bnx1.dll",
        "hash": "sha256-JukUWb6ZIicr0/wSDTnVMAptST6cOLfJxguPTCkFYh8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.rbdhq1wvp4.dll",
        "hash": "sha256-SeTZ48lq0SXgurAnDib0YYl1b3t7ETVkgXkXpMmQFcw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.hlsqblodcb.dll",
        "hash": "sha256-RTJ3ElWMoLsO/pxHhrXsoTFQY6XU5jgTQ8KbsMdnTMo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.ew9coy80h0.dll",
        "hash": "sha256-4uIMe7iIinjQsDdY9u674LThEue/n9H2zH0OsMULO9c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.mwalksfr5r.dll",
        "hash": "sha256-iqGy4Bd1MyD/jwYLlzBZ98SLtHkA1pen4IyBIQzTzp8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.xm2kd3ehxn.dll",
        "hash": "sha256-p3wSTurcLQa3mit1xjOMD7Is23dk9ycD2mELpAv1taw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.vp875ggk11.dll",
        "hash": "sha256-HXNtayoYi5nUqydtRu2pmBOH6hgTjiX6yGwQ6UgFPag=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.q1fn1svfvj.dll",
        "hash": "sha256-7uxX01H6XnMrbJwTgO4YTjh8mp1YfnUq0K0AolulV08=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.0i3xxa5u8k.dll",
        "hash": "sha256-CHchhtSSom/5wEk/815K1/Kl3249N3UzZBIKfHlDZGE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.j4k1ek7x8h.dll",
        "hash": "sha256-3ZVX9WIeWd7dRVnUJzIX7Ta1Fg+4WRfwayLYh9BPNOA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.qemqvw2wo0.dll",
        "hash": "sha256-Du1vzLh5xvvU7AYVG3sKDZqLZ84qi4D0RxS8DLdQHpI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.iiap41lqcm.dll",
        "hash": "sha256-evmlJJeUn0pXznWKLd8sh9aPdVy0VIyWKf6mbmgwpik=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.9wv269ar4o.dll",
        "hash": "sha256-+fcmqsO+HtIJyOKFs0x6hWfi2C0L4BO+5uXAD4q1WBI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.6snbhmenrp.dll",
        "hash": "sha256-JrY/a7cKNDMWm5OkeW9SCWTLO7qeas06jFwQiGyg630=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.aks1zz1bxb.dll",
        "hash": "sha256-JnownQckbIihcq3zkyQ8kAvPlxYsKqWJOvapXhJc+6w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.rlsney7d20.dll",
        "hash": "sha256-ccmZI2ZbVs+EkuS2xZRChwAfpxgdte44e1jfmu5xPRo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.xxzr93efeb.dll",
        "hash": "sha256-S9wCUI0wxNPS5+XoY68irkDdfRd+kBTPtgh7f7zst4Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.v68m9kn37v.dll",
        "hash": "sha256-93sjyTe8hHQOs0nKkWvnuZoVzacycecO7QfIeIwiFPk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.iiqp10mvbv.dll",
        "hash": "sha256-ehNIeOSVSZIrinxF8NfaFFNSeJwqdz9oe12Vq63Je7I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.9f7593qy2v.dll",
        "hash": "sha256-1WlUiNx8xrQ2E2pNIn0FHcRfp71BRhpU3Te9eifG39s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.s3sthegi67.dll",
        "hash": "sha256-eKN+AY4rdM+Nfr6Z+ZCYFzPXK7ODJesLvZbJLTnvFKw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.iyo4v28jku.dll",
        "hash": "sha256-pqH5BmuQ42D/S3OmwfzCFqOzTQPfnNtmtKogd9602/8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.6bjiplk0gq.dll",
        "hash": "sha256-Qp+SXUd7QbpXguG7dQijQNiVrAIOraqCtk2my3zOv8g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.m2i7a1ukf3.dll",
        "hash": "sha256-PiX8bk+rtOsMQV99UZHoGo+TUyCyka7gBVozxXaMsrM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.c2ocx8x6mu.dll",
        "hash": "sha256-1HUQIKnE/j5qP9dqsMIrQZxkwO1/u77bJIsoBJlfUPc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.lexxoismin.dll",
        "hash": "sha256-o/jjdJjFQr2DTay3SfINM8GewyFeP8VE94KJj7qZBIY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.v7g8i5mc27.dll",
        "hash": "sha256-5RWzVc5CR4GUNJqFE9qpMwv2J8erhSQP1VcPyTUloi0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.x8qfvzybkl.dll",
        "hash": "sha256-of3+25r5heJ5B2/LAjoJa2Atv67xKsfh3KCnIMEF4ig=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.2gsni3zhk8.dll",
        "hash": "sha256-wp0TC5GVMjERyLpo37sFe3fdsS38fS52J7uaDldYHt0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.w1get4i3ta.dll",
        "hash": "sha256-xPU6Oew/vQc9d8ni0bXB/H2sBML2DzgVIzAI/lFR9Xk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.a1q6ys8xji.dll",
        "hash": "sha256-siRQPLU3xMGJhoSpHgTNZPvC/YllM7qRmQnQOhsXKiI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.jtgdsf3ops.dll",
        "hash": "sha256-Z/4CpGSvfsppOh6IL1e6/S4K7pv0/fB2FNW4wSWpNAE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.w0jyhho07i.dll",
        "hash": "sha256-MFbG5bVv4n33uA9/1cMjhvjlRshyx2q/ObfAB6d+0Kg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.zyidfe47by.dll",
        "hash": "sha256-SwgCzoHJeeky5Ame6zCervGBznMVHxy7l4LvdrquzAo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.9awgc58wbg.dll",
        "hash": "sha256-cUdwF5Z26JV26HR04Rzyayz1lMGV8GvuRMERJlkg2+w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.empmyk1xc4.dll",
        "hash": "sha256-ylKyy5MGqNrl/kCf2wnHSKwkK7mtvyabFhRyPEXF/5Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.qdvg2jn55e.dll",
        "hash": "sha256-3iCYmDF7ISwjW00BUyW61PVVuv4QP148oZGG+2Rw6H0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.ttsccbsygo.dll",
        "hash": "sha256-8fSbNsXNhZRWaqFM4GChTjdc5UBD1HH1c+f+ZScWRW0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.8v2wnud1b8.dll",
        "hash": "sha256-fGo/y3ln0AfwvwVjWy/6xrlI9G4aL7kPaa6+TY94rIA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.pb6djwlc4e.dll",
        "hash": "sha256-u9vn4d9Mpf+fN+szisj0uxPFcujZI/mcJB5WgQMfUfE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.dimlhzqc10.dll",
        "hash": "sha256-y930SD6s/luU2E1r2xqlKFk4on9lB0EoOucYbZRBikA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.1oauhhmh2u.dll",
        "hash": "sha256-gcaVBWxWugB/tvRVI9PBxcgTIreunMo1OvDNb4Ri1j0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.d0neu48wki.dll",
        "hash": "sha256-A6aNI04PXoT1gGPL8eMFd/bON3c043D2ZfD2yBMCy6M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.q0772vbst9.dll",
        "hash": "sha256-Su1nDzXMk1VHO/gbSxgoALdl+D9qHB0P41yIed7h3nE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.lvvty19nm8.dll",
        "hash": "sha256-oZx8O21t+i4qL2aNoLNFpNtQB2ZegtMjuMdSmtU6o7s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.2xioh42a64.dll",
        "hash": "sha256-OqlN1wy4MHnGNL675GyKm/Dj8p+dyxL0Gtj/NOGp8LI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.cjlr91s1nt.dll",
        "hash": "sha256-yPIDdIhljv5Fl2gxx98xu3GxIM8RegP8RV5Hu60SBk4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.o14q7pvx53.dll",
        "hash": "sha256-BM4lK6QinL6srZV0P9eBWn/LLyOTTle9Th/ezmb1aic=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.nr6kd5v1dz.dll",
        "hash": "sha256-vQ9F2Y2Ez4DLUMPH5lRzrFwdveI5vKjkiD+/9mrUUhI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.r0of62qi8j.dll",
        "hash": "sha256-pap5qnKUayO02n2zdb4bvapnLermc9fOdxgwI93x/C8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.5rcwkfy92e.dll",
        "hash": "sha256-kZiROF2robVrUJIdbEylQgjYOAll9o3Qvj+pv2jp+hI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.900uo8bwun.dll",
        "hash": "sha256-d7z2UkL4833ulM3ms1IGbmUFvU7vM8TdQijszKlfFJU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.k9rtvef8t3.dll",
        "hash": "sha256-uGluKgBPamGhuYlnbbs+KVd5HsHJgLLalvWebSWGaWI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.mr3pn4seww.dll",
        "hash": "sha256-rtmINJCuWVmAyDVN0X9qWdLULIQw+MNAEsyIDRyTS/g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.gf0w1nt9io.dll",
        "hash": "sha256-1MgD1lBuGEbCacx0HBTH5Bl9vkDT3A0Py6MQzfT+lCI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.wfy17v5ijy.dll",
        "hash": "sha256-nHelDqN+XAYoD1/CqMUaa0YB2WIyjRKsPmU58O7F9ns=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.gtlemobruq.dll",
        "hash": "sha256-9Aua1X0nN6NNY0EKXZ2IL7rX9FSbVi14k/8tmM3lPWs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.0v8fyc7wa8.dll",
        "hash": "sha256-ZKMSWfBYHSrejuL1sPU9L5NkmS6hroAp3RGHLLf61Hg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.yr5l18m0xs.dll",
        "hash": "sha256-fjE6d2Nju+ZgvbbUlCPEexvhJMvslOOkaQx6ZeCCsQs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.sntlqd7k4h.dll",
        "hash": "sha256-mFhtngeXhIf6Y0T9dqRgL0wSp7uqm6Z30oBmrQp4YO0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.xbrcy2axc3.dll",
        "hash": "sha256-o2DlSNWcSNT2Kz1UjwGxlCOmLOkCZVxIkq02s1NVEU4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.gdojcwsqxk.dll",
        "hash": "sha256-JE7fvnfOGWFuc9yGyGAohGiGEBYbkFGxfS/rQrC0mec=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.snkhdjvids.dll",
        "hash": "sha256-KLTr28UACx3rEO+roMxA8d0SVfeWIv1rnb/NDe6XRMY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.7yy8xj99jm.dll",
        "hash": "sha256-7x+Beals400EYcuWfFJY+GDpRAA5r8BdqmbjnO8pVrk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.t8v7abh4j3.dll",
        "hash": "sha256-7f9SEMNILeZwKlevC0j85TAdGdjUF+LMmEs1vIrq5zU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.7kv0cbyfvc.dll",
        "hash": "sha256-xxceqpkxsnRJkxuuxIC7yVcQA1RwRqh/GzlU/VeH/rk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.tf5z0merjc.dll",
        "hash": "sha256-t0H2J7RCWJPjJUEuEc4BoFjTkc5+Y49ZVFyp0jdkEQs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.9i9namvjvx.dll",
        "hash": "sha256-4aFPbbS0lFsSJxlSS66Ul7Yc7WtHImebb6awxw6/qLs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.fwmkhx1m7d.dll",
        "hash": "sha256-7xUlwhmzRl0kf0wku2PRSr8BU20yMScytbF+hHoR5ts=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.9c2uhnxjgz.dll",
        "hash": "sha256-p1smzPl3GYXrcsbkTrYHwPV8Iwv3ac1uDephs4kzjyE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.v7apd8lpsv.dll",
        "hash": "sha256-+9wcfOIhzsRnFZcGIVtOR36N88Z1LbFZV57WvlvLi28=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.afm7o92hye.dll",
        "hash": "sha256-Rqm2L5KFzeQ2Eddz+OGfwg9tq671HeYpDvL40oDXqBs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.5pl4jav45b.dll",
        "hash": "sha256-2ZERGmQBtvwZHwZOVKHQnpDc7qGITu9UyoMAVV/yls8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.mfgaghiufn.dll",
        "hash": "sha256-TvoTrKAdT7PqFp6Z3AUaJOReqTlGpgL8xYCt6ZVkAVY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.l0rktw1ljs.dll",
        "hash": "sha256-Oy2IgLUMSUjJOX9uo4uzVGUo3Sg/IUtwrJZrdluQnCs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.1ywckr1b0x.dll",
        "hash": "sha256-Nx4n0+3bDzSKglYchd91Lm4IDSQNE5kLRkj1fDzsxbA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.exa14kz8zn.dll",
        "hash": "sha256-knGMyweQyNxTgRwzr2GJsYfaHTbhGxtnZx3K2j+fPgA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.1u9nwzt6lo.dll",
        "hash": "sha256-d5J3Uy2/bMe40q/elf6Bzw3RkuUY3Nomz8Y5AvNz4KA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.94v79or5s0.dll",
        "hash": "sha256-t23qNtb/urPeZYHRuGieRVzlxY+80/5DrHcbTyuvcas=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.0wohru67dw.dll",
        "hash": "sha256-QOs6WQtNmvI/G6SWi2WG+lmjnTYrEnF6YQePOdgqfao=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.jihcgj4rlf.dll",
        "hash": "sha256-qx9rgIahdMML4iZQ/qaM3kZj4eJvJ2Uk1Wv65xXbmJI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.hbnkzoo1yz.dll",
        "hash": "sha256-8ylrm36hvAiekIy16svksEc7M1+uJwPsGFZCEyD/ito=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.zfjlelzu08.dll",
        "hash": "sha256-Ubhf61ySZRnVVYm1y1IGKlW64B7Vo/lQKlKTTZTS6bc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.vfxvclumwf.dll",
        "hash": "sha256-9eRMd5nrGNOSF3juf1KCAYR+i73KOC7lHu/zHAIBgGY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.vgmnr0ls6t.dll",
        "hash": "sha256-fxzKzWStlt90dNU2sd84fL7xZzIdyO/H6q2SX9iTHkU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.ekdf4eju59.dll",
        "hash": "sha256-kuGGPDg2KDeE4rY1gKHvOcdyU2Xr1nUQry07bpwgE/s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.2q928nojz1.dll",
        "hash": "sha256-uqFyKDUiHG4FHXFMI44ewUftU79/5U/DZSIhDCUnttU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.u6h7teo3ra.dll",
        "hash": "sha256-xsd4xoqbJiNoW5VVEGyh5MOOFgu0GcpkUFHeGBtBLNw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.mgwzcrmutq.dll",
        "hash": "sha256-FkdYQUysJ8wsc8mcEO9B0yyOwfA+p60EcEB/mAZI6wg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.fxm2x84dya.dll",
        "hash": "sha256-k0E07oBR+rVPn1Wfpjjj0fhn4WsTM7nX23SbMUpIP8A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.xzxvnc5mgm.dll",
        "hash": "sha256-3bRwuLu73egDdpXjYMdku4XoEjkcjWJvwZql8/Cg8oY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.6rv84aem1y.dll",
        "hash": "sha256-PmFjGySLYpubpSd1tlIGmZA8z/drDiqwUtm44+jfaT4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.nhgyazt2dt.dll",
        "hash": "sha256-+40/dVTMZ2wdoZ28NyaZJvbsKWZmQ4YtRhePestkjig=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.mslo2gjpl8.dll",
        "hash": "sha256-qokJYZ63LUfzfQ7hriV0UFaDABa5gweu6AC12ZJjyEk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.xwr1fny941.dll",
        "hash": "sha256-kc7eV/HzZd9Qs6yuoFDRhqqG+0dRrL4yBqX8JxehoSY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.yxmpjmfr9m.dll",
        "hash": "sha256-mgT5jAXUYMbWFhg5PRhIq4x79YqFIbXLICt1wQQOAMk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.8tooyx362m.dll",
        "hash": "sha256-ZDabCDefvNPd+XiWRAvu3U2S2kkWDCLVSb2KOHB0X7E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.sqrt4zfj8w.dll",
        "hash": "sha256-tNGo43iDNK5RDa8Mln0hMMWcJgdDs2z6zzMfJBBELes=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.9ytfp67jfh.dll",
        "hash": "sha256-n/n4+eSy9Y7uBwOuLQ/IFqcTJyhuVy4Ueqit2whUKUQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.vw7uqdl7o8.dll",
        "hash": "sha256-j0FiRnWIm3hdabHdqS3oEyxGpIECtxJJCBrJbc7XOps=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.yjf6e5ofbr.dll",
        "hash": "sha256-wimZk4VFZSeeE0bwvD5Fbfijm9EdcD3Iuc9H+C5JxYI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.w0g5275nch.dll",
        "hash": "sha256-YK4ULjXa7eZ0VS/DFo5nYNrsvpUu1kbu6y5OSyE/y64=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.5t7faselgs.dll",
        "hash": "sha256-SS/zwm+G8zQnw2XlaXGzR9fKIl0l7H/tXSq8289uOyI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.58vb4no0vc.dll",
        "hash": "sha256-1TJsinCsIBhKj4/LZmyoP/Vh5FpcVLBDIuJ1lGi5NTw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.vaufwgt5nf.dll",
        "hash": "sha256-2UjnI3m91531IregwHciRjsHIee3HLISxlNohGYncJA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.p92v1u98ws.dll",
        "hash": "sha256-w3kXIhZ2TKPr3x8pjcvjh4u6T+M3EnXbY0Uhn4etFL8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.yslb2i72c9.dll",
        "hash": "sha256-3gKvec+KehXqvWav+pkMZeAZlY+MLQ/1Ua93SLynVZY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.lursps5lt7.dll",
        "hash": "sha256-A0uxj4OTvVaa11JdRW14gsYwxBcPgcu4kHGBuerVR2k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.c7csluasdr.dll",
        "hash": "sha256-OMbj7DhH3RLBbNZ3jXa3DiuV9M9gHIy6ylvhOMgAQxg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.tx7be5fjr8.dll",
        "hash": "sha256-D1HwZBPdzJmOtRDkBHJrXYz52UvlkGxG+2NDBAUWWQc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.4i1dcz4pdv.dll",
        "hash": "sha256-JD/liXpksTrv1U3seD2O7oGLAbWqWotQMofAMoPufQw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.uj4tc0i4os.dll",
        "hash": "sha256-SmiYJKIzh3xohPbIEOxlqhQyelEAg524m4H6TMA3cl8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.8dgtqe2pu5.dll",
        "hash": "sha256-HKpoUft8YelRTHH9bnQSG+ZXcZEu3AFDJhKsRAvkIxc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.50cqu2osdk.dll",
        "hash": "sha256-u5oBX4M6ruHtdJxI/vgI6+OEFjOZ6EwOmX+6XFddhoU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.tylso235xm.dll",
        "hash": "sha256-NS7+QYaZfLFe16jflAoVFTtV1GzEXpZH0wbSJshmUtE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.j25zuy42pr.dll",
        "hash": "sha256-lZU+3lODAWygcS5so5/MM+hGgcW4FnIBAC52G1jdYUM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.4slhcljkai.dll",
        "hash": "sha256-fEcD/4KE9l+f/yE2XVvZ8Aq90baULidw3MIx6iCkBbY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.nlbkbnmyay.dll",
        "hash": "sha256-u/7+aO5EoQk+yAegIl62ItqhtPZmr0xL/Er1D1DX+wE=",
        "cache": "force-cache"
      }
    ]
  },
  "debugLevel": 0,
  "appsettings": [
    "../appsettings.json"
  ],
  "globalizationMode": "sharded",
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

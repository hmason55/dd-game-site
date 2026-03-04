//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"c2435c3e0f46de784341ac3ed62863ce77e117b4",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-XaxvFDBuruOrgyh93YE43y/AWIuUJVrTrG0vflsqZbc=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.69poregybn.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.q5rqv3xrhm.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.2mv1pqdd2n.wasm",
        "integrity": "sha256-tjie09uavTiX1TnkP9OL+OcnxCOs44ff5Dgws1rnAnc=",
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
        "name": "System.Runtime.InteropServices.JavaScript.jr82tumynd.dll",
        "integrity": "sha256-IRJ9oXnrKJflJEKZTANLwOmLYxZKHB5VuJ2auO2wGhg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.ywolrvxwsg.dll",
        "integrity": "sha256-YljiCZq6UfIwlIvHPfwmljQjgtTFNB1EvX3noT0ClIw=",
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
        "name": "Microsoft.CSharp.50z2mnoesx.dll",
        "integrity": "sha256-S1BEhjsQnYOkzoA0TfnMy4TNC2LTx1+OvrumlMU9Vho=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.hh4l31551f.dll",
        "integrity": "sha256-9SAWynyr+R5AuZ+NbZcZ7R7M+3ZV679AAMAwY2QpO5M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.k8qvc6f7t3.dll",
        "integrity": "sha256-lKqoOE7xc5YKl34a3OmBSfDSEvfZk7F1eg1VznQOPbs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.zbyxfce339.dll",
        "integrity": "sha256-D+tcxk9D3N0wrPjA9RvxBIBUmRkv68tlpzSJs0gDsLA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.drzni0g4r6.dll",
        "integrity": "sha256-yWaLK3iThPdkKFAgr4yLXCXK14c+KI0cwqKMki0uYfU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.bpxjfh7ep3.dll",
        "integrity": "sha256-X3RpSDeDgq1thpvTDjYYJXU62l1u1Vs0+ej5N5xpnMM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.qf6aq516yz.dll",
        "integrity": "sha256-6qKmeFCRtXT9yOt0iebqM/u+He8RtSi7RlGAOd4Kt8I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.nilpjcb1y8.dll",
        "integrity": "sha256-0TMR1RxRX2OsPPYXwUFw4oayK4++HJCwoQFHU8fT/es=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.du1wsecv3s.dll",
        "integrity": "sha256-qxoVQXZjY2bQxQC2EvWIs0f1lAlJS9XgtmC/oTQObgc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.fpauw2nbzt.dll",
        "integrity": "sha256-TdYSUIyOqv+Qbw5Up75xRqP5hnQ8yNf/58NxpuWdcgI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.h221soyvej.dll",
        "integrity": "sha256-R2O+KSsVPd/emfSLzKSmAlNzfpUyfXojeQK+1YQwcsI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.hbsd9v9o1d.dll",
        "integrity": "sha256-YxpTYei9Y7ze64oSuu43IXNiumC5Wcdhog82EKFPio4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.1gaw2kjbay.dll",
        "integrity": "sha256-4f5L6vWxBB02Ld+WCWGf73Z0/Gi3N1iOkY5AhG5Egxc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.393zayljfi.dll",
        "integrity": "sha256-Nx11t/fm7fhtjiJYKHgckOhjYQRqNDDBUxfJMymUeRA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.m0p6kc1jza.dll",
        "integrity": "sha256-JtjNrDQAqJkXMM3uHrG/vijRvKjfkE+Z00asDvFUR4M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.aw8gcdvefe.dll",
        "integrity": "sha256-9h714tir39vsHYU04thpIl1wx+pKl6cex8HoCKmKtuM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.i5jul5egsc.dll",
        "integrity": "sha256-ivrnK9pScf2t90kkmsQ7Y9sgfAh5O5OAqLYlEQP0vVw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.j2mfwe0fy7.dll",
        "integrity": "sha256-e/WHZ8ORtud/bB7AyraUxHHeXCNx895J3w/b/HqDM6g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.ngmrq8m0o7.dll",
        "integrity": "sha256-iXsN1mseZeqfqGF1H/leggZXG7rN0Zw12inRekeKTnc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.f93cc8k9o2.dll",
        "integrity": "sha256-g8deAvhVBy0RHqoda9KinYCkTI+JAtYC94XgHIAkpoM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.85eq966ito.dll",
        "integrity": "sha256-5NTeM7Az/BLfwh4MXsdQEPC5dY32YgwwAj1NTGe3gqM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.xynf58pbb4.dll",
        "integrity": "sha256-50O/emNukaeQUGR8z/Rr5sZL0ug9ygLFe1XmujJwkMk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.crpmdn0b1t.dll",
        "integrity": "sha256-GCus3VDOWjDasIhce9tBykSZZn026/Q1JVEjHfDSV+8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.qr6ujan2a5.dll",
        "integrity": "sha256-OjeUzfnB8uXPm67GtVruU+Fd7Gh8qJndJbfT6wBcErU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.mo8hx8yga8.dll",
        "integrity": "sha256-Nkc9ROlO8BQE8LRtzynw3okdtRGeO69Wp/tyj5v3Tis=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.roxw9q6ivp.dll",
        "integrity": "sha256-i6Pg68773lMZ6+8lCRFxPJvB4s8NfD9ti1iG+10tKhs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.tfbge4ixyq.dll",
        "integrity": "sha256-F6QDHJsqeWmTq2KTUtbOFh2u8t9/SQixOvohUSSi8Rg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.cqwyllcvtn.dll",
        "integrity": "sha256-zPxFI9ayqzeknvnND2FvEn0sDyANJTuYQtzohOXxyKo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.uuwjvqz2dz.dll",
        "integrity": "sha256-FgRCBVtBHhxzlXdVKtjYvJTO9C76ik+raRKzs3zGVdQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.7wvwx6d6f8.dll",
        "integrity": "sha256-ia3ClOCiZm+xBGc0eW12wkgYRvwn6JaIopYTMuFgMJw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.im8xv245uy.dll",
        "integrity": "sha256-6vCwGDD9BMB67cV43jh1545lmcnj6cgWWQVnQDvJAMc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.nttttykstm.dll",
        "integrity": "sha256-O4FnD0paMwI0tSOWF8ufcSAGLX43q1GU9sr0G0eknsA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.mw4ynk5ytj.dll",
        "integrity": "sha256-qptcvLuOTiqbY0Ih6eR5ZvEm9wHhvXcm+7bR/4DOXMU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.wxeljw1glw.dll",
        "integrity": "sha256-5MESQnSsYCwLGW+A7QNzSrU6mzW/k75zrw+GxhwGRcE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.97tbo6y2s2.dll",
        "integrity": "sha256-awdwYOJbqL+JiLJt5rhroUIpxc1ZxvPa23d4K3Wd0xE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.rox5t2nxuj.dll",
        "integrity": "sha256-NZH0L7XloG6ASeq5VoNhJm4rGg14heiy6kzEpsj2NjY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.0hy7ltixew.dll",
        "integrity": "sha256-RNNnq8c155dD4mjE9OklDLPznteyUOAtSZeSqqsSzII=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.ng35b8tdmo.dll",
        "integrity": "sha256-x7vmPKM6upAvWP12bVsJ/cSmnEXAT8Sj5YkjDC4CmV0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.0taet8udki.dll",
        "integrity": "sha256-NKuPbQC5xTon7mXpdGf8NOdTh0sFsfoBuZqs8yM+S8U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.yugshtc36v.dll",
        "integrity": "sha256-pvaRJnFR5WCGmN/Nlspn5LumfOao6cBUvXjUtvTGFuc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.iyd06azgpm.dll",
        "integrity": "sha256-qqQoAONGtAwik9O9L2dC6f57JK2Zl0hb1NBgH11C7OE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.utm19ixek3.dll",
        "integrity": "sha256-0urvWg4jZUdNEX7gzwgm9lwNmI8fOoc6Z2kJ1OdW5tY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.6cdxjgvdfs.dll",
        "integrity": "sha256-OttLGQI3v8eq9McEk5+0p3pe4rSeoSfz3Gnti+Muzag=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.dezu4dssnl.dll",
        "integrity": "sha256-taZG2PQ9vOVcB36kKR28MBlalQJDN5+iHFcTt9AutLA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.miqa7ziw5s.dll",
        "integrity": "sha256-QmgUQYzn9g6DgYdt7v1S60AMCapq76YTWw5n7Y2CkT4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.jkbd3uce3a.dll",
        "integrity": "sha256-09a8qGu46DxcLlZn5OGxFDhZCDClA7IGpPCZmDTs3CM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.8azggkxuck.dll",
        "integrity": "sha256-oIYjARuc8uc5yoHlKIyR5S/jDoYezxi0I9DK3k7MC0A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.dxpo57a6kg.dll",
        "integrity": "sha256-QVoM2Bcrj8s6T/uQceKCWGVdXbp1yRRW4gMBdw4/MJM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.3ie5nwb1bd.dll",
        "integrity": "sha256-VUBHtkGAV3eObcM/ZMpD7+U91pQgZmG8gKQAWsHc9Jc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.1ykzugnpgx.dll",
        "integrity": "sha256-N90oLEKAOtzRXtAY34cYb/QqP2W1s8ARAlspC9ojvjw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.xm4vratcym.dll",
        "integrity": "sha256-x6MBUsrFQm6+uUj08cJRxl4+vj8no5fPnJcVLdXfipI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.ji82a2woem.dll",
        "integrity": "sha256-ZdaKEe7ZIcWNPrDaTcFXXkd1z6m9X2m70clBCpDDniY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.it038v3pta.dll",
        "integrity": "sha256-5nofdztc585oMehx+jE1R+zeR1csocOjba29NZ6Ejok=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.va83c29gco.dll",
        "integrity": "sha256-x7CC/26hQ5oYRSfhKC246S9dVHnh+6MHRxAo184rinc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.w2hczc35tb.dll",
        "integrity": "sha256-iPsoaBwxDfKNRnzQUg6aumG/MrZWszVrFFHvc8IwK/Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.4jhbzycebp.dll",
        "integrity": "sha256-gDj+aE5mJs5PP13lwoPKOlPUBmM/IeGGeAncXqrRK4k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.8vt5679oh0.dll",
        "integrity": "sha256-dPiGk1+jJkxiFOizPUqfUP+gZJMa3FrMxfEDVuWcslI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.miobexvcqe.dll",
        "integrity": "sha256-Is2B29CVqh/379ICf777NLWXR5xlERT/tilD1nm1BLk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.vgf4n55ne2.dll",
        "integrity": "sha256-T+LOOSLtV3BAlNXNLTcN5DHG+n7KJEc4Ectw7nxv5S8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.yn6ypvwiog.dll",
        "integrity": "sha256-wpRygFbzL4zom0S039osSrCJGVns4FXTdEA8HDJ5DkI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.kxsdzu23ld.dll",
        "integrity": "sha256-uO77ndeNF6hoY7ICR/LnWf6T1/Qox7Cgn+TpPw4mm+M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.vcwr411rvi.dll",
        "integrity": "sha256-cSvk9I9lldLIAzCdrVqBfnw4snYR0S9AV1nSAe5rDFE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.d915ngvqfx.dll",
        "integrity": "sha256-obzz05lvTvgDh0BHK4ojm0XO92zkrnSA9WicfEOwq9Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.getzwrmjno.dll",
        "integrity": "sha256-mAvuvpWjT95vUpoQgI2uDY7P3p0bGQ/s/MdX1MgAA+8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.v9fdk3f2j5.dll",
        "integrity": "sha256-bYHg2qGhre+SXK3i3apN6e+E1L40KcTrkF+73HQth54=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.cep400hhyd.dll",
        "integrity": "sha256-bFYUi58iK///qlu91c6HcjtU29AP6uhcth5YHUdzj2E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.9bvwltrkzm.dll",
        "integrity": "sha256-hd/kJYHxeXJto6pwlRk/8D2i1ND/VhUomkrl5K20FMU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.oco0gjxvs6.dll",
        "integrity": "sha256-SIfDyIzcSu1EXqf1QrxBMVsZejUuCazRGaP9KuXQxvo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.p3uj1q5381.dll",
        "integrity": "sha256-JXjeiJ3wG1xrVdOzBr5BI1KcV9b/mlA8Z30asRN2uQs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.3krfqgcsq3.dll",
        "integrity": "sha256-Q5P5F3k6P3JbVfyC3VqOzRmVL94XgoC6hNUvWdO7Fkc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.g70ytr8zj5.dll",
        "integrity": "sha256-jP7AWMCMY75uKeL5+4eW4Sqy5RcKXFwTksfCa05pzXw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.b9yxa22gjd.dll",
        "integrity": "sha256-r93mchHuXD0ABbWcj1TsTQcqmMYcj7BryUmF09AdmmU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.g701oy5nmi.dll",
        "integrity": "sha256-TKeCsWav4TsGLAKuCt2HSYiaLkWhT5EgCmcFroghXJ4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.g1jqc96hpk.dll",
        "integrity": "sha256-HC2Emdp38jr6ulsMyTrKf2vz/10qgfsXqUWs5T/PAgU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.tx4e3n1xz4.dll",
        "integrity": "sha256-fwBcEHddKy/+nVxUN7RBIW8+qwKlJEkbnaUQ3RcJqGE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.vqavppdhgm.dll",
        "integrity": "sha256-JxXvSGpfzO0XMdzxEUWakZjaGyUG0kXBIC9qRFIHF0c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.8upmxbltvq.dll",
        "integrity": "sha256-UInTnkoqYx1RPZv6jEVT8E/+2xRfn7GsVFDVmOhZ23w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.oplcbbq7fh.dll",
        "integrity": "sha256-7E9WMU1pXQtEZLVALms3i6IZZqvPqM8sVY45aS9FlOg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.sb2qit9dg2.dll",
        "integrity": "sha256-uLvCqERRmr2Sk2BrYHwK68vrk2bolzh8zsjzBbRNHmU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.a2ytfecwir.dll",
        "integrity": "sha256-sniVx9fQgYwW66x9Z6WgnYoyQU6bRDZMTe4jHB6IjYQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.2pd8cyr0tk.dll",
        "integrity": "sha256-qgS5lYvwYoXJg0lzFcI8xYOh0ha/sLe3zrI/z6hE8/A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.1i4smhxzey.dll",
        "integrity": "sha256-N3CJuLKuFH34f4DRankIwh6YmY/XODUXTfQDTIEZhSc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.hyzp46bme9.dll",
        "integrity": "sha256-t/GVHwSGdf3qpBtoSQAmRGKBGiAuXKsrqCWTp3CSWHE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.iur3h9otak.dll",
        "integrity": "sha256-uuR2jAJYkhhYp3G5ScvJKpibrYZiZMSg6zCFOJnzWO8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.gy3ns2avlf.dll",
        "integrity": "sha256-yLf0WbHhY/F2NoWuHQ2s3GCAEtXSV9wjX0kVqzidToY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.kijvb71gxe.dll",
        "integrity": "sha256-dBRJO7CAvo/tDvB/bfZxSdaHtofqFHcMCAAG/3rSFtc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.3wq1v13vjd.dll",
        "integrity": "sha256-Y1GEjTptiPVGIPmSpGIXTwmsHQhEeY3ZMVnGjYe51FU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.pjhs26zweo.dll",
        "integrity": "sha256-1ZG8OVShW508GV+sitR17VVqOGrLelfUQUmZHqnmPwg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.gka23pb39c.dll",
        "integrity": "sha256-AAdu22JHFNejvFmf27Qco8ZSDe2PkZWm9qL86/SVU+Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.kn8r87x2gg.dll",
        "integrity": "sha256-cIcHzw0tHsDIeRm9aKM9RhjMkfj6oXYOFQpzcCCHgFs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.bl85rczrhn.dll",
        "integrity": "sha256-QaqbBlQRL8rtUX3N0sqI+morXPPLmLjfH6nJjuzhlvs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.1suqvm1l9j.dll",
        "integrity": "sha256-r/q4EzgXeRTcXvM/IOpWGl025e21C971Pdr/byRKKR8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.18dwb8aijh.dll",
        "integrity": "sha256-8TVk1nWEw+BCTRZjvfS+kcs45MNazW5pvHWt+Lr+JmA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.ggeatgdhhm.dll",
        "integrity": "sha256-UAtoJdWITu6WSYsUnEZxTGEyc4+X33xdhfkc8rZIBQk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.p1izax5496.dll",
        "integrity": "sha256-4/tBgGbuGGT7efao+73WpYFyLRUoTMQz/Zjyu1e2Vn8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.13h0gxee78.dll",
        "integrity": "sha256-gxX19DRajBryIg3gOkb3nPNsCDeTyOXdZFwmWbXk6QE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.00t0l373wo.dll",
        "integrity": "sha256-MBwBvwXaP4K+LU+kn/KaPICYkVYmNAqJf4citJIOFns=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.58gadf8ucu.dll",
        "integrity": "sha256-pTlcx1mz+dBdw2rOT3OEETUqsBZR+Z/arQpc5Gx5x7U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.tj7bv3nsc9.dll",
        "integrity": "sha256-ByokAP9h+YjIk6TgHo30/0K1oEncZ52+z3GL0LnEc9U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.ifg45a9cy7.dll",
        "integrity": "sha256-0rYxl6Vj7NuLXKce+MJaSUbS7P0/ZUmyon7vnM2DLmM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.84hd1bu4g7.dll",
        "integrity": "sha256-6CQRe/zSYLJedzlhQ4M444ZfuVOiI8AwXUaiE3cUDNU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.21q13lsn9o.dll",
        "integrity": "sha256-+u67Akwg9fTJXGo44pYv+0vg76+OZOXeXgiH5pJgIyQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.ssbtjvxid6.dll",
        "integrity": "sha256-/D8czPyn2UlrYJrbEjc7x7lNGVaRMuvbuYSMLQkedZs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.6tj6jnrzcx.dll",
        "integrity": "sha256-ysgZ8TtvwwUG+uglfezewbfZGAZQiqfOwyx8Hv2oAaw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.cm0ytngb86.dll",
        "integrity": "sha256-pPBBufE8nwdSHgOdn3oMvW68WULVXXpL0TJ84UeHuOg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.nmxuxkt63x.dll",
        "integrity": "sha256-v+a5CLK/GANFs8bgIQ6Qxl+dFvWH1hXNR/dnOQj0tUA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.1kr4fg4vae.dll",
        "integrity": "sha256-f+wJAr7hG+GcOkJv7VIlJuivOfsoqH98CH+QXfQ9IEA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.gajl3fdvt3.dll",
        "integrity": "sha256-6GNCUTP7jo4ynI1tYBIic/akWcsNOK1OvKBYs5bu3Ls=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.0o28ge3ecb.dll",
        "integrity": "sha256-gHeRrnhmm3YZCSBGQqLlQ3y8Li65uWHW71v7s9i0IM4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.zxjkde5xvz.dll",
        "integrity": "sha256-CakSM972pxKnGLpIBr8pDMSaML5JBmk/FtT9XKKc/vc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.1py14er67z.dll",
        "integrity": "sha256-5RGsZ0NLodhW1YtNvbJY8MlOnXF3N+Z4kawzRI14z9o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.9ayhoasv6g.dll",
        "integrity": "sha256-LziM/0XrxmCxXT20zFarVmvfuGGzFDki/N2Mfc4koI0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.rjuzy1ai29.dll",
        "integrity": "sha256-mVS33+ku5lmPRa88HxXQpMWbcTJOy+6+FjFWMcnz0WA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.nmcf9b31ub.dll",
        "integrity": "sha256-rxL8IOo/ckp+qNt2Cn+8kBmIqvmP7Q7SXhb+lGbtq/c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.iui3h7r5z3.dll",
        "integrity": "sha256-1mDy4rR1+SajKGXd7uBK1Lf0GUW3SQIuQuKSBWIw9GI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.wzwpt3dnht.dll",
        "integrity": "sha256-TCwaIs7HoM89LGuurJrY7ksaf/C2k70DjhQOSLRX0s4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.5ahscxjkpj.dll",
        "integrity": "sha256-fSZHVjJUbVN8IpnRTiz9DI/dqx4YH3r8Es5iWhJrTzs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.nr1a8la3a7.dll",
        "integrity": "sha256-cwMLAF1H61FrUGCGhIv/FrOU2xpm5MQWb1zqOO3SKGY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.egmizbpymg.dll",
        "integrity": "sha256-LmFmP9ZqjWEP2gKJrihJ7Xw5kBOe/TY7lo3Voe9166M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.70tpko2lkq.dll",
        "integrity": "sha256-F7OXTsIDqUh9YK1WVI3gKjnfgnVH5TWIaoZFmOh7wf8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.wjz6tngzuv.dll",
        "integrity": "sha256-fLK+j9Gl4Pk+bwNuTGdDMpxrC5DYfgHhCdzUTDQOYE4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.62uu5rvmie.dll",
        "integrity": "sha256-rtQ7UAQmyEMbeJLE+k+lNDqmesdgccB/pZX8IE6N1Ac=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.r5571k2ucy.dll",
        "integrity": "sha256-IdmepTs7U9igTDt2bKqXyCvpoWOvpGtmAeix5AIQbwg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.6xwxrhub3i.dll",
        "integrity": "sha256-FlzT1RjG10PYo7h67CtI61fW+DUBRcji4N53c2h9UVc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.ud1vtuan8s.dll",
        "integrity": "sha256-wu3SbxiyjjRSyqgLvfov4x8xKtBjSZcdtk1pvOAKj+M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.mqzby7mcjh.dll",
        "integrity": "sha256-Ujg4weMq/tKkCvlaj4T2xTUI0G52Vr5jWjsuD7kE0K0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.9sy78i63nl.dll",
        "integrity": "sha256-2VvSIUUACwhstbQVdP4Z+r15dA9OOEGgOT4kVfL4ahc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.a1o4mp9wpd.dll",
        "integrity": "sha256-rrztU+AhzGBw7+vqEjBLToNg9+Ycfx8YVAhnyObtrWY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.86x9ymgr6f.dll",
        "integrity": "sha256-MEqMsCfM2B0V/jf8Im8gn3149QGyILT2hYseZ+xeEZA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.4w606t7arh.dll",
        "integrity": "sha256-5Gy1z7SBba8NPsPYa82FsS4Uif39fhZzN1358ZDKUHA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.rr50t5qgvj.dll",
        "integrity": "sha256-Ny4T/9bjBrxzDAKbb3pTLpdv8oKSGbuw/1Fq1uUxfkI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.4he3fjf4fq.dll",
        "integrity": "sha256-+AjxDibWQJ2cx/H85QiToCHbeIV+92UcZX4cPoezE1Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.9o1flnsggq.dll",
        "integrity": "sha256-x5i0AKd7a6f6J+kKMFsStkXlbXm6eG1JyEu+iYWDwtk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.2or1k9hlsa.dll",
        "integrity": "sha256-Uurwymq+TQNio90UphMK7EKOvq8pCpSddWoyDKzvMmI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.doco9ncify.dll",
        "integrity": "sha256-LfvYVV60vExjIwxeEnI+i5+6/8Ye9+MuH/Kw7ZmZVcI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.w9ojxgl2wp.dll",
        "integrity": "sha256-pNICVFKajRpOKnxUiNgS9/TW7Ip2eLt9g8yd1fWnszI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.y3hp2vypmm.dll",
        "integrity": "sha256-3qAxkoH23Vo9PMta5y3chasw5vQkNgWMHG2NNLU9H/4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.6mixuhsgwn.dll",
        "integrity": "sha256-gqGsT4t0kjLWz5FZWIJ55sOJ/NBv4PNdWWZDwYKOEQ0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.v1s0ngn4o7.dll",
        "integrity": "sha256-A7XPFYq2fjs1B4XFTiA4Y/CuvUKvDuqQmz3vh7qzWNI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.q2lkb34wnz.dll",
        "integrity": "sha256-sr5vKqDBLH8Ek1QYythNnsUNPhxoTXtE39wjf6p8DNQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.tvk31zeol1.dll",
        "integrity": "sha256-h4ZtfR2iDuz/bHGt7pVziNwmwC8fj7Dpy5vkBtS4pQ8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.52piqdc3ol.dll",
        "integrity": "sha256-XX2NIPqJGa8jGNI+ptKxWeZZYCmBifz0+iCL6asqo9I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.kymbg3cvi1.dll",
        "integrity": "sha256-BDuJRYtzBNjJ+YNe2WOyTf2/eoZe06SpYY7DJPKpYks=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.r3waikraiy.dll",
        "integrity": "sha256-BxO5S9cfCA8waGwMtqKhyQEE0dpzFe47/FR8DU0EleA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.8iqn6htngs.dll",
        "integrity": "sha256-8B/suDuV6PxBYWhBdz9PQFoWA9rCa3HJtty6iGo6Fzg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.dvt43x79ku.dll",
        "integrity": "sha256-x9iqc/cttN/59/pgWWiCCPupPoUrnIa9DXtNCIXif98=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.nq8jyoepji.dll",
        "integrity": "sha256-AWuJ3znU3DuEYeqBjvLomCva3Nu9+wzmlp8lhcbqA4Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.87r3c7dik1.dll",
        "integrity": "sha256-dASdNLTT6AkZUDKKA+BE4NbTt5n+y1amrkKEYyELUcg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.r50ex5h20u.dll",
        "integrity": "sha256-sYKe6F06vQOYqxBHDCSnNAPsbCC037qBvn2UVzaPS90=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.j2o31gfx9q.dll",
        "integrity": "sha256-m61P1X2g1WIP4cr51s/wyXLXKE93JdArD1BRIhZyZIM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.dg2cx56xo9.dll",
        "integrity": "sha256-k9Pn3LTYYZfsJOidUduTdDR9EGT3sQqjga1PPMT1FgE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.h7n1fmqjv8.dll",
        "integrity": "sha256-Q+3uXNVVPZqUBrjDnSK9FWJgqGAoeIZDY9jY9lkItyA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.578vb6v099.dll",
        "integrity": "sha256-Qe4vRpseZGghwR/l7MkNwTdMBj6aZ1qgZQYONI8N5bk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.v7b6bzm1j3.dll",
        "integrity": "sha256-S3Ursc9mCZIu/Zr898N4kQDSbSHwrrHrB3QrorWiyMw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.6f1m40tml2.dll",
        "integrity": "sha256-TnsuT1LlFbjmMYr6sdOPaNMm/KdIN47XsE2frF/UPtE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.5m8q9ppza5.dll",
        "integrity": "sha256-41SzdnVRmlWRGq827SL15OB8Ty2qUlH2hdYmwosxw4c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.1o3yogy6kq.dll",
        "integrity": "sha256-ET/7T9wVxb5AsHilK97k5rchbY4mWa235jc1kARnQNY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.y32ad6fab6.dll",
        "integrity": "sha256-Lp6npMmdI+VQFcsUcNWQrA2J+OPe7Vov5glySY8QJXU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.vj5t84y08r.dll",
        "integrity": "sha256-pYZ/ruW9X1r2TWE/x30UB2GxxyClqD0+Vztv0lusbSc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.cp6e2j0qf1.dll",
        "integrity": "sha256-kPiy7hw6e+jk551antAMhmMN1Q4il6TAUp4yBNXn8Kk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.youz16t5a1.dll",
        "integrity": "sha256-3vASFt3byIGp7mhsSBBqM35HTgl7sEbRzroveswilek=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.t40p6aakbv.dll",
        "integrity": "sha256-7ZqgKHHHd0sJXB7I8cgrYrReFzGglD1ejh/cWPnuriE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.8xvw0a6fxv.dll",
        "integrity": "sha256-nPF+n7/cBFtxOjAgwLP8S6en+TtdUuPUgkx+0ESKV8U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.j4abpiabro.dll",
        "integrity": "sha256-A6lGjbSAotI8BCB1fP1N4EUlxhEF9wbmTnz7ffCbXOk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.ad8v2fjk50.dll",
        "integrity": "sha256-4rV2x4Gmo7jXIY76FRfY+qo0NDySXEhJqIV7q/H4Rg0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.ijtljk7fql.dll",
        "integrity": "sha256-zntokeQGXC4uIhYQJVNDq1pIw95EE81R/auuZYBiaD8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.8ccuxf7ie6.dll",
        "integrity": "sha256-+OZyfynDrWACSLvcWVWL+jPg16TXGgP9N8gub/xKoFc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.2cukrhjh1s.dll",
        "integrity": "sha256-btr21ARMl9a4hsb+/RALJnVAZQ6HAFRKDC0CogEhbrE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.su7g84ilxz.dll",
        "integrity": "sha256-PHyV0yKtWPmRM8XkhD7ywWR+39eynVFSi16jgWgaoUk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.221i5y7j9v.dll",
        "integrity": "sha256-Jg18hIMEwner0ACW4TRsKsgCRTryNMaaDnTLdskmaus=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.b4a9y5y7aj.dll",
        "integrity": "sha256-he6iIkziL9uyqfZ/hpFwWt3ZhXiHnUACF8f7sbBzpL4=",
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

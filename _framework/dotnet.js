//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"a612c2a1056fe3265387ae3ff7c94eba1505caf9",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-S4q2/5JJyJIE+qeSPvdLl6LdBdzzBWPmv59QDB8HBqw=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.ykrnppwhq2.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.peu2mfb29t.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.53ez3dx5uy.wasm",
        "integrity": "sha256-Ebk+Km0uqtdo/srKe0YcuUOlFykCcKVkBt03gTWt0aU=",
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
        "name": "System.Runtime.InteropServices.JavaScript.9t2liehbf5.dll",
        "integrity": "sha256-g+Re2TiYJx7yDiDgVd1ip2FLAIhTPpsvitc9FKxkdiA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.5uqwlcw10a.dll",
        "integrity": "sha256-3XTpbuh/capsfJfMGvW3rizGcpUBTEMVN4PtiPawTY4=",
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
        "name": "Microsoft.CSharp.wj9tjojhn8.dll",
        "integrity": "sha256-ZGet93t/FqfjZ0bNjUfIqjnpdFEeuSeDJNNSglAxhR8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.rrdqx2r66t.dll",
        "integrity": "sha256-NwF8egJ7SFkDE75e0aCfkGOU8ZNfBRhFPXxksz1Dv5Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.320svknxwa.dll",
        "integrity": "sha256-tRHUHZ3ovoHtWLvI5cdqgfToLwY//Ko7VTH4PP4P7+4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.bqj18olq94.dll",
        "integrity": "sha256-I1LVcDxIgzxEU7BeWU41hEQUd1pKrZmxTg37J7VW3GU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.5b7180edic.dll",
        "integrity": "sha256-v/zDvWpdvK6ZpdPbrQeEhfYxdtHcmj8neqbhBs7GGXw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.xx43z7rcuz.dll",
        "integrity": "sha256-xWq54v1Qg/pmTCpbZDKUBukF1tcw9MwxuHfF8EbCjuA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.r1zdvmajd3.dll",
        "integrity": "sha256-URaDeYhfoz7GBnyLye7K8bNY5tO8Vo/z+gPEFrWYlZo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.i7d78xo282.dll",
        "integrity": "sha256-YpXIkYk0nvjpoZwJUvqiigXXz+hnsnlZ76ag0PS54xE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.91r99war8b.dll",
        "integrity": "sha256-44WyHX2TDp/PkO+uTuHzY4eO7jdpvkOyl00d9N9rIw4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.cstjhd20v0.dll",
        "integrity": "sha256-dL1m0SPYix36hjt7NAuXyz4H1kZrAO2WI1bWi8FMucU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.czvya0tff1.dll",
        "integrity": "sha256-mE85h86h8gC+pIrV1D2NQJL5ie122qW1XkSa8knL07k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.91qjhrhbvw.dll",
        "integrity": "sha256-cyjTWt0236Gwxh/q9Cf7FfmJN9FAoHzocjxRmLuXAPo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.l8jpk3v185.dll",
        "integrity": "sha256-WyKQOZhopbOD7dnIwUoMs/KcUobd5RO04ySDT7One2Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.g3jwrqife0.dll",
        "integrity": "sha256-VFR99AFU+LaUCJJBcGNsLSXyX5Vs4wisKZl9YN7MarI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.2o2wsvesrk.dll",
        "integrity": "sha256-gi2rikkMQ6EGZELGK/ob2gdw+WVDBaM202xGHSDk83Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.ye2my0ir01.dll",
        "integrity": "sha256-uveKDT08bThAI8BiLuiyTbqYRN19zbQ1V52WhcsPnkE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.lfsgay36nb.dll",
        "integrity": "sha256-D0qELpdGChyu8vNU4GYHhmzXd1MPeErYb8EiML5nC28=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.y4tenbri09.dll",
        "integrity": "sha256-Aj6YocBt7PJjqV4U/55CK0jpFl0hR/Emakm72PsI7WI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.9geaghlyof.dll",
        "integrity": "sha256-qSu7/zvtDNJw0QfCxYhImI4rSDY7NEUMURE1h/HB2CU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.naf4vnzm71.dll",
        "integrity": "sha256-ke5ZhTf6xuSpdmi1gIM1bTTNGi6v3xT0wK86hIf2xPE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.ot2cd9lmrz.dll",
        "integrity": "sha256-TFpSQyk6h81B6+ioQZNgjaazUc9Gxjx63/ZsGsW/Zx4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.i9kv6gsfkl.dll",
        "integrity": "sha256-qgEiMK3ZNx23sNdDAQeoyPHm31AFW8DLQhEuOah3BK4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.2as3cvqjtj.dll",
        "integrity": "sha256-6nnv3OnBSxsoTvZ+mE3cvfg8hZUM7jB/GejpQMh2hHU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.o5zwe1myet.dll",
        "integrity": "sha256-BDS15T6Vo9G8+cpQGfboqToUcVuDCN8FGJMH5gPA6Xw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.6k6no32r96.dll",
        "integrity": "sha256-9mTXsk/3gQM2W8WFs2yg/ZzLroYeAD3rgnFkqALFWbo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.pg58625suf.dll",
        "integrity": "sha256-qStZMWf1XAt/i2Rj1CIY7roVh2kwqI6B+HhP9YMJlQk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.06v4uw82yj.dll",
        "integrity": "sha256-OCtU/uwvLGDXHV4goMxthZrpKl5n20/TBflZesjyd4g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.58a0rh6cpc.dll",
        "integrity": "sha256-xXLXhJYVZENQ6G0euJZpA/a5FICEhixCFs+Esx1F1tw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.cqvhwsk0s9.dll",
        "integrity": "sha256-5ArYuAwRzpR6zxy3d/HzIJDOSUT1I5NrjFWVqroBvfM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.hl9zpyk00d.dll",
        "integrity": "sha256-qyO7bXQKsPmtvgGTlYbIaOgvOSCcFYe2WCVWt+vyKVg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.t1djv7dkzw.dll",
        "integrity": "sha256-0ZOGMNOIdZN9X5/7ArsSG7ByNNUVlLBWwuidRzWKu0Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.v91512axbv.dll",
        "integrity": "sha256-TaFZ0fqN42PTdNwIy9rWcqllYWmo5+Yc3vOMcZ0jN6c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.b0nedxcx36.dll",
        "integrity": "sha256-BUPz4WRD4NPAFS5Xc4O4olv3h4SZIP9IVTfK7mbVLLY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.log1vgajsd.dll",
        "integrity": "sha256-tSlrmbXPUwoPtB0OoLWkgoWjN6LVCM813qJJOfS+SR8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.labfsvzj72.dll",
        "integrity": "sha256-E7EQqZ07Hzb5XVT1cPAX6MuiUznQk5SUI+xWTLCRxf4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.x2414hpk97.dll",
        "integrity": "sha256-Fz1ZMFZcPefGH4afl0YW75rjvKm8e+leBIpgtNehh90=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.ni43wvq5v3.dll",
        "integrity": "sha256-nxXq6xNVUC5BYA/4mxZeGDIkRypghLeU7E9/y43dosQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.fzjod0zktj.dll",
        "integrity": "sha256-K9iT4Jhi4GBv5rPT7b8W2faHNtdTSvzhcZMLyIldJ+U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.yyqmc8xdhi.dll",
        "integrity": "sha256-Ci6sjP9oZnZfMz8VecxbMWAMTIEmw+ZrLzLqZKL4HbM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.pdr5wgjzsr.dll",
        "integrity": "sha256-I5aEd7lzTiXcqZuLWrDxKAYcmR0P0DpDLMKyGn+aEww=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.f54a8bktnj.dll",
        "integrity": "sha256-g8fmxZoVXHJZyD66UhfwLWmU/QvNLhznYiQevvyLnN0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.ap5hx72u9z.dll",
        "integrity": "sha256-HhRTlzUKVEYc4pXA7TaCjypvDbAM2EzgnAw7677NpjU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.yyahjjc7xt.dll",
        "integrity": "sha256-Ng/VnkFCjq6m4OG32oi5nGpDg5VI3rZ0jQXolYW1A50=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.8u87we3oq0.dll",
        "integrity": "sha256-gHBLxRkdTzMUYKNeQCMRHcKt9QuisKFNx4XV7CV0y14=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.eqe6i9il0x.dll",
        "integrity": "sha256-FgYw0DfSS2lZ+BBGIfD6xWKzCIFyaniedy55ZRmWpsE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.91qjps0kbd.dll",
        "integrity": "sha256-c0wbdPBnfWezMiSGCPd3qeM6CjxzcAya9Oc39/1aCSI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.8fje95fg2i.dll",
        "integrity": "sha256-LNkp/hu+BXK+YUeMMzqVyW0m+RHSguvj+4RbNkhuyTo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.yza9ny9br0.dll",
        "integrity": "sha256-7i49OMwZgkJdBCAcOqdOpyXribMueta4pciXU1a8MHQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.p29cf1j90k.dll",
        "integrity": "sha256-D8SNdTESc42Ef0ilwUBOdTLK7ev1/tIIcVvI3DPsrnE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.mxx8mqqlpn.dll",
        "integrity": "sha256-NkQJjZDhjwjtRg7bbml3dMH862n0LBARx2zhAi9IbP0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.n3mtay5crf.dll",
        "integrity": "sha256-I3e8j78eHiVXFDmKdikPSt+pBUJC6hcbnp3HLbMXi4c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.y9b44iayd9.dll",
        "integrity": "sha256-Fj61ZuI8BxAq1nrVFI/TyZWwaC3QUYyU8pvwL0EZreA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.xlpmdjty6h.dll",
        "integrity": "sha256-JdQKXOK6MBM0QBKIwS8RScV6kgklcVUISMjgBj9ZK1w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.477rwg9ifk.dll",
        "integrity": "sha256-0DKHjDWU0P+Way1cOWWS4nkpLpn09QA3MXvis3hm4N4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.49z5t8jlbn.dll",
        "integrity": "sha256-uA4RMv8oHYQzPfGsDyieonbV20UjEkqV7HOXOiNZ0UE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.qttd0gjden.dll",
        "integrity": "sha256-wnc6BuMSnCLVfOLg38sRhdUq4EcUtJ8G5z1Phg8scM0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.eztaka5wrp.dll",
        "integrity": "sha256-tv2a7ddNWX3CvWZpI8TJckMbN8GKpqynZBgL6NDIiTg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.ffdpayzf6y.dll",
        "integrity": "sha256-xe2AWA23MdLq54Oe9wHPbePLQwmKd0aoGWYQIoMDyU8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.p0x2ims44s.dll",
        "integrity": "sha256-V8IDCa/yg76vsfTxZg9f7Y7NwWjQbk1NRX/iVxvfsqk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.ncgho15qep.dll",
        "integrity": "sha256-+Qay5vkgj93Rl/MjJLzjIRtbQyAwhsv7q3x0kM32yLc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.kdv24qezk5.dll",
        "integrity": "sha256-WNcK9Ph86cBnUOSHSqrP4UqG29SZ2DPJvx7jB3dYyTI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.77bkrbs3um.dll",
        "integrity": "sha256-TQOip3JZtda1p2Gkt9IaSVyRZvfXfG05z9+ZW1eBl68=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.ikzmgjfq3c.dll",
        "integrity": "sha256-bvbz+M83OAS8SQfHCgJCA4Wl7vnfNqC6ULUs7pujWxg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.gfihhtjfrv.dll",
        "integrity": "sha256-dFPgtBKMfn6pDc4U6ZpKhovwRvv/ebuP84us+MPVZ1Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.k5a4q9phge.dll",
        "integrity": "sha256-aPpf7TVLpZBwVO1xDvj6GHN5mu/KUFuQYJ7SnENbjYU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.dpmrtfsii3.dll",
        "integrity": "sha256-scTeDGbBW3M/XCY66mlS4TZKcUy2HLQjQUyTRFpuuHk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.hp2j9nhpxz.dll",
        "integrity": "sha256-i7alakm1K5ueEUefKLf/PXYPy+1BiJ3A+1hvFna/nOA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.fir20sasru.dll",
        "integrity": "sha256-OXjbrNXRf5iyPGZHGQjlfCjmEBJeyGl/hGrAVn35CKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.5hh2tbd1hw.dll",
        "integrity": "sha256-+R2RnFwW+tttm1CJo/3KOLMap9jAA8zCoYHm7NRWpm4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.1qs456y7oy.dll",
        "integrity": "sha256-l7i4//VqdszvtAaIY+NLzyKga208TYwt28Rgxy6SLF8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.w42mz5pgqx.dll",
        "integrity": "sha256-UHuwduw0yO5FEc2Dru3qYq9KHT1Zz6AOSxnSJgz/704=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.tdo7fbxpk6.dll",
        "integrity": "sha256-z72zPQF8wF32ju8OM8tGSwtxAk37mQ6jCB7LiWoyq7w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.9lei78htnz.dll",
        "integrity": "sha256-XfEVszSeFoJnkG8vI3TGArsA28lmel0KSFjV0HDqx7s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.xa7fj9f464.dll",
        "integrity": "sha256-uXkC9gjaATAXaPyIlNcaBx3AXrpeNUnz8HTwwClA+Xk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.1u7hyhbt8b.dll",
        "integrity": "sha256-F4iQiUjPZGDPjnW9bzJntdqX7bMANUDOY3bLH0QPhvI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.gfvay797zt.dll",
        "integrity": "sha256-ZBQkHbtMAze4PE+OnlLbhxPPhBp99LVI4TDOsY37ej4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.scepxvh67p.dll",
        "integrity": "sha256-FL6VanTBD5HLR1/3YdipLIvHZxtsD+CvAAuB8eO8bNU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.ta68x5wjzx.dll",
        "integrity": "sha256-G3l/FIKoB9XysIMwSwXjqlzFRRHcS6kjqbxvcGeuwKc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.l6ozseebw0.dll",
        "integrity": "sha256-LZnLFS65RkhRNbPye98nEXcFHSJrcdhpN16bcBMJ/rM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.n7mhpcuc4d.dll",
        "integrity": "sha256-TSxsw07mEfX6KPJAMFWV0gCxTzvVCzWaawW85nNM2vo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.25gdizjpxi.dll",
        "integrity": "sha256-Cj9pIh0czOW8wmSKXhr/mAr7hDGEGPkQAMb8YWfyJ+U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.a57xpd81at.dll",
        "integrity": "sha256-bm9XnnEW5VMq6nqlJdBr5/AHjKzNFh82bD+MtZxC8hw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.9cfwb8aabb.dll",
        "integrity": "sha256-V78NCcfVEYKfX667WuQOGcAdyuEEczMwSANJK19LrL8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.qdero648fa.dll",
        "integrity": "sha256-ck4gLJhYat/Oouz3m25Q13+XrJLaGvyLeR/hZF1w6Uw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.8emzjineof.dll",
        "integrity": "sha256-IMf1eBRnhf8yvtEganL+jZcBNjqYahxly8xpt3SEa/I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.bfzw32drs0.dll",
        "integrity": "sha256-VzZKfSVtdf8dRTe6z2cIh0PKD3xQ+b8Aq5LkX3u1iG4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.uhlt08rv6h.dll",
        "integrity": "sha256-7l3rS/BILkWFIOp6q21inuYBeeQ+R2OjZW3tbBxUCuM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.60ifgteuiu.dll",
        "integrity": "sha256-5gzSagFdUPhAg4VZeLY5ph4lXdvbQUmJQ3vffWwlOso=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.ynzndw86p7.dll",
        "integrity": "sha256-sj66ISkdf/LghoPFS+YOvCyTo3bSIZUosYXNwbEHupM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.ikerdxcoa6.dll",
        "integrity": "sha256-gpM8/cNp1bpSQKZsm2un+7Pa8ys9ilA34pwEOYwXC6s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.e7ehut1vhw.dll",
        "integrity": "sha256-1luk62oJJBvaklpzB3KkJkkYHIK0VyMWQTjMtOQq3zg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.ilbp4ykkdb.dll",
        "integrity": "sha256-Cm3KlxRJEpiObnggHwTCGO5smpAUVsxdMgRORbmNgxw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.u2l7zfdxow.dll",
        "integrity": "sha256-dhXoLfomFI4ZkasD5y9CjkiK+bLANL18t0u/uJRaUg4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.zo93nx6ryq.dll",
        "integrity": "sha256-0w70vkxjYXomwLR/PIwOGeguuDSd1DdwKdAjtMaujEI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.hcy382ni5c.dll",
        "integrity": "sha256-oRBVSAr/EZ9YNMVfFYEsc7eX3BOq0AxTV8vr86Ln7B8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.s69i8bj1im.dll",
        "integrity": "sha256-BIO1skGgRxRAkRuKgqRFbbjz1cqSM3T3AEg1tNVbGL0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.kzq36mwwan.dll",
        "integrity": "sha256-oHbpU0aVg5K1jtGyTI14K3l8u31aPjYmPAaK5jOFlSs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.wgx8m8syma.dll",
        "integrity": "sha256-cJF3A+4NowsFZOAh5GWC8fskNE2z06EK+p9HR9elkqc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.sb5bhp77kc.dll",
        "integrity": "sha256-SCtJ/Q3D5t3QqkO3FM6KWz0nhjW6+rZfw5q4+eXNsnU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.9kxqe6go6d.dll",
        "integrity": "sha256-ly2lPyyxPNvHjwCXuegWjG7eDguImQuTrMFhuSyqRXE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.moczao5chh.dll",
        "integrity": "sha256-9iQkSN17etFkLRzwfVY9EDjsy66nSpJcAJWktcYiDa0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.asqxy7t32x.dll",
        "integrity": "sha256-2nN/t2X7aDQ7CnZukgEGSpfwtLWQoqiplaB/RqXB24s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.39fza5hqeb.dll",
        "integrity": "sha256-90UrN1Tw/wc1/fjUoaDPNn1hKtiE1/YLZQsx+FCS9zo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.xzoxmwkidt.dll",
        "integrity": "sha256-zRLvqunnzsNCpUd9HAMvmgH+MTvWtiJY3hnELy5ctec=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.d3qo1wm0o5.dll",
        "integrity": "sha256-5+SY3+2DGvSUiBLXxsN9uIqSUEvEH8UTUNoatihkfCo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.5g1ay2bzpk.dll",
        "integrity": "sha256-K8BKQzsAY1jBBD+6SNEqCsDVm3CLlNn9DJ1bap+v/Fg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.ac0zh9mhaw.dll",
        "integrity": "sha256-hv4r3h9nUueX1Nqx7GUlpjFMUHDI55Q96Ox5NBwI6Vo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.uk32laeeg8.dll",
        "integrity": "sha256-YoS/brqNHmbfUsFGiFbALYMwkiQ4NaTRMV8irFCwiQM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.f63gk3db87.dll",
        "integrity": "sha256-F4SQ3YwCdUAPC/YnAO//oJCY4bXHtF9b+6e5rcvxwqQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.phjp0dq3el.dll",
        "integrity": "sha256-Ex3fOcc+rZ2wn5DcyVszwZSj8bc4NW+7/3DVH3MhacE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.bteabtlqa3.dll",
        "integrity": "sha256-f7gaOBX7oQotDen3X/+9S5LNQH7pwYC9IlPxes8eUBw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.lctjo1ulut.dll",
        "integrity": "sha256-VfeARqiIOsd8W02vUFXvZsH73IrOrXsv+l+1Hy19ZNM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.lhp7rs20wj.dll",
        "integrity": "sha256-N3jSDeTwk0fesusemD2dpl9S7HXnx29d8dVnqWEgbtk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.imx1dghc38.dll",
        "integrity": "sha256-hiKZqA6AtIjOUBCR9S+uB4WRsN8CuQ0BifRaKbeNfcg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.r16xid52sw.dll",
        "integrity": "sha256-3xIzUUWPtrJUkpWCKFqUCasNFxc0U3s83SBOw1bvmCw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.vbgxjhrw90.dll",
        "integrity": "sha256-FajkySdhqFXZGRM73HOnaaqWvY+nresUI7uBc/Yx7dc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.hbisfyaswl.dll",
        "integrity": "sha256-vSLItIhbihwIryK5uXFPnD9cAiIxFsMb0g6PYGUb/Lk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.liknpj9dum.dll",
        "integrity": "sha256-nXyyiRCOkT5EWvRBByxtBz5uWw0biVpLq8nS/2DTZ5w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.64ylld6w5v.dll",
        "integrity": "sha256-Cnf4HKxbrcHpqGt3acTL+LH1G+KzbFH0SR7itZxDAQw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.rmcc1jhjkl.dll",
        "integrity": "sha256-82djL4wvWrpujr18gevppfYcJjpmu2cAx2l8/gFfNPg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.izojjwb5dp.dll",
        "integrity": "sha256-wpcI9Kv0AUHkOiYxehEMdhzjs17Jd3CA9CT2NkeXi4w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.wj4jhfwi45.dll",
        "integrity": "sha256-NJUUY5qNw1jBMcKepSe7S4Tfvu0BQjirt610B/Kkb04=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.5c996eisz5.dll",
        "integrity": "sha256-e4oV24V4JpuudiS5WpGpwJAMAFpUxiFTeBCrnutVeT4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.430h55o7dh.dll",
        "integrity": "sha256-sLOvScdsrZ1FPKdnf7Je2mAD+MSh3H+td6SrTwGaPhY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.447uupdyl4.dll",
        "integrity": "sha256-hLGtDzKwVu1og4VfWhBoZN5djHAs7JI/ghCOAJXKDo0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.xmm8k4f3ux.dll",
        "integrity": "sha256-ZwfwAE8VKQv2EziBByChduMXJxbsdbTPmkEmoZC7aT4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.4oiig7ywvv.dll",
        "integrity": "sha256-BNu0oqxpSQZ2gmTWbQE7+9aiVf9s+76KacsyMVI04jA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.rcmcwhz6qo.dll",
        "integrity": "sha256-1U/f1/vElq3NycQcnrxLKV05o0YPSFgbWNl5N3v4dak=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.cm6jvgrjs1.dll",
        "integrity": "sha256-RNe3/hC3T4tyssJ3gLPfVUt30jpwePlljGgvNbGL8CI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.uqh1kcadso.dll",
        "integrity": "sha256-6ssS13PPrTDhVsnSzv1SumRoF2vML/Hzfq/h76d3tyc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.dv7nzqrqzt.dll",
        "integrity": "sha256-mWKG1XxNUdcQvrujq+f87XFiReb/Pdfwk84Ujn42evY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.wu6e0u5joa.dll",
        "integrity": "sha256-OGLD3XgzLQR2tSEkwWO6hfx8Bc9Le8QQj/SiAp/4va8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.hduke2df9c.dll",
        "integrity": "sha256-O4PCZf/5Pe6aOsPyS1dBK30PSsbAy/8FJuTyyeUkEEE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.yxqesab7jq.dll",
        "integrity": "sha256-GgwZsxzXR6OIupxdnWLV1lKGhktkvFb8M4wYOqLRY0E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.6nzpgjfkqq.dll",
        "integrity": "sha256-TlNYHJ8MeWfKl4xFKC8awURuAQq62cvtYCzJldkwEL4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.wfvtfjmivw.dll",
        "integrity": "sha256-lEDFXnG79zy8YcWUNCu7E60huJVC9oWcnlSgr7/7qQs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.fqvco4jqn5.dll",
        "integrity": "sha256-WXw5LDkuOfGEVo6MWUroix02Z0rzGDlmBztsdYiD0yY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.bhnv1jn76r.dll",
        "integrity": "sha256-YXp1laIfhQaR2eeXCTsgIDnBMEywg4GXDs4K66j+LDE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.atnd7xfvku.dll",
        "integrity": "sha256-MgsMl/1GKrXo7BDr4OQQxsxMI24HGoZe/dBML0e8Hs8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.64yttnd1at.dll",
        "integrity": "sha256-9loh3mPa+7N1Vg8y1L+lWLic//J9D9IkwXxSzADLQbg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.i7kz2f2bc9.dll",
        "integrity": "sha256-Dg9X15RuWcd3TQWOX7jRwjqitW1i2VGGaemBBKCZgFo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.1oi5v4mryn.dll",
        "integrity": "sha256-wRwTPPjMdUAiGmFydih1WOKX3qEVLS+kRyPwordrV6Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.6we5geja2i.dll",
        "integrity": "sha256-ppLZar0wyrwHvoUzKU+l8wa7EJH5ICR5FO91X6Lwsk8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.u9wdjb14ko.dll",
        "integrity": "sha256-ovMhG/Fi1DB8b48uIB/a2TbaKKHR39dAGA1/tu6h/1A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.9cpkwke74t.dll",
        "integrity": "sha256-SU3mOdeMQHcbEm+jEHJ7B8Lip7k2TgV0w6w3Upu3phs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.v1ejhoz3fj.dll",
        "integrity": "sha256-HTFK7GwQN2PSrbbiGSHmO2Fy51tFERi0w0kP3voBkQc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.biufbchsbe.dll",
        "integrity": "sha256-zQwJ87tIB6adw4znbe2VQEMgiYjI55UQWKj+vobupP8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.le96wwol5e.dll",
        "integrity": "sha256-4ypRVbkoD+nLWn3+4dDdViVQ6HtAZiyYgxR+6LTQT4Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.bg0igbtqze.dll",
        "integrity": "sha256-yz5OgUtBQ8ICBC5gjo/4LHBzIymiN23Wt3ZS7gUYRAs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.b5b8ksuch2.dll",
        "integrity": "sha256-kbGHvI7nN0KZbhC9f/00fnUK7v+EmrtWySGQYZmhynQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.38z8r50eiu.dll",
        "integrity": "sha256-rezOYYMW52Ox2QyTznXJj4Td8I5RoUt0QnTHBDy1xzQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.j9zizcuy59.dll",
        "integrity": "sha256-B5Yvmrc15EAGngTBuVTB5Ihgi6XHf61eK0KHPJ15LC4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.35o6hi5fwr.dll",
        "integrity": "sha256-twiFdYq07KAVbpSoempy0WrJ1qXyr7VigGYQHCSkfd4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.atd352lccb.dll",
        "integrity": "sha256-UtoIxoY9tEe8QpQC+EkY22e5Yo23NVLldbwclxCVC7E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.dddkxfty5i.dll",
        "integrity": "sha256-T9LdS/BiSlzbykQfcjC7oTUHLWQPrV4QDk8M4XpIgHA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.u7gw2184ab.dll",
        "integrity": "sha256-GoAsTBpaYgNMdgqjd+Asxp4lGPs1p/HgnrAyrQHRUHM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.ttl1mn59cc.dll",
        "integrity": "sha256-wUZRrpmykaxvqA2kkYITbFMDhbBQMgKs4UepJbiONoE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.c5czm4rsce.dll",
        "integrity": "sha256-QD4RhkRGTTg9XQpQg6fUUQI3odC9YO+6EQGIR7jwGtI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.vtue4ypzbc.dll",
        "integrity": "sha256-bdC+z4CUi/3ov85FtWAEIkUjTwlfwfXoMqNkVnCc0OE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.6yklzstvjl.dll",
        "integrity": "sha256-TuB//0PkBTdQ5K//uEgvev5Aow7UtNvBZ3fhrSkG5Uw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.ccglclcuab.dll",
        "integrity": "sha256-BHpH031FFvK8oR/umbBoGvxiu6bWNfMxU//suUhan+c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.7lpdqhespp.dll",
        "integrity": "sha256-NR+YEszTn4qfOBx6ASbFkzXmliuhIlm5smRUwPcbQlI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.uxhebj79o0.dll",
        "integrity": "sha256-UhmATrwNRVVtref28WxwiV17zzZ6HTfI9LZXkhaHd4Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.j328yxngu2.dll",
        "integrity": "sha256-YU1PY8jhm1jJlF06z8wiOMcq5aEFzMbS9ghtbvSbu10=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.wypf3ncqqw.dll",
        "integrity": "sha256-yO9Bs5VCEDfmicz/ySCKNHEJUKBUuwh6yqcv9AcBIQw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.i3q0lxgifv.dll",
        "integrity": "sha256-Hl12Tuix4w5ybra9sIj4B+bsE+SjK9ZstkotRE8GCBA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.lfnd0evd27.dll",
        "integrity": "sha256-HyD3wSWab37zAav9oKjOmpp/e1UsqL6nS9MZDhU5XMs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.puzz5dse0h.dll",
        "integrity": "sha256-v6Yq4VR8jx/OdIJ3WAMNNFqEDfW1R+ybRlCO9DGJXiA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.651ms9u8rl.dll",
        "integrity": "sha256-thAuFN7ug07c+1hqG0oewgoHOdfJnR8u4TPTSmN5XAQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.k7ncglc0pt.dll",
        "integrity": "sha256-gLvbCXvIijn2eAvHYoUu2LFfW32WorXgoBxu6z3sdw8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.rmdygyfhg2.dll",
        "integrity": "sha256-fX5Xeo6vOJeO4rtU/gi5rFzNxgxAzBivjPZiREHk21o=",
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

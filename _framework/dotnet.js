//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"e2f47b0110ed922f21a1522da67279133ce28f32",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-Dq3aXtEO8Ty2PCNDqkwv3YDA99bjdsaAlQWblrEQl6Q=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.vzj2a6aakt.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.zbexyp8zrs.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.nxw7lo0lh5.wasm",
        "hash": "sha256-hYigRhIZKHyCXxXWqL/yR3ZWzZhV2oSi+2N3/UPeoxk=",
        "cache": "force-cache"
      }
    ],
    "icu": [
      {
        "virtualPath": "icudt.dat",
        "name": "icudt.oh1zvcfom8.dat",
        "hash": "sha256-tO5O5YzMTVSaKBboxAqezOQL9ewmupzV2JrB5Rkc8a4=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.kx3tmvlthg.dll",
        "hash": "sha256-KPss4VWacWF22isJbrvm7YguglZpheH3jFMjz81OFOA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.14d95szn7r.dll",
        "hash": "sha256-X1AlyW7GiJSHa8GAduXFrrlIFSDBLNmb4eiHtUcMrhs=",
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
        "virtualPath": "Bromix.MudBlazor.MaterialDesignIcons.dll",
        "name": "Bromix.MudBlazor.MaterialDesignIcons.j7kuua9m2l.dll",
        "hash": "sha256-MejXbNiM4pKT5NpFaoMw/Aei7wKnQYIkShKU5I92E0Y=",
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
        "name": "MessagePack.2xcjg0vbui.dll",
        "hash": "sha256-2ndipZMWRMvGw6ROJ0p1UQEXpw0HxI+3HlEumeaZOcw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MessagePack.Annotations.dll",
        "name": "MessagePack.Annotations.bwft0cst7r.dll",
        "hash": "sha256-u6U6i0QYT84wF4UCFJraAnGF4X9BVrry3DitbBVQzdY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Authorization.dll",
        "name": "Microsoft.AspNetCore.Authorization.nmn42vaso7.dll",
        "hash": "sha256-YfGVX9YbSTWy7xz/agjPh23ewj6vS4/y+27ry7LNWJg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.z1nvrtlu9t.dll",
        "hash": "sha256-iRo82K45S9bwHwMrEZBkKw57YOQDjeZApQGsoBZ42QE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Forms.dll",
        "name": "Microsoft.AspNetCore.Components.Forms.skdcj0pqb0.dll",
        "hash": "sha256-RC0KCfASUn32FXHkqYpKlIgD9BPrzWotwB8FzzmidXs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.f74xk5xvsh.dll",
        "hash": "sha256-iytI5NiFJJh2Yd+U01DvbIsUNkw3s4CUAELcvE4buZ4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.bwjkncz7se.dll",
        "hash": "sha256-u7iyRI4gE/cuL983OvObVh/JXgPMaqgCE/AFr03fFoI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Metadata.dll",
        "name": "Microsoft.AspNetCore.Metadata.7fp731y3ev.dll",
        "hash": "sha256-jRxOh0psytnHmbMD5d4igsY5UeIwiJQ0L4cxPfomYks=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.w2dpnzam20.dll",
        "hash": "sha256-eBGGKsbCRW4e/X/zAOZWf/Nz+8z0JmqFPaw3a1uMGcM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.pi9sxd7yc6.dll",
        "hash": "sha256-z9uRFW1Nh1um9UDlP5aYjiZqskq282cVDbbrm2Rc/rM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Binder.dll",
        "name": "Microsoft.Extensions.Configuration.Binder.ycsgs0ghu5.dll",
        "hash": "sha256-bjABKj9km6LkpBAc53t3ew6JvgUwL+fBERjPaA5WGSI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.FileExtensions.dll",
        "name": "Microsoft.Extensions.Configuration.FileExtensions.7bv5iondi1.dll",
        "hash": "sha256-PXAV+IyhyQPiiOtzzqZbrvJRy0HtmeTLtgexiBbTKqw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.hp09y822vm.dll",
        "hash": "sha256-K3LbAYOMi6HyIax2fSjy9noMY75YGRC8/vKwgyvtEV8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.fw9bqq97oi.dll",
        "hash": "sha256-Iaf9Xg26DzbF12Q+VyoRqu0BrJAVMr17lqkZ6wJ0k4k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.7zdaci9xtm.dll",
        "hash": "sha256-Q0l9jyO4IVkpWTPv/pLIJEdGm2DNvvzKSmIjLk67ypk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.dll",
        "name": "Microsoft.Extensions.Diagnostics.60ucakn38f.dll",
        "hash": "sha256-5mx3PIl2zwwFazYOz4djfyhjmBAYm99Na7V522o+NGY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.dll",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.2cjqr4v941.dll",
        "hash": "sha256-Yp/MPniWn7pS1796sh6uoqdxH6TgtLkb03rYs1gW1gw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Abstractions.dll",
        "name": "Microsoft.Extensions.FileProviders.Abstractions.0ybrr3guq1.dll",
        "hash": "sha256-yCPuozmvK+yiwwBLsHcRjQ22N5+QjnMk5ZRh7ywI5LY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Physical.dll",
        "name": "Microsoft.Extensions.FileProviders.Physical.7tpkh4xe1x.dll",
        "hash": "sha256-q5Dqd52tB/kKZNaaxwN77+l/P3DQJVltM57AgUQB6Gw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.FileSystemGlobbing.dll",
        "name": "Microsoft.Extensions.FileSystemGlobbing.qkdil6tdwj.dll",
        "hash": "sha256-xs1ueRF4s/mfX/S0blGVXtuS5vp27WcJ53jlJhKgWU4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Localization.dll",
        "name": "Microsoft.Extensions.Localization.4bd73c536l.dll",
        "hash": "sha256-4B2ei119oY+tmDVhYD9oPgmu7fiKpKVkYvWvsMTt7dQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Localization.Abstractions.dll",
        "name": "Microsoft.Extensions.Localization.Abstractions.9y52sroyxh.dll",
        "hash": "sha256-X40etRVpCxqfUbm5bA/3/hFOEhX/2gMw7+QU/F3t8+I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.ue9ao8pz9l.dll",
        "hash": "sha256-JtZrKbZKNrx0FumZsPtVvEstnRNYtr74MMag7NyB+G4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.alxnjjef8h.dll",
        "hash": "sha256-zsg2wd/45kcB7k/TpxC9lx/vlTyQo0tXfZ9DYxA+bDk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.xypz997ikn.dll",
        "hash": "sha256-xzTGqf7KOi3zlZfgKO/qjup5bn5d/IFd+LWJM4Qpdyg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.ConfigurationExtensions.dll",
        "name": "Microsoft.Extensions.Options.ConfigurationExtensions.vgnq8gyo9o.dll",
        "hash": "sha256-T2EZ8vlfZWQSxPMf34C3OTFAYL7rN06jqpL+sxZFgvc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.d9h2to0cao.dll",
        "hash": "sha256-H58CeBew8nf0XM6wknwU5Byr/m1S2vtatr9oiVKUgUs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Validation.dll",
        "name": "Microsoft.Extensions.Validation.viv86vxzzc.dll",
        "hash": "sha256-aTyPTXJS9CiqmTw0xTLjQipfJ2Qe4rnGjsDVryxbtr8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.iwx88i3ucx.dll",
        "hash": "sha256-XmLU5MQIw2DpLZ93zqqzmObCp1gVi3rvDZVLK3BlAdo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.r5s07gs2pc.dll",
        "hash": "sha256-cYomZkHg6ZD/IV8Iq8DTfeST6z8HERSR6claKifb8Zg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.NET.StringTools.dll",
        "name": "Microsoft.NET.StringTools.3qbrf4v2ki.dll",
        "hash": "sha256-5RyGeP1gKiHCSbNp6DOWYBmTUTJHb5Q02olr74CLo7E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "MudBlazor.dll",
        "name": "MudBlazor.v6rqvsn1k9.dll",
        "hash": "sha256-JytI42rX6uAg93MjhaTprPA1UidUa0tVtnywtF3eckQ=",
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
        "virtualPath": "Serilog.Extensions.Logging.dll",
        "name": "Serilog.Extensions.Logging.4bbpnk2zhn.dll",
        "hash": "sha256-gNPtvj46wLTFvHZEdCIOfaEd+NKF4AmPPcG2WnNMhQc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Hashing.dll",
        "name": "System.IO.Hashing.8oy67f0qtt.dll",
        "hash": "sha256-+If08N70GMn9QZW0jwrfdrwdJJZ2eo0wJZUZKouhOqk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Tomlyn.dll",
        "name": "Tomlyn.byx96zm32d.dll",
        "hash": "sha256-I2axSuhCv51OrfIGyLIMfCIX/3W19FZ5mcXHqcqubeo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.zed3k9jn0l.dll",
        "hash": "sha256-q65cGSral6QetMqsxk20q/MDJgH8qrz6SyjS57jLrow=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.3s43n8amfr.dll",
        "hash": "sha256-DQ6QDqJqFzSgz6ZTZJ3qhXOqlZwl/n7Hr8744E7Vivw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.b3fu44gu5a.dll",
        "hash": "sha256-5zvgkGk8G8cVSkEU0cB+TEN/LkLfetgoqBCxIruumss=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.jcqs6aah44.dll",
        "hash": "sha256-Y4IVTCmkZ1JxEk/R3hOdvHC7YZRJVnaHP17ldROTfVM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.3um1qb3vgb.dll",
        "hash": "sha256-JYAcf5w+EIP/mf20eci5HR6LhEmHgF094Qr2TN8DDaQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.5mvcox5qxd.dll",
        "hash": "sha256-DTeikaY6dEcazsdfa5zHZDqAZcxuDn0FS4YCIvoZhc4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.ckut37l2od.dll",
        "hash": "sha256-BJGuNPQiPpOEhnvmdUCMrmGl1qdu2QKG8aPjx2uUv+I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.8pbe9grm01.dll",
        "hash": "sha256-vEtfBjj04+gxW7ThcIjAwC+WdLcMc7H9xarjoxd2q34=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.sh25xsy3ht.dll",
        "hash": "sha256-INNUPMKeQUOtnjT93ax8cQqPz3tBz99AavVLuhx4G3Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.su4bchrxxc.dll",
        "hash": "sha256-rLJBbNGeGnGTInQLLSvtAI9Q4y+T0szSUQpUPkKnwX0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.cnm10773gj.dll",
        "hash": "sha256-GCvE2Abyja7Vkgr09bGFoG2Dl8avY2sunC2pMOF2eCQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.kjmr0u2bqk.dll",
        "hash": "sha256-4MKns4G/ZKwFvLbi27YucsYvZBswK4teMEZkVVMO0GA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.oudfnx7acw.dll",
        "hash": "sha256-IIGkrvZ+vyu9ZEwoJWEItASChTL6IQz4z/tWRgmCaCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.hvvc0edt9d.dll",
        "hash": "sha256-XTScYlC8MCRDGN/iT8kO1XGBwdVTbxRLvyxEcjkFvVU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.5szghxzhzv.dll",
        "hash": "sha256-JV5P6LMmbhBacQoY8fod1SP866Td+hOY4VFaQ3s9ERw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.rqqq1u6ebs.dll",
        "hash": "sha256-HT13IPcHDsbCc0QV5oU+lGYlQKZsrUh/ONdInntbMBM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.ht4dex3xz1.dll",
        "hash": "sha256-W0QGeo+VqzaYBTw/6tS+2hiwYNF/Msf4Z5RNHz9DrYA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.v1m3m13d9d.dll",
        "hash": "sha256-nYML7QIkmXrGG7zG3vrAovx5Zkos3AhExJvz5qryssA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.4vutr6kvic.dll",
        "hash": "sha256-gBRylXP84y0ce/BZDwLdCT7D8jZ5GWDWO3ziFxGAhBk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.pml7os89i6.dll",
        "hash": "sha256-QTFp6A7oCm1DCN/mV1p6/gGNP71fbzIQNUTa31JVIZo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.u5ie9kc3yu.dll",
        "hash": "sha256-jrMwnnIeL5OQBNySxpXxsR72lVHvqHTDZ/pfIFSnnlo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.ptyzt9ynkq.dll",
        "hash": "sha256-84OrXgl1Bufkw7z84qCb+UufYLrk1I2IOxDnUwhla4c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.8x2zlezb5r.dll",
        "hash": "sha256-dOk6wll3bwOlUyOPdYgfXrr5n3m8WQr8o+P+l4etF/s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.kl677f3bun.dll",
        "hash": "sha256-KBBMrTJ3oQosJPMfRdQM8sznRh+IjKKfM6mKzaN6DCc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.iaerte0vnn.dll",
        "hash": "sha256-5onjSyS194mfwiRazN+oy3opGAnJVYHPzraAvD1IJDI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.cwsfpyohom.dll",
        "hash": "sha256-9H7+b5wVJvz4Cs8Tz/6daiaqb+cyhCdRUOU3WH1sRqI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.35tznecuu5.dll",
        "hash": "sha256-udLBJEFHGyTD67kk6RbAZulJSCSEGtIjX+QELht4z0g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.cdvvhz73o0.dll",
        "hash": "sha256-kP1KN7ARhKVAJ3MBHAO2bu2+YGkkkIz5qOnOzhi21mA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.cq4bsj2h2u.dll",
        "hash": "sha256-tBRKjNrzYQY2gFksT3mlCDWuf3Qc3FeVkHU4m7SjvtM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.rsitvqjqe8.dll",
        "hash": "sha256-lST9lu/+fb78D5kRAVKgmX6JOOtxWK4k9+BUvEEQt54=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.oahl76nwn8.dll",
        "hash": "sha256-0Pn7iGbLSOE5zPuPBJgfid+uRkeXmsia5mlimcEnnwg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.h2369p93ig.dll",
        "hash": "sha256-CVK5lKFRVaAblhaU8I3jZcV3HyXcbtb43AICLmkCh4Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.dnfvdvssap.dll",
        "hash": "sha256-B9bfK2LlMHexe+fnFZnL51hzMQY4BNJaBd45EWQPpmI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.av35s9m241.dll",
        "hash": "sha256-Kh0PKxRHBSj+xtk0Fmdyh7MQBJZUUWFZ7XnPMBgKq7I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.97i7l0vv46.dll",
        "hash": "sha256-G8NHELqfWb/tjRU/e0qDjiyROhpS1MxT0R0zhDlpFPc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.ifj0yc8g5w.dll",
        "hash": "sha256-XvQY8UA6bU0uf3frazWKArLkpPetdc+YxAvb3XwCQ0g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.9myiogqkgo.dll",
        "hash": "sha256-wXezPB9yduNC2lmF+jEpjYBEU4GHGWN6JFXJzopdlEQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.qrxdt8td1r.dll",
        "hash": "sha256-NlmBErLWtyIJfu5tj0PiJiMgxpFn5vHuTf4aAz5Pn+w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.boosxwc9vg.dll",
        "hash": "sha256-66w6+HH3zhsTNpQ2Z44ZhcKsmMSsmMsoNHHCphotRyU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.q62ialcvbj.dll",
        "hash": "sha256-buYdScdV2vrOA7JpXtaCOJfITB7Vi9aa79krJ8w14E4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.xh05eq5oe3.dll",
        "hash": "sha256-xVdK4CnKpOkv203DDoaUmGZ8DCh5KTuIA5gu4p+tkSE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.z1iklj0hhq.dll",
        "hash": "sha256-mcax0exZQcK1S6tEu9tfXOWjfH1COu4hEwTzrr9GTOY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.0nm6mlpblb.dll",
        "hash": "sha256-HFJOwA3PLp1tY7hYG+yGsZBv60P2IlX/qUqO1k45lCQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.mhr4fs31h4.dll",
        "hash": "sha256-KjMaAeACk/cUxbuu8xKYT1W4eF2o7KLfc6m7CJnrwnk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.dxfw94iy3d.dll",
        "hash": "sha256-ofHiTVoL07lxDjh92QDBdgEUMQw0L8HkLNv69IUKssQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.v8k7ipdg3n.dll",
        "hash": "sha256-P4hDsX+QEchjNL94Vbwg2iC/X2rzy4vi6khDO43ykQo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.jfad2bbkmq.dll",
        "hash": "sha256-D3QCVhzyXiAri9wpTnVAbk62HsETkVQ39OrQ5SaOrxc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.mk5pza3z2o.dll",
        "hash": "sha256-dkOf2LhBo1hmt3aYSBp8Yyv6cDRmPwC2tiMB2FZpwag=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.5eqbxh0ecp.dll",
        "hash": "sha256-o4ANIZKVfO6Fjt9gS3+kkVZUUZ5pHHxnAtN+Ddjlnbo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.mzyxlf8sqb.dll",
        "hash": "sha256-nn/AtMOS02TgXgQb7mw3JTQdbidv7OTEHLbAKwTntCM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.ix40i1afa2.dll",
        "hash": "sha256-9m6WV3RQg+QTl3sqKfj828NSzkRC/Edr4aaXUEBKfo8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.7wttmkfm0h.dll",
        "hash": "sha256-aa1CNm84He6bhhKR76Ac5P9t9/eLIQsEA+sT94NC1qg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.q365u6aswc.dll",
        "hash": "sha256-JgTK5aMM5/o3R4dQSz/b66+ahI68LiWmAFJwIndJipQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.ld06agiy2m.dll",
        "hash": "sha256-l45Tm9p4trDWgU+UTm3kPBiU23H00q3r8d/t2/Om+qA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.icqmcqzdcx.dll",
        "hash": "sha256-4tKQVmk7hcp6UeYUJSziimHvwS/WlwNPfSG4Tmm+y80=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.lx44djdcps.dll",
        "hash": "sha256-B+U9BHqTqsq4aL9WaCMCpKUMff9Bz5uEoiRYrzvyhSc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.899lssuien.dll",
        "hash": "sha256-HA4VIvFBb+YICB8rFhXOlf8woAN4iGSgPIClRWtPcio=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.hvzjpopfbc.dll",
        "hash": "sha256-o1q4Ct0V4xKdfdv9P5m2oYGqoZOMwRT1hXRhdz14iHQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.woq680jh73.dll",
        "hash": "sha256-YLvaWqVsD/C/Yf7Mkhvq4s8YTKfKng0AyGp/7wnuIzs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.pi4i2zo90s.dll",
        "hash": "sha256-YVUee8V2lLV+1ddC3e2oTTv2n4pnnmd0IuLoHHT7UIk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.qi2cubrdfk.dll",
        "hash": "sha256-wnHds86EG1MjeUstJENFFkK8W+PufFGql46yDHYay5s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.f5sm1uxvtg.dll",
        "hash": "sha256-/R7PTJFPZ/mk1FhBJrzmHwFFV2xFbxsrk9R9Qq/XgIA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.q7o6jds1jk.dll",
        "hash": "sha256-FgfdVHE+WVxWAvDgnp/0r7mOeX6UZFLClxwybwIPBXU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.e5kam0lm2d.dll",
        "hash": "sha256-ftUY/eAl+7vZf2IV2XKMFGpkhSUWI1ekTundINtLRWY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.cm65j66794.dll",
        "hash": "sha256-PGTuqxjtoMutBIZybhu8c8v0Lmk+hqUoBx1aJ4at2+8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.ssroxf1a4h.dll",
        "hash": "sha256-vI9Eo4xTK5N2KPj8EvQ+lc6CdDMe+OFaU4d8eSe1a2M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.nkcpklsx2i.dll",
        "hash": "sha256-GewXQPVdchHoM9XQjo4jRiWUVdAWBrGi6Dr2IIX/pGE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.h38wsokbeg.dll",
        "hash": "sha256-/ezbqL9E51VyYU0Ff+QWy4RhX0Jo+ybNLEiONavdHn4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.8v7nq4ae7a.dll",
        "hash": "sha256-lJEy/3P3fYd76cUrzxzSJIVRJDSsV6XixhOJaSD9ZkY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.6t8zo2c715.dll",
        "hash": "sha256-pgidyge1s/iVxZ89iBaoscdg3QuaY2hK5c2i2sBFyRc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.765kmxrv01.dll",
        "hash": "sha256-0T7KS1IWAlu5tUBVW0q0UZh1xyHwcRRtEEPim9oU6bo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.4hlddupa5w.dll",
        "hash": "sha256-+CJyXom5Y1wkmNCtwCuyREiHlcv+WkCQ5l0QCArc2Tc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.pp9zmkzbs7.dll",
        "hash": "sha256-7bG1VQLcEUw7D4mUaB3V0iMVMaKZcMD0DErdL7K94ZE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.cn4wcw9hfo.dll",
        "hash": "sha256-iLt3oGYYzulC5AchBSJJz7Eit3LYC6jYbdhaqzv/SVo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.yc0nvc2bbm.dll",
        "hash": "sha256-bo93XAPmwLKL6jSc2wl2Fm4dbfeIHJxyYYXeM88DI+w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.0p1v6956p6.dll",
        "hash": "sha256-VHRhN39nv955X8Oi8oTwwBlBeB+jtyaF22wtmJ562iI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.vrh4uamdz7.dll",
        "hash": "sha256-BeetlGzk5eOI3I5RfqvGdlmKUk+rCAzpSqQx34lZmvE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.1qmv6rueyr.dll",
        "hash": "sha256-yfZorOhkIV467Afk0wZ6pgLgkJ2NbJ7MxB5X8ySTyCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.e5u6r2ki1d.dll",
        "hash": "sha256-3h4PxnCP5+eS0WJ2i5561HoJ+MOSG8K4AyUnY7hoasU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.y09xdihv6s.dll",
        "hash": "sha256-Ds/7NUEeS5GWS+3gFNznFhB5UrMMOqDOHDE+czjH/2s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.eb3gl5vvi4.dll",
        "hash": "sha256-yo3Zpe6HOt58WNe4G7/TuiWZ0etbJmR+sIeSFRtiJrY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.g5xzmt1chn.dll",
        "hash": "sha256-bPO2rmNrilXTYxMglAMqJRQJe3n2RGq2dTV0cImTuHw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.ouk4fafpt5.dll",
        "hash": "sha256-kEmFbz0xhhw7Dl6She/hiuSzPOqQ/fDcwN66uQg9Kkc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.ko9vd3m5v4.dll",
        "hash": "sha256-PATrz6PkWETCKrlhR3Fn7eIyauTNbM3Imnpb9EM2Tic=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.09awgmhtu1.dll",
        "hash": "sha256-5HO6/GqwkgYJ+eYq8LIGBVpUbsFLkJUTTlaGWeRwdbc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.4rdw5zfesx.dll",
        "hash": "sha256-YPEKAAJObybJVbMAiPJeyqfkmxgqavc/u7usyihgfkg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.u949zu16lp.dll",
        "hash": "sha256-HrfbcdaA83Wb/00fnU7SlyVY2io0oKMfimsu3oR2fT8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.60c57ldaid.dll",
        "hash": "sha256-+ghRFPNnCLD5dJvnAa3mJD6XksPSWqV9Z9accuGSv3k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.8vi75r1xci.dll",
        "hash": "sha256-RBw+Wx37uMs35I4lh8qeWxTd4p+RJftO8JpkMwy6fbY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.c7hs6oximu.dll",
        "hash": "sha256-GPyMyrOlfw9OZtwoQY3pUS0asCSwbqxs9ypBi3HmuF0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.zlnlecu28w.dll",
        "hash": "sha256-x0h+k4Ns6at40emIaLxF2wVLJSyqdl63ZvF0URT40RE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.n8lnyamn4j.dll",
        "hash": "sha256-R7U1CmLfFUlV5R1ZMNsTgORlJf0/Jbs2t2R1JU8pDkA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.xsjwg016ee.dll",
        "hash": "sha256-Qczbu8HNB5pZ5c24zHRl5RHN14N28RXVh74nyOkajQc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.26pi3p3q3y.dll",
        "hash": "sha256-6uYOdSuNosxF2RazepaS1qIJ3B+7uqfRSU3HK4X4BL0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.rhmw7jxvj3.dll",
        "hash": "sha256-35wusA/Iy3FTLYO2eExPnkzmY/Z4WGnygfbPVXANPN0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.96tfb2mq1a.dll",
        "hash": "sha256-j6t+TXjGQBKhrbn82+2E4e58WQroyMryMAph6O5G//s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.8ihooqxjwv.dll",
        "hash": "sha256-oP7YuDHuBRU/bTg6wNZNATlYJCELQu9wIbQd8K9Mu58=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.9vwogkiymj.dll",
        "hash": "sha256-ZTzWf63XuRIycZGYdjG9NDQNFID58ZMOkJ/f15bExpg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.05slz6fkm9.dll",
        "hash": "sha256-TLOWEcx0FgHQYJ+sN8xQbIrvzR/l1zNlm0VWEeck624=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.ftg3z7scdf.dll",
        "hash": "sha256-HUk43uiOVg++qUeFuJdc4uLpSIAq7QT3lTA2l+ooFuU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.ttthdwbt03.dll",
        "hash": "sha256-QU4d/Q3tQAoA9gJi2mzCgLJDCH1BI9iMEGz4FTsJSgg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.2zn8tfjtu2.dll",
        "hash": "sha256-oothnz99uovS82+jXbdyrX8BTf/Sn9JQV42Kg8TdpJk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.7ok01wprm7.dll",
        "hash": "sha256-WSaW1ECsfYq5QvShVkgN6iw80nyUEykkPhFyQD+ZSh4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.t1sifskj8h.dll",
        "hash": "sha256-f0IQM79edr/S2Zc/FwEfAPhQC2zILS29SRCt6dy9VM8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.pt90iby9w3.dll",
        "hash": "sha256-ve+unMgtJOobQJGLRUgb3VOWRRCUT/zCe1OSaHfWSnQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.rl44jlvcbu.dll",
        "hash": "sha256-T0faf3A4S8RQlCTJWb1aTLQZPmCDP94qqIpfyb70UEA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.w7r1aowkr3.dll",
        "hash": "sha256-9BWJYMLbVSWFmW2X2kwv7bHRcy3dDrDWWdskw5FQnAA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.i0s9wwudj4.dll",
        "hash": "sha256-Erbf5rZw1StL3sJvc2PS5OZIqP5BTGPU0ijwG/nGhFI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.91xym8s6xb.dll",
        "hash": "sha256-vRFaEDd/KqsKx4ot0C/bTzSwKLnQSDZ+njxYL8dw02A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.aaslugx6br.dll",
        "hash": "sha256-cjDIq9v3FNR7tGD+w+a70AomeEzV8tbJQRDko7ycvNk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.k6s0m2nwk2.dll",
        "hash": "sha256-rBzI3lD6KwwVTfy7uNYL7C9MvVKQLKVvvMZBODRIN+U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.q125o0572d.dll",
        "hash": "sha256-Yj4QXHcTC6TbQ9ZPxvK31ltX1uJWaMo4b++Sm4Mkt18=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.95aoto12c9.dll",
        "hash": "sha256-o4msOO7Tg+KGUTiaXtPSMh6lBo12NSURETHuveIesV8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.v5fn3yaen7.dll",
        "hash": "sha256-g3c4lFsjt7Vuma8Th1Kgx2WN8IGtNdXQ+3jcyhuxJDE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.cd6qezc96f.dll",
        "hash": "sha256-wNxkhx95MgAtvPS7g693b+37B59+kG8FEBz7vkaiH1g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.ouga6cqqqw.dll",
        "hash": "sha256-MPYqKjreHwGmPsV0WRMOEpbZprxnNAUWY16i5I/ePPM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.89szp2x1uy.dll",
        "hash": "sha256-NDU7Y2qR1HDi1x0yZG3YKPaNoUzaQcsZNw+0/CRTMSQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.b0k1fcyam7.dll",
        "hash": "sha256-i9pRX9L2VwUKwuxCBab1P84/hIXRRFthCrG8gZecKw8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.oog7uj8wh5.dll",
        "hash": "sha256-yCUK+74sOG7b6Nbp2v6GctKopzVa8MTUPDs3U7JObW4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.x9wpdwwjv1.dll",
        "hash": "sha256-pdwHcPJzSSJqWdlS6JM1NiRqxAGXwxHO45CPsyBBCWw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.6u89z89xr6.dll",
        "hash": "sha256-Angis62zr5zeyK0XHVlnGZj7zfRrdq3r1g9g5mXHDqQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.3wxeml414d.dll",
        "hash": "sha256-7ZKvgxuqNTiwMFjvK8oUDs11WvQ3s40u3I0RH5gBifU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.znfjhq1nde.dll",
        "hash": "sha256-8QBuo/qvCRasW2NjzFh4uz3o+z7R5/3yJTCaWlQjZFQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.fhc801tbiq.dll",
        "hash": "sha256-MyWcd84AoiQrmsh3INy4qYym4+qJg2YI22dFD1VS8Fk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.z5aqi2x63x.dll",
        "hash": "sha256-99/SQcED1plxq2QV3UZRPokmwJk3jfY/kOu1p6JWwF8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.2e3r1xdo13.dll",
        "hash": "sha256-6t6CbK4li70OdQe8fukZt0wn4PT7nfxbqMAe4cl9Nyk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.52algp7qqw.dll",
        "hash": "sha256-LSo5LxaMe3cfdiQkAYvbErWPQTualW61PmFNW4ZgKcM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.1dgzflsqd7.dll",
        "hash": "sha256-lWBKvQNx9AodVlss7YsxZH286nGERVntXqYfzXqGYPI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.ddln4y09y7.dll",
        "hash": "sha256-8Vf/RE+kmx0eabm2I3ndxHPIS0quuXhDIixJIHMn1RY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.2bdh7m8mte.dll",
        "hash": "sha256-YiMvSSfJaevzFFC//d2IpwZ4RaIB53l5xXE3nJhl21k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.e9gl7mvhhb.dll",
        "hash": "sha256-bguBMJfE802QV81HpzN6pnYWQkE21XOJkgyFvizoNZw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.o07ktbiw3f.dll",
        "hash": "sha256-iMkwHxREu0YTlNC3qQF7Y523HnS40WhrCVrLj1WDNSo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.l8o2ofyjw7.dll",
        "hash": "sha256-NXvDZN6yuhpyyf4iqbeW1dgTbkD4P0KXK9EAH8NtRzQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.0jnsg1f1ka.dll",
        "hash": "sha256-HEpV7GnI6d0w5FsdvEhjMy3Jzpp2zsJ0BA0drbSx0x4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.a87diotzip.dll",
        "hash": "sha256-2qcDdNAJ9JlWVMEprASc2zROInHE6aeY2x6rkpn5Rr4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.9sc4i9032u.dll",
        "hash": "sha256-RxBbA2YOgvaH7ihAdhNVhxOuwk9sDh1fVSbQPXilp44=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.0njvcr322q.dll",
        "hash": "sha256-1ALT4d1mJLTzGu+jnSkWZDERH3T5wCOSIZI1kulEloY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.1mpwj7cxck.dll",
        "hash": "sha256-qbjf9qk0l84XwhGoiarPnpva5+zprY1zSbsaOWb+Kls=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.i96bek6rjw.dll",
        "hash": "sha256-drIRhBL1/q1reFiBKzvtpcmIn6lRVu7VJwgImfQvbl0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.06btcj61gj.dll",
        "hash": "sha256-OMpoRiCTtM7tvBSfsttwHX0gqrT4DiIkBZAiVo/Yz/A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.02etv52gws.dll",
        "hash": "sha256-mEB5ie6VIWCgYYP5vGtBzSFhh3cabcgpHEhH6B5ZU18=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.24vxp5xai0.dll",
        "hash": "sha256-PmdAmprZDcuX9KEyC42RgNzoqGxKz5piYn37sxmQi3E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.a6172rleia.dll",
        "hash": "sha256-sl81/dCCGWtWiC6TwnX6SQsTtfyUX/b3eEZuL54y47E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.afwssqmmr5.dll",
        "hash": "sha256-2kjlQ+1r/YnnEjoN538trC6stLTkD8zrHliGuP7RCuI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.c6xlqjvdc5.dll",
        "hash": "sha256-NFFwwPGUT98S8e27tJqsW/GoU3e0YBmpN79t21hZslw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.cc1v0wgbxz.dll",
        "hash": "sha256-dKeazAYMtR3OeM/uAyCKhmZjKDAezMvzB83Wqe4DpyI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.qf6qf9jegz.dll",
        "hash": "sha256-6nlrmlGiMZKRC+KvFRZ6WUkoJevu0KlvMqjJHmIb1cE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.48oo6fp80e.dll",
        "hash": "sha256-XH0yjj/7FPC4MdOd978NxvcRWLr745mPZYuq9N3TdBQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.i2eg7h0lxw.dll",
        "hash": "sha256-OjbgbDeuHONud2gkWpgQumAPoYldFGKdVSQjb81ieHA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.8z1qjsi1x2.dll",
        "hash": "sha256-fDB2/GgCiJ/HWr3uygTbcoMdcuK1V+GqUQna5pePUbg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.x1maimogja.dll",
        "hash": "sha256-JXgXfEH+AEE+ecqUwSKPKbwbYOCQajHL7GswD1Jp9RU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.ghnly8knqc.dll",
        "hash": "sha256-JOw6DFZCRVM5brbYABJQOzQ0KkVT/xnpMlv6x+l+lhs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.5qcgjiig6u.dll",
        "hash": "sha256-bT+DGZTAg2hNyKQYYU/i1LamSt1Kg/dKS6cmc1ON63U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.aizborsaf6.dll",
        "hash": "sha256-gizaE9ftObZ4Vrw+ZcaRiDX1weNcmhXclQA/IXnm56M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.9gca4nz3tv.dll",
        "hash": "sha256-iY01oz5QI7VpVXpwu7tTa1k8i3vYylcYucl3ZbMAR74=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.v4jkbisui1.dll",
        "hash": "sha256-31DvcTASHtJ7YD4L9tNywZBuGYWAGQb7PcWc/dLT1ac=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.bj927igcvx.dll",
        "hash": "sha256-OXQM+e+KcrrBnLfQ2C1cA4yIYedAunnGXr3asFkeQ94=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.q0e2uj2tma.dll",
        "hash": "sha256-huJp/CSvpIKUwzwO7zsaOCJ9+5OveBCgha0I/gWqY5k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.vs5c6e4syd.dll",
        "hash": "sha256-oVm3SDHYuUDKXtsIVdZGeUKCZOAJoKt1i+6ST3jWOH0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.qpmxaoq71n.dll",
        "hash": "sha256-wgQAee4p8eTVtoC6JpjkXVYZ44jfMEjDEj5WarfZEJk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.1fjpuda7cp.dll",
        "hash": "sha256-cz94Gr773ODJG4W+RjoUUeW81l3R2L9uHfupQaicbeU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.s65yzf3y1k.dll",
        "hash": "sha256-xJ37KB0dt5wuz7umdWn8fcskhqya4Zo3RERyRk8xZbQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.67an2o679l.dll",
        "hash": "sha256-nqpR+u2p+s/893dWH71jkuAXrw0IqRAwFwFIXADunGM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.np2hofz9z5.dll",
        "hash": "sha256-+0vpcujFeeEqKUPwzuyIEDH/QHiuLYQ6yDSoQn14dOM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.5556sicnve.dll",
        "hash": "sha256-d/yq2EhDifHnjYqAX3iFIPhKqHzLp2eX4ARcF6V1nU0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.yoknzuj04x.dll",
        "hash": "sha256-gjNXuevDUwxk/Dn8/2M39VGAsYmNM9VeG81nDD9Xano=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.p50akzcyhi.dll",
        "hash": "sha256-s6DhGPL/DsO2PpfX8nLwwHW+pZyjMIz2jt/VsW9OJ6Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.pkzcnr6vxb.dll",
        "hash": "sha256-593YywkV+GHCHwGg3bb0MuwTLoi/UHMUM4VsLlmFpr0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.2q8nz3p4jb.dll",
        "hash": "sha256-6grioCe4xRoMIKTf1ldgIXbjmk+Ayv3FUiGggyvDFLk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.mq96jqze9m.dll",
        "hash": "sha256-Mj44S3iVaSSRs844Mt5fBIZPDB4k2lzYwRrcrmMGTRM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.t00lruy5el.dll",
        "hash": "sha256-XYa7S7UlUtd7ZrL28dlYo2FyrdEaFTFLzg7rZNaUKEY=",
        "cache": "force-cache"
      }
    ],
    "satelliteResources": {
      "af": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.h82nbiwaje.dll",
          "hash": "sha256-EV7lVKpTeCo8UC2E41Xrep5iUL1WyQ2PfJgWPsZ+Qis=",
          "cache": "force-cache"
        }
      ],
      "ar": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.6whwx1xuc0.dll",
          "hash": "sha256-augXkx9tjGT0n37Kl7Rd7l9DlW3mFzpJmJNJjc/S044=",
          "cache": "force-cache"
        }
      ],
      "az": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fj9j7oz9j5.dll",
          "hash": "sha256-9REZ6IuzZwCZ8qlr+aZseKibM4qRzcxuIo1Ws6BE4MA=",
          "cache": "force-cache"
        }
      ],
      "bg": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.48dg4ibmaz.dll",
          "hash": "sha256-DB15B4h0ko+davVYFK+ikBzO1VhMv1TWw6nvAXzktXk=",
          "cache": "force-cache"
        }
      ],
      "bn": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.9ta5xyba7o.dll",
          "hash": "sha256-/X4mtRQQfgI/y/G17NYPrhAMzf0DOa5nrTQyKlsTkMA=",
          "cache": "force-cache"
        }
      ],
      "ca": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.9v6015p6w8.dll",
          "hash": "sha256-O/gS+KsufdDMzXL0W9s3MceItG3jimlQIN0p3aQdvBs=",
          "cache": "force-cache"
        }
      ],
      "cs": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.ulp3j9iwuc.dll",
          "hash": "sha256-noQhCgYmkenvu7w2KZwMU02HLfcqWatXPqFWuVDgjY8=",
          "cache": "force-cache"
        }
      ],
      "da": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.qorlwm03jr.dll",
          "hash": "sha256-lojYyvUKW+CBnmamXzNE2u0/MwRVpCEA4aJjeIwWOZw=",
          "cache": "force-cache"
        }
      ],
      "de": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.yeffkkey96.dll",
          "hash": "sha256-yr/YvZ/ohB8ptLKajLP6uCXWZ41Za7eYx/JNXuyeYwE=",
          "cache": "force-cache"
        }
      ],
      "el": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.l8fhrfjkas.dll",
          "hash": "sha256-ZS51jBzrYdRxz47kyglWhAAyMSTlQDdIqClxWDbtIGk=",
          "cache": "force-cache"
        }
      ],
      "es": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fed4l7yz51.dll",
          "hash": "sha256-160DzQfgHkl7GtQ9oCfXn/QoGpLd01KcdPHGeSKVKnM=",
          "cache": "force-cache"
        }
      ],
      "fa": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.2e1nzw7sqs.dll",
          "hash": "sha256-NqZHsLzzgkKQbpKrxLAVnjC9cJSmK0wlj3iBhDldmN8=",
          "cache": "force-cache"
        }
      ],
      "fi": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.0hfw3dwb41.dll",
          "hash": "sha256-VA0FYTBeG99p+K19h5VnWE0/k94aB0UCQ/n1L5YQav0=",
          "cache": "force-cache"
        }
      ],
      "fil": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.cxyck2yr37.dll",
          "hash": "sha256-0Pe+SXasiLl1PK90xnxRB6PVomeokcoWFPfen+uWsRw=",
          "cache": "force-cache"
        }
      ],
      "fr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.qhm5vd26ea.dll",
          "hash": "sha256-4ov9Q/gbLLqTnAFlmvW7x/IOI2pSvdByQ59eTeTd69o=",
          "cache": "force-cache"
        }
      ],
      "he": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.86evtzlumh.dll",
          "hash": "sha256-gNLjKsC2xpNxBj6mKJHFb8/wwE1bGhyM8UftP6x4EOE=",
          "cache": "force-cache"
        }
      ],
      "hr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.gp55kyn65x.dll",
          "hash": "sha256-JPhmcdW3A5x+/fIutP0e1vWZdhh3PXSvhE/UhK1eXns=",
          "cache": "force-cache"
        }
      ],
      "hu": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.mnygaub89m.dll",
          "hash": "sha256-ckWUtQXX/nYBOFhg5V8wJU70igMkI0S3TietBoxfBvY=",
          "cache": "force-cache"
        }
      ],
      "hy": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.a6j73hchrn.dll",
          "hash": "sha256-Ltwq0gtxXBHIaL8kamnb/GprLuYEir3Ro2kUcv94sBE=",
          "cache": "force-cache"
        }
      ],
      "id": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fzs530ar9m.dll",
          "hash": "sha256-BZv29HDC832u1iLcV5xX6Vt/9wtJ/n2fYbAoGJvv2U4=",
          "cache": "force-cache"
        }
      ],
      "is": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.jatp4vwkb7.dll",
          "hash": "sha256-dT9nDEez6eDk8sE7JrlmH52pa9SR+JU799HzKGGx+hI=",
          "cache": "force-cache"
        }
      ],
      "it": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.trk8sae0r0.dll",
          "hash": "sha256-Kf+bLo+dqH54zPNaJe/x8POnFOo8N1hsGh6PxEw1hlo=",
          "cache": "force-cache"
        }
      ],
      "ja": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.bk8x2xbn5t.dll",
          "hash": "sha256-m38wKWf0yZwHt7j25ZFwN1dQfIDRkDG+Xop4KWnJ3Eg=",
          "cache": "force-cache"
        }
      ],
      "ko": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.fa068oft2p.dll",
          "hash": "sha256-CSFKUfcNOfyQoFyPOt3xSIhgnayeQf4zmF/INmnMWMY=",
          "cache": "force-cache"
        }
      ],
      "ku": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.40i1jfib0o.dll",
          "hash": "sha256-nH+cxzObVW2BYJunRSCf4KQgzAKIKWCY+cBc5dhWBhk=",
          "cache": "force-cache"
        }
      ],
      "lb": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.6pp3b8ib3d.dll",
          "hash": "sha256-JnBLvg/vmkDd5xdzEPb4JxFfwb4upGHY4bjT4mILkgI=",
          "cache": "force-cache"
        }
      ],
      "lt": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.1yo6410jpw.dll",
          "hash": "sha256-N1QyW3V203+wkv7CiPT+AdupevxP8a+dHMU6asTR9PE=",
          "cache": "force-cache"
        }
      ],
      "lv": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.z1pj9evufz.dll",
          "hash": "sha256-aek85Ch82pC2ob2DMU1m2VnT3M0W6/r0zY9CJhIcCSs=",
          "cache": "force-cache"
        }
      ],
      "ms": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.363691x0lt.dll",
          "hash": "sha256-i7J/Qt+zfMJ4TtF5uNN+wBQGgeXkbr7KKIicWXY72ms=",
          "cache": "force-cache"
        }
      ],
      "mt": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.jpsktubcs9.dll",
          "hash": "sha256-V/Pln9R+Awc2CjXRRq+kFfAxsQJyGPvuo3jY0d3fXvc=",
          "cache": "force-cache"
        }
      ],
      "nb": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.5ggrzjzfb1.dll",
          "hash": "sha256-BauSmG3Sh4cuxR5tVHIlT76/t2ktOegzrlQ0r9pzYgo=",
          "cache": "force-cache"
        }
      ],
      "nl": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.re6iwm2zlw.dll",
          "hash": "sha256-DfduioXA4EOngge3Y6X2/w/nH3uYYlr1ner29cDKwk0=",
          "cache": "force-cache"
        }
      ],
      "pl": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.l79js4mkpe.dll",
          "hash": "sha256-YUEfcRbPDd8GIx6w/qKqS39/7TP51mFqUwHlieQnNfU=",
          "cache": "force-cache"
        }
      ],
      "pt": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.gmekv98pcp.dll",
          "hash": "sha256-+HVqIeTONz6Ftfa1bF/bk8Mj4Wf52GSHwXzr1MoLpxw=",
          "cache": "force-cache"
        }
      ],
      "pt-BR": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.erowsfkt8a.dll",
          "hash": "sha256-pgLxvrO2DYb1TIDp8v9GI5T1EmjS4mgmVg+dP35Z9C4=",
          "cache": "force-cache"
        }
      ],
      "ro": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.j47qomdhj5.dll",
          "hash": "sha256-k+ZwAj0QXew9El7ab0k7kJJgViEErd2kLTjHEd3kB+Q=",
          "cache": "force-cache"
        }
      ],
      "ru": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.ry8d80n6u3.dll",
          "hash": "sha256-o2bA0bj2+/dr0cp5GxsaGVnMNrhy+2vTvGQGJssYqlk=",
          "cache": "force-cache"
        }
      ],
      "sk": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.pev1yhq1z8.dll",
          "hash": "sha256-QXtWbvqgjUUO12egoev31OzpXHJAGsRvtTq9qRVKze0=",
          "cache": "force-cache"
        }
      ],
      "sl": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.foik0epziu.dll",
          "hash": "sha256-j+OIskybMz01BIePEVcfuhSqjck5+3cAuzCe/Il0RnE=",
          "cache": "force-cache"
        }
      ],
      "sr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.xqs8d2rjgj.dll",
          "hash": "sha256-iSg693MshBNXY7sbs83O3WzyKWzNDEoQXnCiq5rtdZw=",
          "cache": "force-cache"
        }
      ],
      "sr-Latn": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.oxq1x410v7.dll",
          "hash": "sha256-ZGDMYNagvweFboaZWNQh3KAt4cgkU61wyrlwn+m1hDM=",
          "cache": "force-cache"
        }
      ],
      "sv": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.4hyum3zqpg.dll",
          "hash": "sha256-CHyU24QskaMU9loH2N4lUi03PAIGZzUDwevMmiyOR64=",
          "cache": "force-cache"
        }
      ],
      "th": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.67a567vx19.dll",
          "hash": "sha256-4jQWK+IEw0YjdioAwnEsAJ+sIZbP1lGih7ZzQEPa+Ao=",
          "cache": "force-cache"
        }
      ],
      "tr": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.9fw3fj3k2i.dll",
          "hash": "sha256-G26uch7IpZyfX0E3DOu6SQgCidj6lWIq9EChUWNzpf8=",
          "cache": "force-cache"
        }
      ],
      "uk": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.3y3kbnwlct.dll",
          "hash": "sha256-BcglydVKCNGGdxwHnpIbgc3se51aQOVrXb+q0BgQZU0=",
          "cache": "force-cache"
        }
      ],
      "uz-Cyrl-UZ": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.nek71blim8.dll",
          "hash": "sha256-8R8JNRlEiFGrJCvkIwsUt4CkxWiQkRYUAJOc7sg+/Qw=",
          "cache": "force-cache"
        }
      ],
      "uz-Latn-UZ": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.pi4pypx71e.dll",
          "hash": "sha256-3+aerc6Vxdrz2lTOmPKHdvWWg01xCAmq+IhIf9sj9/c=",
          "cache": "force-cache"
        }
      ],
      "vi": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.871zftzeoq.dll",
          "hash": "sha256-1KNUxGTF6o9Td3g1WHp7y8LGSQR3Cm9ZIzky/WMHte0=",
          "cache": "force-cache"
        }
      ],
      "zh-CN": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.eelzkgcmxk.dll",
          "hash": "sha256-FmtTObBjetFaTvr/dnvQX0xfsNbIQsZN+Y3GXTfYpYc=",
          "cache": "force-cache"
        }
      ],
      "zh-Hans": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.exjsc2wb2x.dll",
          "hash": "sha256-HhgeK5ypPI6MGqbuDMWJ9LDhPsrTsqZjepNn8SD1fo0=",
          "cache": "force-cache"
        }
      ],
      "zh-Hant": [
        {
          "virtualPath": "Humanizer.resources.dll",
          "name": "Humanizer.resources.bl5mx53dek.dll",
          "hash": "sha256-zyr3tahon4h72xbOTLBAWzhDU8s16Zp0UJl0NSb/Q8k=",
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

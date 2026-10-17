//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"4099f83977f4d29604a9aeb971fb0a7bc1d5f699",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-KwJzn0dNaL9QsWdHDXKIQf0jvkCiOwkQ2oV2g99YFtA=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.q38003gvqi.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.azrfhwb804.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.3zpaws0drs.wasm",
        "hash": "sha256-//GZeYgjUoxGpPK0TDGntOZk0L95XIFJV8EA+7Wfffk=",
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
        "name": "System.Runtime.InteropServices.JavaScript.j33xhdu2ku.dll",
        "hash": "sha256-7/IBFxOUHv9zteDT6+W8ZPCv/Pfsa1hf/vY8jGdFWP4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.xqk6k2mt20.dll",
        "hash": "sha256-iSqFudQVONJFkcCtqo+MLhMGOVulrN2iDSyTeqtB5NY=",
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
        "name": "Microsoft.CSharp.mroufrjrd7.dll",
        "hash": "sha256-Hnwyws415rq+1/LxeBYG7WoEYIIp5jraUguiGDGpU3w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.4px6w0t8k7.dll",
        "hash": "sha256-GOB/psta8UEWPkmUuuBrWbVLQP8Mpa1yUH36nLwwHNA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.m4z39siv38.dll",
        "hash": "sha256-lk2/wTYZ/KlannKF/F0X+hYe7K+Q2rqO7Usakwklzpw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.9de9wku5h5.dll",
        "hash": "sha256-Az/wfHKrYUzld22EpZ3LYJ1q+n7yd9wJBmiAOwlkKrc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.8wh0cvf4hq.dll",
        "hash": "sha256-mLIxAFMVe30e72QdrSwtPC7YFyCie8PNdrYTar5z0Rw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.v4ddivzuvq.dll",
        "hash": "sha256-v2FC03J0qTAeGbdHqYJMtOmzj5zOyKh+bsdT4QHhI7U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.wdmd0yhawf.dll",
        "hash": "sha256-lApO68Ug8rx1B5lxXesE9vKedLrh10v9kEwcjH6j0X4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.jvrzz1qray.dll",
        "hash": "sha256-337Pl3PyGFwPa0OCIolo0JIY4E6O4k/ss8ytsNVEb+o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.5f0my2h9lt.dll",
        "hash": "sha256-X1pa5c3bhFKHc5LVFYrBgk3VJ+ZFRjAvoEuV773LYKg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.9lcsuwp55l.dll",
        "hash": "sha256-Q6MdTeYFmHyH05R30c5KDpa2luYP0HJ3wsrFVnr1Des=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.fibzar6f3p.dll",
        "hash": "sha256-B9uvwNkbw0N0idEeUoFV3UGyPZ4u04XdbCnmcFQO0VA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.t4jwaahtg3.dll",
        "hash": "sha256-3Srbc4thusscKuQV2VLHL/XrHD19Bcfa/J9ZYwdntYs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.rp6hod1mh9.dll",
        "hash": "sha256-wcd0U9IOrsKrPgov0ro3nPyeTp3nZ3mUKnCATA3OGpc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.0oq82wgfc6.dll",
        "hash": "sha256-ALvIZ0laMTNd9ja0lsA4RXafnh1efoS7rTnoE/x1EWI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.i2qbaisot7.dll",
        "hash": "sha256-uupMjXkm+IAlwgp8djImIpirU1YyAMK0S28XRCLAMlk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.adsnj7ibet.dll",
        "hash": "sha256-osHPYU3RZ9H2hg8EnEBGENl/GXAlej/MabGmZRqnsI0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.rwec0s9hzy.dll",
        "hash": "sha256-hWnYTjfqDEniqXCulXg1LSaThvavDypKc0WFqGjLPaw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.x95e1e73i2.dll",
        "hash": "sha256-yySpXwbujcLy1TrEiRj86CMQvGaGbZOf3qckeoe0bCU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.jtercrxtv3.dll",
        "hash": "sha256-OVTgv9eUDSHT1DpT01XLf00Q+CGWeQ5z20vO255J5tg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.bwqhetv9e7.dll",
        "hash": "sha256-azQl7DtHGBMzplSf9LOWs0krE1Xejp3Q4KbxpwPpBZs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.npgrar9hm3.dll",
        "hash": "sha256-pQwx0CkwaxibwuPxK2mWsVKXZNhOpPAGJ5A5GjHyBEo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.qne2aoa8db.dll",
        "hash": "sha256-tgAjZ8NTh05egi1Ijk/YwD0D67K8RxFkqTNt79rYl58=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.hdi79e8691.dll",
        "hash": "sha256-OwY09aH1O6uNGyWzoDyrHnV0LKgnPvDhH97NCiuza2g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.h9x5m6mxom.dll",
        "hash": "sha256-pYWZJQ+/ZexjW8uhNQTpLJtCCBlw05DvmqB6kNVI9Jg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.xgpplmydjk.dll",
        "hash": "sha256-MfrCRClu8Hhx9lPfHP4qzB+KPa2vuVzaJWaAKKkmE7Y=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.szsmybla13.dll",
        "hash": "sha256-SHp03ycDgTwjSKHXwONDNMiNkoULMLDNAURS4Z8l01U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.fo3ef4j3tn.dll",
        "hash": "sha256-4Qb56ZEGRCijFeWsNNqhWTX2AfPs89hc1o0mUJotDLU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.ny6foz40id.dll",
        "hash": "sha256-/5RotIwql4Np9r70xbncTKlaC2qTV+vu+SQBslSrz4I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.jhi1zadczh.dll",
        "hash": "sha256-KbEN+P4RVFe0MNddjvsG/F1ajZi1rxz+8U03zK3lpxY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.xtwjs73ac3.dll",
        "hash": "sha256-Cwv297kWAJvSzPVpmiyfcIk8V2PnoYoKT7uOBykRIOE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.qzqb74r5rk.dll",
        "hash": "sha256-mrsAp0tf4US9nWA+doDLelN+JCe4T4Ze0zfNUi2XC8E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.juvlpeh3c4.dll",
        "hash": "sha256-hepTnKm2cojRhJ3RLt+3Ywc9YLXI2diLODN1PGLfuUk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.v641t4swet.dll",
        "hash": "sha256-iacdWz3TxurSbj6KOw9J7pBV5EBN3ji/7Yv3lGB7gVM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.6a0z188bfv.dll",
        "hash": "sha256-0hKYMuMgiZPYt7Qr05s3VsEyErjHRVVcuCaVQv8lRnA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.szji54js8a.dll",
        "hash": "sha256-SOUa+eXP3oLBwxfCLEViOM+CQONfROXlmDyCCDJGpe4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.da8n7g7y0y.dll",
        "hash": "sha256-tSB05ZmJ84d6AggwC/2UoERVh7XQGn9edPkA8UHgPeg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.a7cfz3nro3.dll",
        "hash": "sha256-hgqbXi0nvTMTsiPof3gfbJ9IRRyxjg/FV/2TMy/1dco=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.quavbw4ftm.dll",
        "hash": "sha256-srN7Xhp0xuF71imh/ktnq2y9fCxqz3ZlzQWkzhbooXw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.tlmnmiwlhr.dll",
        "hash": "sha256-z48xmOgB9zTvyQBkWkTQ1jE0IMxPzdQwrOqkNW/++kg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.oeqvum3jfr.dll",
        "hash": "sha256-cH1IJkOb/hlJd5nwMTeQ2gSNFk80Yhxz273YLFNO5QM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.ndk3d6d3fc.dll",
        "hash": "sha256-6x5t6a5lFGcU6esaPO8NQxQLoxh91b4p370VbxoaYZ8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.8dbwjuyrjn.dll",
        "hash": "sha256-dPOycQSne5jN4YiQGTB1sdLAC/6pMaNepycTeKoo7Kk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.gb077ekn2a.dll",
        "hash": "sha256-XFyMUXgvzw5g4dfM0Rdb/unLDjm805+Zjm/XVaqn15U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.saq7x4dliq.dll",
        "hash": "sha256-5OF2x9gHqC9EFJmNRW4GNj4DUFgoHdcfetJmiPCzEOY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.684i3hn1i3.dll",
        "hash": "sha256-GqNqofMhJMyO1gyt8tLUki920/tQp4VGvYbWBoD2ngY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.y62b0smmb9.dll",
        "hash": "sha256-2q9lPMlvK8IOPeUktbMkXeB7qkwaBsW6qoR158OLu1A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.8f2r9a3pko.dll",
        "hash": "sha256-/Dlm2AyR1R7E2CkLrWcSMe22pEouYsyng8LPPI0ZOQk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.8rkt75r19k.dll",
        "hash": "sha256-rGZ0PPZh4PXJFpSr+Cz4Gz72P2JuqFeh/vZ+99R3buE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.jl3hcukq74.dll",
        "hash": "sha256-iU/q9JG/U5qnqZnq03KAeO63okqSAOwk9XkTK5NnSNs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.72k6zuahg1.dll",
        "hash": "sha256-8Tn+W2U6KS7aMEI/BOLH7UQEugakq6m9eitNuPIGm4A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.schphtad1c.dll",
        "hash": "sha256-HEmreKVx6YBHOLaae+zBN02HQZ9HlbFiXDeGrlW/kUc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.tov4djts2n.dll",
        "hash": "sha256-k10jcrfS4svAZpVXw4vXcI4m0xP1cgtp31utD9zdim0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.m2cpwbzfkc.dll",
        "hash": "sha256-otrbugRs+L/a/ITey8OrFwf5EKU0NC0ZYatDpS9uiq4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.mat71bll8v.dll",
        "hash": "sha256-Ds2P8eBODs1WqHcL/WGcmyG4FNWjBE3HdhxnqRQnXNY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.lumcg56i7u.dll",
        "hash": "sha256-rSISf3ddOxg0jS4aETGtqdhEhIjhWf566n4jWlQM9eI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.xyugiuoq9c.dll",
        "hash": "sha256-yYr9nsgZ4X5U1/xArjF3dmAvTxUXgLtkc51X1SDMy00=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.o9fif0cfjh.dll",
        "hash": "sha256-NPOgNyuhfJHI7ctEzhxoPb6Wb+Bl0lssBg9PmQrn2aY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.tvh50xeura.dll",
        "hash": "sha256-N5LrztcL3AH7wd3WecLFhdOKpmSGk+7DRvDNLSrqiFc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.ocabj4s9aq.dll",
        "hash": "sha256-KIzBb/HxTLg3CpVxCxIjsh0wbYOmHNfnVbeSgLn5O7g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.6p5e2zku0r.dll",
        "hash": "sha256-WoK2zCbZxeExNhjUTSlMIa10iqw8eOwZ35Dy4ctlvxw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.ek14siyvia.dll",
        "hash": "sha256-Ehsso0ntl8SSRpUGEc+EMTUDtZeFPfJCbrugTlGPjmM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.a9yx5g9psy.dll",
        "hash": "sha256-Up8NGp5DE8jCmmAKUsQhNnUkiT1x/TmwNWe32D/c2kA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.uo03nw38an.dll",
        "hash": "sha256-Pk0Z4F8Op2MjPXsQtWiFmhWeUDyDifIC/6HlohnTqa4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.td2ey53ksi.dll",
        "hash": "sha256-bzZLQEMqzL6SJfdt3ZNB+NwBJ0h0VwyTEyshVbKXIfY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.zdarpbiqf8.dll",
        "hash": "sha256-V9LZmOJ2ofRpUExgrPKtUytLfAIwm+JwBtvCZOnKzq8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.dr8e1eq7iz.dll",
        "hash": "sha256-2RwCIIPhsuswSQEndpbjIKFKLp7gyjFzVA2TQbe2hqw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.qnv0t1b2vq.dll",
        "hash": "sha256-uk7UahcM8guwbGBh61EnJ/egBAaqfTQAFUVb0P7XaRU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.u85bf4dvnu.dll",
        "hash": "sha256-soFAVliwC1rlzQhj1tpEu7TY1pdCoAOrANaFQ7/lWN4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.vpaaiv7gbd.dll",
        "hash": "sha256-w/J6S4qyQBFTzM0ZTD5BY1p9fbHCK4rRsc/jJCUoarQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.q1ie4lmvc5.dll",
        "hash": "sha256-IpUq5h6ZHXPkp6hNkVCuIwHMzz6jPNqNBuf33L1epFI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.y9zw7rul0f.dll",
        "hash": "sha256-arJqXX2GDQfbLxPImHE0WlfmqEz8T37VS7g0opVkmv8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.pu232xqbed.dll",
        "hash": "sha256-zwgVNdRwXGfgj4ML0tjqRufBjj0U0jf66EB/nblwt7g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.isvy8oesnj.dll",
        "hash": "sha256-ch2631tDbFBoYNPAlJWeakLMQR6fUKgKye7U9ZjB/0k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.uwf4e8w5bd.dll",
        "hash": "sha256-cqh4+9uXxoLDMEmiQJ91VVxzuWhJPNTW+FJq8j41JeM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.gcnt86jwuc.dll",
        "hash": "sha256-kNRpI7i6bqK5ycIZnKjHDjY2V6EXeqTORv5t349+P9c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.24bjajyaf7.dll",
        "hash": "sha256-/ioOX/rFfknisMsGrYJM3S3LivOA0Nu96v5BKP2bhoU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.8xgricynzo.dll",
        "hash": "sha256-lI8knXMzMgqQgXOKtNh6fjmWNC7zlcIbLsST6X2gMlM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.2gfht3689i.dll",
        "hash": "sha256-jg5fehmDp6KeoliM0Df7lKI11uOe6nC7jSeMJv724gk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.mzmlsg3fwl.dll",
        "hash": "sha256-XswB4oLdrILc1NfG7ae+yd3D5QUeEBDkjLU6/t/C6WQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.0gozrlpvgo.dll",
        "hash": "sha256-gNowK9owNZnrxACOgghtcB2iD2Pj9M5QYTLt9bYSFHE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.fqk2xas183.dll",
        "hash": "sha256-iQHO5fpRlcfY6pBciYgcamiurw4V/qGSMmc4yTXaG+w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.4nrx7xrktk.dll",
        "hash": "sha256-MEVLvsCcAAwkRHrsGLpA7vzvJ5PmBqSVGpU27HoHF4U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.ox0k15im5x.dll",
        "hash": "sha256-REkRX6hIMUT2/VcL3faezdU1U4A2CsOG+nTfpsypvXo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.vu30hrcdon.dll",
        "hash": "sha256-ee/K3eZeJYrRfK8h8LDguLAsgCeWFfkfXwG3EBa42Yo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.a2vp03f5mf.dll",
        "hash": "sha256-fnoiVtPVeDHy8U5TJ4eELsgngBLZY+NLBhBXbigWrZg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.m9pjkkm4h8.dll",
        "hash": "sha256-VjVnSch1b8iYIu5FidAmx4EKQwpbqDd4sGXBUCLb0GQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.5e373u4a1l.dll",
        "hash": "sha256-Exhf+rDJuoOxTxjEeQ9sBhrdmB+dm3DPNIvkauCdk1M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.8jkejyto6k.dll",
        "hash": "sha256-dOpb1dzXtoJ3IhseCwyd6FmNT6CT90ZPGMpx/eyPur0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.25nisna2v3.dll",
        "hash": "sha256-pr2tmbkMkkRZpHVEO+tJjz6lJ/4fk0PUDMxRs8FznpE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.9lrl3t1ife.dll",
        "hash": "sha256-7YXnkmrN5RB3r+6GppiJB2Ba4mW32ujY50piYPv16/k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.nb6kllmnqs.dll",
        "hash": "sha256-/dkqTFeWPIf4vcRUDthuR/ebigrHWhaOeUoszWCBqXY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.8ji84uzlqp.dll",
        "hash": "sha256-LMSbvFHMRlzoSjH3lJr8QvnCuadmubAK+9597WWqXZM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.rjk7afjyls.dll",
        "hash": "sha256-OQbD6xsJk93QeLtaEnrahBw4b7yUmw+PUJjJpEkaDNs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.s9qi7i87ys.dll",
        "hash": "sha256-gIRuFmdD02cEjFIYkW4q08xWiMPdKsLCxYv58wpGVpM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.awrx0dx2sr.dll",
        "hash": "sha256-eu+Hx3kfANYahpVz6iM/lDnHHPU0MHqWCgK2cDS/9xM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.1l5bwz8znm.dll",
        "hash": "sha256-+0I1RpV42z2afMEWYsZwBUfGvhTZByA1yt99zvk6c58=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.lg9494lail.dll",
        "hash": "sha256-G+56PGDnklmcJwzjIUV5F8td3w08HZpTe3bY5rpOg+k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.zuojku2xbm.dll",
        "hash": "sha256-mzBlOukczYdQTDU2ggQNw0uQ2FOUInWZLS16HTXRnj8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.psf0pxodtz.dll",
        "hash": "sha256-+exr8aSX3c1ZI5LuQbgpfFk0RRmcBnDIupIZ3dTPyTI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.wn9vs04pd4.dll",
        "hash": "sha256-rF4hqPitczZSaCT2KwMm0HjNMW+xte4L3EChqHLfryE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.jlxc65ugk6.dll",
        "hash": "sha256-6fCTNs39xiKLk8e6CKOzcU5WYRhaa8ngQGRMOT8EjhU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.tpgk2cyjzu.dll",
        "hash": "sha256-X5wUhV+JRDXiWI2hMNAxNQixeolcIyMccbzL3hxSwis=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.g2z6hx84lu.dll",
        "hash": "sha256-+LNpjiqjkUuMgiiEm9y3oZvAIwTg0uxiW/1WViEyAVs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.pgm5ia5huq.dll",
        "hash": "sha256-+UrvXj8aJB0l2GmLBdeh376wd9qKOezS+SAkCJAqWiA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.dvj3c24ape.dll",
        "hash": "sha256-p+ToDGNRcYHTx/l+JvVCdHGyj9gCMAVpvJWWgcHBa7g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.jyavdj39m8.dll",
        "hash": "sha256-xe3+XsApHSagUEl6LCwzE6YvsOvm+Zs/2dI3xWJIFGo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.ors2jpk125.dll",
        "hash": "sha256-3Irb+BFZr6ecMfZaVGkPfe6GQAj4gP7Y1DBSfzd+Jl0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.7vsmh8k5om.dll",
        "hash": "sha256-XXMCYg+OuX3O94FwePNyYgKPXRImAFvy9SsHngnaPvk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.rap3y6hot1.dll",
        "hash": "sha256-0+xgfJ5UX60a5fX7hVIR1MTMJQqTNpM3w6G06HEOGdU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.sf5xo6cssi.dll",
        "hash": "sha256-yEn2Iki+UgtlMnIzRVn8i3WjiwohyWHSJcEnleffmU4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.ufqbpvck1t.dll",
        "hash": "sha256-mq8JHBsnPG4QyY0ShokXgVH6Utk8I2dkYT19f+lAWMI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.qg361nvz38.dll",
        "hash": "sha256-CmQLH5ZmORNTPHyvDAhAfISrWlivm3REottTnCdnF1E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.f89zhv03b1.dll",
        "hash": "sha256-f2awGMxfu8J5alwDCJlbzWnDAmJK0Af5ynrfKIdQDlE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.oh3a5scl0e.dll",
        "hash": "sha256-LEUJm/mcWN0pii9nLEiDKIIMwgEeIxx1YmvJgDQh+PM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.9oait2av4d.dll",
        "hash": "sha256-dxS+ToxZ807WJjNbCbyHh2R4jZqO4MUui4dN36/Tt/4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.h9mfh9u5ma.dll",
        "hash": "sha256-dbPXxtU3SQ1Jq/zhocGVRYw1vOpwfG0gefsEeOK321U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.7h9t4hazoa.dll",
        "hash": "sha256-xWIW5hVEOkn3zWr5bWqTWfxzvGyw2wyZpmhlSdhAklU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.p1jcbxz1fm.dll",
        "hash": "sha256-k5VJPYmeQOniPQZDiq5X7gHOWkqRM9zQAOP/0Cf7gUk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.mbimyk3fxf.dll",
        "hash": "sha256-vteDkih3DbLGV1oOzGh8/xbwflXYM8+7jslpeHLIUD0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.blbmmu3t0i.dll",
        "hash": "sha256-L2KF7B4H03M9qA0/w+vkGJhyLFK6P88xFurmxqnF92c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.de848ehaoz.dll",
        "hash": "sha256-hZNnEsx/NgklxiGLKzyn50QwepV9cHMuSjV998YX1PU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.e575prqtao.dll",
        "hash": "sha256-cpgiOoD2yq0gK/d1U29svU2gqM3QyAI9LUarUs/aAzU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.slgud2ajyf.dll",
        "hash": "sha256-cHtEizXLD4X250YbLhFFeaiislljX1+bVTTyn7mtjXw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.x3fk4b6g0i.dll",
        "hash": "sha256-fXkAPrjf1FFCZN0WPeCnM4bQSAIZZjSjcHWNxhKkxKM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.wqenjg0r6y.dll",
        "hash": "sha256-mGLfQ6iV3rOXeiTnIR2Sbk8oiLM5O/M09j6gmEgClCw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.3bdo98kssi.dll",
        "hash": "sha256-X2Ld/5Ipzroh8Lz/9m+XUT3S5eFnuOLeU4a8A5hUH84=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.swx8prl0ql.dll",
        "hash": "sha256-rLKwdVEvbQAnuVRgeTf8V0M8llQhqNp94qVlKztyAo4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.z4pufnt2mn.dll",
        "hash": "sha256-ParRU+j3aPG85Ty0tnTEATJz6ceTvSw1nInHg+ol+YQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.1mcbgfh73a.dll",
        "hash": "sha256-Z28/u2B5amC8/OYqs/mbIQyreysCjnhMwwkODLSFGew=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.rlo3n2ap1r.dll",
        "hash": "sha256-scGC9Xo/2oiXKC9ui+U9qf4IciErAef2WP6IsZK4HvI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.m92vy60z9k.dll",
        "hash": "sha256-xujGeddPEmeuyonYzJjGjuj6RAKJJTuy4g1FF5BFxww=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.7iiia8a6dz.dll",
        "hash": "sha256-L7i3gzuzz8kW/AWGywiZM8u8fM18k3tsFCu32SqAhWo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.nk8vj8g40n.dll",
        "hash": "sha256-J1DYxfW5r8p2sNkZuqWnoGHbPQU0WjrLs+U7hIasjGc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.tk0heb89mi.dll",
        "hash": "sha256-00ghlSvbT+DE44qdW0+038/DpUCagG7gCMoWfS6XU9w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.krpeyqls22.dll",
        "hash": "sha256-ECxEcuxfRy7U16rJz7lSXIz4xANVoM+IUWH6F82tRhI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.nvjbgr1dgo.dll",
        "hash": "sha256-Y+W5TA/HhMpBjYnzie3SURs70tbn7ddbsaz9sojLSg4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.nzj42nqs7f.dll",
        "hash": "sha256-zSOL3zbVNYndRhDr0QmyxefV+PZhOmRhY9sPoXRXdcg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.3o00noxltz.dll",
        "hash": "sha256-YyoiZ2kikpMoNwztdWETt5RRx5kH17TmwaJKbARB904=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.jxrew79d04.dll",
        "hash": "sha256-5/Cp8DPgTChcFKl6zt45CGmdwy8McH566mccJTRVwnU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.ac218lnihh.dll",
        "hash": "sha256-Gi6dqqqt4hl85VTXO4iYknEEbmeKrvVrk5Iln/0HuPg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.lkc3q68vtc.dll",
        "hash": "sha256-myv0+356kmKmqVn0JhKJmsLOqXBwUwfl74KwW2AFFyQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.84p5bzlo20.dll",
        "hash": "sha256-aLW2vHDByFdXLxvA8lAsN7Ph8Brn2+tDKmh+c/BEzOI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.vwsqw23c68.dll",
        "hash": "sha256-IVMVipQURFbtAQlKF9GmpSm3376pR1t6Pmxk9X7/a3I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.j3jisjmvgu.dll",
        "hash": "sha256-0eY9j+Ke10DsjDyZkAJni+O2L+AKDoWAcID5dS+YGms=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.zn7nzqwvas.dll",
        "hash": "sha256-j/GrHq8RuZM8m1/8pAsPlHm2QkKYfyt3AbDRYuQ+XwM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.cq78hm3qu3.dll",
        "hash": "sha256-3K2SctRCeP76b9wprH+8mWs+gMMIzQsaEtZlubLUqLk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.02e8rb6f3q.dll",
        "hash": "sha256-2N/lxSEOr+b9gwZTHhmC6x8MTqcP1JAi/24qKPo7Guk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.91cuf8c474.dll",
        "hash": "sha256-becP3yB0pOhaCQR05sIFCfA2ce+NGMCUl/tsIu5u7IE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.fesxymsy8o.dll",
        "hash": "sha256-+TfUzMhnWtn/qs7PdyERzmFsCpraqBqQs7wg+umTeXA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.ru4rpvf1x5.dll",
        "hash": "sha256-rek8nG/leJ/meoTlS4dVpXYpXXaqLoHQB4oluHrvLI8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.dlgjwvkr5u.dll",
        "hash": "sha256-wdZGGj9ztegygOkXuXNDEfMP+mudIqhClesq1/tFPo4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.gl0euwb1ep.dll",
        "hash": "sha256-hEj1zfqcmRgzRX23tGBHwrP2bApoNHK5jFOBcWivH8E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.e1ljtj2ofy.dll",
        "hash": "sha256-voUVpA2NGd+F/kibkiNT7an0RVJ9lYgwLKWT4Tq+LKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.td5150mwfo.dll",
        "hash": "sha256-f6kMsfMoJQmX/uMVqavCGRIG+02gebSeH19kx0uy+Kg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.w7x7q9qx1e.dll",
        "hash": "sha256-FF6JOK6YchutKYQkkjh6hm+Y7lnxJ2y/8wwmgZjuqTI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.fi6alkg0dl.dll",
        "hash": "sha256-d0TYQGvjbYtwz7Te5cDixXWd7raYg0aG4zI5m6LLOzk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.9os9cfn3oy.dll",
        "hash": "sha256-l65ABhDyBjLSPPhyJQ98E8T2Bka83idMo/Ucijd6KK0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.3s1psvvndm.dll",
        "hash": "sha256-vQJneFPaYQqjalat/HoL8w5p9jwoZA/CCbc5/RSK594=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.o9mc7vxyj3.dll",
        "hash": "sha256-vM6aAZ2ia09K1n8B6vo2KILv7j+Pyl5TeA1IvVPIwxA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.0ed85ugiux.dll",
        "hash": "sha256-OC3XbueuO2OnFeMt9487Gh/8m5/2kJZrufz1LlXI4D4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.845xvdxsy8.dll",
        "hash": "sha256-KHsONE+9mAtrQH6hm1dw8WK+arsgEWSlvSxvo6E+HVk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.cbfo0y91k6.dll",
        "hash": "sha256-eASTvO0s90D8kVJQ1mQNvksapSRGqkP0ZbNigLBrN8E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.04xpjk0d4a.dll",
        "hash": "sha256-IIksr/db1kvSplVRMtiuOxT468OsrhhgDlu/rH0eGm4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.ntmsppkz9h.dll",
        "hash": "sha256-deATZZJtfOy6XjpBlyGdT4cAMz7NlHOPBIfdMc3v4lw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.3kssd7qpbu.dll",
        "hash": "sha256-bff0wRl2bCb41UPwL0BjDmAif5O3lRqILEqaMSwAmug=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.hrcwzdl4z2.dll",
        "hash": "sha256-na8yr4wA50c7RIHQ3gGpWC7RMKEnrSxR1F5nG2ob//w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.2quaqg5j1u.dll",
        "hash": "sha256-CmRvKMqfkuMwBQ5gGP1c0a4XJcoxxtAb4s0UU6ncEok=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.sw9hnv34m7.dll",
        "hash": "sha256-lDBUdIvST/Cg2hNsASPrDRxNaoMos1GmMwH7wjIN+L0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.ffelxqzrwc.dll",
        "hash": "sha256-S5UBom4HSu8v30/G8QK4PZVhX9rBodMk3JbemM8isiE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.68824srjrn.dll",
        "hash": "sha256-Jnqu5+TAillpeR1Z+bl2SIFjFSHOGRgWTz1auN/KbSM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.1n1qb75bug.dll",
        "hash": "sha256-M/4ybwJqBWrFdhQTSGhAmKnQ04dqll3OnD0iWLQHP8A=",
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

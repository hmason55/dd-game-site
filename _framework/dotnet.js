//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

var e=!1;const t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),n=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),r=Symbol.for("wasm promise_control");function i(e,t){let o=null;const n=new Promise((function(n,r){o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())}}}));o.promise=n;const i=n;return i[r]=o,{promise:i,promise_control:o}}function s(e){return e[r]}function a(e){e&&function(e){return void 0!==e[r]}(e)||Be(!1,"Promise is not controllable")}const l="__mono_message__",c=["debug","log","trace","warn","info","error"],d="MONO_WASM: ";let u,f,m,g,p,h;function w(e){g=e}function b(e){if(Pe.diagnosticTracing){const t="function"==typeof e?e():e;console.debug(d+t)}}function y(e,...t){console.info(d+e,...t)}function v(e,...t){console.info(e,...t)}function E(e,...t){console.warn(d+e,...t)}function _(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(d+e,t[0].toString())}console.error(d+e,...t)}function x(e,t,o){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}t(o?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){m.error(`proxyConsole failed: ${e}`)}}}function j(e,t,o){f=t,g=e,m={...t};const n=`${o}/console`.replace("https://","wss://").replace("http://","ws://");u=new WebSocket(n),u.addEventListener("error",A),u.addEventListener("close",S),function(){for(const e of c)f[e]=x(`console.${e}`,T,!0)}()}function R(e){let t=30;const o=()=>{u?0==u.bufferedAmount||0==t?(e&&v(e),function(){for(const e of c)f[e]=x(`console.${e}`,m.log,!1)}(),u.removeEventListener("error",A),u.removeEventListener("close",S),u.close(1e3,e),u=void 0):(t--,globalThis.setTimeout(o,100)):e&&m&&m.log(e)};o()}function T(e){u&&u.readyState===WebSocket.OPEN?u.send(e):m.log(e)}function A(e){m.error(`[${g}] proxy console websocket error: ${e}`,e)}function S(e){m.debug(`[${g}] proxy console websocket closed: ${e}`,e)}function D(){Pe.preferredIcuAsset=O(Pe.config);let e="invariant"==Pe.config.globalizationMode;if(!e)if(Pe.preferredIcuAsset)Pe.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===Pe.config.globalizationMode||"all"===Pe.config.globalizationMode||"sharded"===Pe.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}Pe.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,Pe.preferredIcuAsset=null}const t="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",o=Pe.config.environmentVariables;if(void 0===o[t]&&e&&(o[t]="1"),void 0===o.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(o.TZ=e)}catch(e){y("failed to detect timezone, will fallback to UTC")}}function O(e){var t;if((null===(t=e.resources)||void 0===t?void 0:t.icu)&&"invariant"!=e.globalizationMode){const t=e.applicationCulture||(ke?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale),o=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(o.length>=1)return o[0].name}else t&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(t)):n="icudt.dat";if(n)for(let e=0;e<o.length;e++){const t=o[e];if(t.virtualPath===n)return t.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const C=class{constructor(e){this.url=e}toString(){return this.url}};async function k(e,t){try{const o="function"==typeof globalThis.fetch;if(Se){const n=e.startsWith("file://");if(!n&&o)return globalThis.fetch(e,t||{credentials:"same-origin"});p||(h=Ne.require("url"),p=Ne.require("fs")),n&&(e=h.fileURLToPath(e));const r=await p.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(o)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(t){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t},text:()=>{throw t}}}throw new Error("No fetch implementation available")}function I(e){return"string"!=typeof e&&Be(!1,"url must be a string"),!M(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}const U=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,P=/[a-zA-Z]:[\\/]/;function M(e){return Se||Ie?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||P.test(e):U.test(e)}let L,N=0;const $=[],z=[],W=new Map,F={"js-module-threads":!0,"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},B={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},q={...B,manifest:!0},H={...B,dotnetwasm:!0},J={dotnetwasm:!0,symbols:!0},Z={...B,dotnetwasm:!0,symbols:!0},Q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=Pe.preferredIcuAsset)}function K(e,t,o){null!=t||(t=[]),Be(1==t.length,`Expect to have one ${o} asset in resources`);const n=t[0];return n.behavior=o,X(n),e.push(n),n}function X(e){V[e.behavior]&&W.set(e.behavior,e)}function Y(e){Be(V[e],`Unknown single asset behavior ${e}`);const t=W.get(e);if(t&&!t.resolvedUrl)if(t.resolvedUrl=Pe.locateFile(t.name),F[t.behavior]){const e=ge(t);e?("string"!=typeof e&&Be(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),t.resolvedUrl=e):t.resolvedUrl=ce(t.resolvedUrl,t.behavior)}else if("dotnetwasm"!==t.behavior)throw new Error(`Unknown single asset behavior ${e}`);return t}function ee(e){const t=Y(e);return Be(t,`Single asset for ${e} not found`),t}let te=!1;async function oe(){if(!te){te=!0,Pe.diagnosticTracing&&b("mono_download_assets");try{const e=[],t=[],o=(e,t)=>{!Z[e.behavior]&&G(e)&&Pe.expected_instantiated_assets_count++,!H[e.behavior]&&G(e)&&(Pe.expected_downloaded_assets_count++,t.push(se(e)))};for(const t of $)o(t,e);for(const e of z)o(e,t);Pe.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...t]).then((()=>{Pe.allDownloadsFinished.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),await Pe.runtimeModuleLoaded.promise;const n=async e=>{const t=await e;if(t.buffer){if(!Z[t.behavior]){t.buffer&&"object"==typeof t.buffer||Be(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof t.resolvedUrl&&Be(!1,"resolvedUrl must be string");const e=t.resolvedUrl,o=await t.buffer,n=new Uint8Array(o);pe(t),await Ue.beforeOnRuntimeInitialized.promise,Ue.instantiate_asset(t,e,n)}}else J[t.behavior]?("symbols"===t.behavior&&(await Ue.instantiate_symbols_asset(t),pe(t)),J[t.behavior]&&++Pe.actual_downloaded_assets_count):(t.isOptional||Be(!1,"Expected asset to have the downloaded buffer"),!H[t.behavior]&&G(t)&&Pe.expected_downloaded_assets_count--,!Z[t.behavior]&&G(t)&&Pe.expected_instantiated_assets_count--)},r=[],i=[];for(const t of e)r.push(n(t));for(const e of t)i.push(n(e));Promise.all(r).then((()=>{Ce||Ue.coreAssetsInMemory.promise_control.resolve()})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e})),Promise.all(i).then((async()=>{Ce||(await Ue.coreAssetsInMemory.promise,Ue.allAssetsInMemory.promise_control.resolve())})).catch((e=>{throw Pe.err("Error in mono_download_assets: "+e),Xe(1,e),e}))}catch(e){throw Pe.err("Error in mono_download_assets: "+e),e}}}let ne=!1;function re(){if(ne)return;ne=!0;const e=Pe.config,t=[];if(e.assets)for(const t of e.assets)"object"!=typeof t&&Be(!1,`asset must be object, it was ${typeof t} : ${t}`),"string"!=typeof t.behavior&&Be(!1,"asset behavior must be known string"),"string"!=typeof t.name&&Be(!1,"asset name must be string"),t.resolvedUrl&&"string"!=typeof t.resolvedUrl&&Be(!1,"asset resolvedUrl could be string"),t.hash&&"string"!=typeof t.hash&&Be(!1,"asset resolvedUrl could be string"),t.pendingDownload&&"object"!=typeof t.pendingDownload&&Be(!1,"asset pendingDownload could be object"),t.isCore?$.push(t):z.push(t),X(t);else if(e.resources){const o=e.resources;o.wasmNative||Be(!1,"resources.wasmNative must be defined"),o.jsModuleNative||Be(!1,"resources.jsModuleNative must be defined"),o.jsModuleRuntime||Be(!1,"resources.jsModuleRuntime must be defined"),K(z,o.wasmNative,"dotnetwasm"),K(t,o.jsModuleNative,"js-module-native"),K(t,o.jsModuleRuntime,"js-module-runtime"),o.jsModuleDiagnostics&&K(t,o.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,t,o)=>{const n=e;n.behavior=t,o?(n.isCore=!0,$.push(n)):z.push(n)};if(o.coreAssembly)for(let e=0;e<o.coreAssembly.length;e++)n(o.coreAssembly[e],"assembly",!0);if(o.assembly)for(let e=0;e<o.assembly.length;e++)n(o.assembly[e],"assembly",!o.coreAssembly);if(0!=e.debugLevel&&Pe.isDebuggingSupported()){if(o.corePdb)for(let e=0;e<o.corePdb.length;e++)n(o.corePdb[e],"pdb",!0);if(o.pdb)for(let e=0;e<o.pdb.length;e++)n(o.pdb[e],"pdb",!o.corePdb)}if(e.loadAllSatelliteResources&&o.satelliteResources)for(const e in o.satelliteResources)for(let t=0;t<o.satelliteResources[e].length;t++){const r=o.satelliteResources[e][t];r.culture=e,n(r,"resource",!o.coreAssembly)}if(o.coreVfs)for(let e=0;e<o.coreVfs.length;e++)n(o.coreVfs[e],"vfs",!0);if(o.vfs)for(let e=0;e<o.vfs.length;e++)n(o.vfs[e],"vfs",!o.coreVfs);const r=O(e);if(r&&o.icu)for(let e=0;e<o.icu.length;e++){const t=o.icu[e];t.name===r&&n(t,"icu",!1)}if(o.wasmSymbols)for(let e=0;e<o.wasmSymbols.length;e++)n(o.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let t=0;t<e.appsettings.length;t++){const o=e.appsettings[t],n=he(o);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||z.push({name:o,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...$,...z,...t]}async function ie(e){const t=await se(e);return await t.pendingDownloadInternal.response,t.buffer}async function se(e){try{return await ae(e)}catch(t){if(!Pe.enableDownloadRetry)throw t;if(Ie||Se)throw t;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw t;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw t;if(t&&404==t.status)throw t;e.pendingDownloadInternal=void 0,await Pe.allDownloadsQueued.promise;try{return Pe.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ae(e)}catch(t){return e.pendingDownloadInternal=void 0,await new Promise((e=>globalThis.setTimeout(e,100))),Pe.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ae(e)}}}async function ae(e){for(;L;)await L.promise;try{++N,N==Pe.maxParallelDownloads&&(Pe.diagnosticTracing&&b("Throttling further parallel downloads"),L=i());const t=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const t=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>t,json:()=>JSON.parse(new TextDecoder("utf-8").decode(t)),text:()=>{throw new Error("NotImplementedException")},headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const t=e.loadRemote&&Pe.config.remoteSources?Pe.config.remoteSources:[""];let o;for(let n of t){n=n.trim(),"./"===n&&(n="");const t=le(e,n);e.name===t?Pe.diagnosticTracing&&b(`Attempting to download '${t}'`):Pe.diagnosticTracing&&b(`Attempting to download '${t}' for ${e.name}`);try{e.resolvedUrl=t;const n=fe(e);if(e.pendingDownloadInternal=n,o=await n.response,!o||!o.ok)continue;return o}catch(e){o||(o={ok:!1,url:t,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&Pe.config.ignorePdbLoadErrors;if(o||Be(!1,`Response undefined ${e.name}`),!n){const t=new Error(`download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`);throw t.status=o.status,t}y(`optional download '${o.url}' for ${e.name} failed ${o.status} ${o.statusText}`)}(e);return t?(J[e.behavior]||(e.buffer=await t.arrayBuffer(),++Pe.actual_downloaded_assets_count),e):e}finally{if(--N,L&&N==Pe.maxParallelDownloads-1){Pe.diagnosticTracing&&b("Resuming more parallel downloads");const e=L;L=void 0,e.promise_control.resolve()}}}function le(e,t){let o;return null==t&&Be(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?o=e.resolvedUrl:(o=""===t?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:t+e.name,o=ce(Pe.locateFile(o),e.behavior)),o&&"string"==typeof o||Be(!1,"attemptUrl need to be path or url string"),o}function ce(e,t){return Pe.modulesUniqueQuery&&q[t]&&(e+=Pe.modulesUniqueQuery),e}let de=0;const ue=new Set;function fe(e){try{e.resolvedUrl||Be(!1,"Request's resolvedUrl must be set");const t=function(e){let t=e.resolvedUrl;if(Pe.loadBootResource){const o=ge(e);if(o instanceof Promise)return o;"string"==typeof o&&(t=o)}const o={};return e.cache?o.cache=e.cache:Pe.config.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!Pe.config.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),Pe.fetch_like(t,o)}(e),o={name:e.name,url:e.resolvedUrl,response:t};return ue.add(e.name),o.response.then((()=>{"assembly"==e.behavior&&Pe.loadedAssemblies.push(e.name),de++,Pe.onDownloadResourceProgress&&Pe.onDownloadResourceProgress(de,ue.size)})),o}catch(t){const o={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+t,arrayBuffer:()=>{throw t},json:()=>{throw t}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(o)}}}const me={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"};function ge(e){var t;if(Pe.loadBootResource){const o=null!==(t=e.hash)&&void 0!==t?t:"",n=e.resolvedUrl,r=me[e.behavior];if(r){const t=Pe.loadBootResource(r,e.name,n,o,e.behavior);return"string"==typeof t?I(t):t}}}function pe(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function he(e){let t=e.lastIndexOf("/");return t>=0&&t++,e.substring(t)}async function we(e){e&&await Promise.all((null!=e?e:[]).map((e=>async function(e){try{const t=e.name;if(!e.moduleExports){const o=ce(Pe.locateFile(t),"js-module-library-initializer");Pe.diagnosticTracing&&b(`Attempting to import '${o}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */o)}Pe.libraryInitializers.push({scriptName:t,exports:e.moduleExports})}catch(t){E(`Failed to import library initializer '${e}': ${t}`)}}(e))))}async function be(e,t){if(!Pe.libraryInitializers)return;const o=[];for(let n=0;n<Pe.libraryInitializers.length;n++){const r=Pe.libraryInitializers[n];r.exports[e]&&o.push(ye(r.scriptName,e,(()=>r.exports[e](...t))))}await Promise.all(o)}async function ye(e,t,o){try{await o()}catch(o){throw E(`Failed to invoke '${t}' on library initializer '${e}': ${o}`),Xe(1,o),o}}function ve(e,t){if(e===t)return e;const o={...t};return void 0!==o.assets&&o.assets!==e.assets&&(o.assets=[...e.assets||[],...o.assets||[]]),void 0!==o.resources&&(o.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},o.resources)),void 0!==o.environmentVariables&&(o.environmentVariables={...e.environmentVariables||{},...o.environmentVariables||{}}),void 0!==o.runtimeOptions&&o.runtimeOptions!==e.runtimeOptions&&(o.runtimeOptions=[...e.runtimeOptions||[],...o.runtimeOptions||[]]),Object.assign(e,o)}function Ee(e,t){if(e===t)return e;const o={...t};return o.config&&(e.config||(e.config={}),o.config=ve(e.config,o.config)),Object.assign(e,o)}function _e(e,t){if(e===t)return e;const o={...t};return void 0!==o.coreAssembly&&(o.coreAssembly=[...e.coreAssembly||[],...o.coreAssembly||[]]),void 0!==o.assembly&&(o.assembly=[...e.assembly||[],...o.assembly||[]]),void 0!==o.lazyAssembly&&(o.lazyAssembly=[...e.lazyAssembly||[],...o.lazyAssembly||[]]),void 0!==o.corePdb&&(o.corePdb=[...e.corePdb||[],...o.corePdb||[]]),void 0!==o.pdb&&(o.pdb=[...e.pdb||[],...o.pdb||[]]),void 0!==o.jsModuleWorker&&(o.jsModuleWorker=[...e.jsModuleWorker||[],...o.jsModuleWorker||[]]),void 0!==o.jsModuleNative&&(o.jsModuleNative=[...e.jsModuleNative||[],...o.jsModuleNative||[]]),void 0!==o.jsModuleDiagnostics&&(o.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...o.jsModuleDiagnostics||[]]),void 0!==o.jsModuleRuntime&&(o.jsModuleRuntime=[...e.jsModuleRuntime||[],...o.jsModuleRuntime||[]]),void 0!==o.wasmSymbols&&(o.wasmSymbols=[...e.wasmSymbols||[],...o.wasmSymbols||[]]),void 0!==o.wasmNative&&(o.wasmNative=[...e.wasmNative||[],...o.wasmNative||[]]),void 0!==o.icu&&(o.icu=[...e.icu||[],...o.icu||[]]),void 0!==o.satelliteResources&&(o.satelliteResources=function(e,t){if(e===t)return e;for(const o in t)e[o]=[...e[o]||[],...t[o]||[]];return e}(e.satelliteResources||{},o.satelliteResources||{})),void 0!==o.modulesAfterConfigLoaded&&(o.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...o.modulesAfterConfigLoaded||[]]),void 0!==o.modulesAfterRuntimeReady&&(o.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...o.modulesAfterRuntimeReady||[]]),void 0!==o.extensions&&(o.extensions={...e.extensions||{},...o.extensions||{}}),void 0!==o.vfs&&(o.vfs=[...e.vfs||[],...o.vfs||[]]),Object.assign(e,o)}function xe(){const e=Pe.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleWorker:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){Pe.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const t of e.assets){const o={};switch(t.behavior){case"assembly":o.assembly=[t];break;case"pdb":o.pdb=[t];break;case"resource":o.satelliteResources={},o.satelliteResources[t.culture]=[t];break;case"icu":o.icu=[t];break;case"symbols":o.wasmSymbols=[t];break;case"vfs":o.vfs=[t];break;case"dotnetwasm":o.wasmNative=[t];break;case"js-module-threads":o.jsModuleWorker=[t];break;case"js-module-runtime":o.jsModuleRuntime=[t];break;case"js-module-native":o.jsModuleNative=[t];break;case"js-module-diagnostics":o.jsModuleDiagnostics=[t];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${t.behavior} of asset ${t.name}`)}_e(e.resources,o)}}e.debugLevel,e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Ue.diagnosticTracing=Pe.diagnosticTracing=!!e.diagnosticTracing,Ue.waitForDebugger=e.waitForDebugger,Pe.maxParallelDownloads=e.maxParallelDownloads||Pe.maxParallelDownloads,Pe.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:Pe.enableDownloadRetry}let je=!1;async function Re(e){var t;if(je)return void await Pe.afterConfigLoaded.promise;let o;try{if(e.configSrc||Pe.config&&0!==Object.keys(Pe.config).length&&(Pe.config.assets||Pe.config.resources)||(e.configSrc="dotnet.boot.js"),o=e.configSrc,je=!0,o&&(Pe.diagnosticTracing&&b("mono_wasm_load_config"),await async function(e){const t=e.configSrc,o=Pe.locateFile(t);let n=null;void 0!==Pe.loadBootResource&&(n=Pe.loadBootResource("manifest",t,o,"","manifest"));let r,i=null;if(n)if("string"==typeof n)n.includes(".json")?(i=await s(I(n)),r=await Ae(i)):r=(await import(I(n))).config;else{const e=await n;"function"==typeof e.json?(i=e,r=await Ae(i)):r=e.config}else o.includes(".json")?(i=await s(ce(o,"manifest")),r=await Ae(i)):r=(await import(ce(o,"manifest"))).config;function s(e){return Pe.fetch_like(e,{method:"GET",credentials:"include",cache:"no-cache"})}Pe.config.applicationEnvironment&&(r.applicationEnvironment=Pe.config.applicationEnvironment),ve(Pe.config,r)}(e)),xe(),await we(null===(t=Pe.config.resources)||void 0===t?void 0:t.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[Pe.config]),e.onConfigLoaded)try{await e.onConfigLoaded(Pe.config,Le),xe()}catch(e){throw _("onConfigLoaded() failed",e),e}xe(),Pe.afterConfigLoaded.promise_control.resolve(Pe.config)}catch(t){const n=`Failed to load config file ${o} ${t} ${null==t?void 0:t.stack}`;throw Pe.config=e.config=Object.assign(Pe.config,{message:n,error:t,isError:!0}),Xe(1,new Error(n)),t}}function Te(){return!!globalThis.navigator&&(Pe.isChromium||Pe.isFirefox)}async function Ae(e){const t=Pe.config,o=await e.json();t.applicationEnvironment||o.applicationEnvironment||(o.applicationEnvironment=e.headers.get("Blazor-Environment")||e.headers.get("DotNet-Environment")||void 0),o.environmentVariables||(o.environmentVariables={});const n=e.headers.get("DOTNET-MODIFIABLE-ASSEMBLIES");n&&(o.environmentVariables.DOTNET_MODIFIABLE_ASSEMBLIES=n);const r=e.headers.get("ASPNETCORE-BROWSER-TOOLS");return r&&(o.environmentVariables.__ASPNETCORE_BROWSER_TOOLS=r),o}"function"!=typeof importScripts||globalThis.onmessage||(globalThis.dotnetSidecar=!0);const Se="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,De="function"==typeof importScripts,Oe=De&&"undefined"!=typeof dotnetSidecar,Ce=De&&!Oe,ke="object"==typeof window||De&&!Se,Ie=!ke&&!Se;let Ue={},Pe={},Me={},Le={},Ne={},$e=!1;const ze={},We={config:ze},Fe={mono:{},binding:{},internal:Ne,module:We,loaderHelpers:Pe,runtimeHelpers:Ue,diagnosticHelpers:Me,api:Le};function Be(e,t){if(e)return;const o="Assert failed: "+("function"==typeof t?t():t),n=new Error(o);_(o,n),Ue.nativeAbort(n)}function Ve(){return void 0!==Pe.exitCode}function qe(){return Ue.runtimeReady&&!Ve()}function He(){Ve()&&Be(!1,`.NET runtime already exited with ${Pe.exitCode} ${Pe.exitReason}. You can use runtime.runMain() which doesn't exit the runtime.`),Ue.runtimeReady||Be(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function Je(){ke&&(globalThis.addEventListener("unhandledrejection",et),globalThis.addEventListener("error",tt))}let Ze,Qe;function Ge(e){Qe&&Qe(e),Xe(e,Pe.exitReason)}function Ke(e){Ze&&Ze(e||Pe.exitReason),Xe(1,e||Pe.exitReason)}function Xe(t,o){var n,r;const i=o&&"object"==typeof o;t=i&&"number"==typeof o.status?o.status:void 0===t?-1:t;const s=i&&"string"==typeof o.message?o.message:""+o;(o=i?o:Ue.ExitStatus?function(e,t){const o=new Ue.ExitStatus(e);return o.message=t,o.toString=()=>t,o}(t,s):new Error("Exit with code "+t+" "+s)).status=t,o.message||(o.message=s);const a=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>a})}catch(e){}const l=!!o.silent;if(o.silent=!0,Ve())Pe.diagnosticTracing&&b("mono_exit called after exit");else{try{We.onAbort==Ke&&(We.onAbort=Ze),We.onExit==Ge&&(We.onExit=Qe),ke&&(globalThis.removeEventListener("unhandledrejection",et),globalThis.removeEventListener("error",tt)),Ue.runtimeReady?(Ue.jiterpreter_dump_stats&&Ue.jiterpreter_dump_stats(!1),0===t&&(null===(n=Pe.config)||void 0===n?void 0:n.interopCleanupOnExit)&&Ue.forceDisposeProxies(!0,!0),e&&0!==t&&(null===(r=Pe.config)||void 0===r||r.dumpThreadsOnNonZeroExit)):(Pe.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){Pe.allDownloadsQueued.promise_control.reject(e),Pe.allDownloadsFinished.promise_control.reject(e),Pe.afterConfigLoaded.promise_control.reject(e),Pe.wasmCompilePromise.promise_control.reject(e),Pe.runtimeModuleLoaded.promise_control.reject(e),Ue.dotnetReady&&(Ue.dotnetReady.promise_control.reject(e),Ue.afterInstantiateWasm.promise_control.reject(e),Ue.beforePreInit.promise_control.reject(e),Ue.afterPreInit.promise_control.reject(e),Ue.afterPreRun.promise_control.reject(e),Ue.beforeOnRuntimeInitialized.promise_control.reject(e),Ue.afterOnRuntimeInitialized.promise_control.reject(e),Ue.afterPostRun.promise_control.reject(e))}(o))}catch(e){E("mono_exit A failed",e)}try{l||(function(e,t){if(0!==e&&t){const e=Ue.ExitStatus&&t instanceof Ue.ExitStatus?b:_;"string"==typeof t?e(t):(void 0===t.stack&&(t.stack=(new Error).stack+""),t.message?e(Ue.stringify_as_error_with_stack?Ue.stringify_as_error_with_stack(t.message+"\n"+t.stack):t.message+"\n"+t.stack):e(JSON.stringify(t)))}!Ce&&Pe.config&&(Pe.config.logExitCode?Pe.config.forwardConsoleLogsToWS?R("WASM EXIT "+e):v("WASM EXIT "+e):Pe.config.forwardConsoleLogsToWS&&R())}(t,o),function(e){if(ke&&!Ce&&Pe.config&&Pe.config.appendElementOnExit&&document){const t=document.createElement("label");t.id="tests_done",0!==e&&(t.style.background="red"),t.innerHTML=""+e,document.body.appendChild(t)}}(t))}catch(e){E("mono_exit B failed",e)}Pe.exitCode=t,Pe.exitReason||(Pe.exitReason=o),!Ce&&Ue.runtimeReady&&We.runtimeKeepalivePop()}if(Pe.config&&Pe.config.asyncFlushOnExit&&0===t)throw(async()=>{try{await async function(){try{const e=await import(/*! webpackIgnore: true */"process"),t=e=>new Promise(((t,o)=>{e.on("error",o),e.end("","utf8",t)})),o=t(e.stderr),n=t(e.stdout);let r;const i=new Promise((e=>{r=setTimeout((()=>e("timeout")),1e3)}));await Promise.race([Promise.all([n,o]),i]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(t,o)}})(),o;Ye(t,o)}function Ye(e,t){if(Ue.runtimeReady&&Ue.nativeExit)try{Ue.nativeExit(e)}catch(e){!Ue.ExitStatus||e instanceof Ue.ExitStatus||E("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!ke)throw Se&&Ne.process?Ne.process.exit(e):Ue.quit&&Ue.quit(e,t),t}function et(e){ot(e,e.reason,"rejection")}function tt(e){ot(e,e.error,"error")}function ot(e,t,o){e.preventDefault();try{t||(t=new Error("Unhandled "+o)),void 0===t.stack&&(t.stack=(new Error).stack),t.stack=t.stack+"",t.silent||(_("Unhandled error:",t),Xe(1,t))}catch(e){}}!function(e){if($e)throw new Error("Loader module already loaded");$e=!0,Ue=e.runtimeHelpers,Pe=e.loaderHelpers,Me=e.diagnosticHelpers,Le=e.api,Ne=e.internal,Object.assign(Le,{INTERNAL:Ne,invokeLibraryInitializers:be}),Object.assign(e.module,{config:ve(ze,{environmentVariables:{}})});const r={mono_wasm_bindings_is_ready:!1,config:e.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"95017c711e6afc1085133d440e42b4bd78155701",config:e.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:i(),allDownloadsQueued:i(),allDownloadsFinished:i(),wasmCompilePromise:i(),runtimeModuleLoaded:i(),loadingWorkers:i(),is_exited:Ve,is_runtime_running:qe,assert_runtime_running:He,mono_exit:Xe,createPromiseController:i,getPromiseController:s,assertIsControllablePromise:a,mono_download_assets:oe,resolve_single_asset_path:ee,setup_proxy_console:j,set_thread_prefix:w,installUnhandledErrorHandler:Je,retrieve_asset_download:ie,invokeLibraryInitializers:be,isDebuggingSupported:Te,exceptions:t,simd:n,relaxedSimd:o};Object.assign(Ue,r),Object.assign(Pe,l)}(Fe);let nt,rt,it,st=!1,at=!1;async function lt(e){if(!at){if(at=!0,ke&&Pe.config.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&j("main",globalThis.console,globalThis.location.origin),We||Be(!1,"Null moduleConfig"),Pe.config||Be(!1,"Null moduleConfig.config"),"function"==typeof e){const t=e(Fe.api);if(t.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(We,t),Ee(We,t)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");Ee(We,e)}await async function(e){if(Se){const e=await import(/*! webpackIgnore: true */"process"),t=14;if(e.versions.node.split(".")[0]<t)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${t}. See also https://aka.ms/dotnet-wasm-features`)}const t=/*! webpackIgnore: true */import.meta.url,o=t.indexOf("?");var n;if(o>0&&(Pe.modulesUniqueQuery=t.substring(o)),Pe.scriptUrl=t.replace(/\\/g,"/").replace(/[?#].*/,""),Pe.scriptDirectory=(n=Pe.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",Pe.locateFile=e=>"URL"in globalThis&&globalThis.URL!==C?new URL(e,Pe.scriptDirectory).toString():M(e)?e:Pe.scriptDirectory+e,Pe.fetch_like=k,Pe.out=console.log,Pe.err=console.error,Pe.onDownloadResourceProgress=e.onDownloadResourceProgress,ke&&globalThis.navigator){const e=globalThis.navigator,t=e.userAgentData&&e.userAgentData.brands;t&&t.length>0?Pe.isChromium=t.some((e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand)):e.userAgent&&(Pe.isChromium=e.userAgent.includes("Chrome"),Pe.isFirefox=e.userAgent.includes("Firefox"))}Ne.require=Se?await import(/*! webpackIgnore: true */"module").then((e=>e.createRequire(/*! webpackIgnore: true */import.meta.url))):Promise.resolve((()=>{throw new Error("require not supported")})),void 0===globalThis.URL&&(globalThis.URL=C)}(We)}}async function ct(e){return await lt(e),Ze=We.onAbort,Qe=We.onExit,We.onAbort=Ke,We.onExit=Ge,We.ENVIRONMENT_IS_PTHREAD?async function(){(function(){const e=new MessageChannel,t=e.port1,o=e.port2;t.addEventListener("message",(e=>{var n,r;n=JSON.parse(e.data.config),r=JSON.parse(e.data.monoThreadInfo),st?Pe.diagnosticTracing&&b("mono config already received"):(ve(Pe.config,n),Ue.monoThreadInfo=r,xe(),Pe.diagnosticTracing&&b("mono config received"),st=!0,Pe.afterConfigLoaded.promise_control.resolve(Pe.config),ke&&n.forwardConsoleLogsToWS&&void 0!==globalThis.WebSocket&&Pe.setup_proxy_console("worker-idle",console,globalThis.location.origin)),t.close(),o.close()}),{once:!0}),t.start(),self.postMessage({[l]:{monoCmd:"preload",port:o}},[o])})(),await Pe.afterConfigLoaded.promise,function(){const e=Pe.config;e.assets||Be(!1,"config.assets must be defined");for(const t of e.assets)X(t),Q[t.behavior]&&z.push(t)}(),setTimeout((async()=>{try{await oe()}catch(e){Xe(1,e)}}),0);const e=dt(),t=await Promise.all(e);return await ut(t),We}():async function(){var e;await Re(We),re();const t=dt();(async function(){try{const e=ee("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||Be(!1,"Can't load dotnet.native.wasm");const t=await e.pendingDownloadInternal.response,o=t.headers&&t.headers.get?t.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===o)n=await WebAssembly.compileStreaming(t);else{ke&&"application/wasm"!==o&&E('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await t.arrayBuffer();Pe.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Ie?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,Pe.wasmCompilePromise.promise_control.resolve(n)}catch(e){Pe.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout((async()=>{try{D(),await oe()}catch(e){Xe(1,e)}}),0);const o=await Promise.all(t);return await ut(o),await Ue.dotnetReady.promise,await we(null===(e=Pe.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Le}()}function dt(){const e=ee("js-module-runtime"),t=ee("js-module-native");if(nt&&rt)return[nt,rt,it];"object"==typeof e.moduleExports?nt=e.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),nt=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof t.moduleExports?rt=t.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),rt=import(/*! webpackIgnore: true */t.resolvedUrl));const o=Y("js-module-diagnostics");return o&&("object"==typeof o.moduleExports?it=o.moduleExports:(Pe.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),it=import(/*! webpackIgnore: true */o.resolvedUrl))),[nt,rt,it]}async function ut(e){const{initializeExports:t,initializeReplacements:o,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:i,setRuntimeGlobals:s,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];s(Fe),t(Fe),c&&c.setRuntimeGlobals(Fe),await n(We),Pe.runtimeModuleLoaded.promise_control.resolve(),l((e=>(Object.assign(We,{ready:e.ready,__dotnet_runtime:{initializeReplacements:o,configureEmscriptenStartup:r,configureWorkerStartup:i,passEmscriptenInternals:a}}),We))).catch((e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize. See also https://aka.ms/dotnet-wasm-features");throw e}))}const ft=new class{withModuleConfig(e){try{return Ee(We,e),this}catch(e){throw Xe(1,e),e}}withOnConfigLoaded(e){try{return Ee(We,{onConfigLoaded:e}),this}catch(e){throw Xe(1,e),e}}withConsoleForwarding(){try{return ve(ze,{forwardConsoleLogsToWS:!0}),this}catch(e){throw Xe(1,e),e}}withExitOnUnhandledError(){try{return ve(ze,{exitOnUnhandledError:!0}),Je(),this}catch(e){throw Xe(1,e),e}}withAsyncFlushOnExit(){try{return ve(ze,{asyncFlushOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withExitCodeLogging(){try{return ve(ze,{logExitCode:!0}),this}catch(e){throw Xe(1,e),e}}withElementOnExit(){try{return ve(ze,{appendElementOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withInteropCleanupOnExit(){try{return ve(ze,{interopCleanupOnExit:!0}),this}catch(e){throw Xe(1,e),e}}withDumpThreadsOnNonZeroExit(){try{return ve(ze,{dumpThreadsOnNonZeroExit:!0}),this}catch(e){throw Xe(1,e),e}}withWaitingForDebugger(e){try{return ve(ze,{waitForDebugger:e}),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,t){try{return ve(ze,{interpreterPgo:e,interpreterPgoSaveDelay:t}),ze.runtimeOptions?ze.runtimeOptions.push("--interp-pgo-recording"):ze.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){try{return e&&"string"==typeof e||Be(!1,"must be file path or URL"),Ee(We,{configSrc:e}),this}catch(e){throw Xe(1,e),e}}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||Be(!1,"must be directory path"),ve(ze,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,t){try{const o={};return o[e]=t,ve(ze,{environmentVariables:o}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||Be(!1,"must be dictionary object"),ve(ze,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&Be(!1,"must be boolean"),ve(ze,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||Be(!1,"must be number"),ve(ze,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ve(ze,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||Be(!1,"must be array of strings"),ze.runtimeOptions?ze.runtimeOptions.push(...e):ze.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ve(ze,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ve(ze,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ve(ze,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return Pe.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lt(We),await Re(We),re(),D(),oe(),await Pe.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await ct(We),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}async run(){try{return We.config||Be(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}},mt=Xe,gt=ct;Ie||"function"==typeof globalThis.URL||Be(!1,"This browser/engine doesn't support URL API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),"function"!=typeof globalThis.BigInt64Array&&Be(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),ft.withConfig(/*json-start*/{
  "mainAssemblyName": "DDGame",
  "resources": {
    "hash": "sha256-wbYIZnoq6fBFAwZUtvuOi5JyMrAwAaz2B2M5n1zNHy4=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.b6l13xorvf.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.v06hirbjsv.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.rw4kynp763.wasm",
        "hash": "sha256-JTxXd17wbrHKV/375moHFUFc3a/ofVTPPqSTk6KwNj0=",
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
        "name": "System.Runtime.InteropServices.JavaScript.6hy4kdm2z4.dll",
        "hash": "sha256-ik8Jw+mjBepXoqLQ05AEZ8ec7CJjUGwCyad4xdeqSME=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.6spky1dods.dll",
        "hash": "sha256-hpUXrRFY86Epf3COrtOkf6XkI50gKZnfy3BpOGdYjIA=",
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
        "name": "Microsoft.CSharp.zoogwz4vsp.dll",
        "hash": "sha256-A23aiAUdhpZD/fI7dW0YuLL4SH1S2qMP4mCqDSGP+AQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.xsak2ziccd.dll",
        "hash": "sha256-T75/+vZAezGdfPh76s3R/MWkoJGO2e3FBK5IgpwwA3g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.nsyxicw868.dll",
        "hash": "sha256-ZzA/bX3Ekc42pB46EYGBlNncroKivrPcg8GZDfp1AwU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.lq85kxhk40.dll",
        "hash": "sha256-fYPUeho+5I9DG+DL5/POYzBWMSw+qJ3D29eCTzi0CXY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.iq7cmwvivv.dll",
        "hash": "sha256-KniPRmrHFxIdEBjOPmJ2a7MVivo4Py4FOAiS2wjeO04=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.m0qzj9zfkf.dll",
        "hash": "sha256-dhX1lgt/Sj1twZAeUgX/c9jcUslBj9qcLBsJnGyqU4E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.lu2ojv01ck.dll",
        "hash": "sha256-k8zDInijaaqHkqCaSu8cWZfeTyvX/omBZaDa5mhYRVY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.kvjbf15a6r.dll",
        "hash": "sha256-oONgrloJC0aMRF7UUlMU18GBHo6NvyKEdxoDF6Wke+o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.ls77svrf7z.dll",
        "hash": "sha256-y/STnFhntl7v5Z0IM+feHd0Fztw5GdbTvP+fpkl33qE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.66s0mcmcse.dll",
        "hash": "sha256-YouRBy4Q9g+KijNHk7lefG36bUhdqfvjwNFCTjm1ea0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.soxlk6r1ov.dll",
        "hash": "sha256-zPloOi9bh2oYZqFnpw+N0ewM6WQZo9sJAkqAryG77W8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.d3mxu60zux.dll",
        "hash": "sha256-GWT99ne1J1k498SXySfCrWGA3umuOKL9gLMdbjJRa1M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.p34o2aslnq.dll",
        "hash": "sha256-xdR+1s/Mm4MuLoJze4UbU+43mawZHit+N6x5XS6j7bM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.kdfsgfyun9.dll",
        "hash": "sha256-KHdbjvD+Tz/zDWzxNIFqhdSPzDz82VH6wDBHZRALF4U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.upjn4riv3k.dll",
        "hash": "sha256-knMyRdlqJbwgT5F+V5uNhI5HbAjbag2m8+wJan4AoG0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.y0a0s7azag.dll",
        "hash": "sha256-PlWUuY133f6TJjewDZOsMzKmuhH8nW0vCyPLVu/6lIk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.xpg5kna7jf.dll",
        "hash": "sha256-5ZNCpFSEUixX/f4GSciSr28hnX1//HX3gSjXlpjZhGU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.ur8hswdwsi.dll",
        "hash": "sha256-Vs0BlDB2qCHNLThBugYHhz2IORnqBqRMYGm9UBBbiMQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.unia8ekzh6.dll",
        "hash": "sha256-BoOtoI3ynxqXWWPWfZaNoAuVlnDIk/YgNvXfzOCbj1I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.cu1haeiwht.dll",
        "hash": "sha256-bHryRrz4Kcng/LaGzG92keQiL3IDfK/UwIs6mTVhCHw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.379ps1hzvm.dll",
        "hash": "sha256-MfX7hes+DqboZ2irHGvg1WnU37AbS5rPdOQqgKcu1bY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.exkiampues.dll",
        "hash": "sha256-jlOWuGaI7Ai51rjkrUZdq411EVV1G6yMi6bK0RiUIiM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.v9hu50gn6x.dll",
        "hash": "sha256-85eo2kNVsXsI8GDi8YgywykEwua1WHgm9lEi267+Vt4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.aywb65j081.dll",
        "hash": "sha256-kqVhqFlRUes0kal9as5YCHxV3iAnclhuhgFwbyM9fts=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.za5upfmpe4.dll",
        "hash": "sha256-W2vDWPn0wINJtXnHTP3Qg0w50yXGkpacf9j4snep208=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.dse61bjjf2.dll",
        "hash": "sha256-XS1Xsbi5R785zLYENvFSg0D+wPjUgcx6/4fB/rZgq2M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.y3m1jfk3yc.dll",
        "hash": "sha256-0kq+Iz4jTIHvWV8zWfTs+f+9huUo/rG/haD0eYEqPbQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.fsvtbwxcjp.dll",
        "hash": "sha256-0T75ETadOyL/FHiR9i9wNmg1WS+ArzuE9k/pdwpo0FU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.n9g3mrkyy2.dll",
        "hash": "sha256-G1cBQCggCohAvz43ZI0ro5Gut36u0Dg2kzuwQPkXV80=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.s89hlj0jn4.dll",
        "hash": "sha256-DGr2j5YobpgF4rfwqZ5tBqRSRC8N7jvNjtDUu1/ltbU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.muaiazqh7o.dll",
        "hash": "sha256-bp3yAcVFmjBPyPGcpYRb2nsaPX5ZpGHtWl+UpgF1Rhk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.h79fyvd3as.dll",
        "hash": "sha256-o1ULvNg67zXVOA5LnzJnHTjaJiwvLhLsORD+nT+GNp0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.tahramzgw3.dll",
        "hash": "sha256-q93ClHfYeWfgncYsvKC5+oisjfEWzO3eh8sgdT5ESvo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.wemq8gqf9y.dll",
        "hash": "sha256-CGRX8u4vmIGmFPRuthVF1WA1XrmCDCTGAqtwgfE2TRg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.lgymvk1tal.dll",
        "hash": "sha256-CwkWQT3TnyTt90DMF6itipDdGiLRGK4x4h13rlUC0pU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.q7ukvlhqvg.dll",
        "hash": "sha256-CqeVrj73uRuXZk6W3WtwkJXjlBxwKN29und9btAr47E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.xklb36vhdk.dll",
        "hash": "sha256-/9JoKqWQh6zNUyqEfiIaOJMGtShYXbc8/wOfNChpC0o=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.a4ojp904uj.dll",
        "hash": "sha256-2n0B3R8gARJ9w7yIwAwhjx6i87ezJCn4U+JDlMaCbHw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.wls2gefpyc.dll",
        "hash": "sha256-VDX5zrCmBKRhzoOfOVcMh1z6b6h8VsJj3luNq7ybKkw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.gn2c1i8e4q.dll",
        "hash": "sha256-bMF92pYpH0YHpEkRnGPLb123ZHwWod4CrQ7O2PoVMtw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.0xavhh5z2l.dll",
        "hash": "sha256-/BE9xh1Ib5LGI4PDAkbUW8KdqAO69sK5K5zZTPXnUS0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.hrp9b5g1se.dll",
        "hash": "sha256-rUlZZXtl4zom1eMPbbjtAFy5GPJ5HFyej+IgKOedhao=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.1jr3lb0rjr.dll",
        "hash": "sha256-41BePH+R43mhrP/50gg3IDSVRXVVvGH+0mutFvVnmGE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.oo4wo8rgvb.dll",
        "hash": "sha256-uMdI4L63fwIfis+60VJOwW3QamRJSM2tiFQbgnHiMQg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.mbsr6lmrty.dll",
        "hash": "sha256-3t0h4sSKFzTvfO90fW4nSZ9cXvtULJeNJPdMdwhTLB4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.s7pswwja1v.dll",
        "hash": "sha256-qL4mtTrtYIsczFD1VHIqunfiB12CnJAwhtHVUn4WbGA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.qi8tdzbcgr.dll",
        "hash": "sha256-YhkDSxrwDOZhbK8j4jCRFNCliv6DdI32X1W7n5WGfnE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.mdgfzof3t0.dll",
        "hash": "sha256-VuyKUn5jJur+zrsaUENE1O9okA0pbcbW2d8e7s8gk3A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.zst7cdwnw2.dll",
        "hash": "sha256-ozIFp3FkVtZhc1tnVqPg1RYP0RWRoPsnaoMYokc/5TQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.40u994qbgq.dll",
        "hash": "sha256-3Gabf9Knu3mX9CK+rT3lutFhLmt+gS6aBK/BeJTSdKE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.4w30fx1j5c.dll",
        "hash": "sha256-tHYyXu5x9rtuY0C11dG88+w7bWRSghmsW1eAEDA6zc8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.3vvy988way.dll",
        "hash": "sha256-MeEILXexeKfqcsscslwnCd2N1NCmsHs6MjN8T+NQ2yU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.ff2ug1ua2c.dll",
        "hash": "sha256-y3vO8YK83aZwAFy5PF3DN2YhOS4iNOJEB4v/62EQ1sM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.3pm475u9z9.dll",
        "hash": "sha256-5wZHQ5MZcSM9RnXf6JIoyVCFEFZVrSlBRqpIhptjnCE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.yuvpxa0xul.dll",
        "hash": "sha256-dilt16KDK37w3ZQ8RP2bz0mMduAIgfz40MBpG8Tdx30=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.orl3grh5pa.dll",
        "hash": "sha256-DMOrwq7spz23M97eMnoMrnRrYVwjNIUqmQYrfoF74Ds=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.cb5frl7ojh.dll",
        "hash": "sha256-qKf0PnDxE613WnndKWFVcOV6X2U0JsfB6mv9QRW2Zfs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.2b0351tn0v.dll",
        "hash": "sha256-Tn2Fji8L8P0IG03MU5JKGGO9GSzUgeBaIdCTx7Bs1IA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.21uxvfg5cy.dll",
        "hash": "sha256-uo4xSZL9uEWU8FTnU1Ah4Nc3wH3u3+/JbXhPkve6y9U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.zw9hco3tmw.dll",
        "hash": "sha256-jVdAJhFUqfmJB67OEFb+DP715RBkmZ9E1WMnJ2PmmAI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.gpi3luiw5k.dll",
        "hash": "sha256-jPGXPF9m/5Hp1QhhuQscKk1Xcb02C4pg5WU67cYf5Xc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.2qgvp95ztk.dll",
        "hash": "sha256-lgw+4LOmAXbR7jceC3whKstqovrHgoOIuNDvK6MNRyw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.0y2j2im6pn.dll",
        "hash": "sha256-qD/WMNhKLj8OCptchgF60wA18tzVI8sNTjbMNq5n7xc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.nkvcxp1w0o.dll",
        "hash": "sha256-KQC4sdlTBYXRqR+oUIgaUUYLLsmi/hmqHJg+NcyPFJQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.xactqdhp5a.dll",
        "hash": "sha256-ieGq8a1Pd/x6cHrNqEmRGUD4BBzJBQkRlXm0iQbExEU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.mvmdsl8qxt.dll",
        "hash": "sha256-EsV2UAVcwAMKmfFghwhlkSpBBx/zlRL2TVhFyW899UU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.wil0qia1r6.dll",
        "hash": "sha256-CNGt7d4Bab72yyj+UQNldqyJ5jKU4GWK/I85JgQLAf8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.j397dbbll3.dll",
        "hash": "sha256-z1JJPOiu5atvt77BFiCf5+XEBPp2XAL3JaLB4NBsfbo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.um7mtf4x0u.dll",
        "hash": "sha256-Jinxfa7rotxg6bpexzO5rivbJ4kUja+hdb7V29M69w4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.2shcqov3jc.dll",
        "hash": "sha256-Ak9DApKMUfdItDhC2NPn3nFzkdpS+VDQd7Cjz7NrCAY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.yh3yr5wru3.dll",
        "hash": "sha256-NjUOBLOztYoGojd9fDNvi9ZxZMJBSdQRpdDGG/fYmHo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.zyhry4l9or.dll",
        "hash": "sha256-RerJ7mC49rnx2fDshMpvca3GmltnZ6J+YddxHBxurrU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.t9l9ogfidn.dll",
        "hash": "sha256-D2QcZvKfr3b+f1ZOwme4RAAznrhF7YLNdiSGjAsquKw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.zh2wm78dhi.dll",
        "hash": "sha256-WRmA4/A71miV0pK314N+Nyn4YjhI19/bYGUH38fOHys=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.rotg4cvqf6.dll",
        "hash": "sha256-tWGRMdxsYuSW8BUvhPEGT9pQ2m4iUguBLbW4Wxs7jvk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.1aj6fmc149.dll",
        "hash": "sha256-GS6a1hADVStdTPo5k12TpZmQjUdPgjtRx8cixYmOMu4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.5rsmjxpquv.dll",
        "hash": "sha256-EWKLf2r2mRJGPf7sIw58+aGqHYirJatrhoKBXQL47tQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.t84nqsdaah.dll",
        "hash": "sha256-w/DKxoEWOjDpl6+wQ1MlQtOnqdC9ZxWiK82zY0xdtQQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.xkwsiym3c0.dll",
        "hash": "sha256-DzKyZYs4xkKP5o9BuLIWtggHsyVP7CKEm5HvB5y7ZlY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.ikgstwsyz8.dll",
        "hash": "sha256-HsBCijld3pTwLITu88r1YHFEUtNXNkymgCsasTy/uis=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.90gx16tgny.dll",
        "hash": "sha256-SRiZwJIr/vVhwcuLYeI3iUS9LWBwJBqvW/89ohwGG0s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.g4nka24352.dll",
        "hash": "sha256-EEQoMrk85bx06pMUefysadItRG1NpgcOXtGYwmdxSzA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.g4ohs42lkr.dll",
        "hash": "sha256-oN8hczomkLymkLcYix8lXc0RyfPuQLukPAgSK5gtmDA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.4pqiuxidi2.dll",
        "hash": "sha256-qLl/XvPZyOd7arnKV+VsKQJfNgkL/UmhbN3wnftakEs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.4cvssofrxx.dll",
        "hash": "sha256-XMY2VvhZ7KD3iUGxMKfjzuXJTWqatPK2FR6Y73bYjno=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.bzeer8debp.dll",
        "hash": "sha256-qVFC/IAGTNLov7HrOg6LAhCnVe9mjZr6ixmW5+QWU4k=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.dtix0v5wfh.dll",
        "hash": "sha256-gQmYysQQ/f98HqnP80YRGEbHjrqsYrK3h7Aj9vPS7RA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.qje9gn5c7j.dll",
        "hash": "sha256-GjLB6LJ7TRz63m0iiO7EYzku/+z/kw9Lpl7m3MMOV1g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.fyyyaicyum.dll",
        "hash": "sha256-iQgoaItrc3HYY01EuZMzlgGTUvA5TaNMnmLmQLIU530=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.d3i4ujmwf0.dll",
        "hash": "sha256-mZ6wCV2RxRwX3b6xg7UdsTbChNkV0CMho6LuKCTEkA4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.g3wgvxu40w.dll",
        "hash": "sha256-hHZNosYdKCapwBx0VM9RwmHxNjx1NmXwzbbA+8k9PT4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.rpcd123kil.dll",
        "hash": "sha256-YWXHx6Is5+j+GPAkpggUa78dRtXiILwQ76jTxoTCf8c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.rg1gn3pc8c.dll",
        "hash": "sha256-a17ESukqiRkN+j1jbpF2Q8Iet10h9tG7rIJj/8aDs3c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.ou9yj9o31j.dll",
        "hash": "sha256-YF2A8KBgKYFAyRciBaBfUjL5g+5h7HM//JP3eLh1Ma4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.p7ibvoj2k6.dll",
        "hash": "sha256-C0AnGa+CeHLwSPKHj1qIVd6Jb6GazI/3UgVlemElcEg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.xla50fvo0a.dll",
        "hash": "sha256-9VA0tcqADVJnsNpk+1QuI+6xgxq4OM5WUaduMxnurc4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.203gt4c8fn.dll",
        "hash": "sha256-zv9ApfuU4M6pyaZ8u3vbYKmjVLKsfpIHZF8uucRVdhU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.um26l5uxzg.dll",
        "hash": "sha256-KiQvx47qWSSp1X3jgftgSsVbNdmjA6gNHfnFZ++JnJU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.vzr1idv9xb.dll",
        "hash": "sha256-+xnpd/KYBktZT7alrOtAGOZhQ9zUXIF9+edJm/NDsIo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.am7kcxalj9.dll",
        "hash": "sha256-kvPpLIHj9XApp1JUKtFSMp/38vd2V1CaLRzHc10sKwM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.x5sxmc2nfi.dll",
        "hash": "sha256-1XIIh15QlIEeaFXTPEacOE5tAjdeh1IhG9Bb7uMxjrA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.6m87y7yjf4.dll",
        "hash": "sha256-ohpbRxKwWFGtZOcRGnqjmSZwv3Ctrx1yvO9C6vh2yck=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.t9v8wa7sjo.dll",
        "hash": "sha256-UUiQO3RVI3YYuKXEZBmT7Ku+XBGjkxPk+euOu5Ukq7s=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.5sdfk1bgo4.dll",
        "hash": "sha256-hds3LtL7uZFaLcV6p62K6UGPmnMYN4ZF1/Vx7/LA2fQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.1s7i6su0m8.dll",
        "hash": "sha256-4Y36UKR9+zZMtwtoUmG2y5xJRlNLP7VSxOgdy98Ol94=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.9c49fu6c61.dll",
        "hash": "sha256-OYX17Pd567xrXPntpvFFQjuKL/rArPalacGFJyOcJxY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.2hqvorz14t.dll",
        "hash": "sha256-xmvyNn2IjWRIJEoy9t57jGxyqd8O3MiRpBjU5VzIX0w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.uthd169q1a.dll",
        "hash": "sha256-ftuJ2ejxe0vpIFQyzQXdc54wTkgBUyyJAT4Pf5Ji6Ro=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.w1l4tfgp9z.dll",
        "hash": "sha256-lFxUEa83t39FfIKXYCsj1MWu5EQJ7rU/LwqQmUuoJF8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.39m5fyi17r.dll",
        "hash": "sha256-GWlB/jbaR4HiHBS73k0FOXxXJ08U4YC564NfqCREdYU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.3kg5ix0zit.dll",
        "hash": "sha256-ExnpOgx/EYZozXxHP+Jl0L1EQQAwm+LwypDa7+GZnMs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.7cujtxbiy5.dll",
        "hash": "sha256-V7GAmPetrrhT1KR0bO3o5qPR5eD/oKV4mwt1BKRR01I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.0tva4xapi7.dll",
        "hash": "sha256-fLiJ5YnuGv6RC3OYD8bmDOcYlzm6vpfg7bDchHWSiCE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.g65vty0rt0.dll",
        "hash": "sha256-CA+LzwCHaHLx/R6SBq/0WxQbzmi8I0WouxbINelqO2Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.7ufqzw0qws.dll",
        "hash": "sha256-USqFUDGpdmTsK+Na4o+kY3beF9iQdTiVOqGaBZXmozs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.oqew6b9ypt.dll",
        "hash": "sha256-oPR+FFJBq2wIogYHqzBgRwkYSfhQyuTEr2b6r+RcEd8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.1ajlq01j17.dll",
        "hash": "sha256-J4Hbbjx/vUDml1Rxke4c7CYuh4ZNI21hj4LH5fM7POE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.5lky8h2nu9.dll",
        "hash": "sha256-R5cdn5Rq06WlqBZ65k+bNWCwB7r8VZRdujgP/48x6I8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.wyylnoisvp.dll",
        "hash": "sha256-uGSinLnuZj2SeksdEXMl21w1BwoDFo6od2aYYVVzTtY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.yoi2scvoaz.dll",
        "hash": "sha256-3vjBmmPMbSnO77sTuHxB2X/Bz59TFO5Cm/ggreZTw0E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.sbxuhcmg2v.dll",
        "hash": "sha256-yDq5j+Cn/ZzSjeLZGJwmgSXmOpb+Ot0QA5n43jHJny8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.abobjsqxeu.dll",
        "hash": "sha256-Ku0CrHSXX7n1UBVJ02SYt0QrxGzLQc7l4NCQVPgg3ng=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.w672216oik.dll",
        "hash": "sha256-GCneAinJAJqa9MHbEEiAeB/oxhpcfogUjLfV7EgJhZY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.vaw8pd3m6e.dll",
        "hash": "sha256-ee3plxlUdZfbGlaBO2whOJRqUwtZ8RGoQzsnRB8XEaI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.4uddpa974f.dll",
        "hash": "sha256-tAcQBUEiivnOnvOrNFA6SqNt/sV0FnaHJkbM/L5uO7w=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.p706aqwb1c.dll",
        "hash": "sha256-lfioMAnmgOJGV/KhLy9oKagc+gGcX5UkL1Mb8+QEIuw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.w80p9c26hw.dll",
        "hash": "sha256-gDmzFsr1muafuOS9leVNi8t5cdiDxEP2URxAQttDBd8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.dx3c7nos32.dll",
        "hash": "sha256-H76bvsusfKTfWM39poT7+NK4pIcYNNzBX7mKARp3UEo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.mgvq9sf19k.dll",
        "hash": "sha256-OhVjTE7X6av5mCsjyI+hkgyLmza8XwdVN50mJsWcMWs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.p3zqwy4wvt.dll",
        "hash": "sha256-y6MHaouaeTHkbrDxXJoZoqUfDwXGII7Ro8wG8vehxYY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.25inb8cj4k.dll",
        "hash": "sha256-armoOYH6B6O5iTkkK1H/pTY1Lkjak3F28kqxwQ3XYJ4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.lxtkum9vao.dll",
        "hash": "sha256-iRqFkxlAdfMgzkqD45QGc/aUt/BpiZh3yb9RKbRyzNI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.2a480qz436.dll",
        "hash": "sha256-qp9NkuD0N8pUfx8INMp0wclXeKeN2Oy1kXflSW557X8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.kf8w5clnnh.dll",
        "hash": "sha256-sNfVESkEQZhP49zLMqEgzPagw37+me871CqVUvm/myE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.cx8s88omow.dll",
        "hash": "sha256-0LsOoslb/7qb6tq+krmmnS8CfqsJ/M+j8Sxg8AnG/a0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.y2prh1abbn.dll",
        "hash": "sha256-umwMqm4EKxZmmAJgHuGXQG/dHAM8ZB4pdr4X1Bt0rQE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.mrtht3tvzc.dll",
        "hash": "sha256-8mnV+tCzKQJUxoxiWIEXhkiLG8su1nyhPMzqcID1sGE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.cyz8gwd8gj.dll",
        "hash": "sha256-/DcJS1MThNWi5OjlbzhMAJ+TaLkHHxr4yvCi7iLt18Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.8zel716pcc.dll",
        "hash": "sha256-7BX4P2YUONTNETP96U0muIpDYwoyTDymT3/EwLsVpuk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.q51p0ejzhb.dll",
        "hash": "sha256-4kXLOO9iQ72OqKcAz1iyywRaaGOhx/GsEvMD/sT0QB8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.u5wn3u2p3x.dll",
        "hash": "sha256-boLZCbvHdK2B1SiSkru1Ze6ZcVcc/UXSYDoqLamZR7E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.h3dv02ezfs.dll",
        "hash": "sha256-88NPEadIqfXbFgwN+KKy5ygIdFlH7QKOWvAJsQX1oaQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.vkuyfzlpgl.dll",
        "hash": "sha256-Tzrymn2aVmo44PuN6jy8cGAydTqdKKctiyTsu1rXgnI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.u1gxtr34r1.dll",
        "hash": "sha256-fndMPPy4GSautrM+RzU57zOkyAsPtXUXGEE+iYdksgw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.qgrn06cjce.dll",
        "hash": "sha256-Nr0XVEJKzKGMwg6YXACOnskn0P3AizXvczxRh+zc2Ck=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.3i8jwmgmov.dll",
        "hash": "sha256-y2la9ZQQvJQttzUcGyGyb8Fx6gmg3wH8PAAxHFe8b7Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.i00mm0qstb.dll",
        "hash": "sha256-kh/D6C4APQY8L7pkOOJ0GTiAAEifGDisJY4f+swlzRc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.phiyh8ngdt.dll",
        "hash": "sha256-4ywf65nGvijxbb6NzwO4xxA65uYNbBwmBdxEkVRaLUA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.p8xw16uz6r.dll",
        "hash": "sha256-t3b2xnu0D4OxGevwXsE7JQvDeYEjqYq2pJx88yT79lg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.gsu3bx6ql8.dll",
        "hash": "sha256-YFKiqK7IUOucIsnP3drSmdE2rJ/SJE5Dgf738RJ3VR4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.t73xnqxwes.dll",
        "hash": "sha256-d0IPldZC67/wgGuWMNFs/0qDgG4m6Kr/gcQn0xjqchI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.ga4hjjmfu0.dll",
        "hash": "sha256-CJFTkp9al/3A/cJNQU42CrkIuPrtmlGflA4w3mB8iGc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.freqg90teq.dll",
        "hash": "sha256-xR6AWu6uJMnXBlAmhY4IYVoWpGo4K+8I9uOf4gXEnOw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.19zz8yhpni.dll",
        "hash": "sha256-y0IMbva3PqGOoxRySKUpLTXtQdf6DEndoJHpSOzcpV4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.4rhrgl7ged.dll",
        "hash": "sha256-oIbsMgjixe8Uvyu3CoQNUAXYuDBziNsmwHRfYU4/5BE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.u8bqxse3uc.dll",
        "hash": "sha256-bgyWNeeuWzxPPCIWi0ynqXtH+Bbz7d1usOIsbovDMOc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.6v9elv2hg4.dll",
        "hash": "sha256-jmUx6frkR4LDUSVRoW20yKpu4txAH21G3NtBZyrbQAU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.6o81fx80lo.dll",
        "hash": "sha256-JvUtsKUQOA5JYgt3V41xNBX6d6+a1jK88lMDVddxx9U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.b1egmd632n.dll",
        "hash": "sha256-8QojpE2aW3i+428lzDRGDqjJafc04ziB411aBwUnwaw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.hhod0r7vcw.dll",
        "hash": "sha256-y8a3MCWF5OyDYcn/ThsMsUGLL6FZJFhOLzkkoeHlZiA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.ms33itojkp.dll",
        "hash": "sha256-CqTrJTFRNFmfLGARuALbRP0sffr9wNY7ymYWBRuMRu0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.wswh6yr059.dll",
        "hash": "sha256-UP7f9bQCKtk0eKbzDUgW3UWqgatK6dnznIjTtAkjGhY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.y95rdybe1t.dll",
        "hash": "sha256-dngMnJv75LdWz6hd80CL/52YtVJTgmz6M37gBeNdQeU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.0aapogruj5.dll",
        "hash": "sha256-uHejy/+xPJiYCVcubck8WXeouOeJq62pSlN4ZA6zeXo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.vdqhxypxj1.dll",
        "hash": "sha256-0/g5An3cZm4VMwZ4a0EPmoCAdbUVT0u4j0FZN8q+/a8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.al9w7rwtxi.dll",
        "hash": "sha256-chTeF4GdhumKjYMwo+Giqdl2mTYPjBCtdJZ7S0M4qVI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.dll",
        "name": "System.32o76q24hf.dll",
        "hash": "sha256-dfzXdEDzj3GdSRK9M7e7VAJ0ZqSMT/dMiqdP9n+GQoE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.8ihvhks6vj.dll",
        "hash": "sha256-oNTKa+TNojXdEeIZ+9ufHML0e1fK6GThfDOTcr9UoEc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.a9gqfeoo4u.dll",
        "hash": "sha256-zrvzwfVuvURaK7IFVCrzAxv8UOPn55xLlNX55hTupAk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.u7k6zwxowm.dll",
        "hash": "sha256-JsGGYSypbIPI70MTPXy27Jnpw6ZnU+WNsz5rcsK01sM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "DDGame.dll",
        "name": "DDGame.gmm75ysq30.dll",
        "hash": "sha256-SJuaqb2dA8tFaCp3hFuLQS346Y8xTHsqmZ2vWuDdYsw=",
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

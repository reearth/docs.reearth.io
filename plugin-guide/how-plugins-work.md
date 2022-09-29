---
title: How plugins work
sidebar_position: 5
---

It is never easy to make plug-ins work on a web browser, and there are various technical issues that need to be resolved before they can be developed. Therefore, plug-in developers need to accept the unique constraints that are different from the usual HTML and JavaScript implementations before developing plug-ins.

The plugin can be implemented in JavaScript, but it is divided into two parts: the part that works on WebAssembly and the part that works on iframe.

Both of them can safely execute third-party JavaScript code, but they have their advantages and disadvantages, so Re:Earth uses a hybrid method.

WebAssembly can run code synchronously and fast, and can access Re:Earth's data, but it cannot use the APIs and UIs supported by web browsers. iframe can use all the APIs supported by web browsers, and can display UIs in HTML. But it cannot access Re:Earth data directly and runs asynchronously.

The WebAssembly part and the iframe can exchange messages through [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). This allows you to send only the necessary data from Re:Earth to the iframe, rewrite HTML in the iframe, and retrieve server information. You can also pass the retrieved information to the WebAssembly part.

## WebAssembly side

This is the entry point that is executed when the plugin is first loaded, and runs synchronously in the same thread as Re:Earth.

You can do the following:

- Get Re:Earth scene data
- Call Re:Earth plugin API
- Modify Re:Earth scene partially (currently modifying a property of layers is supported)
- Subscribe to events from the scene
- Send data to the IFrame side via `reearth.ui.postMessage` and receive data from the IFrame side via `reearth.on("message", () => {})`

You cannot do the following:

- Render HTML and any UI directly (must use the IFrame side)
- Use most APIs provided by web browsers (only some APIs, such as `console.log`, are available)
- Communicate via HTTP with any external servers

Pro tip: Since JavaScript is executed by QuickJS, it is compatible with ECMAScript 2020, regardless of web browsers.

## IFrame side

You can do the following:

- Render HTML just like a normal HTML page
- Use any API provided by web browsers just like a normal HTML page (window, DOM API,  ...)
- Communicate via HTTP (fetch or XHRRequest) with an external server that has CORS properly configured (`Access-Control-Allow-Origin: *` is required in response headers from external servers)
- Communicate with the WebAssembly side via `parent.postMessage` and `window.addEventListener("message", () => {})`

You cannot do this following:

- Communicate with an external server without `Access-Control-Allow-Origin: *` (because iframe is sandboxed and its origin is null)
- Communicate with Re:Earth back-end directly
- Get and modify Re:Earth data directly (needs `postMessage` from the WebAssembly side)
- Use local storage (because iframe is sandboxed and its origin is null)

## You mean?

|||||
|---|---|---|
|Name|WebAssembly side|IFrame side|
|Sandboxed| ✅ | ✅ |
|Entrypoint (first executed)| ✅ | ❌ |
|Access to Re:Earth plugin API| ✅ | ❌ |
|Render HTML| ❌ | ✅ |
|Use web API (DOM API, Canvas API, AJAX... without local storage)| ❌ | ✅ |
|Communicate with the other side via "postMessage"| ✅ | ✅ |


## Limitation

- `postMessage` cannot send objects that cannot be serialized as JSON. This includes ArrayBuffers, Blobs, and other objects that can be sent with regular postMessage. At the moment, to send binaries, you need to encode them with base64 or something similar. We are considering expanding the number of objects that can be sent and received in the future.
- `localStorage` is not supported in the both side. For now, there is no way for the plugin to store data other than using an external server, but we are considering providing dedicated storage for the plugin.
- Plugins that can be installed are limited to zip files of 10MB or less.
- Non-JavaScript files, such as images, cannot be packaged and used as plugins. Any static asset files (html, image, css, ...) should be embed in JavaScript code as a string or any other represents, or host them on any server that is publicly available on the web, and refer to them through URLs.

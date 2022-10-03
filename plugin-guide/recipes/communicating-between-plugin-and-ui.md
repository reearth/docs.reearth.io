---
title: Communicating between plugin and UI
sidebar_position: 3
---

```js
const html = `
  <style>
    html,body {
      margin: 0;
      width: 400px;
      height: 200px;
      background: white;
    }
    #wrapper {
      height: 100%;
      padding:24px;
      box-sizing: border-box;
    }
  </style>
  <div id="wrapper">
    <button id="send">Send message</button>
    <p>click and open your console to check please.</p>
    <h3>Message from Plugin: <span id="msg"></span></h3>
  </div>
  <script>
    document.getElementById("send").addEventListener("click", function() {
		  parent.postMessage("Button is clicked", "*");
    });

     window.addEventListener("message", function (e) {
      if (e.source !== parent) return;
      document.getElementById("msg").textContent = e.data;
    });
  </script>
`;

reearth.ui.show(html);

reearth.on("message", msg => {
  console.log("message received:", msg);
});

reearth.ui.postMessage("Hello world");
```

With postMessage, you can send objects that can be serialized to JSON. For example, it is possible to send a layer object obtained from the plugin API.

:::info
In Google Chrome for iOS, for some reason, the web browser itself may send some messages indiscriminately directly to iframes of plugins. Therefore, when receiving messages in your iframe, you should make sure that they are not sent by plug-ins, and implement ignoring unknown messages. Otherwise, the plugin will not work well on iOS.
:::

```js
const html = `
  <style>
    html,body {
      margin: 0;
      width: 400px;
      height: 200px;
      background: white;
    }
    #wrapper {
      height: 100%;
      padding:24px;
      box-sizing: border-box;
    }
    #layerid, layertitle {
      color: #E95518;
    }
  </style>
  <div id="wrapper">
    <p>First layer ID is <span id="layerid"></span></p>
    <p>First layer title is <span id="layertitle"></span></p>
  </div>
  <script>
    window.addEventListener("message", function (e) {
      if (e.source !== parent) return;
      document.getElementById("layerid").textContent = e.data.id;
      document.getElementById("layertitle").textContent = e.data.title;
    });
  </script>
`;

reearth.ui.show(html);

reearth.ui.postMessage(reearth.layers.layers?.[0]);
```

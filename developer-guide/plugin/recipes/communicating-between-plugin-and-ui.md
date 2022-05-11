---
title: Communicating between plugin and UI
sidebar_position: 3
---

```js
const html = `
  <button id="send">Send message</button>
  <p>Message arrival: <span id="msg"></span></p>
  <script>
    window.addEventListener("message", function (e) {
      if (e.source !== parent) return;
      document.getElementById("msg").textContent = e.data;
    });

    document.getElementById("send").addEventListener("click", function() {
		  parent.postMessage("response", "*");
    });
  </script>
`;

reearth.ui.show(html);

reearth.on("message", msg => {
  console.log("message received:", msg);
});

reearth.ui.postMessage("hello world");
```

With postMessage, you can send objects that can be serialized to JSON. For example, it is possible to send a layer object obtained from the plugin API.

:::info
In Google Chrome for iOS, for some reason, the web browser itself may send some messages indiscriminately directly to iframes of plugins. Therefore, when receiving messages in your iframe, you should make sure that they are not sent by plug-ins, and implement ignoring unknown messages. Otherwise, the plugin will not work well on iOS.
:::

```js
const html = `
  <p>First layer ID is <span id="layerid"></span></p>
  <p>First layer title is <span id="layertitle"></span></p>
  <script>
    window.addEventListener("message", function (e) {
      // you can ignore unknown messages by checking e.data.layer
      if (e.source !== parent || !e.data.layer) return;
      document.getElementById("layerid").textContent = e.data.layer.id;
      document.getElementById("layertitle").textContent = e.data.layer.title;
    });
  </script>
`;

reearth.ui.show(html);

reearth.ui.postMessage({
  layer: reearth.layers.layers?.[0]
});
```

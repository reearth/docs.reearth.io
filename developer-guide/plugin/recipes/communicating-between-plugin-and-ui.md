---
sidebar_position: 3
---

# Communicating between plugin and UI
------

```jsx
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

```jsx
const html = `
  <p>First layer ID is <span id="layerid"></span></p>
  <p>First layer title is <span id="layertitle"></span></p>
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
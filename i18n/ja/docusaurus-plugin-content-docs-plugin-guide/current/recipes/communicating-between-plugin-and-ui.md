---
title: プラグインとRe:Earth UI間の通信
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

postMessage を使用すると、JSON にシリアル化できるオブジェクトを送信できます。
たとえば、プラグインAPIから得られたレイヤーオブジェクトを送信することもできます。

:::info
Google Chrome for iOS では、何らかの理由で、Web ブラウザー自体が無差別にプラグインの iframe に直接メッセージを送信する場合があります。
したがって、iframe でメッセージを受信するときは、それらがプラグインによって送信されていないことを確認し、不明なメッセージを無視するように実装する必要があります。
そうしないと、プラグインはiOSでうまく動作しません。
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

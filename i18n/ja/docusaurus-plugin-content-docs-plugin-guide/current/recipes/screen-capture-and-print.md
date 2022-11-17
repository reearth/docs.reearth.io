---
title: スクリーンキャプチャと印刷
sidebar_position: 10
---

# CaptureScreen API

プラグインは、このAPIを使用してキャンバスの画像を取得することができます。

:::note

画像はキャンバスから吐き出されるため、キャンバス外で実装されたもの(例：インフォボックス)は含まれません。
すべてのHTML要素のスクリーンショットを取りたい場合は、プラグインコードでいくつかのサードパーティライブラリを実装してみてください。

:::

```js
reearth.ui.show(`
  <style>
    html,body {
      margin: 0;
      width: 350px;
    }
    button {
      margin: 0;
    }
    #wrapper {
      height: 100%;
      box-sizing: border-box;
      border-radius:12px;
      padding: 12px;
      background: white;
    }
  </style>

  <div id="wrapper">
    <button id="button">Capture</button>
    <p>Click this button will capture the map</p>
  </div>

  <script>
    document.getElementById("button").addEventListener("click", (e) => {
      parent.postMessage({ type: "captureScreen" }, "*");
    });
    addEventListener("message", e => {
      if (e.source !== parent) return;
      if (e.data.type && e.data.type === 'getCaptureScreen') {
        const fileName = "capture.png";
        const link = document.createElement("a");
        link.download = fileName;
        link.href = e.data.payload;
        link.click();
        link.remove();
      }
    })
  </script>
`);

reearth.on("message", msg => {
  if (msg.type === "captureScreen") {
    reearth.ui.postMessage({
      type: "getCaptureScreen",
      payload: reearth.scene.captureScreen(),
    });
  }
});
```

# captureScreen APIで印刷をサポートする方法

captureScreen APIを使用することで、印刷機能にも対応することができます。

```js
reearth.ui.show(`
  <style>
    html,body {
      margin: 0;
      width: 350px;
    }
    button {
      margin: 0;
    }
    #wrapper {
      height: 100%;
      box-sizing: border-box;
      border-radius:12px;
      padding: 12px;
      background: white;
    }
  </style>

  <div id="wrapper">
    <button id="button">Print this map</button>
    <p>Click this button we can print!</p>
  </div>

  <script>
    document.getElementById("button").addEventListener("click", (e) => {
      parent.postMessage({ type: "captureScreen" }, "*");
    });
    
    addEventListener("message", e => {
      if (e.source !== parent) return;
      if (e.data.type && e.data.type === 'getCaptureScreen') {
        const iframe = document.createElement("iframe");
        iframe.style.cssText = "display:none";
        iframe.onload = function(){
          const img = iframe.contentWindow.document.createElement("img");
          img.style.cssText = "width: 100%";
          img.src = e.data.payload;
          img.onload = function(){
            iframe.contentWindow.print();
            document.body.removeChild(iframe);
          }
          iframe.contentWindow.document.body.appendChild(img);
        }
        document.body.appendChild(iframe);
      }
    })
  </script>
`);

reearth.on("message", msg => {
  if (msg.type === "captureScreen") {
    reearth.ui.postMessage({
      type: "getCaptureScreen",
      payload: reearth.scene.captureScreen(),
    });
  }
});
```

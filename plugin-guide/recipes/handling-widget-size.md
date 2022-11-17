---
title: ウィジェットサイズの変更

sidebar_position: 4
---

## Widget size

ウィジェットのサイズを指定する方法は2つあります。

- CSSを使用する

```js
reearth.ui.show(`
  <style>
    html,body {
      margin: 0;
      width: 400px; /* Change here for your specific plugin's width */
      height: 200px; /* Change here for your specific plugin's height */
      background: white; /* Change here for your specific plugin's background */
    }
    #wrapper {
      height: 100%; /* This is useful if your contents naturally don't fill up the whole height */
    }
  </style>

  <div id="wrapper">
    <!-- contents of plugin go here -->
  </div>

  <script>
    // Any JavaScript goes here, including any commmunication needed to be sent to the Re:Earth API
  </script>
`);
```

- iframeのサイズを制御する

```js
reearth.ui.show(`
  <style>
    html,body {
      margin: 0;
      width: 100%;
      height: 100%;
      background: white; /* Change here for your specific plugin's background */
    }
    #wrapper {
      height: 100%; /* This is useful if your contents naturally don't fill up the whole height */
    }
  </style>

  <div id="wrapper">
    <!-- contents of plugin go here -->
  </div>

  <script>
    // Any JavaScript goes here, including any commmunication needed to be sent to the Re:Earth API
  </script>
`, 
{ width: 400, height: 200 }); 
// You can set width/height by number or string (ie "400px")
```


# ウィジェットのサイズ変更

- 基本的なサイズ変更:HTML

```js
reearth.ui.show(`
  <style>
    html, body { 
      margin: 0; 
      width: 300px; /* Change here for your specific plugin's height */
      height: 300px; /* Change here for your specific plugin's width */
      background: white; /* Change here for your specific plugin's background */
    }
    .extendedh { width: 500px; }
    .extendedv { height: 400px; }
    #wrapper { box-sizing: border-box; }
    .extendedh body, .extendedh #wrapper { width: 100%; }
    .extendedv body, .extendedv #wrapper { height: 100%; }
  </style>

  <div id="wrapper">
    <div style="padding: 10px;">
      <button id="resize">Resize</button>
    </div>
  </div>

  <script>
    let expanded = false;
    document.getElementById("resize").addEventListener("click", (e) => {
      if (!expanded){
        document.documentElement.classList.add("extendedh", "extendedv");
      } else {
        document.documentElement.classList.remove("extendedh", "extendedv");
      }
      expanded = !expanded;
    });
  </script>
`);
```

- 基本的なサイズ変更:iframe

```js
reearth.ui.show(`
  <style>
    html,body {
      margin: 0;
      width: 100%;
      height: 100%;
      background: white; /* Change here for your specific plugin's background */
    }
    #wrapper {
      height: 100%; /* This is useful if your contents naturally don't fill up the whole height */
    }
  </style>

  <div id="wrapper">
    <div style="padding: 10px;">
      <button id="resize">Resize</button>
    </div>
  </div>

  <script>
    let expanded = false;
    document.getElementById("resize").addEventListener("click", (e) => {
      expanded = !expanded
      parent.postMessage({ type: "resize", expanded }, "*");
    });
  </script>
`, 
{ width: 200, height: 100 });

reearth.on("message", msg => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(msg.expanded ? 400 : 200, msg.expanded ? 200 : 100, msg.expanded ? undefined : true);
  }
});
```


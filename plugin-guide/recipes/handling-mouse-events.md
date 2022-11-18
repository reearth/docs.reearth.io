---
title: Handling mouse events
sidebar_position: 8
---

Re:Earth supports listening to mouse events, the following are some simple examples.

## Basic mouse events

```js
reearth.ui.show(`
  <style>
    html{
      margin: 0;
      width: 300px;
      background: white;
    }
    #wrapper {
      height: 100%;
    }
  </style>

  <div id="wrapper">
    <p>Please left Click On the Earth</p>
    <div>ScreenX: <span id="x"></span></div>
    <div>ScreenY: <span id="y"></span></div>
    <div>Longitude: <span id="lng"></span></div>
    <div>Latitude: <span id="lat"></span></div>
    <div>Height: <span id="height"></span></div>
    <div>LayerId: <span id="layerId"></span></div>
    <div>Mousewheel Delta: <span id="delta"></span></div>
  </div>

  <script>
    const setValue = (id, value) => {
      document.getElementById(id).innerHTML = value ?? '';
    }
    addEventListener("message", e => {
      if (e.source !== parent) return;
      if (e.data.type === 'mousedata') {
        setValue('x', e.data.payload.x);
        setValue('y', e.data.payload.y);
        setValue('lng', e.data.payload.lng);
        setValue('lat', e.data.payload.lat);
        setValue('height', e.data.payload.height);
        setValue('layerId', e.data.payload.layerId);
        setValue('delta', e.data.payload.delta);
      }
    })
  </script>
`);

reearth.on('click',(mousedata) => {
  reearth.ui.postMessage({ 
    type: "mousedata",
    payload: mousedata
  }, "*");
});

reearth.on('wheel',(mousedata) => {
  reearth.ui.postMessage({ 
    type: "mousedata",
    payload: mousedata
  }, "*");
});
```

## Following mouse

```js


```
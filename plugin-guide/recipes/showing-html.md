---
title: Showing HTML
sidebar_position: 2
---

## Show normal HTML

```js
const html = `
<style>
  html,body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    margin: 0;
  }
  #wrapper {
    height: 100%;
    border-radius:12px;
    background: white;
  }
  .titleWrapper {
    padding:12px;
    text-align: center;
  }
  .imageWrapper {
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<div id="wrapper">
  <div class="titleWrapper">
    <h1>Welcome to Re:Earth</h1>
  </div>
  <div class="imageWrapper">
    <img class="logo" src="https://reearth.io/img/logo.svg" alt="reearth-logo" width="80px">
  </div>
</div>
`;
reearth.ui.show(html, { width: 400, height: 200 });
```

## Show leaflet map

```js
const html = `
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<style>
  html,body {
    margin: 0;
    width: 400px;
    height: 200px;
    background: white;
  }
  #wrapper {
    height: 100%;
  }
  #map {
    height: 100%;
    width: 100%;
  }
</style>
  <div id="wrapper">
    <div id="map"></div>
  </div>
<script>
  const map = L.map("map").setView([35.68, 139.78], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
</script>
`;
reearth.ui.show(html);
```

## Use HTML without showing

When the UI does not need to be displayed, such as just communicating with the server

```jsx
reearth.ui.show(html, { visible: false });
```

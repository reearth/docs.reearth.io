---
title: Showing HTML
sidebar_position: 2
---
## Show leaflet map

```jsx
const html = `
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <script id="l" src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
  <style>
    #id { width: 100%; height: 300px; }
  </style>
  <div id="map"></div>
  <script>
    document.getElementById("l").addEventListener("load", () => {
      const map = L.map("map").setView([0, 0], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    });
  </script>
`;
reearth.ui.show(html);
```

## Use HTML without showing

When the UI does not need to be displayed, such as just communicating with the server

```jsx
reearth.ui.show(html, { visible: false });
```

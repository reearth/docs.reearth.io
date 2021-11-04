---
title: Controlling camera
sidebar_position: 5
---

```jsx
const html = `
  <p>lng: <input type="number" id="lng" value="0" /></p>
  <p>lat: <input type="number" id="lat" value="0" /></p>
  <p>height: <input type="number" id="height" value="100000" />m</p>
  <p><button id="fly">Fly to</button> <button id="look">Look at</button></p>

  <script>
    const getPos = () => ({
      lng: parseFloat(document.getElementById("lng")),
      lat: parseFloat(document.getElementById("lat")),
      alt: parseFloat(document.getElementById("height"))
    });

    document.getElementById("fly").addEventListener("click", () => {
			parent.postMessage({ fly: getPos() }, "*");
    });

    document.getElementById("look").addEventListener("click", () => {
			parent.postMessage({ look: getPos() }, "*");
    });
  </script>
`;

reearth.ui.show(html);

reearth.on("message", msg => {
  if (msg.fly) {
	  reearth.visualizer.camera.flyTo({
	    lat: msg.fly.lat,      // degrees
	    lng: msg.fly.lng,      // degrees
	    height: msg.fly.alt,   // meters
	    heading: 0,        // radians
	    pitch: -Math.PI/2, // radians
	    roll: 0,           // radians
	  }, {
	    duration: 2        // seconds
	  });
  } else if (msg.look) {
	  reearth.visualizer.camera.lookAt({
	    lat: msg.look.lat,      // degrees
	    lng: msg.look.lng,      // degrees
	    height: msg.look.alt,   // meters
	    heading: 0,        // radians
	    pitch: -Math.PI/2, // radians
	    roll: 0,           // radians
	  }, {
	    duration: 2        // seconds
	  });
  }
});
```
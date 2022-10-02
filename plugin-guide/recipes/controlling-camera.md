---
title: Controlling camera
sidebar_position: 5
---

```js
const html = `
  <style>
	html,body {
		margin: 0;
		width: 350px;
		background: white;
	}
	#wrapper {
		height: 100%;
		padding: 12px;
		box-sizing: border-box;
	}
	input {
		width: 60px;
	}
  </style>

  <div id="wrapper">
    <p>lng: <input type="number" id="lng" value="139.78" />°</p>
    <p>lat: <input type="number" id="lat" value="35.68" />°</p>
    <p>height: <input type="number" id="height" value="10000" /> m</p>
    <p>heading: <input type="number" id="heading" value="0" step="0.1"/></p>
    <p>pitch: <input type="number" id="pitch" value="-1.5" step="0.1"/></p>
    <p>roll:(work for fly to) <input type="number" id="roll" value="0" step="0.1"/></p>
    <p>range:(work for look at) <input type="number" id="range" value="10000" /> m</p>
    <p>duration: <input type="number" id="duration" value="2" /> s</p>
    <p><button id="fly">Fly to</button> <button id="look">Look at</button></p>
  </div>

  <script>
    const getValues = () => ({
      lng: parseFloat(document.getElementById("lng").value||0),
      lat: parseFloat(document.getElementById("lat").value||0),
      height: parseFloat(document.getElementById("height").value||0),
      heading: parseFloat(document.getElementById("heading").value||0),
      pitch: parseFloat(document.getElementById("pitch").value||0),
      roll: parseFloat(document.getElementById("roll").value||0),
      range: parseFloat(document.getElementById("range").value||0),
      duration: parseFloat(document.getElementById("duration").value||0),
    });

    document.getElementById("fly").addEventListener("click", () => {
      parent.postMessage({ fly: getValues() }, "*");
    });

    document.getElementById("look").addEventListener("click", () => {
      parent.postMessage({ look: getValues() }, "*");
    });
  </script>
`;

reearth.ui.show(html);

reearth.on("message", msg => {
  if (msg.fly) {
	  reearth.camera.flyTo({
	    lat: msg.fly.lat,            // degrees
	    lng: msg.fly.lng,            // degrees
	    height: msg.fly.height,      // meters
	    heading: msg.fly.heading,    // radians
	    pitch: msg.fly.pitch,        // radians
	    roll: msg.fly.roll,          // radians
	  }, {
	    duration: msg.fly.duration   // seconds
	  });
  } else if (msg.look) {
	  reearth.camera.lookAt({
	    lat: msg.look.lat,          // degrees
	    lng: msg.look.lng,          // degrees
	    height: msg.look.height,    // meters
	    heading: msg.look.heading,  // radians
	    pitch: msg.look.pitch,      // radians
	    range: msg.look.range,      // meters
	  }, {
	    duration: msg.look.duration // seconds
	  });
  }
});
```

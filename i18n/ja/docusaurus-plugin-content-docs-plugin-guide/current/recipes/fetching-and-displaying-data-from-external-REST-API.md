---
title: 外部REST API からのデータの取得と表示
sidebar_position: 6
---

"Where the ISS at?" API([https://wheretheiss.at/w/developer](https://wheretheiss.at/w/developer))で現在のISSの位置を取得します。 
```js
const html = `
	<style>
	  body {
			margin: 0;
			padding: 10px;
			background-color: rgba(111, 111, 111, 0.5);
		}
	</style>

  <h1>Current ISS location</h1>
  <p>Latitude: <span id="lat">-</span></p>
  <p>Longitude: <span id="lon">-</span></p>
  <p>Altitude: <span id="alt">-</span>km</p>
  <p><button id="update">Update</button></p>

	<script>
    const url = "https://api.wheretheiss.at/v1/satellites/25544";

	  function update() {
	    fetch(url).then(r => r.json()).then(data => {
	      document.getElementById("lat").textContent = data.latitude;
	      document.getElementById("lon").textContent = data.longitude;
	      document.getElementById("alt").textContent = data.altitude;
	    });
	  };

	  document.getElementById("update").addEventListener("click", update);

	  update();
	</script>
`;

reearth.ui.show(html);
```
"Where the ISS at?" APIは、 `Access-Control-Allow-Origin: *` ヘッダーで応答するため、Re:Earthのプラグインで使用可能であることに注意してください。

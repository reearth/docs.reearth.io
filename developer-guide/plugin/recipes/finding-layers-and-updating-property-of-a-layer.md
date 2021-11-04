---
title: Finding layers and updating property of a layer
sidebar_position: 6
---

```jsx
function findMarker(layers, title) {
  for (const child of layer) {
    if (
			layer.pluginId === "reearth" &&
			layer.extensionId === "marker" &&
			layer.title === title
		) return layer;

    if (layer.children?.length) {
	    const found = find(layer.children, title);
	    if (found) return found;
    }
  }
}

const markerThatTitleIsReearth = findMarker(reearth.layers.layers, "Re:Earth");

if (markerThatTitleIsReearth) {
	// temporally update marker location
	reearth.layers.overrideProperty(markerThatTitleIsReearth.id, {
		default: {
			location: { lat: 100, lng: 0, height: 0 }
    }	
	});
}
```

Note that the result of `reearth.layers.overrideProperty` will not be persisted. If you close or reload the page, the changes will be undone.

The details of property object are not documented yet, but you can get the object of the current layer by running `reearth.layers.layers` in the console of the developer tools. By looking at the properties in this object, you can find out what properties can be overridden.

![properties](./img/properties.png)
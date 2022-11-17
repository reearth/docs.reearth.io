---
title: レイヤーの検索とプロパティの更新
sidebar_position: 9
---

```js
const markerThatTitleIsReearth = reearth.layers.find(
	layer => layer.type === "marker" && layer.title === "Re:Earth"
);

if (markerThatTitleIsReearth) {
	// temporally update marker location
	reearth.layers.overrideProperty(markerThatTitleIsReearth.id, {
		default: {
			location: { lat: 100, lng: 0, height: 0 }
    }
	});
}
```

`reearth.layers.overrideProperty`の結果は保持しないとこに注意してください。  
ページを閉じるか再読み込みすると、変更が取り消されます。

プロパティオブジェクトの詳細はまだドキュメント化されていませんが、開発者ツールのコンソールで`reearth.layers.layers` を実行すると現在のレイヤーのオブジェクトを取得することができます。  
このオブジェクトのプロパティをみると、上書きができるプロパティが分かります。

![properties](./img/properties.png)

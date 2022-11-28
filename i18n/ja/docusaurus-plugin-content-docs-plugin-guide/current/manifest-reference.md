---
title: プラグインマニフェスト
sidebar_position: 6
---

プラグインマニフェストは非常に自由に設定できますが、ドキュメントはまだ作成中です。

ただし、Re:Earthで標準搭載されているレイヤーやブロックなどは、実は組み込みプラグインとして実装されており、それらのマニフェストがあります。
ドキュメントが完成するまで、次の組み込みプラグインのマニフェストファイルを参照してください。

組み込みプラグインマニフェスト: [https://github.com/reearth/reearth-backend/blob/main/pkg/builtin/manifest.yml](https://github.com/reearth/reearth-backend/blob/main/pkg/builtin/manifest.yml)

プラグイン マニフェストのJSONスキーマ: [https://github.com/reearth/reearth-backend/blob/main/schemas/plugin_manifest.json](https://github.com/reearth/reearth-backend/blob/main/schemas/plugin_manifest.json)

ファイルの場所が変更される可能性があるため、この URL をマニフェストの `$schema` フィールドに設定してスキーマを参照することはお勧めしません。
参照できる <u>schema.reearth.io</u> のようなURLを作成する予定です。

---
title: プラグインの仕組み
sidebar_position: 5
---

プラグインを Web ブラウザ上で動作させることは決して容易ではなく、開発する前に解決しなければならないさまざまな技術的問題があります。
従って、プラグイン開発者はプラグイン開発前に、通常のHTMLやJacaScriptの実装とは異なる独自の制約を受け入れる必要があります。

プラグインはJavaScriptで実装できますが、WebAssemblyで動作する部分とiframeで動作する部分の2つの部分に分かれています。


どちらともサードパーティのJavaScriptコードを安全に実行することができますが、それぞれにメリットとデメリットが存在します。  
なので、Re:Earthはハイブリッド方式を採用しています。

WebAssemblyはコードを同期的かつ高速に実行でき、Re:Earthのデータにアクセスできますが、WebブラウザーがサポートするAPIとUIを使用することはできません。
iframeはwebブラウザーでサポートされているAPIを使用することができ、UIをHTMLで表示できますが、Re:Earthのデータに直接アクセスすることができず、非同期で実行されます。

WebAssembly部分とiframeは [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)を介して通信を行うことができます。  
Re:Earthから必要なデータのみをifram送信し、iframe内のHTMLを書き換え、サーバー情報を取得することができます。  
また、取得した情報をWebAssembly部分に渡すこともできます。

## WebAssembly

これは、プラグインが最初にロードされたときに実行されるエントリーポイントであり、Re:Earthと同じスレッドで同期的に実行されます。


次のことが可能です:

- Re:Earthのシーンデータを取得する
- Re:EarthプラグインAPIを呼び出す
- Re:Earthのシーンを部分的に変更 (現在、レイヤーのプロパティの変更がサポートされています)
- シーンからイベントを取得する
- `reearth.ui.postMessage` 経由でiframe側にデータを送信し、`reearth.on("message", () => {})` 経由でiframe側からデータを受信します。

次のことはできません:

- HTMLと任意のUIを直接レンダリングする (iframeを使用する必要があります)
- webブラウザーが提供するほとんどのAPIを使用する(`console.log`など一部のAPIのみ利用可能)
- HTTP経由で外部のサーバーと通信する

ヒント：JavaScriptはQuickJSで実行されるため、ウェブブラウザを問わずECMAScript 2020に対応しています。

## iframe

次のことが可能です:

- 通常のHTMLページと同じように、HTMLをレンダリングする
- 通常のHTMLページと同じように、webブラウザーによって提供されているAPIを使用する(window, DOM API,  ...)
- CORSが適切に構成されている外部サーバーと HTTP (fetch または XHRRequest) 経由で通信する (外部サーバーからの応答ヘッダーには`Access-Control-Allow-Origin: *`が必要です)  
- `parent.postMessage` と `window.addEventListener("message", () => {})`を通してWebAssemblyと通信する

次のことはできません:

- `Access-Control-Allow-Origin: *` なしで外部サーバーと通信する(iframeはサンドボックス化されており、そのオリジンはnullであるため)
- Re:Earth バックエンドと直接通信する
- Re:Earth データを直接取得して変更する (WebAssembly 側からの `postMessage` が必要です)。
- ローカルストレージを使用する(iframeはサンドボックス化されており、そのオリジンはnullであるため)

## まとめ

|||||
|---|---|---|
|Name|WebAssembly side|IFrame side|
|Sandboxed| ✅ | ✅ |
|Entrypoint (first executed)| ✅ | ❌ |
|Access to Re:Earth plugin API| ✅ | ❌ |
|Render HTML| ❌ | ✅ |
|Use web API (DOM API, Canvas API, AJAX... without local storage)| ❌ | ✅ |
|Communicate with the other side via "postMessage"| ✅ | ✅ |


## 制約

- `postMessage` はJSONとしてシリアル化できないオブジェクトを送信できません。これには、ArrayBuffer、Blob、および通常の `postMessage` で送信できるその他のオブジェクトが含まれます。 現時点では、バイナリを送信するにはbase64などでエンコードする必要があります。今後、送受信できるオブジェクト数の拡大を検討しています。
- `localStorage` はWebAssembly, iframeのどちらでもサポートされていません。現時点では、プラグインが外部サーバーを使用する以外にデータを保存する方法はありませんが、プラグイン専用のストレージを提供することを検討しています。
- インストールできるプラグインは10MB以下のzipファイルに限定されます。
- 画像などのJavaScript以外のファイルは、パッケージ化してプラグインとして使用することはできません。静的アセットファイル (html、画像、css など) は、文字列またはその他の表現としてJavaScriptコードに埋め込むか、Web上で公開されている任意のサーバーでホストし、URLを介して参照する必要があります。

---
title: チュートリアル
sidebar_position: 3
---

ここでは、簡単なプラグインを一緒に開発することで、プラグイン開発の一連の手順を説明します。


## 1. プロジェクトディレクトリを作成する

任意の場所に、ディレクトリを作成してください。ここにプラグインコードを配置します。  

ディレクトリの名前は、何でも大丈夫です。ここでは、`test-plugin`と名付けます。

## 2. プラグインのマニフェストを記述する

マニフェストは、作成しようとしているプラグインのメタデータです。  
つまり、プラグインのIDと名前、プラグインが拡張する機能、およびユーザーに提供される構成アイテムです。

`reearth.yml` という名前でファイルを作成し、以下のように記述します：


```yaml title="reearth.yml"
id: test-plugin
name: Test plugin
version: 1.0.0
extensions:
  - id: test-widget
    type: widget
    name: Test
```
:::caution
- ``id`` は大文字では設定できません
- 改行やスペースなどを間違えのないように注意してください
:::

## 3. 最初の拡張機能を実装する

実はプラグインは、拡張機能と呼ばれる単位のコレクションの集まりです。  
プラグインは、一つの拡張機能だけでなく、複数の拡張機能を持つことができます。  


それでは、最初に拡張機能を実装してみましょう。
先ほどのステップのマニュフェストに説明したように、これから実装する拡張機能のIDは`test-widget`です。
このIDに拡張子`.js` を付け足して`test-widget.js`という名前のファイルを作成します。

:::caution
このファイル名を間違えると、プラグインは動作しませんのでご注意ください。拡張子以外のファイル名は、IDと完全に一致必要があります。
:::

次にJSファイルを編集します：

```js title="test-widget.js"
console.log("Hello world");

reearth.ui.show(`<h1 style="color:red;background:black">Hello world</h1>`);
```

これで、簡単なプラグインが完成しました！
ファイル構造は次のとおりです：

```console title="file structure"
test-plugin
│   reearth.yml
│   test-widget.js    
```

## 4. プラグインを圧縮する

それでは、プラグインをRe:Earthにインストールしてみましょう！  
その前に、インストールするするためにプラグインを圧縮しましょう。  
この記事の中では、zipファイルに圧縮しアップロード方法を説明します。  

1番最初の手順で作成したフォルダを選択し、それをzipファイルへと圧縮します。  
zipファイルへの圧縮方法は、OSによって異なります。  
MacOSの場合：Finderでフォルダを右クリック→「~を圧縮」を選択  
Windowの場合：エクスプローラー内でフォルダを右クリック→「送る」を選択し、「圧縮 (zip形式) フォルダー」を選択

ここでのzipファイルのフォルダ名は、これからの手順に何にも影響はないので、気にしないで大丈夫です。

## 5. プラグインをアップロードする

Re:Earthにログインし、プロジェクトの設定ページを開きます。(まだプロジェクトを作成していない場合は、作成してください)  
ダッシュボードのこのボタンから、プロジェクトの設定ページを開くことができます：  

![tutorial_1](./img/tutorial_1.png)

または、編集画面の一番上のメニューにある「プロジェクト設定」からも開くことができます：  

![tutorial_2](./img/tutorial_2.png)


そして、左側のメニューにある「プラグイン」を選択：  
そうすると、次の画面が表示されます  

![tutorial_3](./img/tutorial_3.png)

次は、「PCからZipファイルをアップロード」を選択し、前の手順で生成したzipファイルを選択します。  

少し待ってから「プラグインがインストールされました。」というメッセージが表示されれば、プラグインは正常にインストールされています！

![tutorial_4](./img/tutorial_4.png)


もしここでエラーメッセージが表示された場合は、次のいずれかの理由が考えられます：

- `reearth.yml`のフォーマットに誤りがあります。もう一度`reearth.yml`を確認してください。
- 同じIDを持ったプラグインが既にインストールされている。アンインストールして、もう一度インストールしてみてください。
- zipファイルの中に`reearth.yml`が存在していない、もしくはルートに複数のディレクトリがある。`reearth.yml` を含む 1 つのフォルダー、もしくは`reearth.yml`を含む複数のファイルのグループを圧縮してください。？？？？？
- The zip file does not contain `reearth.yml`, or there are multiple directories in the root. Compress a single folder containing `reearth.yml`, or a group of multiple files containing `reearth.yml`.
- zipファイルを生成するアプリケーションによっては、不正な形式のzipファイルが出力される場合があります。他の方法でファイルを圧縮してみてください。

## 6. プラグインによって拡張されたウィジェットの使用

編集画面に戻り、左パネル内のウィジェットを開いてください。
そうすると、実装した新たなウィジェットが表示されます。それを選択してください。

![tutorial_7](./img/tutorial_7.png)

画面上に、ウィジェットが表示されます！

![tutorial_5](./img/tutorial_5.png)

ウィジェットが表示されない場合は、JavaScriptのファイル名が間違っている、もしくはJavaScriptが正確に実装されていない可能性があります。
エラーが起こったら場合、webブラウザーの開発者ツール内コンソールで確認することができます。

## ヒント1: プラグインをアンインストールする

ここでは、プラグインのアンインストール方法について説明します。

プラグイン設定ページ（手順5と同様のページ）で、プラグインのボタンをクリックします。
In the plugin settings page (same as step 5), you can click a button in the plugin item.

![tutorial_6](./img/tutorial_6.png)

プラグインの名前が表示されているカラムの右側にあるボタンをクリックすると、プラグインをアンインストールすることができます。

削除するプラグインによって追加されていた、ウィジェットやブロックはシーンから削除されます。  
また、このプラグインを使用したプロジェクトを公開していた場合は、公開プロジェクトでプラグインは機能しなくなります。  



In the development of plug-ins, you will probably install the plug-in to check its operation after you proceed with the implementation, and then install it again after the next implementation. At that time, you will need to uninstall the plug-in each time.

## Tip 2: Install your plugin from GitHub

You can also install the plugin from the GitHub repository. Currently, only public repositories are supported. In the plugin settings page (same as step 5), you can click "Public GitHub repository" and then enter the GitHub repository URL.

This is acceptable:

- `https://github.com/USER/REPO` (`main` branch will be used)
- `https://github.com/USER/REPO.git` (`main` branch will be used)
- `https://github.com/USER/REPO/tree/BRANCH_NAME` (specify a branch)
- `https://github.com/USER/REPO/archive/XXX.zip` (specify an archive by branch name)
- `https://github.com/USER/REPO/archive/refs/head/XXX.zip` (specify an archive by ref)
- `https://github.com/USER/REPO/archive/refs/tags/XXX.zip` (specify an archive by tag)

This is not acceptable:

- `ssh://git@github.com:USER/REPO.git` (use `https://~` instead)

## Next step

So far, you have learned how to develop plug-ins. Refer to the more advanced topics to develop your own plug-ins.

- Recipes: Describes how to implement plug-ins for various common use cases
- How plugins work: Gain a better understanding of how plugins work internally
- Manifest reference: Describes all the fields in plugin manifest
- API reference: Learn about all available features in plugins
- Future plans: Plugin API is still in its infancy. Check back in the future to see what additional features are being considered.

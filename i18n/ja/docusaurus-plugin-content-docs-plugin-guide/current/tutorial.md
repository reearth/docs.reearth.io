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

Now let's install your plugin into Re:Earth. Before we do that, let's pack the plugins so that we can install them. In this article, I will explain how to compress them into a zip file and upload it.

Select the folder you created in the very first step and compress it into a zip file. The way to do this depends on your operating system; for MacOS, right-click on the folder in finder and select "Compress ~" to generate the zip file; for Windows, right-click on the folder in explorer and select "Send to" and then select "Compress Compressed (zipped) folder".

By the way, don't worry about the name of the zip file as it won't affect the subsequent steps.

## 5. Upload your plugin

Upload the plugin. Log in to your Re:Earth and open the project settings page. (If you haven't created a project yet, go ahead and do so.)

You can open the project settings page from this button in dashboard page:

![tutorial_1](./img/tutorial_1.png)

Or, "Project settings" item in the top menu in the editor screen:

![tutorial_2](./img/tutorial_2.png)

Then, select "Plugins" in the left menu:

Then you'll see this screen:

![tutorial_3](./img/tutorial_3.png)

Next, select "Zip file from PC" and select your zip file you generated in the previous step.

If you see a success message after a short wait, the plugin has been successfully installed.

![tutorial_4](./img/tutorial_4.png)

If you get an error here, it could be due to one of the following reasons:

- There is an error in the format of `reearth.yml` . Review `reearth.yml` again.
- A plugin with the same ID has already been installed. Uninstall it and run it again.
- The zip file does not contain `reearth.yml`, or there are multiple directories in the root. Compress a single folder containing `reearth.yml`, or a group of multiple files containing `reearth.yml`.
- Depending on the application used to generate the zip file, it may output a malformed zip file. Try compressing the file by other means.

## 6. Using widgets extended by your plugin

Go back the editor screen and open widgets on the left panel. Then you'll see a new widget that you implemented. Select it, and then enable it by clicking "Enable" switch on the right panel.

![tutorial_7](./img/tutorial_7.png)

Then you can see your first widget!

![tutorial_5](./img/tutorial_5.png)

If it does not show up, the JavaScript file may be misnamed, or the JavaScript may not be implemented correctly, causing an error. If an error occurs, you can check it in the console of your web browser's developer tools.

## Tip 1: Uninstall your plugin

Although you have created this plugin, you should also check how to uninstall it.

In the plugin settings page (same as step 5), you can click a button in the plugin item.

![tutorial_6](./img/tutorial_6.png)

You can uninstall the plugin by clicking the button to the right of the column where the name of the plugin appears. Note that any widgets or blocks that have been added by this plugin will be removed from the scene, and if you have already published a scene using this plugin, the widgets and blocks will no longer work in the published scene.

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

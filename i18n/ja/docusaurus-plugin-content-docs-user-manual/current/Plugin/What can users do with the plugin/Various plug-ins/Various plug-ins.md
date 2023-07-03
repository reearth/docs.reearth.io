---
title: いろいろなプラグイン
sidebar_position: 1
---

# いろいろなプラグイン

Re:Earthプラグインでは、ウィジェットやインフォボックスブロックを表示している「iframe」と、Re:Earthの動作環境である「WebAssembly」を組み合わせて、お好きな機能を開発することができます。

## サンプル

- **開始地点から終了地点までの距離を測定する**
    - [https://test.reearth.dev/published.html?alias=cbbehfijbh](https://test.reearth.dev/published.html?alias=cbbehfijbh)

### 操作方法

![Group 130.png](./img/Group_130.png)

![Group 131.png](./img/Group_131.png)

![Group 132.png](./img/Group_132.png)

![Group 133.png](./img/Group_133.png)

1. 左上の定規のアイコンをクリックします。
2. 測定したい地点まで地球儀をズームし、スタートボタンをクリックします。
3. 測定したい地点の始まりをクリックすると点が落とされます。
4. 測定したい地点の終わりをクリックすると再び点が落とされます。
5. フィニッシュボタンをクリックすると、始まりから終りの地点の直線距離が測定されます。
6. 再び測定し直したい場合、クリアボタンをクリックするとまた0からスタートします。

- **GPSで現在地を取得して、マップをその場所に移動させる**
    - [https://myposition-sample.reearth.io/](https://myposition-sample.reearth.io/)

### 操作方法

![Group 134.png](./img/Group_134.png)

1. Get locationをクリックします。
2. 位置情報を読み取り、人のアイコンが取得した位置まで移動します。

- **Twitter,Facebookへのシェアボタンを設置する**
    - [https://aehiafdjia.reearth.io/](https://aehiafdjia.reearth.io/)

### 操作方法

![Group 135.png](./img/Group_135.png)

![Group 136.png](./img/Group_136.png)

![Group 141.png](./img/Group_141.png)

![Group 142.png](./img/Group_142.png)

![Group 139.png](./img/Group_139.png)

![Group 140.png](./img/Group_140.png)

1. シェアするSNSを左上のTwitterかFacebookを選びます。（今回はTwitterを選択しています。）
2. Twitterにログインします。
3. お持ちのアカウントを入力します。
4. パスワードを入力します。
5. ログインボタンをクリックします。
6. 投稿される内容を確認し、「つぶやく」をクリックします。
7. Re:EarthのシェアボタンをTwitterに設置することができます。

- **インフォボックスにTwiiterを連携する**
    - [https://peace4ukraine.reearth.io/](https://peace4ukraine.reearth.io/)

![Group 143.png](./img/Group_143.png)

それぞれ地球儀上にあるアイコンを選択すると、その関連するTwitterがインフォボックスの中に表示されます。

他にも、以下のような機能を持ったプラグインを開発することが可能です。

- 外部API配信データの読み込み
- リアルタイムデータの可視化
- Re:Earthの特定の操作の自動化
- ウィジェットに入力した値を使ってRe:Earthの操作を行う
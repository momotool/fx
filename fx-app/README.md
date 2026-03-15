# FX口座比較・スキャルピング（React + Tailwind）

わわわIT用語辞典風の「スキャルピング解説」と「FX口座比較」セクションです。桃先生のイラスト＋吹き出し付きで、超初心者向けの口座比較カード（DMM FX・TOSSY・JFX・ヒロセ通商）を表示します。

## 開発

```bash
cd fx-app
npm install
npm run dev
```

## ビルド（本番）

```bash
npm run build
```

- `dist/brokers.js` と `dist/brokers.css` が出力されます。
- これらを `fx/assets/` にコピーすると、`fx/index.html` の口座セクション（#brokers）に自動で表示されます（既に埋め込み済み）。

```bash
# 例: ビルド後にコピー
cp dist/brokers.js dist/brokers.css ../fx/assets/
```

## 単体ページとして見る場合

`npm run preview` で `dist/index.html` をプレビューできます。

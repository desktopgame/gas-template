# gas-template
GAS用のtypescript,babel,webpack設定をまとめたもの。  
`.clasp.json`と`appsscript.json`は含まれていませんが、それぞれ以下の場所に配置される想定です。
* gas-template/.clasp.json
* gas-template/src/appsscript.json

## セットアップ
````
npm install
clasp clone プロジェクトID
mv appsscript.json src/appsscript.json
````

また、`.clasp.json`に以下の属性を追加する。
````
"rootDir": "dist"
````

## ビルド
````
npm run build
````

## デプロイ
````
cp src/appsscript.json dist/appsscript.json && clasp push
````
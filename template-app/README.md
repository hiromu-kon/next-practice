# friends-frontend

## 構築手順

Dockerを使用した場合、ローカルのnode_modulesが空になりVSCode上でエラーが発生する。

そのため、下記二つの方法のどちらかで構築する。
- Dev Containersを使用し、 Dockerコンテナ内で作業をする方法
- ローカルでNodeのバージョンを合わせる方法

### Dev Containersを使用し、 Dockerコンテナ内で作業をする方法

1. ソースをclone後、下記コマンドを実行する。
```bash
docker-compose build
```

2. 拡張機能からDev Containersをインストールする。

<img width="500" alt="スクリーンショット 2022-10-13 15 03 42" src="https://user-images.githubusercontent.com/74192993/195516830-39c3b5cc-4211-428f-81f1-40ead8d954d9.png">

3. VSCodeの一番左下(下記画像部分)をクリックし、`Open Folder in Cotainers`を選択する。(2回目以降の起動時は`Reopen in Containers`でも可)

<img width="500" alt="スクリーンショット 2022-10-13 15 05 43" src="https://user-images.githubusercontent.com/74192993/195516998-9e6b912e-5169-4544-9665-7050ba445f3a.png">

4. Projectのディレクトリを選択し、openをクリックする。

<img width="500" alt="スクリーンショット 2022-10-13 14 57 22" src="https://user-images.githubusercontent.com/74192993/195517238-7020456c-21ce-42a1-b8ef-692160493905.png">

VSCodeにDockerコンテナ内のディレクトリが展開されるため、
以降はコンテナ内でコマンド実行＆開発を行う。

5. コンテナの起動確認

`localhost:3000`にアクセスするとNext.jsのページが、

`localhost:6006`にアクセスするとStorybookのページが表示されていることを確認する。

6. コンテナの停止

開始時と同様にVSCodeの左下をクリックし、`Close Remote Connections`を選択する。

その後、VSCodeを閉じることで同時にコンテナも停止する。

### ローカルでNodeのバージョンを合わせる方法

1. ソースをclone後、下記コマンドを実行する。
```bash
docker-compose build
docker-compose up -d
```

2. ローカル環境とDocker環境でバージョン差異が発生してしまうため、ローカル環境のnodeを下記バージョンに設定する。
```
$ node -v

v17.6.0
```

3. ローカルでnpm installを実行する
```bash
npm install
```

4. コンテナの起動確認

`localhost:3000`にアクセスするとNext.jsのページが、

`localhost:6006`にアクセスするとStorybookのページが表示されていることを確認する。


## コンポーネントの作成方法
コンテナ内で下記コマンドを実行する。

```bash
npx hygen generator components
```


手順通りに進めていき、components配下にコンポーネントのディレクトリが作成されていれば成功。

ディレクトリ内には下記4ファイルが作成される。
- XXX.stories.tsx
- XXX.tsx
- index.ts
- styles.module.scss

## Storybookファイルの修正
Storybookのファイルがコマンドで自動生成されるが、

コンポーネントにpropsを追加した場合、手動でpropsを追加する必要がある。

例）
- Card.tsx
```tsx
type Props = {
  heading: string;
  body: string;
}

export const Card = (props: Props) => {
  const { heading, body } = props;
  // ...略
}
```

- Card.stories.tsx

上記ファイルのpropsに合わせてStorybookのargsを変更する。
```tsx
// ...略
Primary.args = {
  heading: 'test heading',
  body: 'test body',
};
```

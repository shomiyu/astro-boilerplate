# Astro Boilerplate

- microCMS
- Reset CSS (ress)
- Sass
- Vue.js
- Google Fonts
- 日時フォーマット（date-fns-tz）

## 🚀 Setup

モジュールインストール

```zsh
$ npm install
```

## 📚 microCMS との接続

`.env.template`をコピーして`.env`を作成し、サービスドメインとAPIキーを入れる。

## 🍡 Fonts Install

フォントのインストールは [Fontsource](https://fontsource.org/)から npm でインストールして使用する。

フォントをインストール

```bash
# Noto Sans JP
$ npm install @fontsource-variable/noto-sans-jp

# Noto Serif JP
$ npm install @fontsource/noto-serif-jp
```

Layout ファイルで import

```jsx
// Supports weights 100-900
import "@fontsource-variable/noto-sans-jp";
```

CSS で読み込み

```css
body {
  font-family: "Noto Sans JP Variable", sans-serif;
}
```

## ⏰ how to use 'date-fns-tz'

### import

```js
import { formatInTimeZone } from "date-fns-tz";
```

### use in Tag

```jsx
<time
  datetime={formatInTimeZone(
    new Date(DATE),
    "Asia/Tokyo",
    "yyyy-MM-dd HH:mm:ssXXX",
  )}
>
  {formatInTimeZone(new Date(DATE), "Asia/Tokyo", "yyyy.MM.dd")}
</time>
```

## 🍖 Files

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

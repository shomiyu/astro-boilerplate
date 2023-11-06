# Astro Boilerplate

## 🚀 Setup

> モジュールインストール

```zsh
$ npm install
```

## 📚 microCMS との接続

## 🍡 Fonts Install

フォントのインストールは [Fontsource](https://fontsource.org/)から npm でインストールして使用する。

> フォントをインストール

```bash
# Noto Sans JP
$ npm install @fontsource-variable/noto-sans-jp

# Noto Serif JP
$ npm install @fontsource/noto-serif-jp
```

> Layout ファイルで import

```jsx
// Supports weights 100-900
import "@fontsource-variable/noto-sans-jp";
```

> CSS で読み込み

```css
body {
  font-family: "Noto Sans JP Variable", sans-serif;
}
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

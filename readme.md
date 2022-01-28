<div align="center">
  <h1><a href="https://icns.ml" target="_blank" rel="noopener noreferrer"><img src="./.github/assets/logo.svg" alt="icns.ml" height="45" /></a></h1>
  <h3>
    <span><a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer">2.1k <small class="caps">simpleicons</small></a></span> &middot; 
    <span>dynamic color <small class="caps">API</small></span> &middot; 
    <span><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel edge <small class="caps">CDN</small></a></span>
  </h3>
</div>

---

## Schema

There are two different schemas that [icns.ml] (and [icns.cf]) is designed to work with:

### Linear / flat: color is optional

<pre>
https://icns.{ml,cf} / <strong>slug</strong>* <em>— color</em> . <em><strong>type</strong></em>†
</pre>

> **Note**: `slug` and `color` must be separated by a **hyphen** (dash).

### Nested "folders": color is required

<pre>
https://icns.{ml,cf} / <em>color</em> / <strong>slug</strong>* . <em><strong>type</strong></em>†
</pre>

### Syntax and Compatibility

|       **Parameter** | **Usage**    | **Syntax**                                              | **More Information**                        |
|--------------------:|:-------------|:--------------------------------------------------------|:--------------------------------------------|
| <kbd>`slug`\*</kbd> | **required** | Alphanumeric; No hyphens, punctuation, etc.             | [**Naming Convention ↗**][naming]           |
|  <kbd>`color`</kbd> | **optional** | CSS colors; Hexadecimal (3/4/6/8), names, rgb, hsl, ... | [**Dynamic Color API**](#dynamic-color-api) |
|  <kbd>`type`†</kbd> | **advised**  | **`.svg`** (raster support for `.png` coming soon)      | `--`                                        |

> `.svg` is the fallback/implicit filetype (e.g. https://icns.ml/google -> https://icns.ml/google.svg)

---  

## Examples

|   **Icon**    | **Color**           | **Nested**                                       | **Linear / Flat**                                |
|:-------------:|:--------------------|:-------------------------------------------------|:-------------------------------------------------|
|   ![Svelte]   | <kbd>default</kbd>  | <code>https://icns.ml/default/svelte.svg</code>  | <code>https://icns.ml/svelte.svg</code>          |
| ![VercelSvg]  | <kbd>rgb(0,200,200)</kbd> | <code>https://icns.ml/rgb(0,200,200)/vercel.svg</code> | <code>https://icns.ml/vercel-rgb(0,200,200).svg</code> |
|    ![BMW]     | <kbd>seagreen</kbd> | <code>https://icns.ml/8ddddf/bmw.svg</code>      | <code>https://icns.ml/bmw-8ddddf.svg</code>      |
|  ![Twitter]   | <kbd>#223344</kbd>  | <code>https://icns.ml/234/twitter.svg</code>     | <code>https://icns.ml/twitter-234.svg</code>     |
| ![McDonalds]  | <kbd>#f009</kbd>    | <code>https://icns.ml/f009/mcdonalds.svg</code>  | <code>https://icns.ml/mcdonalds-f009.svg</code>  |
|   ![GitHub]   | <kbd>orange</kbd>   | <code>https://icns.ml/orange/github.svg</code>   | <code>https://icns.ml/github-orange.svg</code>   |
|  ![Unsplash]  | <kbd>#8cc055</kbd>  | <code>https://icns.ml/8cc055/unsplash.svg</code> | <code>https://icns.ml/unsplash-8cc055.svg</code> |
| ![TypeScript] | <kbd>gray</kbd>     | <code>https://icns.ml/gray/typescript.svg</code> | <code>https://icns.ml/typescript-gray.svg</code> |

[Svelte]: https://icns.ml/default/svelte.svg
[BMW]: https://icns.ml/8ddddf/bmw.svg
[Twitter]: https://icns.ml/234/twitter.svg
[TypeScript]: https://icns.ml/gray/typescript.svg
[GitHub]: https://icns.ml/orange/github.svg
[Unsplash]: https://icns.ml/8cc055/unsplash.svg   
[McDonalds]: https://icns.ml/f009/mcdonalds.svg

---  

## Dynamic Color API

The `color` parameter in the accepted URL schemas (both nested and linear/flat) is interpreted using [`tinycolor2`][tinycolor2].

With the goal of maximum compatibility, I've attempted to make the API as forgiving as possible:

- [x] Hex colors are stripped of the `#` symbol
- [x] Reversed **color** and **slug** params will ***usually*** still resolve correctly...
- [x] Default **color** is the icon's brand color [specified by the `simple-icons` package][SimpleIcons]
- [x] CSS named colors (such as `slategray` or `rebeccapurple`) are supported
- [x] RGB/RGBA colors are supported, but experimental
- [x] HSL/HSV colors are supported, but experimental
- [x] Parses **color** with [`tinycolor2.toHex8String()`][tinycolor2], into a valid `hex8` (or `#00000000`)

### What is `Hex8`?

You may be used to seeing hexadecimal colors only in 3 or 6 digit formats. The extra digit in `Hex4` and the 2 extra digits in `Hex8` are an **alpha channel**, which allows users to control the **opacity** levels of the color in question.

> [icns.ml] supports **Hex 3, 4, 6, and 8**, [as defined in the MDN Web Docs][MDN-colors], meaning it **supports transparency on all 2,100+ [SimpleIcons]**!

---  

## Contributing

[![Open in Gitpod]](https://gitpod.io/#https://github.com/nberlette/icns)

1. ### Clone this repository

```bash
# GitHub CLI (https://cli.github.com)
gh repo clone nberlette/icns

# ...or with standard Git
git clone https://github.com/nberlette/icns.git
```

2. ### Create a new branch

```bash
git checkout -b feat/feature-name
```

3. ### Install dependencies

```bash
pnpm install

yarn install

npm install
```

4. ### Submit a Pull Request

```bash
gh pr create --title "My new feature for icns.ml" 
```  

---  

## Bugs and Feature Requests

Found a bug? Please [open an issue][issues] on the [repository].

---  

## License

[MIT] © [Nicholas Berlette] • Icons copyright [SimpleIcons] • deployed with [Vercel]


[repository]: https://github.com/nberlette/icns
[issues]: https://github.com/nberlette/icns/issues
[readme]: https://github.com/nberlette/icns#readme
[icns.ml]: https://icns.ml
[icns.cf]: https://icns.cf
[Nicholas Berlette]: https://github.com/nberlette
[MIT]: https://icns.mit-license.org
[naming]: https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
[SimpleRepo]: https://github.com/simple-icons/simple-icons
[SimpleIcons]: https://simpleicons.org
[tinycolor2]: https://npm.im/tinycolor2
[Vercel]: https://vercel.com
[SimpleIconsSvg]: https://icns.ml/simpleicons.svg
[Open in Gitpod]: https://gitpod.io/button/open-in-gitpod.svg
[gitpod-url]: https://gitpod.io/#https://github.com/nberlette/icns
[MDN-colors]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

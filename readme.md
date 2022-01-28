<div align="center">
  <h1><a href="https://icns.ml" target="_blank" rel="noopener noreferrer"><img src="./.github/assets/logo.svg" alt="icns.ml" height="45" /></a></h1>
  <h3>
    <span><a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer">2.1k <small class="caps">simpleicons</small></a></span> &middot; 
    <span>dynamic color <small class="caps">API</small></span> &middot; 
    <span><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel edge <small class="caps">CDN</small></a></span>
  </h3>
</div>

---  

<br>

## Schema

<pre>
icns.ml / <strong>slug*</strong> <em>— color</em> . <em><strong>type</strong></em>†

icns.ml / <em>color</em> / <strong>slug*</strong> . <em><strong>type</strong></em>†
</pre>

|       **Parameter** | **Usage**    | **Syntax**                                                                                                        | **Examples**                 |
|--------------------:|:-------------|:------------------------------------------------------------------------------------------------------------------|:-----------------------------|
| <kbd>`slug`\*</kbd> | **required** | Alphanumeric only; see: [naming convention ↗](https://github.com/simple-icons/simple-icons/blog/develop/slugs.md) | `css3`, `nextdotjs`, `500px` |
|  <kbd>`color`</kbd> | **optional** | Valid CSS colors: hex (3/4/6/8), name, rgb, hsl, ...                                                              | `fff`, `black`, `rgb(0,0,0)` |
|  <kbd>`type`†</kbd> | **advised**  | **`.svg`** (**`.png`** raster support coming soon)                                                                | `.svg`, `.png`               |

<br><br>

## Examples

|   **Icon**    | **Color**           | **URL (nested)**                                 | **URL (flat)**                                   |
|:-------------:|:--------------------|:-------------------------------------------------|:-------------------------------------------------|
|   ![Svelte]   | <kbd>default</kbd>  | <code>https://icns.ml/default/svelte.svg</code>  | <code>https://icns.ml/svelte.svg</code>          |
|    ![BMW]     | <kbd>seagreen</kbd> | <code>https://icns.ml/seagreen/bmw.svg</code>    | <code>https://icns.ml/bmw-seagreen.svg</code>    |
|  ![Twitter]   | <kbd>#223344</kbd>  | <code>https://icns.ml/234/twitter.svg</code>     | <code>https://icns.ml/twitter-234.svg</code>     |
| ![TypeScript] | <kbd>gray</kbd>     | <code>https://icns.ml/gray/typescript.svg</code> | <code>https://icns.ml/typescript-gray.svg</code> |
|   ![GitHub]   | <kbd>orange</kbd>   | <code>https://icns.ml/orange/github.svg</code>   | <code>https://icns.ml/github-orange.svg</code>   |
|  ![Unsplash]  | <kbd>#8cc055</kbd>  | <code>https://icns.ml/8cc055/unsplash.svg</code> | <code>https://icns.ml/unsplash-8cc055.svg</code> |

[Svelte]: https://icns.ml/default/svelte.svg
[BMW]: https://icns.ml/seagreen/bmw.svg
[Twitter]: https://icns.ml/234/twitter.svg
[TypeScript]: https://icns.ml/gray/typescript.svg
[GitHub]: https://icns.ml/orange/github.svg
[Unsplash]: https://icns.ml/8cc055/unsplash.svg   

<br><br>

## ⛑️   Contributing

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

<br>

## 🐛   Bugs and feature requests

Found a bug? Please [open an issue][issues] on the [repository].

<br>

## ⚖️   License

[MIT] © [Nicholas Berlette] • icons by [SimpleIcons] • deployed with [Vercel]


[repository]: https://github.com/nberlette/icns
[issues]: https://github.com/nberlette/icns/issues
[readme]: https://github.com/nberlette/icns#readme
[icns.ml]: https://icns.ml
[icns.cf]: https://icns.cf
[Nicholas Berlette]: https://github.com/nberlette
[MIT]: https://icns.mit-license.org
[SimpleRepo]: https://github.com/simple-icons/simple-icons
[SimpleIcons]: https://simpleicons.org
[Vercel]: https://vercel.com
[SimpleIconsSvg]: https://icns.ml/simpleicons.svg
[Open in Gitpod]: https://gitpod.io/button/open-in-gitpod.svg
[gitpod-url]: https://gitpod.io/#https://github.com/nberlette/icns

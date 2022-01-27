<div align="center">
  <!-- <h1><img src="https://icns.ml/simpleicons.svg" alt="" width="24"> <code>icns.ml</code></h1> -->

  <h1><a href="https://icns.ml" target="_blank" rel="noopener noreferrer"><img src="./.github/assets/logo.svg" alt="icns.ml" height="45" /></a></h1>

  ### **2100+ [SimpleIcons]** • **Dynamic Colors API** • **[Vercel]'s Edge CDN**

</div>

---  

<br>

## Schema

<pre>
1.  icns.ml / <strong>slug*</strong> <em>— color</em> . <em><strong>type</strong></em>†

2.  icns.ml / <em>color</em> / <strong>slug*</strong> . <em><strong>type</strong></em>†
</pre>

|  **Param**         | **Usage**    | **Syntax Info**                                             | **Examples**               |
| -----------------: | :----------- | :---------------------------------------------------------- | :------------------------- |
| <kbd>**`slug`***</kbd> | **required** | Alphanumeric. **See: [naming conventions]**                 | `nextdotjs`, `500px`       |
| <kbd>`color`</kbd> | **optional** | CSS valid: **hex** (3/4/6/8), **name**, **rgb**, ...        | `fff`, `red`, `rgb(0,0,0)` |
| <kbd>**`type`**†</kbd> | **advised**  | **`.svg`** or **`.png`** *(raster support coming soon)*     | `.svg`, `.png`             |

<br><br>

## Examples

| **Icon** | **Color** | **URL** |
| :------: | :-------- | :------ |
| ![Svelte] | <kbd><code>default</code></kbd> | <code>https://icns.ml/svelte.svg</code> |
| ![BMW] | <kbd><code>default</code></kbd> | <code>https://icns.ml/bmw.svg</code> |
| ![Twitter] | <kbd><code>purple</code></kbd> | <code>https://icns.ml/twitter-purple.svg</code> |
| ![TypeScript] | <kbd><code>gray</code></kbd> | <code>https://icns.ml/gray/typescript.svg</code> |
| ![GitHub] | <kbd><code>orange</code></kbd> | <code>https://icns.ml/github-orange.svg</code> |
| ![Unsplash] | <kbd><code>#8cc055</code></kbd> | <code>https://icns.ml/8cc055/unsplash.svg</code> |

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
[naming conventions]: https://github.com/simple-icons/simple-icons#readme
[Svelte]: https://icns.ml/svelte.svg
[BMW]: https://icns.ml/bmw.svg
[Twitter]: https://icns.ml/purple/twitter.svg
[TypeScript]: https://icns.ml/gray/typescript.svg
[GitHub]: https://icns.ml/github-orange.svg
[Unsplash]: https://icns.ml/8cc055/unsplash.svg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
[SimpleIconsSvg]: https://icns.ml/simpleicons.svg
[Open in Gitpod]: https://gitpod.io/button/open-in-gitpod.svg
[gitpod-url]: https://gitpod.io/#https://github.com/nberlette/icns

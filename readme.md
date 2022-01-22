<div align="center">
  <h1><img src="https://icns.ml/simpleicons.svg" width="32" alt="" /> <code>icns.ml</code></h1>
  <p><a href="https://simpleicons.org" target="_blank" rel="noreferrer noopener">SimpleIcons</a> API + Vercel's Edge CDN.</p>
</div>
<br />

## Schema

```
  https://icns.ml/ :name [-:color] [.:type]
  
  https://icns.ml/ :color / :name  [.:type]
  
```

- **`:name`**   · `required` · alphanumeric, no spaces, dots, or dashes.
- **`:color`** · default is brand primary color
- **`:type`**   · default is `svg`. Using `png` will return a rasterized version of the icon (soon).

> Given just the logo name icon is filled with brand color

---

## Examples

```
# filled with Audi's brand color (red)
https://icns.ml/audi.svg

# Twitter logo, filled with white
https://icns.ml/twitter-white.svg
https://icns.ml/fff/twitter.svg

# no provided type = defaults to .svg
https://icns.ml/adobe
```

---

<div align=center>

© 2022 [Nicholas Berlette](https://github.com/nberlette/icns.ml) ~ [MIT](https://mit-license.org) • not affiliated with [Simple Icons](https://simpleicons.org)

</div>

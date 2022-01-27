import type { Response, Request } from './utils';
import icons, { SimpleIcon } from 'simple-icons';
import { marked } from 'marked';

const markedOptions: Record<string, any> = {
  gfm: true,
  headerIds: true,
  sanitize: false,
  silent: true,
  smartLists: true,
  smartypants: true,
  xhtml: true
}

/**
 * Super hacky, I know.
 */
try {
  delete icons.Get;
} catch {}

const randomIconsCount = 10;
const randomIcons: any[] = Object
  .values(icons)
  .sort((a, b) => Math.random() > 0.5 ? -1 : 1)
  .slice(0, randomIconsCount)

const homepage: string = `
<!DOCTYPE html>
<html>
<head>
<title>icns.ml • simpleicons as a service</title>
<link rel="stylesheet" href="https://unpkg.com/@geist-ui/style/dist/style.css" />
<style type="text/css">
.markdown-body { max-width: 960px } 
body { 
	max-width: 70vw; margin: 2rem auto; 
} 
body > div {
  margin: 1em 0;
}
pre.icon-url { 
  margin-right: 2em; 
} 
pre.url {
  transition: all 0.5s ease-in;
  border: 2px solid #ddd;
}
pre.success {
  border: 2px solid var(--geist-success, green);
}
.zi-card { margin: 2rem 0 !important; }
.zi-dark {
  background: var(--accents-8) !important;
  color: var(--accents-1) !important;
  border-color: var(--accents-7) !important;
}
.footer.zi-dark, .footer.dark {
  color: var(--accents-1) !important;
}
.footer.zi-dark > a, .footer.dark > a {
  color: #fff !important;
  text-decoration: underline;
}
pre.url {
  border-radius:6px;
  border:2px solid #ccc;
  background-color:#eee;
  padding: 6px 10px;
  font-family: 'Operator Mono Lig', 'Operator Mono', 'Dank Mono', 'MonoLisa', 'Fira Code', monospace;
  font-size: 18px;
  cursor:pointer;
  width:90%;
  transition: all 0.4s ease-in;
}
pre.url.success, .success pre.url {
  border-color: var(--geist-success);
}
.github-corner:hover .octo-arm{
  animation:octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
<script type="text/javascript">
  
  function clipboardCopy (el) {
    navigator.clipboard
      .writeText(el.getAttribute('data-url'))
        .catch(console.error)
        .then(() => {
          el.firstChild.classList.toggle('success'); 
          setTimeout(() => el.firstChild.classList.toggle('success', false), 3000); 
          alert('Copied to clipboard!'); 
        });
    return false;
  }
</script>
</head>
<body>
<a href="https://github.com/nberlette/icns" class="github-corner" aria-label="View Source on GitHub"><svg width="60" height="60" viewBox="0 0 250 250" style="fill:#151513;color:#fff;position:fixed;top:0;border:0;right:0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
<div align=center>
  <h1>
    <a href="/" title="icns.ml - SimpleIcons as a Service">
      <svg xmlns="http://www.w3.org/2000/svg" class="logo" id="logo" width="300" height="66" viewBox="0 0 545 120"><style>@media (prefers-color-scheme: dark){svg.logo, svg.logo path{fill:#fff}}@media (prefers-color-scheme: light){svg.logo, svg.logo path{fill:#234}}</style><path fill="#234" d="M34 118H0V0h34Zm116-45q0 8.7-.4 14.8a67.8 67.8 0 0 1-1.3 10.6 28.2 28.2 0 0 1-2.4 7.4 27 27 0 0 1-4 5.4 21.2 21.2 0 0 1-8.2 5.2q-4.6 1.6-13.3 1.6H79.7q-9 0-14.2-1.6a22.2 22.2 0 0 1-9.3-5.7 28.2 28.2 0 0 1-5-6.8 38.5 38.5 0 0 1-3.3-9.8A97 97 0 0 1 46 79.8q-.5-8.4-.5-20.8t.5-20.8a97.2 97.2 0 0 1 2-14.4 38.6 38.6 0 0 1 3.3-9.7 28.2 28.2 0 0 1 5-6.9 20.6 20.6 0 0 1 9.2-5.6A51.5 51.5 0 0 1 79.8 0h40.1q8.8 0 13.7 1.6A21.5 21.5 0 0 1 142 7a20.1 20.1 0 0 1 4 5.5 34.8 34.8 0 0 1 2.4 7.3 62.8 62.8 0 0 1 1.3 10.3q.3 5.9.3 14h-32q-.3-8.6-.6-11.4a6.4 6.4 0 0 0-1.3-3.5 6 6 0 0 0-2.6-1.6 21.6 21.6 0 0 0-5.2-.5H91a34.1 34.1 0 0 0-5.7.4 4.7 4.7 0 0 0-2.8 1.7 6.1 6.1 0 0 0-1 1.9 18 18 0 0 0-1 4.6q-.3 3.2-.4 9T80 59.4v14.8a58.8 58.8 0 0 0 .5 8.6 17.2 17.2 0 0 0 .9 4.4 5.9 5.9 0 0 0 1 1.9 4.5 4.5 0 0 0 2.7 1.5 32.8 32.8 0 0 0 5.6.3h16.7a20.8 20.8 0 0 0 4.9-.4 5.7 5.7 0 0 0 2.6-1.4q1-1 1.4-4.1t.5-12Zm10 45V0h35v16.3q5.8-5.3 9.7-8.6a43.7 43.7 0 0 1 7.3-4.9 22.4 22.4 0 0 1 6.6-2.2A46.5 46.5 0 0 1 226 0h13.7q14.7 0 21.3 6.7a21 21 0 0 1 5.3 9.6q1.6 6 1.6 19V118h-35V40q0-6.8-2.5-9.4a8 8 0 0 0-3.2-1.9 20.8 20.8 0 0 0-6-.6H213a29.6 29.6 0 0 0-8.2 1.1 104 104 0 0 0-9.9 3.6V118Zm223.2-36.3q0 13.5-2.4 20.4t-6 10.7a15.6 15.6 0 0 1-6.8 4 38.6 38.6 0 0 1-10.5 1.2h-50.6a54 54 0 0 1-13-1.3 15.6 15.6 0 0 1-8-4.3 17.6 17.6 0 0 1-3-4 24.5 24.5 0 0 1-2-6 58.6 58.6 0 0 1-1.4-9q-.4-5.4-.6-13.4h30.6a81.4 81.4 0 0 0 .5 8.5 6.6 6.6 0 0 0 1.2 3 2.5 2.5 0 0 0 1.8 1.2 20.4 20.4 0 0 0 4.4.3h26.2a21.5 21.5 0 0 0 4.4-.3 4.2 4.2 0 0 0 2-1 4.6 4.6 0 0 0 1-2.3 37.6 37.6 0 0 0 .3-6 33.5 33.5 0 0 0-.3-5.7 5.1 5.1 0 0 0-3.7-3.7 43.6 43.6 0 0 0-5.6-.9l-38.1-4.4a46.4 46.4 0 0 1-10.7-2.4 18.3 18.3 0 0 1-6.4-4 17.8 17.8 0 0 1-3-3.8 17.2 17.2 0 0 1-1.7-5 58.3 58.3 0 0 1-1-7.5q-.3-4.3-.3-10.5 0-12.6 2.3-19.6t6-10.6a16.7 16.7 0 0 1 6.7-4A35.2 35.2 0 0 1 306.2 0h47.6A49.9 49.9 0 0 1 367 1.3a17.1 17.1 0 0 1 7.5 4 17.9 17.9 0 0 1 3 4 22 22 0 0 1 2 6.1 76.7 76.7 0 0 1 1.3 8.9q.5 5.2.7 12.7h-30.6q-.5-6-.8-7.7a8.5 8.5 0 0 0-1-2.7 3.4 3.4 0 0 0-2-1.3 20.2 20.2 0 0 0-4.3-.3h-23a27.3 27.3 0 0 0-4.2.2 3.8 3.8 0 0 0-2 1 4.5 4.5 0 0 0-1.2 2.3 27.8 27.8 0 0 0-.4 5.3 31.6 31.6 0 0 0 .4 5.4 5 5 0 0 0 1.3 2.7 11 11 0 0 0 2.5 1 33.4 33.4 0 0 0 5.2 1l39.6 4.4a44.9 44.9 0 0 1 10.6 2.4 18 18 0 0 1 6 3.8q3.3 3.2 4.5 9.4a101.6 101.6 0 0 1 1.2 17.8Zm18.7 22.8V118h-12.3v-13.5Zm82.5 13.5h-6.7V50.7h-1.2l-22.8 64.8a5.3 5.3 0 0 1-1.2 2 3.3 3.3 0 0 1-2 .5h-3.6a3.6 3.6 0 0 1-2.1-.5 4.3 4.3 0 0 1-1.2-2L421 50.3h-1.2V118h-6.4V44.5h9.7a3.7 3.7 0 0 1 2.3.5 4.7 4.7 0 0 1 1.1 2l22 63.2h1l22-63.2a5 5 0 0 1 1-2 3.5 3.5 0 0 1 2.3-.5h9.7Zm21.8-5.6h38.2v5.6h-44.7V44.5h6.5Z"/></svg>
    </a>
  </h1>
  <p><h3>2100+ SVG Icons <a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer"><img src="/simpleicons.svg" alt="SimpleIcons" width="32" /></a> &middot; Dynamic Color API &middot; Global Edge CDN with <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"><img src="/vercel.svg" alt="Vercel" width="32" /></a></h3></p>
</div>
<br>

<div class="zi-card pin">

<pre class="zi-dark">
  https://icns.ml/ :name [-:color] [.:type]
</pre>
<pre class="zi-dark">
  https://icns.ml/ [:color] / :name [.:type]
</pre>

- **\`:name\`**   · **\`required\`** · alphanumeric, no spaces, dashes, no special chars.  
- **\`:color\`** · \`optional\` · default: brand's primary color.  
- **\`:type\`**   · \`optional\` · default: \`svg\`. (\`png\` raster support coming soon!)

> Examples: [**\`https://icns.ml/github.svg\`**](./github.svg) or [**\`https://icns.ml/ffcc00/github.svg\`**](./ffcc00/github.svg)

</div>

<div class="zi-card">

<table width="100%" cellpadding="2" cellspacing="2" class="zi-table">
{{randomIcons}}
</table>


</div>
  <footer align="center" class="zi-card zi-dark dark footer">

[MIT] &copy; ${new Date().getFullYear()} [Nicholas Berlette] &middot; icons &copy; [SimpleIcons] &middot; [Deploy with Vercel]

[MIT]: https://icns.mit-license.org
[Nicholas Berlette]: https://github.com/nberlette/icns
[SimpleIcons]: https://simpleicons.org
[Deploy with Vercel]: https://vercel.com/new/git/external?repository-url=https://github.com/nberlette/icns/tree/main&project-name=icns-api&repository-name=icns
[Vercel]: https://vercel.com

  </footer>
</body>
</html>`;

export default async function handler (req: Request, res: Response) {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.status(200).send(
    marked(homepage, markedOptions)
      .replace('{{randomIcons}}', randomIcons.map(
        (icon: SimpleIcon): string => {
          let iconUrl = `/${icon.slug}.svg`;
          let iconAbsUrl = `https://icns.ml/${icon.slug}.svg`
          return `
<tr>
  <td width="72">
  <a href="${iconUrl}" target="_blank" rel="noopener noreferrer"><img src="${iconUrl}" alt="${icon.title}" aria-label="${icon.title}" width="72" height="72" class="icon" id="icon-${icon.slug}" /></a>
  </td>
  <td>
      <a href="#${iconUrl}"
         id="copy-${icon.slug}" 
         class="copyurl"
         data-url="${iconUrl}" 
         title="Click to copy URL to clipboard"
         style="position:relative"
         onclick="return clipboardCopy(this)"><pre id="url-${icon.slug}" class="zi-note url">${iconUrl}</pre></a>
  </td>
</tr>`;
      }).join('\n')
    )
  );
}

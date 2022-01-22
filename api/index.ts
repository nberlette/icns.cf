import type { 
	VercelResponse as Response, 
	VercelRequest as Request, 
	VercelRequestQuery as RequestQuery 
} from '@vercel/node';
import icons, { SimpleIcon } from 'simple-icons';
import { marked } from 'marked';

try { delete icons.Get; } catch { }

const randomIconsCount = 10;
const randomIcons: any[] = Object
  .values(icons)
  .sort((a, b) => Math.random() > 0.5 ? -1 : 1)
  .slice(0, randomIconsCount)

const homepage: string = marked(`
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
  border: 2px solid var(--zeit-success);
}
pre.success::after { 
  content: "✅";
  position:fixed;
  right:0;
  top:50%;
  transform:translate(0,-50%);
  margin: 0 1em; 
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
</head>
<body>
<a href="https://github.com/nberlette/icns.ml" class="github-corner" aria-label="View Source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513;color:#fff;position:fixed;top:0;border:0;right:0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
<div align=center>
  <h1><img src="https://icns.ml/simpleicons.svg" width="32" alt="SimpleIcons" /> <code>icns.ml</code></h1>
  <p><h3><a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer">SimpleIcons</a> + Vercel's Edge CDN.</h3></p>
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
- **\`:color\`** · \`optional\` · default is brand's primary color.  
- **\`:type\`**   · \`optional\` · default is \`svg\`. coming soon: \`png\`  

> Examples: [**\`https://icns.ml/github.svg\`**](https://icns.ml/github.svg) or [**\`https://icns.ml/ffcc00/github.svg\`**](https://icns.ml/ffcc00/github.svg)

</div>

<div class="zi-card">

<table width="100%" cellpadding="2" cellspacing="2" class="zi-table">
${randomIcons.map((icon: SimpleIcon): string => {
  let iconUrl = `https://icns.ml/${icon.slug}.svg`;
  return `
      <tr>
        <td width="72">
        <a href="${iconUrl}" target="_blank" rel="noopener noreferrer"><img src="${iconUrl}" alt="${icon.title}" aria-label="${icon.title}" width="72" height="72" class="icon" id="icon-${icon.slug}" /></a>
        </td>
        <td>
            <a href="javascript:;" id="copy-${icon.slug}" class="copyurl" data-url="${iconUrl}" title="Click to copy URL to clipboard" style="position:relative" onclick="navigator.clipboard.writeText(this.getAttribute('data-url')).then(()=>{this.firstChild.classList.toggle('success'); setTimeout(() => this.firstChild.classList.toggle('success', false), 2000); alert('Copied to clipboard!'); })"><pre id="url-${icon.slug}" class="zi-note url">${iconUrl}</pre></a>
	      </td>
      </tr>`;
}).join('\n')}
</table>


</div>
<div align="center" class="zi-card zi-dark dark footer">

[MIT](https://mit-license.org) © ${new Date().getFullYear()} [@nberlette](https://github.com/nberlette/icns.ml) • not affiliated with [SimpleIcons](https://simpleicons.org)


</div>
<br>
<script type="text/javascript">
</script>

</body></html>`, {
  baseUrl: "https://icns.ml",
  gfm: true,
  headerIds: true,
  xhtml: true,
  smartLists: true,
  smartypants: true
});

export default async function handler (req: Request, res: Response): Promise<any> {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  return res.status(200).send(homepage);
}

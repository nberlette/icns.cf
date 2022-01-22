import type { 
	VercelResponse as Response, 
	VercelRequest as Request, 
	VercelRequestQuery as RequestQuery 
} from '@vercel/node';
import icons, { SimpleIcon } from 'simple-icons';
import tc from 'tinycolor2';
import { marked } from 'marked';

const randomIconsCount = 10;
try { delete icons.Get; } catch {}
const randomIcons: any[] = Object.values(icons).sort((a,b) => Math.random() > 0.5 ? -1 : 1).slice(0, randomIconsCount)

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
.zi-card { margin: 1em 0 !important; }
.zi-dark {
  background: var(--accents-8) !important;
  color: var(--accents-1) !important;
  border-color: var(--accents-7) !important;
}
</style>
</head>
<body>  
<div align=center>
  <h1><img src="https://icns.ml/simpleicons.svg" width="32" alt="SimpleIcons" /> <code>icns.ml</code></h1>
  <p><h4>The <a href="https://simpleicons.org" target="_blank" rel="noopener noreferrer">simpleicons</a> API + Vercel's Edge CDN.</h4></p>
</div>
<br>

<div class="zi-card pin">

## Schema  

<pre class="zi-dark">
  https://icns.ml/ :name [-:color] [.:type]
</pre>
<pre class="zi-dark">
  https://icns.ml/ [:color] / :name [.:type]
</pre>

> Example of the recommended usage: **\`https://icns.ml/github.svg\`**

- **\`:name\`**   · **\`required\`** · alphanumeric, no spaces, dashes, no special chars.  
- **\`:color\`** · \`optional\` · default is brand's primary color.  
- **\`:type\`**   · \`optional\` · default is \`svg\`.    

> Example of the recommended usage: **\`https://icns.ml/github.svg\`**

</div>

<div class="zi-card">

<table width="100%" cellpadding="2" cellspacing="2" class="zi-table">
${randomIcons.map((icon: SimpleIcon): string => {
        let iconUrl = `https://icns.ml/${icon.slug}.svg`;
        return `<tr><td width="72">
        <a href="${iconUrl}" target="_blank" rel="noopener noreferrer"><img src="${iconUrl}" alt="${icon.title}" aria-label="${icon.title}" width="72" height="72" class="icon" id="icon-${icon.slug}" /></a>
        </td>
        <td>
            <a href="javascript:;" id="copy-${icon.slug}" class="copyurl" data-url="${iconUrl}" title="Click to copy URL to clipboard" style="position:relative" onclick="navigator.clipboard.writeText(this.getAttribute('data-url')).then(()=>{this.firstChild.classList.toggle('success'); setTimeout(() => this.firstChild.classList.toggle('success', false), 2000); alert('Copied to clipboard!'); })">
	    <pre
                id="url-${icon.slug}"
                class="zi-note url"
                style="border-radius:6px;border:2px solid #ccc;background-color:#eee;padding: 6px 10px;font-family:'Operator Mono Lig', 'Operator Mono', 'Dank Mono', 'MonoLisa', 'Fira Code', monospace;font-size:14px;cursor:pointer;width:90%;transition:all 0.4s ease-in;">${iconUrl}</pre>
	    </a>
	</td>
</tr>`;
}).join('\n')}
</table>


</div>
<div align="center" class="zi-card zi-dark dark">

[MIT](https://mit-license.org) © 2022 [@nberlette](https://github.com/nberlette/icns.ml) • not affiliated with [SimpleIcons](https://simpleicons.org)


</div>
<br>
<script type="text/javascript">
</script>

</body></html>`;

export default async function handler (req: Request, res: Response): Promise<any> {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  return res.status(200).send(marked(homepage));
}

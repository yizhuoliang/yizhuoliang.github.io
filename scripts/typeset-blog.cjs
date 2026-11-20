// Render the article's TeX into inline vectors so the standalone page also works offline.
const fs = require('node:fs');
const path = require('node:path');
const {mathjax} = require('mathjax-full/js/mathjax.js');
const {TeX} = require('mathjax-full/js/input/tex.js');
const {SVG} = require('mathjax-full/js/output/svg.js');
const {liteAdaptor} = require('mathjax-full/js/adaptors/liteAdaptor.js');
const {RegisterHTMLHandler} = require('mathjax-full/js/handlers/html.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const document = mathjax.document('', {InputJax: new TeX(), OutputJax: new SVG({fontCache: 'none'})});
const file = path.resolve(__dirname, '../public/blog/cta-wave-scheduling.html');
const html = fs.readFileSync(file, 'utf8');
const equations = /(<span class="typeset" data-tex="([^"]+)"( data-display)? aria-label="([^"]+)">)[\s\S]*?<\/span>/g;
const result = html.replace(equations, (_, start, tex, display, description) => {
  const svg = adaptor.firstChild(document.convert(tex, {display: Boolean(display)}));
  adaptor.setAttribute(svg, 'aria-label', description);
  adaptor.setAttribute(svg, 'role', 'img');
  return start + adaptor.outerHTML(svg) + '</span>';
});
fs.writeFileSync(file, result);

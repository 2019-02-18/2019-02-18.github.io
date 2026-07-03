var tt=Object.defineProperty;var it=(t,e,i)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var h=(t,e,i)=>it(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const w={view:"dashboard",orders:[{id:"ORD-240601",customer:"杭州某茶",amount:1280,status:"已完成",createdAt:"2026-06-29 09:12"},{id:"ORD-240602",customer:"深圳某科技",amount:5600,status:"待发货",createdAt:"2026-06-29 10:45"}],revenueToday:18420,orderCountToday:7,dialogOpen:!1};let ee=null;function K(t){const e=document.getElementById("global-toast");e&&(e.textContent=t,e.classList.add("is-show"),ee&&window.clearTimeout(ee),ee=window.setTimeout(()=>e.classList.remove("is-show"),2800))}function Pe(t){return`¥${t.toLocaleString("zh-CN")}`}function ye(){const t=window.location.hash.replace("#","")||"dashboard";return t==="orders"||t==="settings"?t:"dashboard"}function nt(t){w.view=t,window.location.hash=t,ne()}function st(){return`
    <div class="card">
      <h2>经营概览</h2>
      <div class="stat-row">
        <div class="stat-box">
          <div class="lbl">今日营收</div>
          <div class="val" id="stat-revenue">${Pe(w.revenueToday)}</div>
        </div>
        <div class="stat-box">
          <div class="lbl">今日订单</div>
          <div class="val">${w.orderCountToday}</div>
        </div>
        <div class="stat-box">
          <div class="lbl">待处理</div>
          <div class="val">${w.orders.filter(t=>t.status==="待发货").length}</div>
        </div>
      </div>
    </div>
    <div class="card">
      <h2>快捷说明</h2>
      <p style="margin:0;color:#64748b;line-height:1.6">
        本后台为 InterfaceMode 演示环境。订单创建走界面操作流程；
        「查看今日营收」走站点包 API，未配置则无法通过界面模式查询。
      </p>
    </div>
  `}function rt(){return`
    <div class="card">
      <h2>订单管理</h2>
      <div class="toolbar">
        <button type="button" class="btn btn--solid js-open-order-form">
          <span>新建订单</span>
        </button>
        <button type="button" class="btn js-refresh-list">刷新列表</button>
      </div>
      <table class="tbl">
        <thead>
          <tr>
            <th>单号</th>
            <th>客户</th>
            <th>金额</th>
            <th>状态</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>${w.orders.map(e=>`
      <tr class="tbl-row">
        <td>${e.id}</td>
        <td>${e.customer}</td>
        <td>${Pe(e.amount)}</td>
        <td>${e.status}</td>
        <td>${e.createdAt}</td>
      </tr>`).join("")}</tbody>
      </table>
    </div>
  `}function at(){return`
    <div class="card">
      <h2>门店信息</h2>
      <div class="form-grid">
        <label>
          门店名称
          <input type="text" value="测试演示店" readonly />
        </label>
        <label>
          联系手机
          <input type="text" value="138****8821" readonly />
        </label>
      </div>
      <div class="danger-block" id="merchant-danger-zone">
        <h3>危险操作</h3>
        <p style="margin:0 0 12px;font-size:13px;color:#742a2a">
          注销后将清除所有经营数据，且不可恢复。
        </p>
        <button type="button" class="btn btn--danger js-delete-merchant">
          注销商户账号
        </button>
      </div>
    </div>
  `}function ot(){return w.dialogOpen?`
    <div class="overlay" id="order-overlay" role="presentation">
      <div class="dialog" role="dialog" aria-labelledby="dlg-title">
        <div class="dialog__head" id="dlg-title">填写订单信息</div>
        <div class="dialog__body">
          <div class="form-grid">
            <label>
              客户名称
              <input type="text" name="customer" placeholder="请输入客户名称" />
            </label>
            <label>
              订单金额（元）
              <input type="number" name="amount" min="1" placeholder="0" />
            </label>
            <label>
              备注
              <textarea name="note" placeholder="选填"></textarea>
            </label>
          </div>
        </div>
        <div class="dialog__foot">
          <button type="button" class="btn js-close-dialog">取消</button>
          <button type="button" class="btn btn--solid js-submit-order">提交订单</button>
        </div>
      </div>
    </div>
  `:""}function lt(){document.querySelectorAll(".mch-side__nav a").forEach(t=>{var i;const e=(i=t.getAttribute("href"))==null?void 0:i.replace("#","");t.classList.toggle("is-on",e===w.view)})}function ct(){const t={dashboard:"首页 / 经营概览",orders:"交易 / 订单管理",settings:"系统 / 门店设置"},e=document.querySelector(".mch-top__crumb");e&&(e.textContent=t[w.view])}function Q(){const t=document.getElementById("mch-view-host");if(!t)return;let e="";w.view==="dashboard"?e=st():w.view==="orders"?e=rt():e=at(),t.innerHTML=e;const i=document.getElementById("order-overlay");i==null||i.remove();const s=document.createElement("div");s.innerHTML=ot();const n=s.firstElementChild;n&&document.body.appendChild(n),ut()}function ut(){var t,e,i,s,n;(t=document.querySelector(".js-open-order-form"))==null||t.addEventListener("click",()=>{w.dialogOpen=!0,Q()}),(e=document.querySelector(".js-close-dialog"))==null||e.addEventListener("click",()=>{w.dialogOpen=!1,Q()}),(i=document.querySelector(".js-refresh-list"))==null||i.addEventListener("click",()=>{K("列表已刷新")}),(s=document.querySelector(".js-submit-order"))==null||s.addEventListener("click",()=>{var a,u;const r=(a=document.querySelector('input[name="customer"]'))==null?void 0:a.value.trim(),o=Number((u=document.querySelector('input[name="amount"]'))==null?void 0:u.value);if(!r||!o){K("请填写客户名称和金额");return}const l=`ORD-${Date.now().toString().slice(-6)}`;w.orders.unshift({id:l,customer:r,amount:o,status:"待发货",createdAt:new Date().toLocaleString("zh-CN",{hour12:!1}).replace(/\//g,"-")}),w.orderCountToday+=1,w.revenueToday+=o,w.dialogOpen=!1,Q(),K(`订单 ${l} 已创建`)}),(n=document.querySelector(".js-delete-merchant"))==null||n.addEventListener("click",()=>{K("该操作需商户主账号短信验证（演示环境不执行）")})}function ne(){lt(),ct(),Q()}function dt(t){t.innerHTML=`
    <div class="mch-shell">
      <aside class="mch-side">
        <div class="mch-side__brand">测试商户中心</div>
        <ul class="mch-side__nav">
          <li><a href="#dashboard">经营概览</a></li>
          <li><a href="#orders">订单管理</a></li>
          <li><a href="#settings">门店设置</a></li>
        </ul>
      </aside>
      <div class="mch-main">
        <header class="mch-top">
          <div class="mch-top__crumb">首页</div>
          <div class="mch-top__user">店员：演示账号</div>
        </header>
        <main class="mch-body" id="mch-view-host"></main>
      </div>
    </div>
    <div class="toast" id="global-toast" role="status"></div>
  `,w.view=ye(),window.addEventListener("hashchange",()=>{w.view=ye(),ne()}),t.querySelectorAll(".mch-side__nav a").forEach(e=>{e.addEventListener("click",i=>{var n;i.preventDefault();const s=(n=e.getAttribute("href"))==null?void 0:n.replace("#","");nt(s)})}),ne()}function pt(){return{revenue:w.revenueToday,orders:w.orderCountToday}}function ue(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var q=ue();function _e(t){q=t}var I={exec:()=>null};function B(t){let e=[];return i=>{let s=Math.max(0,Math.min(3,i-1)),n=e[s];return n||(n=t(s),e[s]=n),n}}function x(t,e=""){let i=typeof t=="string"?t:t.source,s={replace:(n,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(S.caret,"$1"),i=i.replace(n,o),s},getRegex:()=>new RegExp(i,e)};return s}var ht=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),S={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:B(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:B(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:B(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:B(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:B(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:B(t=>new RegExp(`^ {0,${t}}>`))},mt=/^(?:[ \t]*(?:\n|$))+/,ft=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Z=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,de=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,qe=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Be=x(qe).replace(/bull/g,de).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),xt=x(qe).replace(/bull/g,de).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),pe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,kt=/^[^\n]+/,he=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,vt=x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",he).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),yt=x(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,de).getRegex(),Y="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",me=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,wt=x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",me).replace("tag",Y).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ne=x(pe).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Y).getRegex(),St=x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ne).getRegex(),fe={blockquote:St,code:ft,def:vt,fences:gt,heading:bt,hr:Z,html:wt,lheading:Be,list:yt,newline:mt,paragraph:Ne,table:I,text:kt},we=x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Y).getRegex(),$t={...fe,lheading:xt,table:we,paragraph:x(pe).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",we).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Y).getRegex()},At={...fe,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",me).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:I,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x(pe).replace("hr",Z).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Be).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ct=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Et=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Oe=/^( {2,}|\\)\n(?!\s*$)/,Tt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,O=/[\p{P}\p{S}]/u,J=/[\s\p{P}\p{S}]/u,ge=/[^\s\p{P}\p{S}]/u,Lt=x(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,J).getRegex(),De=/(?!~)[\p{P}\p{S}]/u,Rt=/(?!~)[\s\p{P}\p{S}]/u,zt=/(?:[^\s\p{P}\p{S}]|~)/u,Mt=x(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ht?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),He=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,It=x(He,"u").replace(/punct/g,O).getRegex(),Pt=x(He,"u").replace(/punct/g,De).getRegex(),je="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_t=x(je,"gu").replace(/notPunctSpace/g,ge).replace(/punctSpace/g,J).replace(/punct/g,O).getRegex(),qt=x(je,"gu").replace(/notPunctSpace/g,zt).replace(/punctSpace/g,Rt).replace(/punct/g,De).getRegex(),Bt=x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ge).replace(/punctSpace/g,J).replace(/punct/g,O).getRegex(),Nt=x(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,O).getRegex(),Ot="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Dt=x(Ot,"gu").replace(/notPunctSpace/g,ge).replace(/punctSpace/g,J).replace(/punct/g,O).getRegex(),Ht=x(/\\(punct)/,"gu").replace(/punct/g,O).getRegex(),jt=x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vt=x(me).replace("(?:-->|$)","-->").getRegex(),Zt=x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),W=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Kt=x(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",W).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ve=x(/^!?\[(label)\]\[(ref)\]/).replace("label",W).replace("ref",he).getRegex(),Ze=x(/^!?\[(ref)\](?:\[\])?/).replace("ref",he).getRegex(),Ft=x("reflink|nolink(?!\\()","g").replace("reflink",Ve).replace("nolink",Ze).getRegex(),Se=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,be={_backpedal:I,anyPunctuation:Ht,autolink:jt,blockSkip:Mt,br:Oe,code:Et,del:I,delLDelim:I,delRDelim:I,emStrongLDelim:It,emStrongRDelimAst:_t,emStrongRDelimUnd:Bt,escape:Ct,link:Kt,nolink:Ze,punctuation:Lt,reflink:Ve,reflinkSearch:Ft,tag:Zt,text:Tt,url:I},Ut={...be,link:x(/^!?\[(label)\]\((.*?)\)/).replace("label",W).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",W).getRegex()},se={...be,emStrongRDelimAst:qt,emStrongLDelim:Pt,delLDelim:Nt,delRDelim:Dt,url:x(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Se).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:x(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Se).getRegex()},Qt={...se,br:x(Oe).replace("{2,}","*").getRegex(),text:x(se.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},F={normal:fe,gfm:$t,pedantic:At},D={normal:be,gfm:se,breaks:Qt,pedantic:Ut},Wt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$e=t=>Wt[t];function z(t,e){if(e){if(S.escapeTest.test(t))return t.replace(S.escapeReplace,$e)}else if(S.escapeTestNoEncode.test(t))return t.replace(S.escapeReplaceNoEncode,$e);return t}function Ae(t){try{t=encodeURI(t).replace(S.percentDecode,"%")}catch{return null}return t}function Ce(t,e){var r;let i=t.replace(S.findPipe,(o,l,a)=>{let u=!1,c=l;for(;--c>=0&&a[c]==="\\";)u=!u;return u?"|":" |"}),s=i.split(S.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!((r=s.at(-1))!=null&&r.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(S.slashPipe,"|");return s}function M(t,e,i){let s=t.length;if(s===0)return"";let n=0;for(;n<s&&t.charAt(s-n-1)===e;)n++;return t.slice(0,s-n)}function Ee(t){let e=t.split(`
`),i=e.length-1;for(;i>=0&&S.blankLine.test(e[i]);)i--;return e.length-i<=2?t:e.slice(0,i+1).join(`
`)}function Gt(t,e){if(t.indexOf(e[1])===-1)return-1;let i=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return i>0?-2:-1}function Xt(t,e=0){let i=e,s="";for(let n of t)if(n==="	"){let r=4-i%4;s+=" ".repeat(r),i+=r}else s+=n,i++;return s}function Te(t,e,i,s,n){let r=e.href,o=e.title||null,l=t[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let a={type:t[0].charAt(0)==="!"?"image":"link",raw:i,href:r,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,a}function Yt(t,e,i){let s=t.match(i.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(r=>{let o=r.match(i.other.beginningSpace);if(o===null)return r;let[l]=o;return l.length>=n.length?r.slice(n.length):r}).join(`
`)}var G=class{constructor(t){h(this,"options");h(this,"rules");h(this,"lexer");this.options=t||q}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let i=this.options.pedantic?e[0]:Ee(e[0]),s=i.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i,codeBlockStyle:"indented",text:s}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let i=e[0],s=Yt(i,e[3]||"",this.rules);return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let i=e[2].trim();if(this.rules.other.endingHash.test(i)){let s=M(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:M(e[0],`
`),depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:M(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let i=M(e[0],`
`).split(`
`),s="",n="",r=[];for(;i.length>0;){let o=!1,l=[],a;for(a=0;a<i.length;a++)if(this.rules.other.blockquoteStart.test(i[a]))l.push(i[a]),o=!0;else if(!o)l.push(i[a]);else break;i=i.slice(a);let u=l.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,n=n?`${n}
${c}`:c;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,r,!0),this.lexer.state.top=p,i.length===0)break;let m=r.at(-1);if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){let k=m,d=k.raw+`
`+i.join(`
`),f=this.blockquote(d);r[r.length-1]=f,s=s.substring(0,s.length-k.raw.length)+f.raw,n=n.substring(0,n.length-k.text.length)+f.text;break}else if((m==null?void 0:m.type)==="list"){let k=m,d=k.raw+`
`+i.join(`
`),f=this.list(d);r[r.length-1]=f,s=s.substring(0,s.length-m.raw.length)+f.raw,n=n.substring(0,n.length-k.raw.length)+f.raw,i=d.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:r,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i=e[1].trim(),s=i.length>1,n={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");let r=this.rules.other.listItemRegex(i),o=!1;for(;t;){let a=!1,u="",c="";if(!(e=r.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let p=Xt(e[2].split(`
`,1)[0],e[1].length),m=t.split(`
`,1)[0],k=!p.trim(),d=0;if(this.options.pedantic?(d=2,c=p.trimStart()):k?d=e[1].length+1:(d=p.search(this.rules.other.nonSpaceChar),d=d>4?1:d,c=p.slice(d),d+=e[1].length),k&&this.rules.other.blankLine.test(m)&&(u+=m+`
`,t=t.substring(m.length+1),a=!0),!a){let f=this.rules.other.nextBulletRegex(d),g=this.rules.other.hrRegex(d),$=this.rules.other.fencesBeginRegex(d),v=this.rules.other.headingBeginRegex(d),b=this.rules.other.htmlBeginRegex(d),A=this.rules.other.blockquoteBeginRegex(d);for(;t;){let E=t.split(`
`,1)[0],T;if(m=E,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),T=m):T=m.replace(this.rules.other.tabCharGlobal,"    "),$.test(m)||v.test(m)||b.test(m)||A.test(m)||f.test(m)||g.test(m))break;if(T.search(this.rules.other.nonSpaceChar)>=d||!m.trim())c+=`
`+T.slice(d);else{if(k||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||$.test(p)||v.test(p)||g.test(p))break;c+=`
`+m}k=!m.trim(),u+=E+`
`,t=t.substring(E.length+1),p=T.slice(d)}}n.loose||(o?n.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(o=!0)),n.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),n.raw+=u}let l=n.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let a of n.items){this.lexer.state.top=!1,a.tokens=this.lexer.blockTokens(a.text,[]);let u=a.tokens[0];if(a.task&&((u==null?void 0:u.type)==="text"||(u==null?void 0:u.type)==="paragraph")){a.text=a.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}let c=this.rules.other.listTaskCheckbox.exec(a.raw);if(c){let p={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};a.checked=p.checked,n.loose?a.tokens[0]&&["paragraph","text"].includes(a.tokens[0].type)&&"tokens"in a.tokens[0]&&a.tokens[0].tokens?(a.tokens[0].raw=p.raw+a.tokens[0].raw,a.tokens[0].text=p.raw+a.tokens[0].text,a.tokens[0].tokens.unshift(p)):a.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):a.tokens.unshift(p)}}else a.task&&(a.task=!1);if(!n.loose){let c=a.tokens.filter(m=>m.type==="space"),p=c.length>0&&c.some(m=>this.rules.other.anyLine.test(m.raw));n.loose=p}}if(n.loose)for(let a of n.items){a.loose=!0;for(let u of a.tokens)u.type==="text"&&(u.type="paragraph")}return n}}html(t){let e=this.rules.block.html.exec(t);if(e){let i=Ee(e[0]);return{type:"html",block:!0,raw:i,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:i}}}def(t){let e=this.rules.block.def.exec(t);if(e){let i=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:i,raw:M(e[0],`
`),href:s,title:n}}}table(t){var o;let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=Ce(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=(o=e[3])!=null&&o.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:M(e[0],`
`),header:[],align:[],rows:[]};if(i.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?r.align.push("right"):this.rules.other.tableAlignCenter.test(l)?r.align.push("center"):this.rules.other.tableAlignLeft.test(l)?r.align.push("left"):r.align.push(null);for(let l=0;l<i.length;l++)r.header.push({text:i[l],tokens:this.lexer.inline(i[l]),header:!0,align:r.align[l]});for(let l of n)r.rows.push(Ce(l,r.header.length).map((a,u)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:r.align[u]})));return r}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let i=e[1].trim();return{type:"heading",raw:M(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:i,tokens:this.lexer.inline(i)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let i=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let r=M(i.slice(0,-1),"\\");if((i.length-r.length)%2===0)return}else{let r=Gt(e[2],"()");if(r===-2)return;if(r>-1){let o=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let s=e[2],n="";if(this.options.pedantic){let r=this.rules.other.pedanticHrefTitle.exec(s);r&&(s=r[1],n=r[3])}else n=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),Te(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[s.toLowerCase()];if(!n){let r=i[0].charAt(0);return{type:"text",raw:r,text:r}}return Te(i,n,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||!s[1]&&!s[2]&&!s[3]&&!s[4]||s[4]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[3])||!i||this.rules.inline.punctuation.exec(i))){let n=[...s[0]].length-1,r,o,l=n,a=0,u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+n);(s=u.exec(e))!==null;){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(o=[...r].length,s[3]||s[4]){l+=o;continue}else if((s[5]||s[6])&&n%3&&!((n+o)%3)){a+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+a);let c=[...s[0]][0].length,p=t.slice(0,n+s.index+c+o);if(Math.min(n,o)%2){let k=p.slice(1,-1);return{type:"em",raw:p,text:k,tokens:this.lexer.inlineTokens(k)}}let m=p.slice(2,-2);return{type:"strong",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let i=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(i),n=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&n&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:e[0],text:i}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,i=""){let s=this.rules.inline.delLDelim.exec(t);if(s&&(!s[1]||!i||this.rules.inline.punctuation.exec(i))){let n=[...s[0]].length-1,r,o,l=n,a=this.rules.inline.delRDelim;for(a.lastIndex=0,e=e.slice(-1*t.length+n);(s=a.exec(e))!==null;){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r||(o=[...r].length,o!==n))continue;if(s[3]||s[4]){l+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l);let u=[...s[0]][0].length,c=t.slice(0,n+s.index+u+o),p=c.slice(n,-n);return{type:"del",raw:c,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let i,s;return e[2]==="@"?(i=e[1],s="mailto:"+i):(i=e[1],s=i),{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(t){var i;let e;if(e=this.rules.inline.url.exec(t)){let s,n;if(e[2]==="@")s=e[0],n="mailto:"+s;else{let r;do r=e[0],e[0]=((i=this.rules.inline._backpedal.exec(e[0]))==null?void 0:i[0])??"";while(r!==e[0]);s=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:s,href:n,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let i=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:i}}}},L=class re{constructor(e){h(this,"tokens");h(this,"options");h(this,"state");h(this,"inlineQueue");h(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||q,this.options.tokenizer=this.options.tokenizer||new G,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:S,block:F.normal,inline:D.normal};this.options.pedantic?(i.block=F.pedantic,i.inline=D.pedantic):this.options.gfm&&(i.block=F.gfm,this.options.breaks?i.inline=D.breaks:i.inline=D.gfm),this.tokenizer.rules=i}static get rules(){return{block:F,inline:D}}static lex(e,i){return new re(i).lex(e)}static lexInline(e,i){return new re(i).inlineTokens(e)}lex(e){e=e.replace(S.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let s=this.inlineQueue[i];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,i=[],s=!1){var r,o,l;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(S.tabCharGlobal,"    ").replace(S.spaceLine,""));let n=1/0;for(;e;){if(e.length<n)n=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let a;if((o=(r=this.options.extensions)==null?void 0:r.block)!=null&&o.some(c=>(a=c.call({lexer:this},e,i))?(e=e.substring(a.raw.length),i.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);let c=i.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:i.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);let c=i.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):i.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);let c=i.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},i.push(a));continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),i.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),i.push(a);continue}let u=e;if((l=this.options.extensions)!=null&&l.startBlock){let c=1/0,p=e.slice(1),m;this.options.extensions.startBlock.forEach(k=>{m=k.call({lexer:this},p),typeof m=="number"&&m>=0&&(c=Math.min(c,m))}),c<1/0&&c>=0&&(u=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){let c=i.at(-1);s&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):i.push(a),s=u.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);let c=i.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):i.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,i}inline(e,i=[]){return this.inlineQueue.push({src:e,tokens:i}),i}inlineTokens(e,i=[]){var u,c,p,m,k;this.tokenizer.lexer=this;let s=e,n=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!==null;)d.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!==null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!==null;)r=n[2]?n[2].length:0,s=s.slice(0,n.index+r)+"["+"a".repeat(n[0].length-r-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=((c=(u=this.options.hooks)==null?void 0:u.emStrongMask)==null?void 0:c.call({lexer:this},s))??s;let o=!1,l="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(l=""),o=!1;let d;if((m=(p=this.options.extensions)==null?void 0:p.inline)!=null&&m.some(g=>(d=g.call({lexer:this},e,i))?(e=e.substring(d.raw.length),i.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let g=i.at(-1);d.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=d.raw,g.text+=d.text):i.push(d);continue}if(d=this.tokenizer.emStrong(e,s,l)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.del(e,s,l)){e=e.substring(d.raw.length),i.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),i.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),i.push(d);continue}let f=e;if((k=this.options.extensions)!=null&&k.startInline){let g=1/0,$=e.slice(1),v;this.options.extensions.startInline.forEach(b=>{v=b.call({lexer:this},$),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(f=e.substring(0,g+1))}if(d=this.tokenizer.inlineText(f)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),o=!0;let g=i.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=d.raw,g.text+=d.text):i.push(d);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return i}infiniteLoopError(e){let i="Infinite loop on byte: "+e;if(this.options.silent)console.error(i);else throw new Error(i)}},X=class{constructor(t){h(this,"options");h(this,"parser");this.options=t||q}space(t){return""}code({text:t,lang:e,escaped:i}){var r;let s=(r=(e||"").match(S.notSpaceStart))==null?void 0:r[0],n=t.replace(S.endingNewline,"")+`
`;return s?'<pre><code class="language-'+z(s)+'">'+(i?n:z(n,!0))+`</code></pre>
`:"<pre><code>"+(i?n:z(n,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,i=t.start,s="";for(let o=0;o<t.items.length;o++){let l=t.items[o];s+=this.listitem(l)}let n=e?"ol":"ul",r=e&&i!==1?' start="'+i+'"':"";return"<"+n+r+`>
`+s+"</"+n+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",i="";for(let n=0;n<t.header.length;n++)i+=this.tablecell(t.header[n]);e+=this.tablerow({text:i});let s="";for(let n=0;n<t.rows.length;n++){let r=t.rows[n];i="";for(let o=0;o<r.length;o++)i+=this.tablecell(r[o]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${z(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let s=this.parser.parseInline(i),n=Ae(t);if(n===null)return s;t=n;let r='<a href="'+t+'"';return e&&(r+=' title="'+z(e)+'"'),r+=">"+s+"</a>",r}image({href:t,title:e,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));let n=Ae(t);if(n===null)return z(i);t=n;let r=`<img src="${t}" alt="${z(i)}"`;return e&&(r+=` title="${z(e)}"`),r+=">",r}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:z(t.text)}},xe=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},R=class ae{constructor(e){h(this,"options");h(this,"renderer");h(this,"textRenderer");this.options=e||q,this.options.renderer=this.options.renderer||new X,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xe}static parse(e,i){return new ae(i).parse(e)}static parseInline(e,i){return new ae(i).parseInline(e)}parse(e){var s,n;this.renderer.parser=this;let i="";for(let r=0;r<e.length;r++){let o=e[r];if((n=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&n[o.type]){let a=o,u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){i+=u||"";continue}}let l=o;switch(l.type){case"space":{i+=this.renderer.space(l);break}case"hr":{i+=this.renderer.hr(l);break}case"heading":{i+=this.renderer.heading(l);break}case"code":{i+=this.renderer.code(l);break}case"table":{i+=this.renderer.table(l);break}case"blockquote":{i+=this.renderer.blockquote(l);break}case"list":{i+=this.renderer.list(l);break}case"checkbox":{i+=this.renderer.checkbox(l);break}case"html":{i+=this.renderer.html(l);break}case"def":{i+=this.renderer.def(l);break}case"paragraph":{i+=this.renderer.paragraph(l);break}case"text":{i+=this.renderer.text(l);break}default:{let a='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(e,i=this.renderer){var n,r;this.renderer.parser=this;let s="";for(let o=0;o<e.length;o++){let l=e[o];if((r=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&r[l.type]){let u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=u||"";continue}}let a=l;switch(a.type){case"escape":{s+=i.text(a);break}case"html":{s+=i.html(a);break}case"link":{s+=i.link(a);break}case"image":{s+=i.image(a);break}case"checkbox":{s+=i.checkbox(a);break}case"strong":{s+=i.strong(a);break}case"em":{s+=i.em(a);break}case"codespan":{s+=i.codespan(a);break}case"br":{s+=i.br(a);break}case"del":{s+=i.del(a);break}case"text":{s+=i.text(a);break}default:{let u='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}},U,j=(U=class{constructor(t){h(this,"options");h(this,"block");this.options=t||q}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?L.lex:L.lexInline}provideParser(t=this.block){return t?R.parse:R.parseInline}},h(U,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),h(U,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),U),Jt=class{constructor(...t){h(this,"defaults",ue());h(this,"options",this.setOptions);h(this,"parse",this.parseMarkdown(!0));h(this,"parseInline",this.parseMarkdown(!1));h(this,"Parser",R);h(this,"Renderer",X);h(this,"TextRenderer",xe);h(this,"Lexer",L);h(this,"Tokenizer",G);h(this,"Hooks",j);this.use(...t)}walkTokens(t,e){var s,n;let i=[];for(let r of t)switch(i=i.concat(e.call(this,r)),r.type){case"table":{let o=r;for(let l of o.header)i=i.concat(this.walkTokens(l.tokens,e));for(let l of o.rows)for(let a of l)i=i.concat(this.walkTokens(a.tokens,e));break}case"list":{let o=r;i=i.concat(this.walkTokens(o.items,e));break}default:{let o=r;(n=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&n[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{let a=o[l].flat(1/0);i=i.concat(this.walkTokens(a,e))}):o.tokens&&(i=i.concat(this.walkTokens(o.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(i=>{let s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let r=e.renderers[n.name];r?e.renderers[n.name]=function(...o){let l=n.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=e[n.level];r?r.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),i.renderer){let n=this.defaults.renderer||new X(this.defaults);for(let r in i.renderer){if(!(r in n))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let o=r,l=i.renderer[o],a=n[o];n[o]=(...u)=>{let c=l.apply(n,u);return c===!1&&(c=a.apply(n,u)),c||""}}s.renderer=n}if(i.tokenizer){let n=this.defaults.tokenizer||new G(this.defaults);for(let r in i.tokenizer){if(!(r in n))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let o=r,l=i.tokenizer[o],a=n[o];n[o]=(...u)=>{let c=l.apply(n,u);return c===!1&&(c=a.apply(n,u)),c}}s.tokenizer=n}if(i.hooks){let n=this.defaults.hooks||new j;for(let r in i.hooks){if(!(r in n))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let o=r,l=i.hooks[o],a=n[o];j.passThroughHooks.has(r)?n[o]=u=>{if(this.defaults.async&&j.passThroughHooksRespectAsync.has(r))return(async()=>{let p=await l.call(n,u);return a.call(n,p)})();let c=l.call(n,u);return a.call(n,c)}:n[o]=(...u)=>{if(this.defaults.async)return(async()=>{let p=await l.apply(n,u);return p===!1&&(p=await a.apply(n,u)),p})();let c=l.apply(n,u);return c===!1&&(c=a.apply(n,u)),c}}s.hooks=n}if(i.walkTokens){let n=this.defaults.walkTokens,r=i.walkTokens;s.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),n&&(l=l.concat(n.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return L.lex(t,e??this.defaults)}parser(t,e){return R.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let s={...i},n={...this.defaults,...s},r=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=t),n.async)return(async()=>{let o=n.hooks?await n.hooks.preprocess(e):e,l=await(n.hooks?await n.hooks.provideLexer(t):t?L.lex:L.lexInline)(o,n),a=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(a,n.walkTokens));let u=await(n.hooks?await n.hooks.provideParser(t):t?R.parse:R.parseInline)(a,n);return n.hooks?await n.hooks.postprocess(u):u})().catch(r);try{n.hooks&&(e=n.hooks.preprocess(e));let o=(n.hooks?n.hooks.provideLexer(t):t?L.lex:L.lexInline)(e,n);n.hooks&&(o=n.hooks.processAllTokens(o)),n.walkTokens&&this.walkTokens(o,n.walkTokens);let l=(n.hooks?n.hooks.provideParser(t):t?R.parse:R.parseInline)(o,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(o){return r(o)}}}onError(t,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+z(i.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(i);throw i}}},P=new Jt;function y(t,e){return P.parse(t,e)}y.options=y.setOptions=function(t){return P.setOptions(t),y.defaults=P.defaults,_e(y.defaults),y};y.getDefaults=ue;y.defaults=q;y.use=function(...t){return P.use(...t),y.defaults=P.defaults,_e(y.defaults),y};y.walkTokens=function(t,e){return P.walkTokens(t,e)};y.parseInline=P.parseInline;y.Parser=R;y.parser=R.parse;y.Renderer=X;y.TextRenderer=xe;y.Lexer=L;y.lexer=L.lex;y.Tokenizer=G;y.Hooks=j;y.parse=y;y.options;y.setOptions;y.use;y.walkTokens;y.parseInline;R.parse;L.lex;const _="data-im-ref",ei=new Set(["button","link","menuitem","tab","checkbox","radio","switch","textbox","combobox","option"]),ti=new Set(["SCRIPT","STYLE","NOSCRIPT","LINK","META","HEAD","SVG","PATH"]);let te=0;function Ke(t){if(!(t instanceof HTMLElement))return!1;const e=window.getComputedStyle(t);if(e.display==="none"||e.visibility==="hidden"||e.opacity==="0")return!1;const i=t.getBoundingClientRect();return i.width>0&&i.height>0}function Fe(t){return t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLSelectElement?t.disabled:t.getAttribute("aria-disabled")==="true"}function ke(t){const e=t.getAttribute("role");if(e)return e.toLowerCase();const i=t.tagName.toLowerCase();if(i==="button")return"button";if(i==="a"&&t.hasAttribute("href"))return"link";if(i==="input"){const s=t.type;return s==="checkbox"?"checkbox":s==="radio"?"radio":"textbox"}if(i==="textarea")return"textbox";if(i==="select")return"combobox"}function Ue(t){var o,l,a;const e=t.getAttribute("aria-label");if(e)return e.trim();const i=t.getAttribute("title");if(i)return i.trim();const s=t.getAttribute("aria-labelledby");if(s){const u=document.getElementById(s);if(u!=null&&u.textContent)return u.textContent.trim().slice(0,80)}if(t.id){const u=document.querySelector(`label[for="${t.id}"]`);if(u!=null&&u.textContent)return u.textContent.trim().slice(0,80)}const n=t.closest("label");if(n){const u=n.cloneNode(!0);u.querySelectorAll("input,select,textarea").forEach(p=>p.remove());const c=(o=u.textContent)==null?void 0:o.trim();if(c)return c.slice(0,80)}if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){if(t.placeholder)return t.placeholder.trim();if(t.value)return t.value.trim()}if(t instanceof HTMLSelectElement)return((a=(l=t.options[t.selectedIndex])==null?void 0:l.text)==null?void 0:a.trim())??"";const r=Array.from(t.childNodes).filter(u=>u.nodeType===Node.TEXT_NODE).map(u=>{var c;return((c=u.textContent)==null?void 0:c.trim())??""}).join(" ").trim();return r?r.slice(0,80):(t.textContent??"").trim().slice(0,80)}function ii(t){const e=ke(t);if(e&&ei.has(e))return!0;const i=t.getAttribute("tabindex");return!!(i!==null&&i!=="-1"||t.hasAttribute("onclick"))}function Qe(t,e){if(ti.has(t.tagName)||t.closest("[data-im-overlay]"))return!0;for(const i of e)try{if(t.closest(i))return!0}catch{}return!1}function ni(t){const e={};for(const i of["id","class","role","aria-label","name","type","href"]){const s=t.getAttribute(i);s&&(e[i]=s.slice(0,120))}return e}function si(t){t.querySelectorAll(`[${_}]`).forEach(e=>e.removeAttribute(_))}function We(t,e,i,s){if(Qe(t,s)&&t!==document.body)return;const n="  ".repeat(e),r=t.getAttribute(_),o=ke(t),l=Ue(t),a=[];o&&a.push(o),!Fe(t)&&Ke(t)&&r&&a.push("[cursor=pointer]"),r&&a.push(`[ref=${r}]`);const u=a.length?` ${a.join(" ")}`:"",c=l?`: ${l}`:"";(r||t===document.body||t.children.length>0)&&i.push(`${n}- ${t.tagName.toLowerCase()}${u}${c}`);for(const p of t.children)We(p,e+1,i,s)}function C(t={}){const e=t.overlaySelectors??[];si(document.body);const i=[],s=new Map;te=0;const n=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT);let r=n.currentNode;for(;r;){if(!Qe(r,e)&&ii(r)&&Ke(r)){te+=1;const l=te;r.setAttribute(_,String(l));const a=r.getBoundingClientRect();i.push({ref:l,tagName:r.tagName.toLowerCase(),text:Ue(r),role:ke(r),attributes:ni(r),rect:{top:a.top,left:a.left,width:a.width,height:a.height},isVisible:!0,isDisabled:Fe(r)}),s.set(l,r)}r=n.nextNode()}const o=[];return We(document.body,0,o,e),{url:window.location.href,title:document.title,timestamp:Date.now(),elementCount:i.length,treeSnapshot:o.join(`
`),elements:i,elementByRef:s}}function oe(t){return`${`URL: ${t.url}
Title: ${t.title}
Elements: ${t.elementCount}
`}\`\`\`yaml
${t.treeSnapshot}
\`\`\``}const ri=new Set(["input","textarea","select"]);function ve(t,e){if(e.selector){const n=document.querySelector(e.selector);if(n){const r=n.getAttribute(_);if(r)return t.elements.find(o=>o.ref===Number(r))}}const i=t.elements.filter(n=>!(n.isDisabled||e.role&&n.role!==e.role||e.tagName&&n.tagName!==e.tagName.toLowerCase()||e.text&&n.text!==e.text||e.textContains&&!n.text.includes(e.textContains)));return i.length===0?void 0:i.length===1?i[0]:i.find(n=>ri.has(n.tagName))??i[0]}let Le=null;function le(t){const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}function N(t){return new Promise(e=>setTimeout(e,t))}function ce(t){if(t instanceof HTMLElement)try{t.focus({preventScroll:!0})}catch{try{t.focus()}catch{}}}function ai(t,e){const i=le(e),s={bubbles:!0,cancelable:!0,composed:!0,clientX:i.x,clientY:i.y};if(t&&t!==e){const n=le(t),r={...s,clientX:n.x,clientY:n.y,relatedTarget:e};t.dispatchEvent(new MouseEvent("mouseout",{...r,bubbles:!0})),t.dispatchEvent(new MouseEvent("mouseleave",{...r,bubbles:!1}))}e.dispatchEvent(new MouseEvent("mouseover",{...s,relatedTarget:t})),e.dispatchEvent(new MouseEvent("mouseenter",{...s,bubbles:!1,relatedTarget:t}));try{e.dispatchEvent(new PointerEvent("pointerover",{...s,bubbles:!0,pointerType:"mouse",relatedTarget:t})),e.dispatchEvent(new PointerEvent("pointerenter",{...s,bubbles:!1,pointerType:"mouse",relatedTarget:t}))}catch{}}function oi(t){const{x:e,y:i}=le(t),s={bubbles:!0,cancelable:!0,composed:!0,clientX:e,clientY:i};ce(t);try{t.dispatchEvent(new PointerEvent("pointerdown",{...s,pointerType:"mouse"})),t.dispatchEvent(new PointerEvent("pointerup",{...s,pointerType:"mouse"}))}catch{}t.dispatchEvent(new MouseEvent("mousedown",s)),t.dispatchEvent(new MouseEvent("mouseup",s)),t.dispatchEvent(new MouseEvent("click",s))}function li(t,e,i){if(t.find){const s=C({overlaySelectors:i}),n=ve(s,t.find);return n?s.elementByRef.get(n.ref)??null:null}return t.ref==null?null:e!=null&&e.elementByRef.has(t.ref)?e.elementByRef.get(t.ref):document.querySelector(`[${_}="${t.ref}"]`)}async function ci(t,e,i={}){var r,o,l,a,u,c,p,m,k,d,f,g,$;const s=i.overlaySelectors??[];if(t.action==="snapshot"){const v=C({overlaySelectors:s}),b={success:!0,message:`已采集 ${v.elementCount} 个可交互元素`,snapshot:v};return(r=i.onAfterAction)==null||r.call(i,t,b),b}if(t.action==="goto"){if(!t.navigateUrl)return{success:!1,message:"缺少 navigateUrl"};(o=i.onBeforeAction)==null||o.call(i,t,null),window.location.href=t.navigateUrl,await N(500);const v=C({overlaySelectors:s}),b={success:!0,message:`已导航到 ${t.navigateUrl}`,snapshot:v};return(l=i.onAfterAction)==null||l.call(i,t,b),b}if(t.action==="api")return{success:!1,message:"api 动作应由 runtime 处理"};const n=li(t,e,s);if(!n){const b={success:!1,message:`未找到元素：${t.find?JSON.stringify(t.find):`ref=${t.ref}`}`};return(a=i.onAfterAction)==null||a.call(i,t,b),b}(u=i.onBeforeAction)==null||u.call(i,t,n),await N(480);try{if(t.action==="click"){ai(Le,n),await N(120),oi(n),Le=n,await N(350);const b=C({overlaySelectors:s}),A={success:!0,message:`已点击「${ui(n)}」`,snapshot:b};return(c=i.onAfterAction)==null||c.call(i,t,A),A}if(t.action==="input"){const b=t.inputValue??"";if(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement){ce(n);const T=(p=Object.getOwnPropertyDescriptor(n instanceof HTMLInputElement?HTMLInputElement.prototype:HTMLTextAreaElement.prototype,"value"))==null?void 0:p.set;T?T.call(n,b):n.value=b,n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0}))}else if(n instanceof HTMLElement&&n.isContentEditable)n.textContent=b,n.dispatchEvent(new Event("input",{bubbles:!0}));else{const T={success:!1,message:"目标元素不支持文本输入"};return(m=i.onAfterAction)==null||m.call(i,t,T),T}await N(150);const A=C({overlaySelectors:s}),E={success:!0,message:`已输入：${b.slice(0,40)}`,snapshot:A};return(k=i.onAfterAction)==null||k.call(i,t,E),E}if(t.action==="select"){if(!(n instanceof HTMLSelectElement)){const E={success:!1,message:"目标元素不是 <select>"};return(d=i.onAfterAction)==null||d.call(i,t,E),E}ce(n),n.value=t.selectValue??"",n.dispatchEvent(new Event("change",{bubbles:!0})),await N(150);const b=C({overlaySelectors:s}),A={success:!0,message:`已选择：${t.selectValue}`,snapshot:b};return(f=i.onAfterAction)==null||f.call(i,t,A),A}const v={success:!1,message:`未知动作：${t.action}`};return(g=i.onAfterAction)==null||g.call(i,t,v),v}catch(v){const b={success:!1,message:v instanceof Error?v.message:"执行失败"};return($=i.onAfterAction)==null||$.call(i,t,b),b}}function ui(t){return(t.getAttribute("aria-label")??t.textContent??"").trim().slice(0,40)}function di(t,e){var s;const i=t.trim().toLowerCase();return(s=e.playbooks)==null?void 0:s.find(n=>n.triggers.some(r=>i.includes(r.toLowerCase())))}function pi(t,e){const i=[],s=[];let n=e;for(const r of t.steps){(r.find||r.tool==="snapshot")&&(n=C());const o=hi(r,n);if("error"in o){s.push(o.error);break}i.push(o.command)}return{commands:i,errors:s}}function hi(t,e){if(t.tool==="api")return{command:{action:"api",apiName:t.apiName,apiArgs:t.apiArgs,explanation:t.explanation}};if(t.tool==="snapshot")return{command:{action:"snapshot",explanation:t.explanation}};if(t.tool==="goto"&&t.navigateUrl)return{command:{action:"goto",navigateUrl:t.navigateUrl,explanation:t.explanation}};let i=t.ref;if(t.find){const s=ve(e,t.find);if(!s)return{error:`未在页面中找到：${JSON.stringify(t.find)}`};i=s.ref}return i==null?{error:`步骤缺少 ref 或 find：${t.explanation??t.tool}`}:{command:{action:t.tool,ref:i,find:t.find,inputValue:t.inputValue,selectValue:t.selectValue,explanation:t.explanation}}}function mi(t,e){const i=C({overlaySelectors:e.overlaySelectors}),s=di(t,e);if(!s)return{errors:[],reply:"未匹配到已配置的流程。请在站点包中添加 playbook，或由 Agent 根据 skills 动态规划。未配置 API 的能力不会自动 DOM 兜底。"};const{commands:n,errors:r}=pi(s,i);return r.length?{playbook:s,errors:r,reply:`流程「${s.description}」规划失败：${r.join("；")}`}:{playbook:s,commands:[{action:"snapshot",explanation:"操作前采集页面"},...n],errors:[],reply:`将执行流程「${s.description}」，共 ${n.length+1} 步。需要我自动操作吗？`}}function fi(t,e,i){var s;if(t.action==="api")return!t.apiName||!((s=i.apis)!=null&&s[t.apiName])?{allowed:!1,reason:`未配置 API「${t.apiName??"?"}」。界面模式仅执行站点包中声明的能力，不做 DOM 兜底。`}:{allowed:!0};for(const n of i.blockedActions){const r=n.when;if(!(r.action&&r.action!==t.action)){if(r.textContains&&t.ref!=null&&e){const o=e.elements.find(l=>l.ref===t.ref);if(o!=null&&o.text.includes(r.textContains))return{allowed:!1,reason:n.reason}}if(r.selector)try{if(t.ref!=null&&e){const o=e.elementByRef.get(t.ref);if(o!=null&&o.matches(r.selector)||o!=null&&o.closest(r.selector))return{allowed:!1,reason:n.reason}}}catch{}if(r.find&&e&&t.ref!=null){const o=e.elements.find(a=>a.ref===t.ref),l=ve(e,r.find);if(o&&l&&o.ref===l.ref)return{allowed:!1,reason:n.reason}}}}for(const n of i.requireConfirm??[])if(n.action===t.action&&n.textContains&&t.ref!=null&&e){const r=e.elements.find(o=>o.ref===t.ref);if(r!=null&&r.text.includes(n.textContains))return{allowed:!0,requireConfirm:!0}}return{allowed:!0}}async function gi(t,e){var n;const i=t.apiName?(n=e.apis)==null?void 0:n[t.apiName]:void 0;if(!i)return{success:!1,message:`API「${t.apiName}」未在站点包中注册`};const s=await i(t.apiArgs??{});return{success:s.success,message:s.message}}const bi="im-visual-root",xi="im-cursor",Re=["#3974ff","#7c3aed","#16a34a","#ea580c","#dc2626"];class ki{constructor(){h(this,"root",null);h(this,"cursor",null);h(this,"aura",null);h(this,"hideTimer",null);h(this,"cursorLabel",null)}mount(){if(this.root)return;vi();const e=document.createElement("div");e.id=bi,e.setAttribute("data-im-overlay","true"),Object.assign(e.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"2147483646"}),document.body.appendChild(e),this.root=e;const i=document.createElement("div");i.id=xi,i.setAttribute("data-im-overlay","true"),i.className="im-cursor im-cursor--hidden",i.innerHTML=`
      <svg class="im-cursor__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 3.5L20 12L13 13.5L9.5 20.5L5.5 3.5Z" fill="#3974ff" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
      <div class="im-cursor__label"></div>
    `,document.body.appendChild(i),this.cursor=i,this.cursorLabel=i.querySelector(".im-cursor__label")}showTarget(e,i,s){if(this.mount(),!this.root)return;this.clearHighlights();const n=e.getBoundingClientRect();if(n.width===0&&n.height===0)return;const r=Re[i%Re.length],o=document.createElement("div");o.className="im-highlight-glow",o.style.setProperty("top",`${n.top-6}px`),o.style.setProperty("left",`${n.left-6}px`),o.style.setProperty("width",`${n.width+12}px`),o.style.setProperty("height",`${n.height+12}px`),o.style.setProperty("--im-color",r),this.root.appendChild(o);const l=document.createElement("div");l.className="im-highlight-box",l.style.setProperty("top",`${n.top-2}px`),l.style.setProperty("left",`${n.left-2}px`),l.style.setProperty("width",`${n.width+4}px`),l.style.setProperty("height",`${n.height+4}px`),l.style.setProperty("--im-color",r),this.root.appendChild(l);const a=document.createElement("div");a.className="im-highlight-badge",a.textContent=s?`${s}`:`ref=${i}`,Object.assign(a.style,{top:`${Math.max(4,n.top-26)}px`,left:`${Math.min(n.left,window.innerWidth-120)}px`,background:r}),this.root.appendChild(a);const u=n.left+n.width/2,c=n.top+n.height/2;this.moveCursor(u,c,s)}moveCursor(e,i,s){this.cursor&&(this.cursor.classList.add("im-cursor--visible"),this.cursor.classList.remove("im-cursor--hidden"),this.cursor.style.transform=`translate(${e}px, ${i}px)`,this.cursorLabel&&(this.cursorLabel.textContent=s??"",this.cursorLabel.style.display=s?"block":"none"))}animateClick(){this.cursor&&(this.cursor.classList.remove("im-cursor--clicking"),this.cursor.offsetWidth,this.cursor.classList.add("im-cursor--clicking"))}showScreenFrame(e){var s;if(!e){(s=this.aura)==null||s.remove(),this.aura=null;return}if(this.aura)return;const i=document.createElement("div");i.className="im-screen-frame",i.setAttribute("data-im-overlay","true"),document.body.appendChild(i),this.aura=i}clearHighlights(){this.root&&(this.root.innerHTML="")}scheduleHide(e=1e3){this.hideTimer!==null&&clearTimeout(this.hideTimer),this.hideTimer=window.setTimeout(()=>this.hide(),e)}hide(){this.hideTimer!==null&&(clearTimeout(this.hideTimer),this.hideTimer=null),this.clearHighlights(),this.cursor&&(this.cursor.classList.remove("im-cursor--visible","im-cursor--clicking"),this.cursor.classList.add("im-cursor--hidden"))}destroy(){var e,i,s;(e=this.root)==null||e.remove(),(i=this.cursor)==null||i.remove(),(s=this.aura)==null||s.remove(),this.root=null,this.cursor=null,this.aura=null}}function vi(){if(document.getElementById("im-visual-styles"))return;const t=document.createElement("style");t.id="im-visual-styles",t.textContent=`
/* ── Virtual cursor ── */
.im-cursor {
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 2147483647;
  will-change: transform;
  transition: transform 0.35s cubic-bezier(.22,1,.36,1);
  filter: drop-shadow(0 2px 6px rgba(0,0,0,.3));
}
.im-cursor--visible { opacity: 1; transition: transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.2s; }
.im-cursor--hidden  { opacity: 0; transition: transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.2s; }
.im-cursor__svg {
  width: 32px; height: 32px;
  display: block;
}
.im-cursor--clicking .im-cursor__svg {
  animation: im-cursor-click 0.36s cubic-bezier(.22,1,.36,1) forwards;
}
@keyframes im-cursor-click {
  0%   { transform: scale(1) translate(0,0); }
  30%  { transform: scale(0.75) translate(2px, 2px); }
  70%  { transform: scale(1.05) translate(-1px,-1px); }
  100% { transform: scale(1) translate(0,0); }
}
.im-cursor__label {
  position: absolute;
  left: 28px; top: 16px;
  background: #1e293b;
  color: #f8fafc;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  font-family: system-ui, sans-serif;
  line-height: 1.4;
}

/* ── Highlight box ── */
.im-highlight-box {
  position: fixed;
  border: 2px solid var(--im-color, #3974ff);
  border-radius: 6px;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-color, #3974ff) 20%, transparent);
  pointer-events: none;
  animation: im-highlight-in 0.2s ease-out;
  box-sizing: border-box;
}
.im-highlight-glow {
  position: fixed;
  border-radius: 10px;
  background: color-mix(in srgb, var(--im-color, #3974ff) 12%, transparent);
  pointer-events: none;
  animation: im-glow-pulse 1.2s ease-in-out infinite;
}
@keyframes im-highlight-in {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes im-glow-pulse {
  0%, 100% { opacity: .6; }
  50%       { opacity: 1; }
}
.im-highlight-badge {
  position: fixed;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  pointer-events: none;
  white-space: nowrap;
  font-family: system-ui, sans-serif;
  box-shadow: 0 2px 6px rgba(0,0,0,.2);
}

/* ── Screen aura (active during execution) ── */
.im-screen-frame {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147483645;
  box-shadow: inset 0 0 0 3px rgba(57,116,255,.5);
  animation: im-aura 2s ease-in-out infinite;
}
@keyframes im-aura {
  0%, 100% { box-shadow: inset 0 0 0 3px rgba(57,116,255,.3); }
  50%       { box-shadow: inset 0 0 0 3px rgba(57,116,255,.6), inset 0 0 40px rgba(57,116,255,.08); }
}

[${_}] { /* ephemeral, no style */ }
`,document.head.appendChild(t)}const V={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1/chat/completions",models:["deepseek-chat","deepseek-reasoner"]},qwen:{name:"通义千问 (Qwen)",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",models:["qwen-turbo","qwen-plus","qwen-max","qwen-long"]},openai:{name:"OpenAI / 兼容接口",endpoint:"https://api.openai.com/v1/chat/completions",models:["gpt-4o","gpt-4o-mini","gpt-3.5-turbo"]},custom:{name:"自定义端点",endpoint:"",models:[],placeholder:"http://localhost:11434/v1/chat/completions"}},Ge="im_settings_v1";function yi(){try{const t=localStorage.getItem(Ge);if(t){const e=JSON.parse(t);return{provider:e.provider??"deepseek",apiKey:e.apiKey??"",apiEndpoint:e.apiEndpoint??V.deepseek.endpoint,model:e.model??"deepseek-chat"}}}catch{}return Si()}function wi(t){localStorage.setItem(Ge,JSON.stringify(t))}function Si(){return{provider:"deepseek",apiKey:"",apiEndpoint:V.deepseek.endpoint,model:"deepseek-chat"}}function H(t){return!!(t.apiKey.trim()&&t.apiEndpoint.trim()&&t.model.trim())}function $i(t){if(t)return{textContains:t.textContains,text:t.text,role:t.role,tagName:t.tagName,selector:t.selector}}const Ai=`你是一个网页「操作模式」AI 助手，可以控制浏览器页面帮用户完成操作。

## 可用工具

snapshot — 采集页面可交互元素（每次操作前必须先调用）
click    — 点击元素（用 find.textContains 按可见文字定位）
input    — 填写输入框
select   — 选择下拉选项
goto     — 跳转 URL
api      — 调用站点注册的业务接口（比 DOM 更可靠，优先使用）

## 严格输出格式

先用1-2句话描述计划，然后用以下格式输出操作步骤（代码块名称必须是 tool_calls）：

\`\`\`tool_calls
[
  {"action":"snapshot","explanation":"采集页面"},
  {"action":"click","find":{"textContains":"新建订单"},"explanation":"点击新建订单"},
  {"action":"input","find":{"role":"textbox","textContains":"客户名称"},"inputValue":"张三","explanation":"填写客户名"}
]
\`\`\`

重要：代码块必须命名为 tool_calls，不能用 json 或其他名称，否则系统无法解析。

## 规则

1. 操作序列必须以 snapshot 开头
2. 用 find.textContains 定位，不猜 ref 数字
3. 有 api 时优先调 api，不读 DOM
4. 高危操作不自动执行，提示用户手动处理
5. 找不到元素时诚实说明，不猜测`;async function*ze(t,e,i,s){var u,c,p,m;const n=Ai+(i?`

---
## 当前站点说明

${i}`:"");let r;try{r=await fetch(e.apiEndpoint,{method:"POST",signal:s,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e.apiKey}`},body:JSON.stringify({model:e.model,stream:!0,messages:[{role:"system",content:n},...t]})})}catch(k){if(k.name==="AbortError")return;yield`❌ 网络错误：${k.message}`;return}if(!r.ok){const k=await r.text().catch(()=>r.statusText);yield`❌ API ${r.status}：${k.slice(0,200)}`;return}const o=(u=r.body)==null?void 0:u.getReader();if(!o){yield"❌ 无法读取响应流";return}const l=new TextDecoder;let a="";try{for(;;){const{done:k,value:d}=await o.read();if(k)break;a+=l.decode(d,{stream:!0});const f=a.split(`
`);a=f.pop()??"";for(const g of f){if(!g.startsWith("data: "))continue;const $=g.slice(6).trim();if($==="[DONE]")return;try{const b=((m=(p=(c=JSON.parse($).choices)==null?void 0:c[0])==null?void 0:p.delta)==null?void 0:m.content)??"";b&&(yield b)}catch{}}}}finally{try{o.cancel()}catch{}}}const Xe=[/```tool_calls\s*([\s\S]*?)```/g,/```(?:json)?\s*(\[\s*\{[\s\S]*?"action"[\s\S]*?\}[\s\S]*?\])\s*```/g,/<tool_calls>\s*([\s\S]*?)<\/tool_calls>/g,/^(\[\s*\{"action"[\s\S]*?\])\s*$/m];function Ci(t){try{const e=JSON.parse(t.trim()),i=Array.isArray(e)?e:[e];if(i.every(s=>typeof s.action=="string"))return i}catch{}return null}function Me(t){for(const e of Xe){e.lastIndex=0;const i=e.exec(t);if(!i)continue;const s=Ci(i[1]);if(s)return s}return null}function ie(t){let e=t;for(const i of Xe.slice(0,3))i.lastIndex=0,e=e.replace(i,"");return e=e.replace(/\[\s*\{"action"[\s\S]*?\]\s*$/,""),e.trim()}let Ei=0;const Ie=()=>`im${++Ei}`;y.use({breaks:!0,gfm:!0});function Ti(t){return t?y.parse(t).replace(/<script[\s\S]*?<\/script>/gi,""):""}function Li(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Ri=`
:root {
  --im-blue: #3974ff;
  --im-purple: #7c3aed;
  --im-bg: #ffffff;
  --im-bg2: #f8fafc;
  --im-border: #e2e8f0;
  --im-text: #1e293b;
  --im-text2: #64748b;
  --im-radius: 14px;
  --im-shadow: 0 12px 48px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.08);
}

/* ── Launcher ── */
#im-launcher {
  position: fixed; bottom: 24px; right: 24px;
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(135deg, var(--im-blue), var(--im-purple));
  box-shadow: 0 4px 16px rgba(57,116,255,.42);
  border: none; outline: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  z-index: 2147483640;
  transition: transform .2s, box-shadow .2s;
}
#im-launcher:hover { transform: scale(1.1); box-shadow: 0 6px 24px rgba(57,116,255,.55); }
#im-launcher svg { width: 26px; height: 26px; fill: white; display: block; }
#im-launcher .im-notify-dot {
  position: absolute; top: 6px; right: 6px;
  width: 10px; height: 10px; border-radius: 50%;
  background: #f97316; border: 2px solid white;
  display: none;
}
#im-launcher.im-has-notify .im-notify-dot { display: block; }

/* ── Floating panel ── */
#im-float-panel {
  position: fixed; bottom: 84px; right: 24px;
  width: 380px;
  max-height: 600px;
  background: var(--im-bg);
  border-radius: var(--im-radius);
  box-shadow: var(--im-shadow);
  display: flex; flex-direction: column;
  overflow: hidden;
  z-index: 2147483639;
  transition: opacity .18s, transform .18s;
  transform-origin: bottom right;
  border: 1px solid var(--im-border);
}
#im-float-panel[data-hidden] {
  opacity: 0; transform: scale(.92) translateY(8px);
  pointer-events: none;
}

/* ── Panel header (drag handle) ── */
.im-panel-head {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 14px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  cursor: grab; user-select: none; flex-shrink: 0;
}
.im-panel-head:active { cursor: grabbing; }
.im-panel-head-logo {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--im-blue), var(--im-purple));
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.im-panel-head-logo svg { width: 16px; height: 16px; fill: white; }
.im-panel-head-titles { flex: 1; min-width: 0; }
.im-panel-head-name { font-size: 13px; font-weight: 700; color: #f8fafc; line-height: 1.3; }
.im-panel-head-site { font-size: 11px; color: #94a3b8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.im-panel-head-actions { display: flex; gap: 4px; flex-shrink: 0; }
.im-head-btn {
  width: 28px; height: 28px; border-radius: 7px;
  background: rgba(255,255,255,.08); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #94a3b8; font-size: 14px;
  transition: background .15s, color .15s;
}
.im-head-btn:hover { background: rgba(255,255,255,.16); color: #f8fafc; }
.im-head-btn svg { width: 14px; height: 14px; fill: currentColor; }

/* ── Views ── */
.im-view { display: flex; flex-direction: column; flex: 1; min-height: 0; }
.im-view[data-hidden] { display: none; }

/* ── Chat messages ── */
.im-messages {
  flex: 1; overflow-y: auto; padding: 14px;
  display: flex; flex-direction: column; gap: 12px;
  min-height: 0;
}
.im-messages::-webkit-scrollbar { width: 4px; }
.im-messages::-webkit-scrollbar-track { background: transparent; }
.im-messages::-webkit-scrollbar-thumb { background: var(--im-border); border-radius: 4px; }

.im-msg { display: flex; flex-direction: column; max-width: 88%; gap: 4px; }
.im-msg--user { align-self: flex-end; align-items: flex-end; }
.im-msg--assistant, .im-msg--info { align-self: flex-start; align-items: flex-start; }

.im-msg-bubble {
  padding: 10px 14px; border-radius: 12px;
  font-size: 13.5px; line-height: 1.55; word-break: break-word;
}
.im-msg--user .im-msg-bubble {
  background: linear-gradient(135deg, var(--im-blue), #2563eb);
  color: white; border-bottom-right-radius: 4px;
}
.im-msg--assistant .im-msg-bubble {
  background: var(--im-bg2); color: var(--im-text);
  border: 1px solid var(--im-border); border-bottom-left-radius: 4px;
}
.im-msg--info .im-msg-bubble {
  background: #eff6ff; color: #1d4ed8;
  border: 1px solid #bfdbfe; font-size: 12.5px;
  border-radius: 8px;
}

/* steps list inside a message */
.im-steps { margin: 8px 0 0; display: flex; flex-direction: column; gap: 5px; }
.im-step {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 12px; color: var(--im-text2);
}
.im-step-icon {
  width: 18px; height: 18px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; flex-shrink: 0; margin-top: 1px;
}
.im-step--ok .im-step-icon { background: #dcfce7; color: #16a34a; }
.im-step--fail .im-step-icon { background: #fee2e2; color: #dc2626; }
.im-step--pending .im-step-icon { background: #e0e7ff; color: var(--im-blue); }
.im-step--running .im-step-icon {
  background: var(--im-blue); color: white;
  animation: im-spin .8s linear infinite;
}
@keyframes im-spin { to { transform: rotate(360deg); } }

/* streaming dot */
.im-typing::after {
  content: '▋'; animation: im-blink .7s step-end infinite;
}
@keyframes im-blink { 50% { opacity: 0; } }

/* ── Mode bar ── */
.im-mode-bar {
  display: flex; gap: 6px; padding: 0 14px 10px;
  flex-shrink: 0;
}
.im-mode-pill {
  padding: 4px 12px; border-radius: 20px;
  font-size: 12px; font-weight: 500; cursor: pointer;
  border: 1.5px solid var(--im-border); background: none;
  color: var(--im-text2); transition: .15s;
}
.im-mode-pill.active {
  background: var(--im-blue); border-color: var(--im-blue); color: white;
}

/* ── Confirm bar ── */
.im-confirm-bar {
  display: flex; gap: 8px; padding: 10px 14px;
  background: #eff6ff; border-top: 1px solid #bfdbfe;
  flex-shrink: 0;
}
.im-confirm-bar[data-hidden] { display: none; }

/* ── Status bar ── */
.im-status-bar {
  padding: 7px 14px; font-size: 12px; color: var(--im-text2);
  background: var(--im-bg2); border-top: 1px solid var(--im-border);
  display: flex; align-items: center; gap: 6px; flex-shrink: 0;
}
.im-status-bar[data-hidden] { display: none; }
.im-status-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #10b981; flex-shrink: 0;
}
.im-status-dot.im-status-dot--busy {
  background: var(--im-blue);
  animation: im-pulse-dot 1s ease-in-out infinite;
}
@keyframes im-pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .5; transform: scale(.8); }
}

/* ── Input area ── */
.im-input-wrap {
  border-top: 1px solid var(--im-border); padding: 10px 14px;
  display: flex; flex-direction: column; gap: 8px; flex-shrink: 0;
}
.im-textarea {
  width: 100%; resize: none;
  border: 1.5px solid var(--im-border); border-radius: 10px;
  padding: 9px 12px; font-size: 13.5px;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5; outline: none; background: var(--im-bg2);
  color: var(--im-text); transition: border-color .15s;
  box-sizing: border-box;
}
.im-textarea:focus { border-color: var(--im-blue); background: white; }
.im-textarea::placeholder { color: #94a3b8; }
.im-input-row {
  display: flex; align-items: center; justify-content: space-between;
}
.im-send-btn {
  background: linear-gradient(135deg, var(--im-blue), var(--im-purple));
  color: white; border: none; border-radius: 8px;
  padding: 7px 18px; font-size: 13px; font-weight: 600;
  cursor: pointer; transition: opacity .15s;
}
.im-send-btn:hover { opacity: .88; }
.im-send-btn:disabled { opacity: .45; cursor: default; }

/* ── Buttons ── */
.im-btn {
  padding: 7px 14px; border-radius: 8px; font-size: 13px; font-weight: 600;
  cursor: pointer; border: 1.5px solid var(--im-border);
  background: white; color: var(--im-text); transition: .15s;
}
.im-btn:hover { background: var(--im-bg2); }
.im-btn--primary { background: var(--im-blue); color: white; border-color: var(--im-blue); }
.im-btn--primary:hover { opacity: .88; background: var(--im-blue); }
.im-btn--danger { background: white; color: #dc2626; border-color: #fca5a5; }
.im-btn--danger:hover { background: #fee2e2; }
.im-btn-sm { padding: 4px 10px; font-size: 12px; }

/* ── Settings view ── */
.im-settings {
  flex: 1; overflow-y: auto; padding: 16px;
  display: flex; flex-direction: column; gap: 16px; min-height: 0;
}
.im-settings-head {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; font-weight: 700; color: var(--im-text);
  padding-bottom: 8px; border-bottom: 1px solid var(--im-border);
}
.im-settings-head svg { width: 18px; height: 18px; fill: var(--im-blue); }
.im-field { display: flex; flex-direction: column; gap: 5px; }
.im-field label { font-size: 12px; font-weight: 600; color: var(--im-text2); letter-spacing: .03em; text-transform: uppercase; }
.im-field input, .im-field select {
  border: 1.5px solid var(--im-border); border-radius: 8px;
  padding: 8px 12px; font-size: 13.5px; outline: none;
  font-family: inherit; color: var(--im-text); background: var(--im-bg2);
  transition: border-color .15s; width: 100%; box-sizing: border-box;
}
.im-field input:focus, .im-field select:focus { border-color: var(--im-blue); background: white; }
.im-field input[type=password] { letter-spacing: .05em; }
.im-field-hint { font-size: 11.5px; color: var(--im-text2); }
.im-settings-save {
  width: 100%; padding: 10px; border-radius: 10px;
  background: linear-gradient(135deg, var(--im-blue), var(--im-purple));
  color: white; border: none; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: opacity .15s; margin-top: 4px;
}
.im-settings-save:hover { opacity: .88; }
.im-settings-status {
  padding: 10px 12px; border-radius: 8px; font-size: 12.5px;
  display: flex; align-items: center; gap: 8px;
}
.im-settings-status.ok { background: #dcfce7; color: #166534; }
.im-settings-status.warn { background: #fffbeb; color: #92400e; }

/* ── No-API-key notice ── */
.im-no-key-banner {
  margin: 0 14px 10px; padding: 10px 12px;
  background: #fffbeb; border: 1px solid #fde68a;
  border-radius: 8px; font-size: 12.5px; color: #92400e;
  display: flex; align-items: center; gap: 8px;
  cursor: pointer; text-decoration: none;
}
.im-no-key-banner:hover { background: #fef3c7; }
.im-no-key-banner[data-hidden] { display: none; }

/* ── Stop button (shown during execution) ── */
#im-stop-btn {
  background: #dc2626; color: white; border: none; border-radius: 8px;
  padding: 7px 16px; font-size: 13px; font-weight: 700;
  cursor: pointer; transition: opacity .15s;
  display: none;
}
#im-stop-btn.visible { display: inline-block; }
#im-stop-btn:hover { opacity: .85; }

/* ── Inline action bar (below assistant plan message) ── */
.im-msg-actions {
  display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;
}
.im-msg-actions .im-btn { font-size: 12px; padding: 5px 14px; }

/* ── Markdown inside chat bubbles ── */
.im-md { line-height: 1.6; word-break: break-word; }
.im-md p { margin: 0 0 8px; }
.im-md p:last-child { margin-bottom: 0; }
.im-md h1, .im-md h2 { font-size: 14px; font-weight: 700; margin: 10px 0 4px; }
.im-md h3, .im-md h4 { font-size: 13px; font-weight: 700; margin: 8px 0 3px; }
.im-md strong { font-weight: 700; }
.im-md em { font-style: italic; opacity: .9; }
.im-md code {
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
  font-size: 12px; padding: 1px 5px; border-radius: 4px;
  background: rgba(0,0,0,.07);
}
.im-msg--user .im-md code { background: rgba(255,255,255,.2); }
.im-md pre {
  background: #1e293b; color: #e2e8f0; border-radius: 8px;
  padding: 10px 12px; overflow-x: auto; margin: 6px 0;
  font-size: 12px; line-height: 1.5;
}
.im-md pre code { background: none; padding: 0; color: inherit; font-size: inherit; }
.im-md ul, .im-md ol { margin: 4px 0 6px 18px; padding: 0; }
.im-md li { margin: 2px 0; font-size: 13px; }
.im-md blockquote {
  border-left: 3px solid var(--im-blue); margin: 6px 0;
  padding: 4px 10px; opacity: .8; font-style: italic;
}
.im-md table { border-collapse: collapse; width: 100%; font-size: 12px; margin: 6px 0; }
.im-md th, .im-md td { border: 1px solid var(--im-border); padding: 4px 8px; text-align: left; }
.im-md th { background: var(--im-bg2); font-weight: 600; }
.im-md a { color: var(--im-blue); text-decoration: underline; }
.im-msg--user .im-md a { color: #bfdbfe; }
.im-md hr { border: none; border-top: 1px solid var(--im-border); margin: 8px 0; }
`;class zi{constructor(e){h(this,"pack");h(this,"skills");h(this,"visual",new ki);h(this,"settings");h(this,"llmHistory",[]);h(this,"launcher");h(this,"panel");h(this,"msgList");h(this,"textarea");h(this,"sendBtn");h(this,"confirmBar");h(this,"statusBar");h(this,"statusDot");h(this,"statusText");h(this,"noKeyBanner");h(this,"viewChat");h(this,"viewSettings");h(this,"uiMessages",[]);h(this,"pendingCmds",null);h(this,"busy",!1);h(this,"stopRequested",!1);h(this,"panelOpen",!1);h(this,"abortCtrl",null);h(this,"dragging",!1);h(this,"dragStart",{x:0,y:0,px:0,py:0});this.pack=e.sitePack,this.skills=e.skillsMarkdown,this.settings=yi(),this.visual.mount(),this.buildUI(),this.bindEvents(),this.pushInfo(`已加载站点包「${this.pack.name}」v${this.pack.version}
${H(this.settings)?`AI: ${this.settings.model}`:"⚠️ 未配置 API Key，演示模式（关键词匹配）"}`),this.updateNoKeyBanner()}buildUI(){if(!document.getElementById("im-panel-css")){const s=document.createElement("style");s.id="im-panel-css",s.textContent=Ri,document.head.appendChild(s)}const e=document.createElement("button");e.id="im-launcher",e.setAttribute("data-im-overlay","true"),e.setAttribute("aria-label","打开 InterfaceMode 助手"),e.innerHTML=`
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" opacity=".3"/>
        <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm1-14h-2v6h2V7zm0 8h-2v2h2v-2z"/>
      </svg>
      <div class="im-notify-dot"></div>`,document.body.appendChild(e),this.launcher=e;const i=document.createElement("div");i.id="im-float-panel",i.setAttribute("data-im-overlay","true"),i.setAttribute("data-hidden",""),i.innerHTML=`
      <!-- Header / drag handle -->
      <div class="im-panel-head" id="im-panel-head">
        <div class="im-panel-head-logo">
          <svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a4 4 0 110 8 4 4 0 010-8zm0 10c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        <div class="im-panel-head-titles">
          <div class="im-panel-head-name">InterfaceMode</div>
          <div class="im-panel-head-site">${this.pack.name}</div>
        </div>
        <div class="im-panel-head-actions">
          <button class="im-head-btn" id="im-btn-settings" title="设置" aria-label="设置">
            <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96a7.02 7.02 0 00-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87a.48.48 0 00.12.6l2.03 1.58c-.05.3-.09.63-.09.95 0 .32.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.6l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
          </button>
          <button class="im-head-btn" id="im-btn-close" title="关闭" aria-label="关闭">
            <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>
      </div>

      <!-- Chat view -->
      <div class="im-view" id="im-view-chat">
        <a class="im-no-key-banner" id="im-no-key-banner" href="#" tabindex="0">
          ⚠️ 未配置 AI API Key，当前使用关键词演示模式。点此配置 →
        </a>
        <div class="im-messages" id="im-messages"></div>
        <div class="im-confirm-bar" id="im-confirm-bar" data-hidden="">
          <span style="font-size:13px;color:#1d4ed8;flex:1">AI 已规划操作步骤，是否执行？</span>
          <button class="im-btn im-btn--primary im-btn-sm" id="im-confirm-btn">帮我操作</button>
          <button class="im-btn im-btn-sm" id="im-cancel-btn">取消</button>
        </div>
        <div class="im-status-bar" id="im-status-bar" data-hidden="">
          <div class="im-status-dot" id="im-status-dot"></div>
          <span id="im-status-text">就绪</span>
        </div>
        <div class="im-mode-bar">
          <button class="im-mode-pill active" data-mode="interface">操作模式</button>
          <button class="im-mode-pill" data-mode="chat">问答模式</button>
        </div>
        <div class="im-input-wrap">
          <textarea class="im-textarea" id="im-textarea" rows="2" placeholder="描述你想完成的操作，例如：查看今日营收…"></textarea>
          <div class="im-input-row">
            <span style="font-size:11.5px;color:#94a3b8">Enter 发送，Shift+Enter 换行</span>
            <div style="display:flex;gap:6px;align-items:center">
              <button id="im-stop-btn" title="停止执行" aria-label="停止执行">⏹ 停止</button>
              <button class="im-send-btn" id="im-send-btn">发送</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Settings view -->
      <div class="im-view" id="im-view-settings" data-hidden="">
        <div class="im-settings" id="im-settings-form">
          <div class="im-settings-head">
            <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96a7.02 7.02 0 00-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87a.48.48 0 00.12.6l2.03 1.58c-.05.3-.09.63-.09.95 0 .32.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.6l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            AI 接口配置
          </div>
          <div class="im-settings-status" id="im-settings-status"></div>
          <div class="im-field">
            <label>服务商</label>
            <select id="im-provider-select">
              <option value="deepseek">DeepSeek</option>
              <option value="qwen">通义千问 (Qwen)</option>
              <option value="openai">OpenAI / 兼容接口</option>
              <option value="custom">自定义端点</option>
            </select>
          </div>
          <div class="im-field">
            <label>API 端点</label>
            <input type="text" id="im-endpoint-input" placeholder="https://api.deepseek.com/v1/chat/completions"/>
            <div class="im-field-hint" id="im-endpoint-hint"></div>
          </div>
          <div class="im-field">
            <label>API Key</label>
            <input type="password" id="im-key-input" placeholder="sk-…"/>
          </div>
          <div class="im-field">
            <label>模型</label>
            <select id="im-model-select"><option value="">请先选择服务商</option></select>
          </div>
          <button class="im-settings-save" id="im-save-btn">保存设置</button>
          <button class="im-btn" id="im-back-btn" style="width:100%">← 返回对话</button>
        </div>
      </div>
    `,document.body.appendChild(i),this.panel=i,this.msgList=i.querySelector("#im-messages"),this.textarea=i.querySelector("#im-textarea"),this.sendBtn=i.querySelector("#im-send-btn"),this.confirmBar=i.querySelector("#im-confirm-bar"),this.statusBar=i.querySelector("#im-status-bar"),this.statusDot=i.querySelector("#im-status-dot"),this.statusText=i.querySelector("#im-status-text"),this.noKeyBanner=i.querySelector("#im-no-key-banner"),this.viewChat=i.querySelector("#im-view-chat"),this.viewSettings=i.querySelector("#im-view-settings"),this.fillSettingsForm()}bindEvents(){this.launcher.addEventListener("click",()=>this.togglePanel()),this.panel.querySelector("#im-btn-close").addEventListener("click",()=>this.togglePanel(!1)),this.panel.querySelector("#im-btn-settings").addEventListener("click",()=>this.showView("settings")),this.panel.querySelector("#im-back-btn").addEventListener("click",()=>this.showView("chat")),this.noKeyBanner.addEventListener("click",s=>{s.preventDefault(),this.showView("settings")}),this.sendBtn.addEventListener("click",()=>this.handleSend()),this.textarea.addEventListener("keydown",s=>{s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this.handleSend())}),this.panel.querySelector("#im-confirm-btn").addEventListener("click",()=>this.confirmExecute()),this.panel.querySelector("#im-cancel-btn").addEventListener("click",()=>this.cancelPending()),this.panel.querySelector("#im-stop-btn").addEventListener("click",()=>this.requestStop()),this.panel.querySelectorAll(".im-mode-pill").forEach(s=>{s.addEventListener("click",()=>{this.panel.querySelectorAll(".im-mode-pill").forEach(n=>n.classList.remove("active")),s.classList.add("active")})}),this.panel.querySelector("#im-provider-select").addEventListener("change",()=>this.onProviderChange()),this.panel.querySelector("#im-save-btn").addEventListener("click",()=>this.saveSettingsFromForm()),this.panel.querySelector("#im-panel-head").addEventListener("mousedown",s=>this.startDrag(s)),document.addEventListener("mousemove",s=>this.onDrag(s)),document.addEventListener("mouseup",()=>this.endDrag())}togglePanel(e){this.panelOpen=e??!this.panelOpen,this.panelOpen?(this.panel.removeAttribute("data-hidden"),this.launcher.classList.remove("im-has-notify")):this.panel.setAttribute("data-hidden","")}showView(e){e==="chat"?(this.viewChat.removeAttribute("data-hidden"),this.viewSettings.setAttribute("data-hidden","")):(this.viewSettings.removeAttribute("data-hidden"),this.viewChat.setAttribute("data-hidden",""))}startDrag(e){if(e.target.closest("button"))return;this.dragging=!0;const i=this.panel.getBoundingClientRect();this.dragStart={x:e.clientX,y:e.clientY,px:i.left,py:i.top},this.panel.style.transition="none",e.preventDefault()}onDrag(e){if(!this.dragging)return;const i=e.clientX-this.dragStart.x,s=e.clientY-this.dragStart.y;this.panel.style.left=`${this.dragStart.px+i}px`,this.panel.style.top=`${this.dragStart.py+s}px`,this.panel.style.right="auto",this.panel.style.bottom="auto"}endDrag(){this.dragging&&(this.dragging=!1,this.panel.style.transition="")}fillSettingsForm(){const e=this.settings,i=this.panel.querySelector("#im-provider-select"),s=this.panel.querySelector("#im-endpoint-input"),n=this.panel.querySelector("#im-key-input");i.value=e.provider,s.value=e.apiEndpoint,n.value=e.apiKey,this.renderModelOptions(e.provider,e.model),this.updateSettingsStatus()}onProviderChange(){const e=this.panel.querySelector("#im-provider-select"),i=this.panel.querySelector("#im-endpoint-input"),s=this.panel.querySelector("#im-endpoint-hint"),n=e.value,r=V[n];r.endpoint&&(i.value=r.endpoint),s.textContent=r.placeholder??"",this.renderModelOptions(n,"")}renderModelOptions(e,i){const s=this.panel.querySelector("#im-model-select"),n=V[e].models;if(n.length===0){s.innerHTML='<option value="">请输入模型名称</option>';const r=document.createElement("input");r.type="text",r.id="im-model-input",r.placeholder="例如: llama3",r.style.cssText="border:1.5px solid var(--im-border);border-radius:8px;padding:8px 12px;width:100%;box-sizing:border-box;font-size:13.5px;",r.value=i,s.replaceWith(r)}else s.innerHTML=n.map(r=>`<option value="${r}" ${r===i?"selected":""}>${r}</option>`).join("")}saveSettingsFromForm(){const e=this.panel.querySelector("#im-provider-select"),i=this.panel.querySelector("#im-endpoint-input"),s=this.panel.querySelector("#im-key-input"),n=this.panel.querySelector("#im-model-select, #im-model-input");this.settings={provider:e.value,apiEndpoint:i.value.trim(),apiKey:s.value.trim(),model:n.value.trim()},wi(this.settings),this.updateSettingsStatus(),this.updateNoKeyBanner(),this.pushInfo(`设置已保存。AI 模型：${this.settings.model||"（未配置）"}`),setTimeout(()=>this.showView("chat"),600)}updateSettingsStatus(){var i;const e=this.panel.querySelector("#im-settings-status");H(this.settings)?(e.className="im-settings-status ok",e.textContent=`✓ 已配置：${this.settings.model}（${((i=V[this.settings.provider])==null?void 0:i.name)??this.settings.provider}）`):(e.className="im-settings-status warn",e.textContent="⚠ 尚未配置 API Key，助手将使用关键词演示模式")}updateNoKeyBanner(){H(this.settings)?this.noKeyBanner.setAttribute("data-hidden",""):this.noKeyBanner.removeAttribute("data-hidden")}pushInfo(e){const i={id:Ie(),role:"info",text:e};return this.uiMessages.push(i),this.renderMessage(i),i}pushMsg(e,i,s=!1){const n={id:Ie(),role:e,text:i,streaming:s};return this.uiMessages.push(n),this.renderMessage(n),n}updateMsg(e,i){Object.assign(e,i);const s=this.msgList.querySelector(`[data-msg-id="${e.id}"]`);s?s.replaceWith(this.buildMsgEl(e)):this.renderMessage(e)}renderMessage(e){this.msgList.appendChild(this.buildMsgEl(e)),this.msgList.scrollTop=this.msgList.scrollHeight}buildMsgEl(e){var n;const i=document.createElement("div");i.className=`im-msg im-msg--${e.role}`,i.setAttribute("data-msg-id",e.id);const s=document.createElement("div");if(s.className=`im-msg-bubble${e.streaming?" im-typing":""}`,e.streaming||e.role==="user")s.textContent=e.text;else{const r=document.createElement("div");r.className="im-md",r.innerHTML=Ti(e.text),s.appendChild(r)}if(i.appendChild(s),(n=e.steps)!=null&&n.length){const r=document.createElement("div");r.className="im-steps",e.steps.forEach(o=>{const l=document.createElement("div"),a=o.ok===void 0?"im-step--pending":o.ok?"im-step--ok":"im-step--fail",u=o.ok===void 0?"●":o.ok?"✓":"✗";l.className=`im-step ${a}`,l.innerHTML=`<div class="im-step-icon">${u}</div><span>${Li(o.label)}</span>`,r.appendChild(l)}),i.appendChild(r)}if(e.hasPendingActions&&!e.streaming){const r=document.createElement("div");r.className="im-msg-actions";const o=document.createElement("button");o.className="im-btn im-btn--primary",o.textContent="▶ 帮我操作",o.addEventListener("click",()=>{o.disabled=!0,o.textContent="执行中…";const a=document.getElementById("im-confirm-btn");a==null||a.click()});const l=document.createElement("button");l.className="im-btn",l.textContent="取消",l.addEventListener("click",()=>{const a=document.getElementById("im-cancel-btn");a==null||a.click(),r.remove()}),r.appendChild(o),r.appendChild(l),i.appendChild(r)}return i}setStatus(e,i=!1){this.statusBar.removeAttribute("data-hidden"),this.statusText.textContent=e,this.statusDot.className=i?"im-status-dot im-status-dot--busy":"im-status-dot"}clearStatus(){this.statusBar.setAttribute("data-hidden","")}handleSend(){const e=this.textarea.value.trim();!e||this.busy||(this.textarea.value="",this.pushMsg("user",e),this.processUserMessage(e))}async processUserMessage(e){this.setBusy(!0),this.pendingCmds=null,this.confirmBar.setAttribute("data-hidden",""),H(this.settings)?await this.processWithLLM(e):await this.processWithPlanner(e),this.setBusy(!1)}async processWithLLM(e){const i=C({overlaySelectors:this.pack.overlaySelectors??[]}),s=oe(i),n=`${e}

---
当前页面快照：
${s}`;this.llmHistory.push({role:"user",content:n});const r=this.pushMsg("assistant","",!0);let o="";this.setStatus("AI 思考中…",!0),this.abortCtrl=new AbortController;for await(const u of ze(this.llmHistory,this.settings,this.skills,this.abortCtrl.signal)){o+=u;const c=ie(o);this.updateMsg(r,{text:c,streaming:!0}),this.msgList.scrollTop=this.msgList.scrollHeight}this.abortCtrl=null;const l=ie(o),a=Me(o);this.llmHistory.push({role:"assistant",content:o}),a&&a.length>0?(this.pendingCmds=this.parsedToCommands(a),this.updateMsg(r,{text:l||`已规划 ${this.pendingCmds.length} 步操作，点击下方按钮执行。`,streaming:!1,hasPendingActions:!0}),this.confirmBar.removeAttribute("data-hidden"),this.setStatus(`已规划 ${this.pendingCmds.length} 步操作，等待确认`,!1),this.launcher.classList.add("im-has-notify")):(this.updateMsg(r,{text:l||"（LLM 未返回操作步骤）",streaming:!1}),this.clearStatus())}async processWithPlanner(e){this.setStatus("规划中…",!0);const i=mi(e,this.pack),s=this.pushMsg("assistant","",!0);await this.fakeTyping(s,i.reply),i.commands&&i.commands.length>0?(this.pendingCmds=i.commands,this.confirmBar.removeAttribute("data-hidden"),this.setStatus(`已规划 ${i.commands.length} 步操作，等待确认`,!1),this.launcher.classList.add("im-has-notify"),this.updateMsg(s,{text:i.reply,steps:i.commands.map(n=>({label:n.explanation??`${n.action}`,ok:void 0})),hasPendingActions:!0,streaming:!1})):this.clearStatus()}confirmExecute(){if(!this.pendingCmds)return;const e=this.pendingCmds;this.pendingCmds=null,this.confirmBar.setAttribute("data-hidden",""),this.launcher.classList.remove("im-has-notify"),this.msgList.querySelectorAll(".im-msg-actions").forEach(i=>i.remove()),this.runCommands(e)}cancelPending(){this.pendingCmds=null,this.confirmBar.setAttribute("data-hidden",""),this.msgList.querySelectorAll(".im-msg-actions").forEach(e=>e.remove()),this.clearStatus(),this.pushInfo("已取消操作")}async runCommands(e){this.setBusy(!0),this.visual.showScreenFrame(!0);let i=e,s=null;const n=10;for(let r=0;r<n;r++){const o=r===0,l=this.pushMsg("assistant",o?"正在执行操作…":"继续执行…"),a=i.map(f=>({label:f.explanation??f.action,ok:void 0}));this.updateMsg(l,{steps:[...a],streaming:!0});let u=s??C({overlaySelectors:this.pack.overlaySelectors??[]});const c=[];let p=!1;for(let f=0;f<i.length;f++){if(this.stopRequested){p=!0;break}const g=i[f];this.setStatus(`第 ${r+1} 轮 · 步骤 ${f+1}/${i.length}：${g.explanation??g.action}`,!0);const $=fi(g,u,this.pack);if(!$.allowed){a[f]={label:`🚫 ${a[f].label}（已拦截）`,ok:!1},this.updateMsg(l,{steps:[...a]}),this.pushInfo(`操作被拦截：${$.reason}`),p=!0;break}if($.requireConfirm){this.pendingCmds=i.slice(f),this.confirmBar.removeAttribute("data-hidden"),this.setStatus("⚠️ 需要再次确认才能继续",!1),p=!0;break}if(g.action==="api"){a[f]={label:`⏳ ${a[f].label}`,ok:void 0},this.updateMsg(l,{steps:[...a]});try{const b=await gi(g,this.pack);a[f]={label:`${a[f].label.replace("⏳ ","")} → ${b.message.slice(0,80)}`,ok:b.success},c.push(`API ${g.apiName}: ${b.message}`)}catch{a[f]={label:`${a[f].label} [错误]`,ok:!1}}this.updateMsg(l,{steps:[...a]});continue}const v=await ci(g,u,{overlaySelectors:this.pack.overlaySelectors??[],onBeforeAction:(b,A)=>{if(A){const E=parseInt(A.getAttribute("data-im-ref")??"0",10);this.visual.showTarget(A,E,b.explanation),a[f]={label:`⏳ ${a[f].label}`,ok:void 0},this.updateMsg(l,{steps:[...a]})}},onAfterAction:(b,A)=>{g.action==="click"&&this.visual.animateClick(),this.visual.scheduleHide(1200)}});if(v.snapshot&&(u=v.snapshot),a[f]={label:a[f].label.replace("⏳ ",""),ok:v.success},v.success||(a[f].label+=` [${v.message}]`),this.updateMsg(l,{steps:[...a]}),c.push(`${g.action}: ${v.success?v.message:"失败 — "+v.message}`),!v.success&&g.action!=="snapshot"){this.setStatus(`步骤失败：${v.message}`,!1),p=!0;break}}if(s=u,this.updateMsg(l,{steps:[...a],streaming:!1}),p||this.stopRequested||!H(this.settings)||c.length===0)break;this.llmHistory.push({role:"user",content:`工具执行结果（第 ${r+1} 轮）：
${c.join(`
`)}`}),this.setStatus("AI 分析结果，规划下一步…",!0);let m="";for await(const f of ze(this.llmHistory,this.settings,this.skills))m+=f;this.llmHistory.push({role:"assistant",content:m});const k=Me(m),d=ie(m);if(k&&k.length>0)d&&this.pushMsg("assistant",d),i=this.parsedToCommands(k);else{d&&this.pushMsg("assistant",d);break}}this.visual.showScreenFrame(!1),this.visual.scheduleHide(600),this.clearStatus(),this.setBusy(!1)}setBusy(e){this.busy=e,this.sendBtn.disabled=e,this.textarea.disabled=e;const i=this.panel.querySelector("#im-stop-btn");i&&i.classList.toggle("visible",e),e||(this.stopRequested=!1,this.textarea.focus())}requestStop(){var e;this.busy&&(this.stopRequested=!0,(e=this.abortCtrl)==null||e.abort(),this.setStatus("⏹ 用户已停止执行",!1),this.pushInfo("操作已由用户停止。"))}parsedToCommands(e){return e.map(i=>({action:i.action,find:$i(i.find),ref:i.ref,inputValue:i.inputValue,selectValue:i.selectValue,navigateUrl:i.navigateUrl,apiName:i.apiName,apiArgs:i.apiArgs,explanation:i.explanation??i.action}))}async fakeTyping(e,i){const s=i.split(" ");let n="";for(const r of s)n+=(n?" ":"")+r,this.updateMsg(e,{text:n,streaming:!0}),await new Promise(o=>setTimeout(o,24));this.updateMsg(e,{text:i,streaming:!1})}debugSnapshot(){const e=C({overlaySelectors:this.pack.overlaySelectors??[]});console.group("[InterfaceMode] Snapshot"),console.log(oe(e)),console.groupEnd()}}const Ye=`# 测试商户后台 — InterfaceMode 运行时引导\r
\r
> **这是运行时系统提示词**，由 \`im-sitepack-builder\` Cursor Skill 生成。\r
> 它告诉 LLM 在界面模式下这个站点有哪些能力、限制和操作路径。\r
> 如需为新网站生成类似文件，请使用 \`.cursor/skills/im-sitepack-builder\` 技能。\r
\r
---\r
\r
## 可自动化功能\r
\r
### 1. 订单管理\r
\r
| 能力 | 操作路径 |\r
|------|---------|\r
| 创建新订单 | 导航至「订单管理」→ 点击「新建订单」→ 填写客户名称和金额 → 点击提交 |\r
| 查看订单列表 | 点击左侧菜单「订单管理」 |\r
| 刷新订单列表 | 在订单管理页点击「刷新列表」 |\r
\r
### 2. 数据查询（API 优先，不读 DOM）\r
\r
| 能力 | 调用方式 |\r
|------|---------|\r
| 今日营收 | \`api: getTodayRevenue\` — 返回 \`{ revenue, orderCount }\` |\r
\r
> ⚠️ **重要**：营收数据必须通过 API 获取，禁止尝试读取 DOM 上的数字。\r
\r
### 3. 门店设置\r
\r
| 能力 | 说明 |\r
|------|------|\r
| 查看设置 | 点击左侧「门店设置」|\r
| 修改门店名称/手机 | 演示环境中为只读，告知用户不可自动修改 |\r
\r
---\r
\r
## 禁止操作\r
\r
- **注销商户账号**：高危操作，禁止任何自动执行，务必告知用户需手动进行。\r
- **批量删除订单**：不在当前功能范围内。\r
\r
---\r
\r
## 页面导航\r
\r
- 左侧菜单包含：经营概览 | 订单管理 | 门店设置\r
- 通过点击菜单文字切换视图，点击后等待 350ms 再操作新页面内容\r
\r
---\r
\r
## 操作规范\r
\r
1. 每次任务开始时先执行 \`snapshot\` 采集页面\r
2. 用 \`find.textContains\` 定位元素（例如 \`{"textContains":"新建订单"}\`）\r
3. 填写表单后，等待 150ms 再提交\r
4. 如果步骤失败，不要重试超过 2 次，直接告知用户\r
\r
---\r
\r
---\r
\r
> 本文件由 \`im-sitepack-builder\` Skill 生成。如需为其他站点创建类似配置，\r
> 在 Cursor 中对话：「为 xxx 网站生成 InterfaceMode 站点包」即可触发向导。\r
`,Je={siteId:"nebula-merchant-demo",name:"测试商户后台",version:"0.1.0",skillsMarkdown:Ye,overlaySelectors:["[data-im-overlay]"],blockedActions:[{id:"block-delete-merchant",reason:"注销商户账号属于高危操作，站点包禁止自动执行，请手动操作。",when:{action:"click",textContains:"注销商户"}}],requireConfirm:[],apis:{getTodayRevenue:async()=>{const t=pt();return{success:!0,message:`今日营收 **¥${t.revenue.toLocaleString("zh-CN")}**，共 **${t.orders}** 笔订单`,data:t}}},playbooks:[{id:"create_order",description:"创建一笔新订单",triggers:["创建订单","新建订单","下一单","创建一笔订单","下个订单"],steps:[{tool:"snapshot",explanation:"采集当前页面"},{tool:"click",find:{textContains:"订单管理"},explanation:"导航到订单管理页"},{tool:"snapshot",explanation:"页面跳转后重新采集"},{tool:"click",find:{textContains:"新建订单"},explanation:"点击「新建订单」打开弹窗"},{tool:"snapshot",explanation:"弹窗打开后采集表单元素"},{tool:"input",find:{role:"textbox",textContains:"客户"},inputValue:"InterfaceMode 演示客户",explanation:"填写客户名称"},{tool:"input",find:{role:"textbox",textContains:"订单金额"},inputValue:"1999",explanation:"填写订单金额 1999 元"},{tool:"click",find:{textContains:"提交订单"},explanation:"提交订单"}]},{id:"view_revenue",description:"查看今日营收（API）",triggers:["今日营收","查看营收","今天赚了","查看今日营收","营收"],steps:[{tool:"api",apiName:"getTodayRevenue",explanation:"调用数据接口获取今日营收"}]},{id:"full_tour",description:"依次巡视经营概览、订单管理、门店设置三个页面",triggers:["全站巡检","全页面巡检","依次打开所有页面","巡视所有页面","遍历页面","全部页面"],steps:[{tool:"snapshot",explanation:"采集初始页面"},{tool:"click",find:{textContains:"经营概览"},explanation:"导航到「经营概览」"},{tool:"snapshot",explanation:"采集概览页"},{tool:"click",find:{textContains:"订单管理"},explanation:"导航到「订单管理」"},{tool:"snapshot",explanation:"采集订单管理页"},{tool:"click",find:{textContains:"门店设置"},explanation:"导航到「门店设置」"},{tool:"snapshot",explanation:"采集设置页，巡检完毕"}]},{id:"full_demo",description:"完整综合演示：查营收 → 去订单 → 新建订单 → 提交",triggers:["完整演示","综合演示","全流程","全流程演示","演示所有功能","帮我演示","demo"],steps:[{tool:"api",apiName:"getTodayRevenue",explanation:"第 1 步：调用 API 查询今日营收"},{tool:"snapshot",explanation:"采集当前页面"},{tool:"click",find:{textContains:"订单管理"},explanation:"第 2 步：导航到订单管理页"},{tool:"snapshot",explanation:"订单管理页重新采集"},{tool:"click",find:{textContains:"刷新列表"},explanation:"第 3 步：刷新订单列表"},{tool:"click",find:{textContains:"新建订单"},explanation:"第 4 步：打开新建订单弹窗"},{tool:"snapshot",explanation:"采集弹窗内表单"},{tool:"input",find:{role:"textbox",textContains:"客户"},inputValue:"全流程演示-自动生成",explanation:"第 5 步：填写客户名称"},{tool:"input",find:{role:"textbox",textContains:"订单金额"},inputValue:"8888",explanation:"第 6 步：填写金额 8888 元（幸运数字）"},{tool:"click",find:{textContains:"提交订单"},explanation:"第 7 步：提交订单"},{tool:"snapshot",explanation:"提交后重新采集"},{tool:"click",find:{textContains:"经营概览"},explanation:"第 8 步：返回经营概览查看更新数据"}]},{id:"go_settings",description:"打开门店设置页",triggers:["门店设置","打开设置","查看设置","设置页"],steps:[{tool:"snapshot",explanation:"采集页面"},{tool:"click",find:{textContains:"门店设置"},explanation:"进入门店设置页"}]}]},et=document.getElementById("root");if(!et)throw new Error("#root not found");dt(et);const Mi=new zi({sitePack:Je,skillsMarkdown:Ye});window.__im={snapshot:()=>oe(C({overlaySelectors:Je.overlaySelectors})),runtime:Mi};console.info("[InterfaceMode] 助手已就绪。调试：window.__im.snapshot()");

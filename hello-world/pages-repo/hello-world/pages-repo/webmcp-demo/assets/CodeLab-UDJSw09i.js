import{c as H,_ as W,q as D,o as N,s as R,b as c,d as o,f as x,u as k,C as O,F as h,r as g,g as T,v as V,x as F,t as d,y as U,p as u,z as L,j as p,m as J,n as S}from"./index-DTGDGpB7.js";import{u as X,C as Y}from"./ConsolePanel-B6rejUtu.js";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=H("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),K={class:"lab"},Q={class:"lab__header"},Z={class:"lab__title-group"},ee={class:"lab__actions"},ne=["value"],te=["value"],oe={class:"lab__workspace"},se={class:"editor-panel"},ie={class:"editor__tabs"},le=["onClick"],ae={class:"editor__tab-lines"},re={class:"editor__body"},ce={class:"editor__lines"},de={class:"preview-panel"},pe={key:0,class:"preview-console"},ue={class:"preview-console__header"},fe={class:"preview-console__count"},me={class:"preview-console__body"},ve={class:"preview-console__time"},he={__name:"CodeLab",setup(ge){const{isReady:M,logs:z,log:w,registerTool:r}=X(),f={blank:{name:"空白页",html:`<div class="app">
  <h1>Hello World</h1>
  <p>开始编辑吧！</p>
</div>`,css:`.app {
  max-width: 480px;
  margin: 40px auto;
  padding: 24px;
  font-family: system-ui, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 8px;
}

p {
  color: #666;
}`,js:'console.log("Hello from Code Lab!");'},card:{name:"信息卡片",html:`<div class="card">
  <div class="card-avatar">WM</div>
  <h2 class="card-title">WebMCP Playground</h2>
  <p class="card-desc">浏览器原生 AI 工具协议体验平台</p>
  <div class="card-stats">
    <div class="stat">
      <span class="stat-num">7</span>
      <span class="stat-label">场景</span>
    </div>
    <div class="stat">
      <span class="stat-num">50+</span>
      <span class="stat-label">工具</span>
    </div>
  </div>
  <button class="card-btn" onclick="handleClick()">了解更多</button>
</div>`,css:`body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  font-family: system-ui, sans-serif;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 320px;
}

.card-avatar {
  font-size: 48px;
  margin-bottom: 16px;
}

.card-title {
  font-size: 20px;
  color: #111;
  margin: 0 0 8px;
}

.card-desc {
  color: #666;
  font-size: 14px;
  margin: 0 0 20px;
}

.card-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 20px;
}

.stat-num {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #10b981;
}

.stat-label {
  font-size: 12px;
  color: #999;
}

.card-btn {
  background: #10b981;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.card-btn:hover {
  background: #059669;
}`,js:`function handleClick() {
  console.log("按钮被点击了！");
  alert("欢迎体验 WebMCP Playground!");
}`},todo:{name:"Todo 列表",html:`<div class="todo-app">
  <h1>📋 Todo List</h1>
  <div class="todo-input">
    <input type="text" id="input" placeholder="添加新任务..." />
    <button onclick="addTodo()">添加</button>
  </div>
  <ul id="list"></ul>
  <div class="todo-footer">
    <span id="count">0 个任务</span>
    <button onclick="clearDone()">清除已完成</button>
  </div>
</div>`,css:`body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
  background: #fafafa;
  font-family: system-ui, sans-serif;
}

.todo-app {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 380px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

h1 {
  font-size: 22px;
  margin: 0 0 16px;
}

.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.todo-input input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}

.todo-input input:focus {
  border-color: #10b981;
}

.todo-input button, .todo-footer button {
  padding: 10px 16px;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

li.done span {
  text-decoration: line-through;
  color: #aaa;
}

li input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #10b981;
}

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-size: 13px;
  color: #999;
}

.todo-footer button {
  background: #f5f5f5;
  color: #666;
  font-size: 12px;
  padding: 6px 12px;
}`,js:`const todos = [];

function addTodo() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  input.value = "";
  render();
  console.log(\`添加任务: \${text}\`);
}

function toggleTodo(i) {
  todos[i].done = !todos[i].done;
  render();
}

function clearDone() {
  const removed = todos.filter(t => t.done).length;
  todos.length = 0;
  todos.push(...todos.filter(t => !t.done));
  render();
  console.log(\`清除了 \${removed} 个已完成任务\`);
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = todos.map((t, i) =>
    \`<li class="\${t.done ? "done" : ""}">
      <input type="checkbox" \${t.done ? "checked" : ""} onchange="toggleTodo(\${i})" />
      <span>\${t.text}</span>
    </li>\`
  ).join("");
  document.getElementById("count").textContent = \`\${todos.length} 个任务\`;
}

document.getElementById("input").addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo();
});

console.log("Todo App 已就绪");`}},l=u("html"),b=u("blank"),s=u({html:f.blank.html,css:f.blank.css,js:f.blank.js}),i=u([]),_=u(null),j=u(null),E=[{key:"html",label:"HTML",color:"#f06529"},{key:"css",label:"CSS",color:"#2965f1"},{key:"js",label:"JS",color:"#f0db4f"}],y=L({get:()=>s.value[l.value],set:e=>{s.value[l.value]=e}}),P=L(()=>{const e=y.value.split(`
`).length;return Array.from({length:e},(n,t)=>t+1)});function v(e){return s.value[e].split(`
`).length}function $(e){const n=f[e];n&&(b.value=e,s.value={html:n.html,css:n.css,js:n.js},i.value=[],m())}function I(){return`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>${s.value.css}</style></head>
<body>
${s.value.html}
<script>
(function() {
  const _post = (type, args) => parent.postMessage({ source: 'codelab-preview', type, args }, '*');
  const _orig = { log: console.log, warn: console.warn, error: console.error };
  console.log = (...a) => { _orig.log(...a); _post('log', a.map(String).join(' ')); };
  console.warn = (...a) => { _orig.warn(...a); _post('warn', a.map(String).join(' ')); };
  console.error = (...a) => { _orig.error(...a); _post('error', a.map(String).join(' ')); };
  window.onerror = (msg, src, line, col, err) => { _post('error', msg + ' (line ' + line + ')'); };
})();
<\/script>
<script>${s.value.js}<\/script>
</body>
</html>`}function m(){_.value&&(_.value.srcdoc=I())}function A(e){var n;if(((n=e.data)==null?void 0:n.source)==="codelab-preview"){const t=new Date().toLocaleTimeString("zh-CN",{hour12:!1});i.value.push({time:t,type:e.data.type,msg:e.data.args})}}function q(){var t;const e=j.value,n=(t=e==null?void 0:e.parentElement)==null?void 0:t.querySelector(".editor__lines");n&&e&&(n.scrollTop=e.scrollTop)}let C=null;return D(s,()=>{clearTimeout(C),C=setTimeout(m,600)},{deep:!0}),N(()=>{if(window.addEventListener("message",A),R(m),!M.value){w("WebMCP API 未检测到","err");return}w("WebMCP API 检测成功，注册代码实验室工具","ok"),r({name:"code_read",description:"读取指定文件（html/css/js）的完整代码内容。",inputSchema:{type:"object",properties:{file:{type:"string",enum:["html","css","js"],description:"要读取的文件类型"}},required:["file"]},annotations:{readOnlyHint:!0},execute:async e=>{const n=s.value[e.file];return{file:e.file,lineCount:n.split(`
`).length,content:n}}}),r({name:"code_write",description:"覆盖写入指定文件的全部代码。",inputSchema:{type:"object",properties:{file:{type:"string",enum:["html","css","js"],description:"目标文件"},content:{type:"string",description:"完整的代码内容"}},required:["file","content"]},execute:async e=>(s.value[e.file]=e.content,l.value=e.file,{file:e.file,lineCount:e.content.split(`
`).length,success:!0})}),r({name:"code_insert",description:"在指定行号之后插入代码片段。",inputSchema:{type:"object",properties:{file:{type:"string",enum:["html","css","js"],description:"目标文件"},line:{type:"integer",minimum:0,description:"在哪一行之后插入（0 = 文件开头）"},content:{type:"string",description:"要插入的代码片段"}},required:["file","line","content"]},execute:async e=>{const n=s.value[e.file].split(`
`),t=Math.min(e.line,n.length),a=e.content.split(`
`);return n.splice(t,0,...a),s.value[e.file]=n.join(`
`),l.value=e.file,{file:e.file,insertedAt:t,linesInserted:a.length,totalLines:n.length}}}),r({name:"code_replace",description:"查找并替换代码内容（字符串精确匹配）。",inputSchema:{type:"object",properties:{file:{type:"string",enum:["html","css","js"],description:"目标文件"},search:{type:"string",description:"要查找的代码片段"},replace:{type:"string",description:"替换为的内容"}},required:["file","search","replace"]},execute:async e=>{const n=s.value[e.file];return n.includes(e.search)?(s.value[e.file]=n.replace(e.search,e.replace),l.value=e.file,{file:e.file,success:!0,replaced:!0}):{success:!1,error:"未找到匹配内容",file:e.file}}}),r({name:"code_delete",description:"删除指定行范围的代码。",inputSchema:{type:"object",properties:{file:{type:"string",enum:["html","css","js"],description:"目标文件"},startLine:{type:"integer",minimum:1,description:"起始行号（1-based）"},endLine:{type:"integer",minimum:1,description:"结束行号（1-based，包含）"}},required:["file","startLine","endLine"]},execute:async e=>{const n=s.value[e.file].split(`
`),t=Math.max(0,e.startLine-1),a=Math.min(n.length,e.endLine),B=n.splice(t,a-t);return s.value[e.file]=n.join(`
`),l.value=e.file,{file:e.file,deletedLines:B.length,remainingLines:n.length}}}),r({name:"preview_refresh",description:"重新渲染预览窗口，查看最新代码效果。",inputSchema:{type:"object",properties:{}},execute:async()=>(i.value=[],m(),{success:!0,message:"预览已刷新"})}),r({name:"console_read",description:"读取预览页面的控制台输出（log/warn/error）。",inputSchema:{type:"object",properties:{}},annotations:{readOnlyHint:!0},execute:async()=>({total:i.value.length,entries:i.value.slice(-20).map(e=>({type:e.type,message:e.msg,time:e.time})),hasErrors:i.value.some(e=>e.type==="error")})}),r({name:"code_get_state",description:"获取当前代码实验室状态：各文件行数、活动 Tab、控制台错误等。",inputSchema:{type:"object",properties:{}},annotations:{readOnlyHint:!0},execute:async()=>({activeTab:l.value,template:b.value,files:{html:{lines:v("html")},css:{lines:v("css")},js:{lines:v("js")}},console:{total:i.value.length,errors:i.value.filter(e=>e.type==="error").length,warnings:i.value.filter(e=>e.type==="warn").length}})})}),(e,n)=>(p(),c("main",K,[o("div",Q,[o("div",Z,[x(k(O),{size:32,color:"var(--accent)","stroke-width":1.8}),n[3]||(n[3]=o("div",null,[o("h1",{class:"lab__title"},"代码实验室"),o("p",{class:"lab__subtitle"},"AI 不是用网页，而是改造网页")],-1))]),o("div",ee,[o("select",{class:"lab__select",value:b.value,onChange:n[0]||(n[0]=t=>$(t.target.value))},[(p(),c(h,null,g(f,(t,a)=>o("option",{key:a,value:a},d(t.name),9,te)),64))],40,ne),o("button",{class:"btn btn--ghost btn--sm",onClick:m},[x(k(G),{size:14}),n[4]||(n[4]=T(" 刷新",-1))])])]),o("div",oe,[o("div",se,[o("div",ie,[(p(),c(h,null,g(E,t=>o("button",{key:t.key,class:S(["editor__tab",{active:l.value===t.key}]),style:J(l.value===t.key?{borderBottomColor:t.color}:{}),onClick:a=>l.value=t.key},[T(d(t.label)+" ",1),o("span",ae,d(v(t.key))+"L",1)],14,le)),64))]),o("div",re,[o("div",ce,[(p(!0),c(h,null,g(P.value,t=>(p(),c("div",{key:t,class:"editor__line-num"},d(t),1))),128))]),V(o("textarea",{ref_key:"textareaRef",ref:j,"onUpdate:modelValue":n[1]||(n[1]=t=>y.value=t),class:"editor__textarea",spellcheck:"false",onScroll:q},null,544),[[F,y.value]])])]),o("div",de,[n[5]||(n[5]=o("div",{class:"preview__header"},[o("span",{class:"preview__dot green"}),o("span",{class:"preview__label"},"实时预览")],-1)),o("iframe",{ref_key:"iframeRef",ref:_,class:"preview__frame",sandbox:"allow-scripts allow-modals",title:"代码预览"},null,512)])]),i.value.length>0?(p(),c("div",pe,[o("div",ue,[n[6]||(n[6]=o("span",null,"预览控制台",-1)),o("span",fe,d(i.value.length)+" 条",1),o("button",{class:"preview-console__clear",onClick:n[2]||(n[2]=t=>i.value=[])},"清空")]),o("div",me,[(p(!0),c(h,null,g(i.value,(t,a)=>(p(),c("div",{key:a,class:"preview-console__line"},[o("span",ve,"["+d(t.time)+"]",1),o("span",{class:S(`preview-console__${t.type}`)},d(t.type==="error"?"✕":t.type==="warn"?"!":"›")+" "+d(t.msg),3)]))),128))])])):U("",!0),x(Y,{logs:k(z)},null,8,["logs"])]))}},ye=W(he,[["__scopeId","data-v-38b614a5"]]);export{ye as default};

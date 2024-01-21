"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8593],{2189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(5893),a=t(1151);const o={sidebar_position:3},i="Handling events",r={id:"basic-concepts/events",title:"Handling events",description:"Events are actions that happen in your Switch account (incoming messages, new members join, bot button presses, etc.), and you can use them to trigger actions in your bot.",source:"@site/docs/basic-concepts/events.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/events",permalink:"/Switch-Bots-Python-Library/docs/basic-concepts/events",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Calling the API methods",permalink:"/Switch-Bots-Python-Library/docs/basic-concepts/calling-api"},next:{title:"Logging",permalink:"/Switch-Bots-Python-Library/docs/basic-concepts/logging"}},c={},d=[{value:"Registering a handler",id:"registering-a-handler",level:2},{value:"Using decorators",id:"using-decorators",level:3},{value:"Using the <code>add_handler()</code> method",id:"using-the-add_handler-method",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"handling-events",children:"Handling events"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../fundamentals/events",children:"Events"})," are actions that happen in your Switch account (incoming messages, new members join, bot button presses, etc.), and you can use them to trigger actions in your bot."]}),"\n",(0,s.jsxs)(n.p,{children:["To listen to an event, you need to register ",(0,s.jsx)(n.a,{href:"../fundamentals/handlers",children:"event handlers"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Each handler deals with a specific event and once a matching update arrives from the app, your registered callback function will be called back by the framework and its body executed."}),"\n",(0,s.jsx)(n.h2,{id:"registering-a-handler",children:"Registering a handler"}),"\n",(0,s.jsxs)(n.p,{children:["To explain how handlers work let\u2019s examine the one which will be in charge for handling ",(0,s.jsx)(n.code,{children:"Message"})," updates coming from all around your chats. Every other kind of handler shares the same setup logic and you should not have troubles settings them up once you learn from this section."]}),"\n",(0,s.jsx)(n.h3,{id:"using-decorators",children:"Using decorators"}),"\n",(0,s.jsxs)(n.p,{children:["The most elegant way to register a message handler is by using the ",(0,s.jsx)(n.code,{children:"on_message()"})," decorator:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from swibots import Client, BotContext, MessageEvent\n\napp = Client("TOKEN")\n\n@app.on_message()\nasync def message_handler(ctx: BotContext[MessageEvent]):\n   await ctx.event.message.reply_text(f"Thank you! I received your message: {ctx.event.message.message}")\n\napp.run()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The defined function ",(0,s.jsx)(n.code,{children:"message_handler"}),", which accepts one argument (",(0,s.jsx)(n.code,{children:"ctx"}),", of type ",(0,s.jsx)(n.code,{children:"BotContext[MessageEvent]"}),"), will be the function that gets executed every time a new message arrives."]}),"\n",(0,s.jsxs)(n.p,{children:["In the last line we see again the ",(0,s.jsx)(n.code,{children:"run()"})," method, this time used without any argument. Its purpose here is simply to automatically ",(0,s.jsx)(n.code,{children:"start()"}),", keep the app online so that it can listen for updates and",(0,s.jsx)(n.code,{children:" stop()"})," it once you hit ",(0,s.jsx)(n.code,{children:"CTRL+C"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"using-the-add_handler-method",children:["Using the ",(0,s.jsx)(n.code,{children:"add_handler()"})," method"]}),"\n",(0,s.jsxs)(n.p,{children:["If you prefer to use the ",(0,s.jsx)(n.code,{children:"add_handler()"})," method instead of the decorator, you can do so by calling ",(0,s.jsx)(n.code,{children:"add_hanlder"})," of the app with an instance of ",(0,s.jsx)(n.code,{children:"MessageHandler"})," object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from swibots import Client, BotContext, MessageEvent, MessageHandler\n\napp = Client("TOKEN")\n\nasync def handle_message(ctx: BotContext[MessageEvent]):\n    await ctx.event.message.reply_text(f"Thank you! I received your message: {ctx.event.message.message}")\n\napp.add_handler(MessageHandler(handle_message))\n\napp.run()\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7294);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
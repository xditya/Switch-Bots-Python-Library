"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[447],{3477:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=r(5893),a=r(1151);const o={},s="remove_handler",d={id:"api_reference/methods/remove_handler",title:"remove_handler",description:"Remove a handler from the bot.",source:"@site/docs/api_reference/methods/remove_handler.md",sourceDirName:"api_reference/methods",slug:"/api_reference/methods/remove_handler",permalink:"/Switch-Bots-Python-Library/docs/api_reference/methods/remove_handler",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list_restricted_users",permalink:"/Switch-Bots-Python-Library/docs/api_reference/methods/list_restricted_users"},next:{title:"run",permalink:"/Switch-Bots-Python-Library/docs/api_reference/methods/run"}},l={},i=[{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"remove_handler",children:"remove_handler"}),"\n",(0,t.jsx)(n.p,{children:"Remove a handler from the bot."}),"\n",(0,t.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"def remove_handler(self, handler: BaseHandler | List[BaseHandler]) -> Client"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"handler"})," (",(0,t.jsx)(n.code,{children:"BaseHandler | List[BaseHandler]"}),"): The handler to remove from the bot, or a list of handlers to add to the bot (see ",(0,t.jsx)(n.a,{href:"../../fundamentals/handlers",children:"Hanlders"})," for more information on handlers)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'\n\nfrom swibots import Client, BotContext, CommandEvent, MessageEvent, CallbackQueryEvent, filters, InlineKeyboardButton, InlineMarkup, BotCommandInfo\n\nfrom swibots.bots.handlers import (\n    MessageHandler,\n    UnknownCommandHandler,\n    CallbackQueryHandler,\n    CommandHandler,\n)\n\n\nasync def echo(ctx: BotContext[CommandEvent]):\n    m = await ctx.bot.prepare_response_message(ctx.event.message)\n    text = ctx.event.params or "No args"\n    m.message = f"Your message: {text}"\n    await ctx.bot.send_message(m)\n\napp = Client()\n\n# register your handlers here\n\necho_handler = CommandHandler(\n    command="echo",\n    callback=echo,\n)\napp.add_handler(\n    echo_handler\n)\n\n# remove the handler\napp.remove_handler(\n    echo_handler\n)\n\n# now the handler won\'t be called when the user sends the /echo command\n\napp.run()\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var t=r(7294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
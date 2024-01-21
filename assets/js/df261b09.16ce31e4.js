"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1611],{4322:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>t,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(5893),d=n(1151);const r={},c="Message",l={id:"api_reference/types/message",title:"Message",description:"Class swibots.api.chat.models.User",source:"@site/docs/api_reference/types/message.md",sourceDirName:"api_reference/types",slug:"/api_reference/types/message",permalink:"/Switch-Bots-Python-Library/docs/api_reference/types/message",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Media",permalink:"/Switch-Bots-Python-Library/docs/api_reference/types/media"},next:{title:"Organization",permalink:"/Switch-Bots-Python-Library/docs/api_reference/types/organization"}},h={},a=[{value:"Properties",id:"properties",level:2},{value:"Api Methods",id:"api-methods",level:2}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"message",children:"Message"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Class swibots.api.chat.models.User"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Message"})," class represents a message sent to a chat."]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's sender's id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user"})," (",(0,i.jsx)(s.a,{href:"./user",children:"User"}),"): The message's sender."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"receiver_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's receiver's id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"receiver"})," (",(0,i.jsx)(s.a,{href:"./user",children:"User"}),"): The message's receiver."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"message"})," (",(0,i.jsx)(s.code,{children:"str"}),"): The message's text."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"sent_date"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's sent date."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"status"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's status."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"request_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's request id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"channel_chat"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is a channel chat."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"channel_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's channel's id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"channel"})," (",(0,i.jsx)(s.a,{href:"./channel",children:"Channel"}),"): The message's channel."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"community_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's community's id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"community"})," (",(0,i.jsx)(s.a,{href:"./community",children:"Community"}),"): The message's community."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"edit"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is an edit."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"flag"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's flag."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"forward"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is a forward."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"group_chat"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is a group chat."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"group_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's group's id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"group"})," (",(0,i.jsx)(s.a,{href:"./group",children:"Group"}),"): The message's group."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"information"})," (",(0,i.jsx)(s.code,{children:"str"}),"): The message's information."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"inline_markup"})," (",(0,i.jsx)(s.a,{href:"./inline_markup",children:"InlineMarkup"}),"): The message's inline markup."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"is_read"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is read."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"is_media"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether message includes media."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"is_embed_message"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether message includes embedded."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"embed_message"}),": (",(0,i.jsx)(s.a,{href:"/Switch-Bots-Python-Library/docs/api_reference/types/embedded_media",children:"EmbeddedMedia"}),"): The embedded message."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"media_link"})," (",(0,i.jsx)(s.code,{children:"str"}),"): The message's media link."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"replied_message"})," (",(0,i.jsx)(s.code,{children:"str"}),"): The message's replied message."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"replied_to_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's replied to id."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"replied_to"})," (",(0,i.jsx)(s.a,{href:"./message",children:"Message"}),"): The message's replied to."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"replies"})," (",(0,i.jsx)(s.a,{href:"./message",children:"Message"}),"): The message's replies."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"reply_count"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's reply count."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"personal_chat"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is a personal chat."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"pinned"})," (",(0,i.jsx)(s.code,{children:"bool"}),"): Whether the message is pinned."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"reactions"})," (",(0,i.jsx)(s.code,{children:"List[str]"}),"): The message's reactions."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"media_id"})," (",(0,i.jsx)(s.code,{children:"int"}),"): The message's media id. (for media messages)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"media_info"})," (",(0,i.jsx)(s.a,{href:"./media",children:"Media"}),"): The message's media. (for media messages)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cached_media"})," (",(0,i.jsx)(s.a,{href:"./media",children:"Media"}),"): When sending a message, you can use this to send media that has already been uploaded to the server. (for media messages)"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"api-methods",children:"Api Methods"}),"\n",(0,i.jsxs)(s.p,{children:["Unlike other types, the ",(0,i.jsx)(s.code,{children:"Message"})," class has a few api methods to make it easier to work with."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["***async def respond(self,  text: str, embed_message: ",(0,i.jsx)(s.a,{href:"/Switch-Bots-Python-Library/docs/api_reference/types/embedded_media",children:"EmbeddedMedia"})," = None, inline_markup: ",(0,i.jsx)(s.a,{href:"/Switch-Bots-Python-Library/docs/api_reference/types/inline_markup",children:"InlineMarkup"}),") -> Message ***"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Sends the message."}),"\n",(0,i.jsx)(s.p,{children:"You can also add media."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["***async def reply(self, text: str, embed_message: ",(0,i.jsx)(s.a,{href:"/Switch-Bots-Python-Library/docs/api_reference/types/embedded_media",children:"EmbeddedMedia"})," = None) -> Message ***"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Replies to the message with the given message."}),"\n",(0,i.jsx)(s.p,{children:"You can also add media."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["***async def reply_text(self,  text: str, inline_markup: Optional[",(0,i.jsx)(s.a,{href:"./inline_markup",children:"InlineMarkup"}),"] = None,  media: MediaUploadRequest = None) -> Message ***"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Replies to the message with the given text."}),"\n",(0,i.jsx)(s.p,{children:"You can also add an inline markup and media."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["***async edit_text(self,  text: str, inline_markup: Optional[",(0,i.jsx)(s.a,{href:"./inline_markup",children:"InlineMarkup"}),"] = None) -> Message ***"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Edits the message's text."}),"\n",(0,i.jsx)(s.p,{children:"You can also add an inline markup."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"***async def delete(self) -> None ***"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Deletes the message."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"async def download(self, file_name: str = None, in_memory: bool = False, block: bool = True, progress: Callable = None, progress_args: tuple = ()) -> Optional[Union[BinaryIO, bytes]]:"})})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Downloads the message's media (Please refer to ",(0,i.jsx)(s.a,{href:"/docs/api_reference/methods/download_media",children:"Downloading media"}),")."]}),"\n"]}),"\n"]})]})}function t(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>c});var i=n(7294);const d={},r=i.createContext(d);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);
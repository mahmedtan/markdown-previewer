(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),s=(n(21),n(22),n(3)),c=n(4),l=n(6),d=n(5),u=(n(23),n(15)),h=n.n(u),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"p-3",id:"preview",dangerouslySetInnerHTML:{__html:h()(this.props.onClick)}})}}]),n}(a.Component),f=(n(27),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("editor").value=p;this.props.handleChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"h-100"},r.a.createElement("textarea",{id:"editor",type:"text-box",className:"container-fluid border border-white ",placeholder:"Start typing here...",onChange:function(t){e.props.handleChange(t.target.value)}}))}}]),n}(a.Component)),p="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)",v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({markdown:e}),console.log(a.state.markdown)},a.state={markdown:""},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid fill-viewport"},r.a.createElement("p",{className:"title h1 text-responsive text-center"},"Markdown Previewer"),r.a.createElement("div",{className:"row p-3 h-100 no-gutters"},r.a.createElement("div",{className:"card col-sm m-1 "},r.a.createElement("h4",{className:"card-header "},"Editor"),r.a.createElement(f,{handleChange:this.handleChange})),r.a.createElement("div",{className:"card col-sm m-1 "},r.a.createElement("h4",{className:"card-header "},"Previewer"),r.a.createElement(m,{onClick:this.state.markdown}))))}}]),n}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1666c149.chunk.js.map
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4326:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},l="LangGraph",o={unversionedId:"gpt-researcher/langgraph",id:"gpt-researcher/langgraph",isDocsHomePage:!1,title:"LangGraph",description:"LangGraph is a library for building stateful, multi-actor applications with LLMs.",source:"@site/docs/gpt-researcher/langgraph.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/langgraph",permalink:"/docs/gpt-researcher/langgraph",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/langgraph.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configure LLM",permalink:"/docs/gpt-researcher/llms"},next:{title:"Examples",permalink:"/docs/examples/examples"}},s=[{value:"Use case",id:"use-case",children:[],level:2},{value:"The Multi Agent Team",id:"the-multi-agent-team",children:[],level:2},{value:"How it works",id:"how-it-works",children:[{value:"Architecture",id:"architecture",children:[],level:3},{value:"Steps",id:"steps",children:[],level:3}],level:2},{value:"How to run",id:"how-to-run",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Task.json contains the following fields:",id:"taskjson-contains-the-following-fields",children:[],level:4},{value:"For example:",id:"for-example",children:[],level:4}],level:2},{value:"To Deploy",id:"to-deploy",children:[],level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"langgraph"},"LangGraph"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/langgraph"},"LangGraph")," is a library for building stateful, multi-actor applications with LLMs.\nThis example uses Langgraph to automate the process of an in depth research on any given topic."),(0,n.kt)("h2",{id:"use-case"},"Use case"),(0,n.kt)("p",null,"By using Langgraph, the research process can be significantly improved in depth and quality by leveraging multiple agents with specialized skills.\nInspired by the recent ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2402.14207"},"STORM")," paper, this example showcases how a team of AI agents can work together to conduct research on a given topic, from planning to publication."),(0,n.kt)("p",null,"An average run generates a 5-6 page research report in multiple formats such as PDF, Docx and Markdown."),(0,n.kt)("h2",{id:"the-multi-agent-team"},"The Multi Agent Team"),(0,n.kt)("p",null,"The research team is made up of 7 AI agents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chief Editor"),' - Oversees the research process and manages the team. This is the "master" agent that coordinates the other agents using Langgraph.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Researcher")," (gpt-researcher) - A specialized autonomous agent that conducts in depth research on a given topic."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Editor")," - Responsible for planning the research outline and structure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reviewer")," - Validates the correctness of the research results given a set of criteria."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Revisor")," - Revises the research results based on the feedback from the reviewer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Writer")," - Responsible for compiling and writing the final report."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Publisher")," - Responsible for publishing the final report in various formats.")),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Generally, the process is based on the following stages: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Planning stage"),(0,n.kt)("li",{parentName:"ol"},"Data collection and analysis"),(0,n.kt)("li",{parentName:"ol"},"Review and revision"),(0,n.kt)("li",{parentName:"ol"},"Writing and submission"),(0,n.kt)("li",{parentName:"ol"},"Publication")),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{align:"center",height:"600",src:"https://cowriter-images.s3.amazonaws.com/gptr-langgraph-architecture.png"})),(0,n.kt)("br",{clear:"all"}),(0,n.kt)("h3",{id:"steps"},"Steps"),(0,n.kt)("p",null,"More specifically (as seen in the architecture diagram) the process is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Browser (gpt-researcher) - Browses the internet for initial research based on the given research task."),(0,n.kt)("li",{parentName:"ul"},"Editor - Plans the report outline and structure based on the initial research."),(0,n.kt)("li",{parentName:"ul"},"For each outline topic (in parallel):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Researcher (gpt-researcher) - Runs an in depth research on the subtopics and writes a draft."),(0,n.kt)("li",{parentName:"ul"},"Reviewer - Validates the correctness of the draft given a set of criteria and provides feedback."),(0,n.kt)("li",{parentName:"ul"},"Revisor - Revises the draft until it is satisfactory based on the reviewer feedback."))),(0,n.kt)("li",{parentName:"ul"},"Writer - Compiles and writes the final report including an introduction, conclusion and references section from the given research findings."),(0,n.kt)("li",{parentName:"ul"},"Publisher - Publishes the final report to multi formats such as PDF, Docx, Markdown, etc.")),(0,n.kt)("h2",{id:"how-to-run"},"How to run"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install required packages:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n"))),(0,n.kt)("li",{parentName:"ol"},"Update env variables",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY={Your OpenAI API Key here}\nexport TAVILY_API_KEY={Your Tavily API Key here}\n"))),(0,n.kt)("li",{parentName:"ol"},"Run the application:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To change the research query and customize the report, edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"task.json")," file in the main directory."),(0,n.kt)("h4",{id:"taskjson-contains-the-following-fields"},"Task.json contains the following fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query")," - The research query or task."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"model")," - The OpenAI LLM to use for the agents."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_sections")," - The maximum number of sections in the report. Each section is a subtopic of the research query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"publish_formats")," - The formats to publish the report in. The reports will be written in the ",(0,n.kt)("inlineCode",{parentName:"li"},"output")," directory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"source")," - The location from which to conduct the research. Options: ",(0,n.kt)("inlineCode",{parentName:"li"},"web")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"local"),". For local, please add ",(0,n.kt)("inlineCode",{parentName:"li"},"DOC_PATH")," env var."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"follow_guidelines")," - If true, the research report will follow the guidelines below. It will take longer to complete. If false, the report will be generated faster but may not follow the guidelines."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"guidelines")," - A list of guidelines that the report must follow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"verbose")," - If true, the application will print detailed logs to the console.")),(0,n.kt)("h4",{id:"for-example"},"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "Is AI in a hype cycle?",\n  "model": "gpt-4o",\n  "max_sections": 3, \n  "publish_formats": { \n    "markdown": true,\n    "pdf": true,\n    "docx": true\n  },\n  "source": "web",\n  "follow_guidelines": true,\n  "guidelines": [\n    "The report MUST fully answer the original question",\n    "The report MUST be written in apa format",\n    "The report MUST be written in english"\n  ],\n  "verbose": true\n}\n')),(0,n.kt)("h2",{id:"to-deploy"},"To Deploy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip install langgraph-cli\nlanggraph up\n")),(0,n.kt)("p",null,"From there, see documentation ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/langchain-ai/langgraph-example"},"here")," on how to use the streaming and async endpoints, as well as the playground."))}c.isMDXComponent=!0}}]);
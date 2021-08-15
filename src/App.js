import React,{useState,useEffect} from "react";
import "./App.css";
import Editor from "./Editor";
import  useLocalStorage from "./useLocalStorage";
function App() { 
  const [html, setHtml] = useLocalStorage("html",'');
  const [css, setCss] = useLocalStorage("css",'');
  const [js, setJs] = useLocalStorage("js",'');
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(() => {
    const timeout=setTimeout(()=>
    {
      setSrcDoc(
        `<html>
        <style>
          ${css}
        </style>
        <body>
          ${html}
        </body>
      <script>
        ${js}
      </script></html>`
      )
    },250)
    return ()=>clearTimeout(timeout);
  }, [html,css,js])
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml"  displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs} />
      </div>
      <div className="bottom-pane pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
      ></iframe>
      </div>
      
    </>
  );
}

export default App;

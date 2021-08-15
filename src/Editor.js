import React,{useState} from "react";
import {Controlled as ControlledEditor} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/lib/codemirror.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt,faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = (props) => {
  const{
    language,
    displayName,
    value,
    onChange
  }=props
  const [open,setOpen]=useState(true);
  function handleChange(editor,data,value)
  {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open?'':'collapsed'}`}>
      <div className="editor-top">
        {displayName}
        <button 
        type="button"
        className="expand-collapse-btn"
        onClick={()=>setOpen(prevOpen=>!prevOpen)}>
        <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping:true,
            lint:true,
            mode:language,
            lineNumbers:true,
            theme:"dracula"
            }}
        />
    </div>
  );
};
export default Editor;

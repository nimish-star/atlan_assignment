/* eslint-disable no-unused-vars */
import AceEditor from "react-ace";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";

export default function Editor({ getQueryTable }) {
  const [editorValue, setEditorValue] = useState("");
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  function onChange(newValue) {
    console.log("Editor Value: ", newValue);
    setEditorValue(newValue);
  }
  function showOutput() {
    console.log("Editor Value: ", editorValue);
    let searchElement = "";

    const DATABASE_TABLES = [
      "customers",
      "categories",
      "employees",
      "shippers",
      "suppliers",
    ];
    const contains = DATABASE_TABLES.some((element) => {
      if (editorValue.includes(element)) {
        searchElement = element;
        
        return element;
      } else {
        return "";
      }
    });
    if (searchElement === "") {
     
    }
    getQueryTable(searchElement);
  }

  const handleRunClick = () => {
    if (query.trim() !== '') {
    console.log('Query to save:', query); // Log the query before saving

    const storedQueries = JSON.parse(localStorage.getItem('queryHistory')) || [];
    const updatedQueries = [...storedQueries, query];
    localStorage.setItem('queryHistory', JSON.stringify(updatedQueries));

    console.log('Updated Queries:', updatedQueries); // Log the updated queries
    navigate('/query-history');
  } else {
    console.log('Query is empty.');
    // Handle empty query case if needed
  }
  };

  return (
    <>
   
      
        
        <div className="flex flex-col items-center justify-center mx-auto my-8 w-11/12 rounded-lg">
          
         <div className="w-full flex justify-end my-4">
          <div className="w-full">
          <h1 className="font-bold text-3xl my-2">Editor</h1>
        </div>
  <div className="flex">
  <button
    onClick={() => {
      showOutput();
      
    }}
    className="flex-1 mr-2 bg-green-600 hover:bg-opacity-90 text-base font-bold px-3 py-2 rounded-md text-white"
  >
    Run Query 
  </button>
  <button
    onClick={() => {handleRunClick();
    }}
    className="flex-1 bg-blue-600 hover:bg-opacity-90 text-base font-bold px-3 py-2 rounded-md text-white"
  >
    Save
  </button>
</div>
</div>

        

        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          className="rounded-lg"
          theme="twilight"
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={30}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your SQL Query Here!"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          // value={value}
          onChange={onChange}
          showLineNumbers
        />
        
      </div>
    </>
  );
}

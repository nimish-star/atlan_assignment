import { Footer, Navbar } from "../../shared";
import { Editor, OutputWindow } from ".";
import { useState } from "react";

export default function HomeComponent() {
  const [queryTableName, setQueryTableName] = useState("customers");
  
  return (
    <>
      <Navbar />
      
      <Editor getQueryTable={setQueryTableName} />
      <OutputWindow queriedTable={queryTableName} />
      <Footer />
    </>
  );
}

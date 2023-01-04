import React, {useState} from "react";

export default function TxtInput(props) {
   
    const handleChange= (event)=>{
        settext(event.target.value)
    }
    const handleUptext= ()=>{
        let newtxt= Text.toUpperCase()
        settext(newtxt)

    }
    const handlelwtext= ()=>{
        let newtxt= Text.toLowerCase()
        settext(newtxt)
    }
    const handletrim=()=>{
        let newtxt= Text.trim()
        settext(newtxt)
    }
    const handleclear= ()=>{
        let newtxt= ""
        settext(newtxt)
    }
    const handlecap=()=>{
        let newtxt= Text.split(" ")
        let arr = newtxt.map(a=> a.charAt(0).toUpperCase() + a.slice(1))
        let fntxt= arr.join(" ")
        settext(fntxt)
        

    }
    // const handleCopy = () => {
    //     let newtxt = navigator.clipboard.writeText(Text)
      
    //     settext(newtxt);
      
    //     // // Alert the copied text
    //     // alert("Copied the text: " + copyText.value);
    // }
    const [Text, settext]= useState("Enter Your text! ")
  return (
    <>
     <div className="container" style={{color: props.mode==="dark"?"white":props.mode==="a"?"green":"black"}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        
        <textarea
          className="form-control"
         
          id="myBox"
          rows="6" 
          
         value={Text} onChange={handleChange}  style={{backgroundColor: props.mode==="dark"?"#354554":props.mode==="a"?"#D7A1F9":"white",color: props.mode==="dark"?"white":props.mode==="a"?"green":"black"}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUptext}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handlelwtext}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handletrim}>Trim Spaces</button>
      <button className="btn btn-primary mx-2" onClick={handlecap}>Captitalize Each Word</button>

      <button className="btn btn-primary mx-2" onClick={() =>  navigator.clipboard.writeText(Text)}>Copy to ClipBoard</button>
      <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
      
    <div className="container my-3">
        <h2> Text Summary</h2>
        <h6> Words : {Text.split(" ").filter(Boolean).length}</h6>
        <h6> Characters : {Text.length}</h6>
        <h6> Minutes Read : {0.008 *Text.trim().split(" ").length} </h6>
        <h6> Paragraphs : {Text.replace(/\n$/gm, '').split("\n").length}</h6>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"Previewed Content will be shown Here! "}</p>
    </div>
    </div>
    </>
  );
}

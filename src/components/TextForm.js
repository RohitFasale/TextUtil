import React , {useState}from 'react'

export default function TextForm(props)
{
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        
        let setuppercase = text.toUpperCase();
        setText(setuppercase);
        props.setMssage("converted to Uppercase", "success")
    
    }   

    const handleclearText=()=>{
        let newtext = '';
        setText(newtext);
        props.setMssage("Cleared the text", "success")
    }

    const handleOnchange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }

    const handleCopyText=()=>{
        let copy = document.getElementById("myBox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.setMssage("Copied the text","success")
    }
    
    return(
        <>
        <div className="container" style={{color: props.darkmode === 'dark' ? 'white':'#0a4a79'}}>
           <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.darkmode === 'dark' ? 'grey':'white', color :props.darkmode === 'dark' ? 'white':'#0a4a79'}} id="myBox" rows="8" ></textarea>
            </div>  
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1"onClick={handleclearText}>Clear Text</button>
            <button className="btn btn-primary mx-1"onClick={handleCopyText}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color: props.darkmode === 'dark' ? 'white':'#0a4a79'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and{text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter A text in above text box to preview it"} </p>
        </div>
        </>
    ) 
}
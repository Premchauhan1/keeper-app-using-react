import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props){
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const [click,setClicked]=useState(false);
    function chagneState(){
        setClicked(true)
    }
    function handleChange(event){
        const {name,value}=event.target;
        setNote((prevValues)=>{
            return {...prevValues,[name]:value}
        });
    }
    function handleClick(event){
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title:"",
            content:""
        });
        setClicked(false)
    }
    return( <div>
        <form>
            <input name="title" value={note.title} onClick={chagneState} onChange={handleChange} placeholder="Enter title" />
            <input name="content" value={note.content} onClick={chagneState} onChange={handleChange} placeholder="Enter content" />
            {click&&<button onClick={handleClick} ><AddIcon /></button>}
        </form>
    </div>);
}

export default CreateArea;
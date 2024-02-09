import React, {useState} from "react";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
    const [notes,setNotes]=useState([]);
    function addNote(newNotes){
        setNotes(prevValues=>{
            return [...prevValues,newNotes];
        })
    }
    function deleteNote(id){
        setNotes(prevValues=>{
            return prevValues.filter((noteItem,index)=>{
                return index!==id;
            })
        })
    }
    return <div>
        <Header />
        < CreateArea onAdd={addNote} />
        {notes.map((noteItem,index) => 
        <Note 
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
    )}
    <Footer />
    </div>
}
export default App;

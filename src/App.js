
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from './CreateNote';
import Note from "./Note"
import { useEffect, useState } from 'react';


// to set from local storage
const getLocalItems = ()=>{
  let list = localStorage.getItem('tasks');
  if(list){
    return JSON.parse(localStorage.getItem('tasks'));
  }
  else{
    return [];
  }
}

function App() {
  const [addItem,setAddItem] = useState([getLocalItems()]);

  const addNote = (note)=>{
    // alert("Clicked");
   
    setAddItem((prevData)=>{
    return [...prevData,note];
   });
   
   console.log(note);
 
  };


  const onDelete = (id)=>{
  setAddItem((oldData)=>
    oldData.filter((currdata,indx)=>{
      return indx !== id;
    })
  );

};
// add data to localstorage

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(addItem));
},[addItem]);

  return (
    <div className="App">


<Header/>
<div className='container'>

<CreateNote passNote = {addNote}/>
<div className='noteContainer'>
{addItem.map((val,index)=>{
  return <Note
  key={index}
  id={index}
  title={val.title}
  content={val.content}
  deleteItem = {onDelete}
  
  />
})}
</div>
</div>
<Footer/>

    </div>
  );
}

export default App;

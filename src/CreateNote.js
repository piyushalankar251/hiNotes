import { useState } from 'react';
import './App.css';
import Plus from "./Icons/plus.png"

function CreateNote(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (event) => {

    //normal way to get data


    // const value = event.target.value;
    // const name = event.target.name;

    //object destructuring method

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  }

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div className="main_note">
      <form>
        <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off'></input>
        <input type="text" name="content" value={note.content} onChange={InputEvent} placeholder='Write Notes...' className='textArea'></input>
        <button type="button" onClick={addEvent}>
          <img src={Plus} className="add"></img>
        </button>
      </form>
    </div>
  );
}

export default CreateNote;

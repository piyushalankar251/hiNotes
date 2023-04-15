import remove from "./Icons/remove.png"
function Note(props) {

  const deleteNote = () => {
    props.deleteItem(props.id);
    
  }
  return (

    <div className="note">
      <h1>{props.title}</h1>

      <p>{props.content}</p>
      <button type="button" onClick={deleteNote}><img src={remove}></img></button>
    </div>

  );
}

export default Note;
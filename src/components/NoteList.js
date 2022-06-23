import Note from './Note';
import AddNote from './AddNotes';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const Data = notes.map((note) => {
    return (
      <Note
        key={note.id}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
      />
    );
  });
  return (
    <div className="notes-list">
      {Data}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;

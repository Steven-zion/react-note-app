import React, { useState, useEffect } from 'react';
import Notes from '../components/notes';
import Form from '../components/form';
import initialState from './items';
import Header from '../components/Header';
//import Search from '../components/search';

function App() {
  const [mode, setMode] = useState('create');
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('notes-flix')) || initialState
  );
  const [formItem, setFormItem] = useState({ title: '', note: '' });

  const [darkMode, setDarkMode] = useState(false);

  /*const [searchText, setSearchText] = useState('');

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('notes-flix'));
  if (savedNotes) {
    setItems(savedNotes);
  }
}, []);
*/

  useEffect(() => {
    localStorage.setItem('notes-flix', JSON.stringify(items));
  }, [items]);

  const handleInputChange = (name, value) => {
    setFormItem({ ...formItem, [name]: value });
  };

  const handleCreate = () => {
    const { title, note } = formItem;

    const newItems = {
      id: items.length + 1,
      title,
      note,
    };

    setItems([...items, newItems]);
    setFormItem({ title: '', note: '' });
  };

  const handleEdit = (index) => {
    setMode('edit');
    setFormItem(items[index]);
  };

  const handleUpdate = () => {
    const index = items.findIndex((item) => item.id === formItem.id);
    const updatedItems = [...items];
    updatedItems[index] = formItem;

    setMode('create');
    setItems(updatedItems);
    setFormItem({ title: '', note: '' });
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
  };
  //  <Search handleSearchNote={setSearchText} />;

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Form
          mode={mode}
          item={formItem}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onInputChange={handleInputChange}
        />
        <br />
        <Notes 
            items={items} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default App;

/*prop
notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}*/

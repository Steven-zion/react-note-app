import React from 'react';

//Stateless component
const Notes = ({ items, onEdit, onDelete }) =>
  items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="notes-list">
        <div className="card">
          <h4 className="card__title">{title}</h4>

          {note}

          <div className="card__action">
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onEdit(index)}>Edit</button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center">You have Notes Yet...</p>
  );

export default Notes;

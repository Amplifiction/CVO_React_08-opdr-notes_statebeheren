import { useReducer, useState } from 'react';
import './App.css';
import notesReducer from './notesReducer';
import Icon from './Icon';

function App() {
  const [activeNoteId, setActiveNoteId] = useState (null)
  const [activeButton, setActiveButton] = useState (0)

  //CRUD
  const [notes, dispatch] = useReducer(notesReducer, [])
  const handleAddNote = () => dispatch({type: 'addNote'})
  const handleEditNote = (id) => dispatch({type: 'editNote', id})
  const handleDelNote = (id) => dispatch({type: 'delNote', id})
  const handleFavNote = (id) => dispatch({type: 'favNote', id})

  const activeNote = notes.find(note => note.id === activeNoteId)
  const isStarred = activeNote? activeNote.favo : false

  return (
    <div id="app">

      <div id="toolbar">
          <i class="glyphicon glyphicon-plus"></i>
          <Icon
            shape='plus'
            onClick={handleAddNote}
          />
          {/* <!-- voeg "starred" CSS class toe voor actieve status --> */}
          <i class="glyphicon glyphicon-star"></i>
          <Icon
            shape='star'
            onClick={handleFavNote}
            starred={isStarred}
          />
          <i class="glyphicon glyphicon-remove"></i>
      </div>

      <div id="notes-list">
          <div id="list-header">
              <h2>Notes</h2>

              <div class="btn-group btn-group-justified">
                  <div class="btn-group">
                      {/* <!-- voeg "active" CSS class for actieve knop --> */}
                      <button type="button" class="btn btn-default active">All notes</button>
                  </div>

                  <div class="btn-group">
                      <button type="button" class="btn btn-default">Favorites</button>
                  </div>
              </div>
          </div>

          <div class="container">

              <div class="list-group">

                  {/* <!-- voeg "active" CSS class toe voor actieve note --> */}
                  <button type="button" class="list-group-item">
                      <h4 class="list-group-item-heading">
                          Notitie tekst
                      </h4>
                  </button>

                  <button type="button" class="list-group-item active">
                      <h4 class="list-group-item-heading">
                          Notitie tekst
                      </h4>
                  </button>

              </div>

          </div>

      </div>

      <div id="note-editor">
          <textarea placeholder="Nieuwe notitie" class="form-control" value=""></textarea>
      </div>
    </div>
  );
}

export default App;

//indien knoppen niet actief, disabled opmaak geven met bv opacity 0.5

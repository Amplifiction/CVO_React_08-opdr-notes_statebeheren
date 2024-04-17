import { useReducer, useState } from 'react';
import './App.css';
import notesReducer from './notesReducer';
import Icon from './Icon';
import NoteButtonList from './NoteButtonList';
import HeaderButton from './HeaderButton';

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

const noNotes = notes.length<1

function handleNoteClick(id) {
    setActiveNoteId(id)
}

return (
<div id="app">

<div id="toolbar">
    <Icon
        shape='plus'
        onClick={handleAddNote}
    />
    {/* <!-- voeg "starred" CSS class toe voor actieve status --> */}
    <Icon
        shape='star'
        onClick={handleFavNote}
        starred={isStarred}
    />
    <Icon
        shape='remove'
        onClick={handleDelNote}
    />
</div>

<div id="notes-list">
    <div id="list-header">
        <h2>Notes</h2>

        <div class="btn-group btn-group-justified">
            <HeaderButton
                name='All notes'
                onClick={() => setActiveButton(0)}
                active={activeButton==0}
            />
            <HeaderButton
                name='Favorites'
                onClick={() => setActiveButton(1)}
                active={activeButton==1}
            />
        </div>
    </div>

    <div class="container">
    {noNotes?
    <p>No notes.</p> 
    : <NoteButtonList
        array={notes}
        onClick={handleNoteClick}
    />
    }
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

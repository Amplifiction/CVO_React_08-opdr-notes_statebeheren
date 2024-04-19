import { useReducer, useState } from 'react';
import './App.css';
import notesReducer from './notesReducer';
import Icon from './Icon';
import NoteButtonList from './NoteButtonList';
import HeaderButton from './HeaderButton';
import NoteEditor from './NoteEditor';

function App() {
//STATES
const [activeNoteId, setActiveNoteId] = useState (-1)
const [activeButton, setActiveButton] = useState ('all')

//CRUD
    const [notes, dispatch] = useReducer(notesReducer, [])
    const handleAddNote = () => {
        const note = {
            id:crypto.randomUUID(),
            content:'',
            favo: (activeButton=='fav'? true : false)
        }
        dispatch({type: 'addNote', note})
        setActiveNoteId(note.id)
    }
    const handleEditNote = (content) => {
        dispatch({type: 'editNote', id:activeNoteId, content})
    }
    const handleDelNote = () => {
        dryHandle('delNote')
        setActiveNoteId(-1)
    }
    const handleFavNote = () => {
        dryHandle('favNote')
        if (activeButton=='fav') {
            setActiveNoteId(-1)
        }
    }
    const dryHandle = (type) => {
        if (activeNoteId==-1) {
            alert('Please select a note')
        } else {
            dispatch({type:type, id:activeNoteId})
        }
    }//einde CRUD

//CONSTANTS
const activeNote = notes.find(note => note.id === activeNoteId)
const isStarred = activeNote? activeNote.favo : false
const favoNotes = notes.filter(note => note.favo==true)

return (
<div id="app">

    <div id="toolbar">
        <Icon
            shape='plus'
            onClick={handleAddNote}
        />
        <Icon
            shape='star'
            onClick={handleFavNote}
            starred={isStarred}
            disabled={!activeNote}
        />
        <Icon
            shape='remove'
            onClick={handleDelNote}
            disabled={!activeNote}
        />
    </div>

    <div id="notes-list">
        <div id="list-header">
            <h2>Notes</h2>
            <div className="btn-group btn-group-justified">
                <HeaderButton
                    name='All notes'
                    onClick={() => setActiveButton(0)}
                    active={activeButton==0}
                />
                <HeaderButton
                    name='Favorites'
                    onClick={() => setActiveButton(1)}
                    active={activeButton==1}
                    disabled={favoNotes.length<1}
                />
            </div>
        </div>
        <NoteButtonList
            array={activeButton==0? notes : favoNotes}
            onClick={setActiveNoteId}
            activeId={activeNoteId}
            activeButton={activeButton}
        />
    </div>

    <NoteEditor
        note={activeNote? activeNote : 'noNote'}
        onChange={handleEditNote}
    />
</div> //einde app
);
}

export default App;

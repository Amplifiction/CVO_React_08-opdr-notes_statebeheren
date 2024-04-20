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
    const [notes, dispatch] = useReducer(notesReducer, [{
        id:crypto.randomUUID(),
        content:
            'Actieve branch = REDUCER.\n'+
            'Git branch \'main\'=adhv reducer ;  branch \'noteContext\'=adhv context.\n'+
            '\n'+
            'TO DO: index.css > .disabledIcon cursor not allowed werkt niet meer. (beide branches)',
        favo: true
    }])
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
        if (activeNoteId===-1) {
            alert('Please select a note')
        } else {
            dispatch({type:'delNote', id:activeNoteId})
            setActiveNoteId(-1)
            if (activeButton=='fav' && favoNotes.length==1) {
                //==1 ipv <1 omdat dispatch (net als states) pas de volgende render leeg gemaakt wordt.
                //Op het moment dat deze check gebeurt, is de lijst nog niet leeg.
                setActiveButton('all')
            }
        }
    }
    const handleFavNote = () => {
        if (activeNoteId===-1) {
            alert('Please select a note')
        } else {
            dispatch({type:'favNote', id:activeNoteId})
            if (activeButton=='fav') {
                if (favoNotes.length===1) { //de favo lijst wordt leeg bij volgende render en dus switchen naar all notes, met behoud van activeNoteId
                    setActiveButton('all')
                } else { //de favo lijst wordt niet leeg en dus daar blijven, zodat gebruiker evt andere notes uit favo notes kan halen. Note deslecteren omdat die anders onder all notes geslecteerd staat, onzichtbaar voor gebruiker.
                    setActiveNoteId(-1)
                }
            }
        }
    }//einde CRUD

    //CONSTANTS
    //--> states van maken?
    //--> constants die gebruik maken van notes moeten staan ONDER de initialisatie van notes.
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
                            onClick={() => setActiveButton('all')}
                            active={activeButton=='all'}
                        />
                        <HeaderButton
                            name='Favorites'
                            onClick={() => setActiveButton('fav')}
                            active={activeButton=='fav'}
                            disabled={favoNotes.length<1}
                        />
                    </div>
                </div>
                <NoteButtonList
                    array={activeButton=='all'? notes : favoNotes}
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
    ) //einde return
} //einde App()

export default App;

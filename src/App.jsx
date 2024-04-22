import './App.css';
import Icon from './Icon';
import NoteButtonList from './NoteButtonList';
import HeaderButton from './HeaderButton';
import NoteEditor from './NoteEditor';
import { useContext } from 'react';
import { NoteContext } from './noteContext';

function App() {

    // const {handleAddNote} = useContext(NoteContext)
    // const {handleFavNote} = useContext(NoteContext)
    // const {handleDelNote} = useContext(NoteContext)
    // const {isStarred} = useContext(NoteContext)
    // const {setActiveButton} = useContext(NoteContext)
    // const {activeButton} = useContext(NoteContext)
    // const {favoNotes} = useContext(NoteContext)
    // const {notes} = useContext(NoteContext)
    // const {activeNote} = useContext(NoteContext)
    const {
        handleAddNote,
        handleFavNote,
        handleDelNote,
        isStarred,
        setActiveButton,
        activeButton,
        favoNotes,
        notes,
        activeNote
    } = useContext(NoteContext)

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
                            active={activeButton==='all'}
                        />
                        <HeaderButton
                            name='Favorites'
                            onClick={() => setActiveButton('fav')}
                            active={activeButton==='fav'}
                            disabled={favoNotes.length<1}
                        />
                    </div>
                </div>
                <NoteButtonList
                    array={activeButton==='all'? notes : favoNotes}
                />
            </div>

            <NoteEditor
                note={activeNote? activeNote : 'noNote'}
            />

        </div> //einde app
    ) //einde return
} //einde App()

export default App;

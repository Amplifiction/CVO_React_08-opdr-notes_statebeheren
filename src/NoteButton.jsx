import { useContext } from 'react';
import { NoteContext } from './noteContext';

export default function NoteButton ({note}) {
    const {activeNoteId, setActiveNoteId} = useContext(NoteContext)

    const btnClasses = `list-group-item ${note.id===activeNoteId? 'active' : ''}`
    const hClasses = `list-group-item-heading ${note.content===''? 'fs-ita' : ''}`

    const clickHandler = () => {
        setActiveNoteId(note.id)
    }

    return (
        <button
            type="button"
            className={btnClasses}
            onClick={clickHandler}
        >
            <h4 className={hClasses}>
                {note.content===''? 'New note' : 
                    (note.content.length>30? note.content.substring(0,29)+'...' : note.content)
                }
            </h4>
        </button>
    )
}
export default function NoteButton ({note, onClick, activeId}) {
const btnClasses = `list-group-item ${note.id==activeId? 'active' : ''}`
const hClasses = `list-group-item-heading ${note.content==''? 'fs-ita' : ''}`

    return (
        <button type="button" className={btnClasses} onClick={(e) =>onClick(note.id)}>
            <h4 className={hClasses}>
                {note.content==''? 'New note' : 
                (note.content.length>30? note.content.substring(0,29)+'...' : note.content)}
            </h4>
        </button>
    )
}
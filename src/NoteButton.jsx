export default function NoteButton ({note, onClick, activeId}) {
const classes = `list-group-item ${note.id==activeId? 'active' : ''}`

    return (
        <button type="button" className={classes} onClick={(e) =>onClick(note.id)}>
            <h4 className="list-group-item-heading">
                {note.content.length>30? note.content.substring(0,29)+'...' : note.content}
            </h4>
        </button>
    )
}
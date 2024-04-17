export default function NoteButton ({note, onClick}) {
    return (
        <button type="button" className="list-group-item active" onClick={onClick(note.id)}>
            <h4 className="list-group-item-heading">
                {note.content.length>30? note.content.substring(0,29)+'...' : note.content}
            </h4>
        </button>
    )
}
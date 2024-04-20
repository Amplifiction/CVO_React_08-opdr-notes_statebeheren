export default function NoteEditor({note}) {
    const editor = (
        <textarea
            placeholder="New note"
            className="form-control"
            value={note.content}
            onChange={(e) => handleEditNote(e.target.value)}
        ></textarea>
    )
    const noNote =  (
            <div className="txt-center">
                <p>~~~~</p>
                <p>Select a note to start editing!</p>
                <p>~~~~</p>
            </div>
    )

    return (
        <div id="note-editor" className="flex-doubleCenter">
            {note==='noNote'?  noNote : editor}
        </div>
    )
}
export default function NoteEditor({note, onChange}) {
    const editor = (
        <textarea
            placeholder="New note"
            className="form-control"
            value={note.content}
            onChange={(e) => onChange(e.target.value)}
        ></textarea>
    )

    const noNote =  <p className="txt-center">Select a note to start editing!</p>

    return (
        <div id="note-editor" className="flex-doubleCenter">
            {note=='noNote'?  noNote : editor}
        </div>
    )
}
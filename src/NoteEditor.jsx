import { useEffect, useRef } from "react"

export default function NoteEditor({note, onChange}) {
    const inputRef = useRef()
    
    useEffect(() => {
        inputRef.current.focus()
    },[note])

    const editor = (
        <textarea
            placeholder={note==='noNote'? "Select a note to start editing!" : 'new note'}
            className="form-control"
            value={note==='noNote'? '' : note.content }
            onChange={(e) => onChange(e.target.value)}
            ref={inputRef}
            disabled={note==='noNote'}
        ></textarea>
    )
    // const noNote =  (
    //         <div className="txt-center">
    //             <p>~~~~</p>
    //             <p>Select a note to start editing!</p>
    //             <p>~~~~</p>
    //         </div>
    // )

    return (
        <div id="note-editor" className="flex-doubleCenter">
            {/* {note=='noNote'?  noNote : editor} */}
            {editor}
        </div>
    )
}
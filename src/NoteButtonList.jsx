import NoteButton from "./NoteButton";

export default function NoteButtonList ({array, onClick, activeId, activeButton}) {
    const list = (
        <div className="list-group">
            {array.map((note) => (
                <NoteButton
                    key={note.id}
                    note={note}
                    onClick={onClick}
                    activeId={activeId}
                />
            ))}
        </div>
    )
    const nolist = <p className="txt-center">No {activeButton==0? '' : 'favorite '}notes.</p>

    return (
        <div className="container">
            {array.length==0? nolist : list} 
        </div>
    )
}
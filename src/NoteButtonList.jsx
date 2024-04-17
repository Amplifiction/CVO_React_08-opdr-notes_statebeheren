import NoteButton from "./NoteButton";

export default function NoteButtonList ({array, onClick, activeId}) {
const reversed = array.toReversed() //werkt niet? Doel: recentste note vanboven doen verschijnen

    return (
        <>
            <div className="btn-group btn-group-justified"></div>
            <div className="list-group">
                {reversed.map((note) => (
                    <NoteButton
                        key={note.id}
                        note={note}
                        onClick={onClick}
                        activeId={activeId}
                    />
                ))}
            </div>
        </>
    )
}
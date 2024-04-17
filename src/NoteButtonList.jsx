import NoteButton from "./NoteButton";

export default function NoteButtonList ({array, onClick}) {
const reversed = array.toReversed()

    return (
        <>
            <div className="btn-group btn-group-justified"></div>
            <div className="list-group">
                {reversed.map((note) => (
                    <NoteButton
                        key={note.id}
                        note={note}
                        onClick={onClick}
                    />
                ))}
            </div>
        </>
    )
}
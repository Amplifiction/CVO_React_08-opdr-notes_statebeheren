import NoteButton from "./NoteButton";

export default function NoteButtonList ({array}) {
    <div class="btn-group btn-group-justified">
        {array.map((note) => (
            <NoteButton
                key={note.id}
                note={note}
            />
        ))}
    </div>
}
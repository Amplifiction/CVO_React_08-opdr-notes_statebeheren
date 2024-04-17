export default function NoteButton ({note, }) {
    <button type="button" class="list-group-item active">
        <h4 class="list-group-item-heading">
            {note.content>30? note.content.substring(0,29) : note.content}
        </h4>
    </button>
}
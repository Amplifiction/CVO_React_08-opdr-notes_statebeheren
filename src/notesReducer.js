export default function notesReducer(notes, action) {
    switch (action.type) {
        case 'addNote':
            return [
                ...notes,
                {id:crypto.randomUUID(), content:'', favo: false}
            ]
        case 'editNote':
            return notes.map(note => note.id === action.id? {...note, content: action.content} : note)
        case 'delNote':
            return notes.filter(note => note.id!== action.id)
        case 'favNote':
            return notes.map(note => note.id === action.id? {...note, favo:!note.favo} : note)
        default:
            throw Error('Unknown action: ' + action.type)
    }
}
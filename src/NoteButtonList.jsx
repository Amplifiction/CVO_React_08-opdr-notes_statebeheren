import NoteButton from "./NoteButton";
import { useContext } from 'react';
import { NoteContext } from './noteContext';

export default function NoteButtonList ({array}) {
    const {activeButton} = useContext(NoteContext)

    const list = (
        <div className="list-group">
            {array.map((note) => (
                <NoteButton
                    key={note.id}
                    note={note}
                />
            ))}
        </div>
    )
    const nolist = <p className="txt-center">No {activeButton==='all'? '' : 'favorite '}notes.</p>

    return (
        <div className="container">
            {array.length===0? nolist : list} 
        </div>
    )
}
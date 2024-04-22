import { createContext, useState } from "react";

export const NoteContext = createContext(null)

export function NoteProvider({children}) {

    //STATES
        const [activeNoteId, setActiveNoteId] = useState (-1)
        const [activeButton, setActiveButton] = useState ('all')
        const [notes, setNotes] = useState([{
            id:crypto.randomUUID(),
            content:
                'Actieve branch: CONTEXT.\n'+
                'Git branch \'main\'=adhv reducer ;  branch \'noteContext\'=adhv context.\n'+
                'To do context: effecten toevoegen. (Zie main branch.)',
            favo: true
        }])

    //CONSTANTS --> states van maken?
        const activeNote = notes.find(note => note.id === activeNoteId)
        const isStarred = activeNote? activeNote.favo : false
        const favoNotes = notes.filter(note => note.favo===true)

    //CRUDFUNCTIES
        const handleAddNote = () => {
            const newNote = {
                id:crypto.randomUUID(),
                content:'',
                favo: (activeButton==='fav'? true : false)
            }
            setNotes([newNote, ...notes])
            setActiveNoteId(newNote.id)
        }
        const handleEditNote = (content) => {
            setNotes(notes.map(note => note.id === activeNoteId? {...note, content: content} : note))
        }
        const handleDelNote = () => {
            if (activeNoteId===-1) {
                alert('Please select a note')
            } else {
                setNotes(notes.filter(note => note.id!== activeNoteId))
                setActiveNoteId(-1)
                if (activeButton==='fav' && favoNotes.length===1) {
                    //===1 ipv <1 omdat dispatch (net als states) pas de volgende render leeg gemaakt wordt.
                    //Op het moment dat deze check gebeurt, is de lijst nog niet leeg.
                    setActiveButton('all')
                }
            }
        }
        const handleFavNote = () => {
            if (activeNoteId===-1) {
                alert('Please select a note')
            } else {
                setNotes(notes.map(note => note.id === activeNoteId? {...note, favo:!note.favo} : note))
                if (activeButton==='fav') {
                    if (favoNotes.length===1) { //de favo lijst wordt leeg bij volgende render en dus switchen naar all notes, met behoud van activeNoteId
                        setActiveButton('all')
                    } else { //de favo lijst wordt niet leeg en dus daar blijven, zodat gebruiker evt andere notes uit favo notes kan halen. Note deslecteren omdat die anders onder all notes geslecteerd staat, onzichtbaar voor gebruiker.
                        setActiveNoteId(-1)
                    }
                }
                //Korter maar minder voorwaardelijke setActiveButton
                // if (favoNotes.length===1) {
                //     setActiveButton('all')
                // } else if (activeButton=='fav') {
                //     setActiveNoteId(-1)
                // }
            }
        }

    //HELPFUNCTIES
        // const dryHandle = (type) => { //bevat onvoldoende
        //     if (activeNoteId==-1) {
        //         alert('Please select a note')
        //     } else {
        //         dispatch({type:type, id:activeNoteId})
        //     }
        // }
        // const switchToAll = () => { //overbodig wegens variatie tussen handleDel en handleFav
        //     if (activeButton=='fav' && favoNotes.length===1) {
        //         //===1 ipv <1 omdat dispatch (net als states) pas de volgende render leeg gemaakt wordt.
        //         //Op het moment dat deze check gebeurt, is de lijst nog niet leeg.
        //         setActiveButton('all')
        //     }
        // }

    return (
        <NoteContext.Provider value={{
            //STATES
                activeNoteId,
                activeButton,
                notes,
            //CONSTANTS
                activeNote,
                isStarred,
                favoNotes,
            //FUNCTIONS
                handleAddNote,
                handleEditNote,
                handleDelNote,
                handleFavNote,
                setActiveNoteId,
                setActiveButton,
        }}>
            {children}
        </NoteContext.Provider>
    )
}
import Note from "./Note/Note";
import {NotesListProps} from "./NotesList.types";
import React from "react";
import CreateNote from "./CreateNote/CreateNote";
import styles from './NotesList.module.scss'


const NotesList: React.FC<NotesListProps> = ({notes, getNoteId}) => {
    return (

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {notes.map((note, index) => <Note getNoteId={getNoteId} key={index} note={note} />)}

            <div className={styles.createNote}>
                <CreateNote />
            </div>
        </div>

    )
}

export default NotesList
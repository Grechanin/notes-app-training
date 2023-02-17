import 'App.module.scss';

import styles from 'App.module.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { getNotes } from 'api/localStorage';
import CreateEditNoteContainer from 'components/CreateEditNoteContainer/CreateEditNoteContainer';
import Header from 'components/Header/Header';
import { useAppDispatch } from 'components/hooks/redux';
import NoteExpandContainer from 'components/NoteExpand/NoteExpandContainer';
import NotesContainer from 'components/NotesContainer/NotesContainer';
import Settings from 'components/Settings/Settings';
import { setIsNotesFetching, setNotes } from 'store/notes-slice';

const App = () => {
  const dispatch = useAppDispatch();
  const notes = getNotes();
  dispatch(setIsNotesFetching(true));
  dispatch(setNotes(notes));
  dispatch(setIsNotesFetching(false));
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<NotesContainer />} />
        <Route path=":id" element={<NoteExpandContainer />} />
        <Route path=":noteId/edit/" element={<CreateEditNoteContainer isEdit />} />
        <Route path="/create/" element={<CreateEditNoteContainer />} />
        <Route path="/settings/" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;

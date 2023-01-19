import 'App.module.scss';

import styles from 'App.module.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateEditNoteContainer from 'components/CreateEditNoteContainer/CreateEditNoteContainer';
import Header from 'components/Header/Header';
import NoteExpandContainer from 'components/NoteExpand/NoteExpandContainer';
import NotesContainer from 'components/NotesContainer/NotesContainer';
import Settings from 'components/Settings/Settings';

const App = () => {
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

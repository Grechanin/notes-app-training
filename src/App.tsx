import './App.module.scss';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import CreateNote from './components/CreateNote/CreateNote';
import Header from './components/Header/Header';
import NoteExpandContainer from './components/NoteExpand/NoteExpandContainer';
import NotesContainer from './components/NotesContainer/NotesContainer';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<NotesContainer />} />
        <Route path=":id" element={<NoteExpandContainer />} />
        <Route path=":noteId/edit/" element={<CreateNote />} />
        <Route path="/create/" element={<CreateNote />} />
        <Route path="/settings/" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;

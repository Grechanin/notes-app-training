import React from 'react';
import { useSelector } from 'react-redux';

import NotesBox from './NotesBox/NotesBox';
import { IRootState, NotesContainerProps } from './NotesContainer.types';

const NotesContainer: React.FC<NotesContainerProps> = () => {
  const notes = useSelector((state: IRootState) => state.notesPage.notes);
  return (
    <div>
      <NotesBox notes={notes} />
    </div>
  );
};

export default NotesContainer;

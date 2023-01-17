import React from 'react';
import { selectAllNotes } from 'redux/selectors';

import { useAppSelector } from 'components/hooks/redux';

import NotesBox from './NotesBox/NotesBox';
import { NotesContainerProps } from './NotesContainer.types';

const NotesContainer: React.FC<NotesContainerProps> = () => {
  const notes = useAppSelector(selectAllNotes);
  return (
    <div>
      <NotesBox notes={notes} />
    </div>
  );
};

export default NotesContainer;

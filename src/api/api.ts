export const getNotes = () => {
  try {
    return JSON.parse(localStorage.getItem('notes') || '');
  } catch (e) {
    console.log(e);
  }
};

export const addNoteToLS = (newNote: any) => {
  const notes = getNotes();
  try {
    notes
      ? localStorage.setItem('notes', JSON.stringify([...notes, { ...newNote }]))
      : localStorage.setItem('notes', JSON.stringify([newNote]));
    return newNote;
  } catch (e) {
    console.log(e);
  }
};

export const removeNoteFromLS = (values: any) => {
  const notes = getNotes();
  try {
    localStorage.setItem('notes', JSON.stringify(notes.filter((item: any) => item.id !== values)));
    return values;
  } catch (e) {
    console.log(e);
  }
};

export const editNoteInLS = (notes: any, UpdatingNote: any) => {
  try {
    localStorage.setItem('notes', JSON.stringify([...notes, { ...UpdatingNote }]));
    return UpdatingNote;
  } catch (e) {
    console.log(e);
  }
};

export const addCommentToLS = (notes: any, noteCommented: any) => {
  try {
    localStorage.setItem('notes', JSON.stringify([...notes, { ...noteCommented }]));
    return noteCommented;
  } catch (e) {
    console.log(e);
  }
};

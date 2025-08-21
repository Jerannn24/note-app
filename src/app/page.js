'use client';
import React, { useState } from 'react';
import NoteList from '@/component/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Meeting",
      description: 'Review Project, assign task',
      important: false,
    },
    {
      id: 2,
      title: "Grocery",
      description: 'Milk, Sugar, Apples, Eggs',
      important: false,
    },
  ])

  const deleteNote = (id) => {
    setNotes(notes.filter((notes) => notes.id !== id));
  };

  return (
    <div className='container col-md-9 mb-3 mt-5 border'>
      <div className='col text-center'>
        <h2 className='mt-3 text-success'>Note Taking App</h2>
      </div>
      <NoteList notes={notes} setNotes={setNotes} onDelete={deleteNote} />
    </div >
  )
}

export default page
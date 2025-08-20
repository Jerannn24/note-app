import React from 'react'
import React, { useState } from 'react';
import Note from './Note';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState(false);
    
    return (
        <div>NoteList</div>
    )
}

export default NoteList
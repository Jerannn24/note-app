import React from 'react'

const Note = ({ note, onDelete, onEdit, onMarkImportant }) => {
    const { id, title, description, important } = note;
    return (
        <div>Note</div>
    )
}

export default Note